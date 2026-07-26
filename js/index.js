/**
 * AZRNG - Personal Portfolio
 *
 * 标语内容在 js/slogans.js 里维护，这里只放交互逻辑。
 */

(function() {
  'use strict';

  const THEME_KEY = 'azrng-theme';
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  // 指针驱动的特效（倾斜、磁吸、自定义光标）只在桌面端且未要求减弱动效时启用
  const enablePointerFx = isFinePointer && !prefersReducedMotion;

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  // 缺了配置文件也不至于首屏空着
  const slogans = (Array.isArray(window.AZRNG_SLOGANS) && window.AZRNG_SLOGANS.length)
    ? window.AZRNG_SLOGANS
    : ['希望能成为有趣的人'];

  // ===== Shared state =====
  const pointer = { x: -500, y: -500, nx: 0, ny: 0 };
  const motion = { warpBoost: 0 };   // 滚动速度换算出的星空推进加成

  const initPointerTracking = () => {
    if (!isFinePointer) return;
    window.addEventListener('mousemove', e => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      // 归一化到 [-1, 1]，中心为 0
      pointer.nx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ny = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
  };

  // ===== 文字解码动效 =====
  // 乱码字符集刻意不含 < > &，避免拼进 innerHTML 时产生标记
  const GLITCH = '01!?/*+-#$%@=~^ABCDEFGHIJKLMNPQRSTUVWXYZ';

  const createScrambler = (el, opts) => {
    const o = opts || {};
    const spread = o.spread == null ? 0.7 : o.spread;
    const hold = o.hold == null ? 14 : o.hold;
    let raf = null;
    let token = 0;   // 被下一次调用打断时，用它作废旧的回调和兜底定时器

    return text => {
      if (!text) return;
      if (raf) cancelAnimationFrame(raf);
      const mine = ++token;
      let done = false;

      // 后台标签页里 rAF 会被暂停，逐帧拼出来的文字将一直是空的，兜底直接落地
      setTimeout(() => {
        if (done || mine !== token) return;
        if (raf) cancelAnimationFrame(raf);
        raf = null;
        el.textContent = text;
        if (o.onFrame) o.onFrame(text);
      }, 1500);

      const queue = text.split('').map((ch, i) => ({
        to: ch,
        start: randomInt(0, 12),
        end: randomInt(0, 12) + hold + i * spread,
        char: ''
      }));

      let frame = 0;
      const tick = () => {
        if (mine !== token) return;
        let out = '';
        let plain = '';
        let settled = 0;

        for (const q of queue) {
          if (frame >= q.end) {
            out += q.to;
            plain += q.to;
            settled++;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.3) {
              q.char = GLITCH[randomInt(0, GLITCH.length - 1)];
            }
            out += '<span class="scramble">' + q.char + '</span>';
            plain += q.char;
          }
        }

        el.innerHTML = out;
        if (o.onFrame) o.onFrame(plain);

        if (settled === queue.length) {
          done = true;
          raf = null;
          return;
        }
        frame++;
        raf = requestAnimationFrame(tick);
      };

      // 首帧也走 rAF：动画帧被暂停时元素保持原文，而不是被清成空字符串
      raf = requestAnimationFrame(tick);
    };
  };

  // ===== Slogan：解码 + 定时轮换 =====
  const initSlogan = () => {
    const el = document.getElementById('slogan');
    if (!el) return;

    let index = randomInt(0, slogans.length - 1);

    if (prefersReducedMotion) {
      el.textContent = slogans[index];
      return;
    }

    const scramble = createScrambler(el);
    scramble(slogans[index]);

    if (slogans.length < 2) return;
    setInterval(() => {
      if (document.hidden) return;
      let next = index;
      while (next === index) next = randomInt(0, slogans.length - 1);
      index = next;
      scramble(slogans[index]);
    }, 9000);
  };

  // ===== 标题解码（开场揭幕结束后触发）=====
  const initHeroTitle = () => {
    const el = document.querySelector('.hero-title');
    if (!el || prefersReducedMotion) return;

    const text = (el.dataset.text || el.textContent).trim();
    if (!text) return;
    // 辉光层用 attr(data-text) 取字，逐帧同步才不会露出结果
    const scramble = createScrambler(el, {
      hold: 10,
      spread: 2.5,
      onFrame: plain => { el.dataset.text = plain; }
    });

    const delay = root.classList.contains('no-loader') ? 350 : 1150;
    setTimeout(() => scramble(text), delay);
  };

  // ===== Theme =====
  // 主题订阅者：切换时需要重绘的模块在这里登记
  const themeListeners = [];
  const onThemeChange = fn => themeListeners.push(fn);

  const applyTheme = theme => {
    root.setAttribute('data-theme', theme);
    themeListeners.forEach(fn => fn(theme));
  };

  const initTheme = () => {
    const btn = document.getElementById('themeToggle');
    const media = window.matchMedia('(prefers-color-scheme: light)');

    // 未手动选择过时，跟随系统
    media.addEventListener('change', e => {
      try {
        if (localStorage.getItem(THEME_KEY)) return;
      } catch (err) { /* 忽略 */ }
      applyTheme(e.matches ? 'light' : 'dark');
    });

    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (err) { /* 隐私模式下写入失败，仅本次生效 */ }
    });
  };

  // ===== Cursor Glow =====
  const initCursorGlow = () => {
    const glow = document.getElementById('cursorGlow');
    const wide = !window.matchMedia('(max-width: 900px)').matches;
    if (!glow || !enablePointerFx || !wide) return;

    let lastX = null, lastY = null, queued = false;

    // 用 transform 而不是 left/top：前者只走合成，后者每帧都要重新布局
    const paint = () => {
      queued = false;
      if (pointer.x === lastX && pointer.y === lastY) return;
      lastX = pointer.x;
      lastY = pointer.y;
      glow.style.transform = `translate3d(${lastX}px, ${lastY}px, 0) translate(-50%, -50%)`;
    };

    // 由移动事件驱动，指针静止时不空转动画帧
    window.addEventListener('mousemove', () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(paint);
    }, { passive: true });
  };

  // ===== Hero：鼠标微倾斜 + 滚动视差 =====
  const initHeroMotion = () => {
    const hero = document.querySelector('.hero');
    if (!hero || prefersReducedMotion) return;

    let rx = 0, ry = 0;

    const tick = () => {
      if (enablePointerFx) {
        // 缓动跟随，避免鼠标抖动直接传导到画面
        rx += ((-pointer.ny * 3.5) - rx) * 0.06;
        ry += ((pointer.nx * 5) - ry) * 0.06;
        hero.style.setProperty('--hero-rx', rx.toFixed(3) + 'deg');
        hero.style.setProperty('--hero-ry', ry.toFixed(3) + 'deg');
      }
      requestAnimationFrame(tick);
    };
    tick();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const y = window.scrollY;
        if (y < vh) {
          hero.style.setProperty('--hero-ty', (y * 0.25).toFixed(1) + 'px');
          hero.style.setProperty('--hero-opacity', clamp(1 - y / (vh * 0.7), 0, 1).toFixed(3));
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  };

  // ===== Star Field：透视星流 + 流星 =====
  const initStarField = () => {
    const canvas = document.getElementById('startrack');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const FOCAL = 420;
    const DEPTH = 900;

    let w, h, cx, cy;
    let stars = [], meteors = [];
    let px = 0, py = 0, roll = 0, warp = 1;
    let meteorCountdown = randomInt(120, 400);

    // 浅色主题下星点改为深色微粒，拖尾底色也跟着换
    const palette = () => root.getAttribute('data-theme') === 'light'
      ? { trail: 'rgba(245, 246, 250, 0.14)', lo: 30, hi: 120, alphaMin: 0.15, alphaMax: 0.5, meteor: '13, 127, 146' }
      : { trail: 'rgba(6, 6, 12, 0.12)', lo: 120, hi: 255, alphaMin: 0.35, alphaMax: 1, meteor: '190, 245, 255' };

    const makeStar = z => {
      const p = palette();
      const spread = Math.max(w, h) * 1.1;
      return {
        x: (Math.random() * 2 - 1) * spread,
        y: (Math.random() * 2 - 1) * spread,
        z: z == null ? 1 + Math.random() * DEPTH : z,
        speed: 0.6 + Math.random() * 1.1,
        alpha: Math.random() * (p.alphaMax - p.alphaMin) + p.alphaMin,
        color: `${randomInt(p.lo, p.hi)}, ${randomInt(p.lo, p.hi)}, ${randomInt(Math.min(p.lo + 40, 255), Math.min(p.hi + 40, 255))}`,
        sx: null,
        sy: null
      };
    };

    // 画线比画圆贵，密度按面积给，别在大屏上失控
    const starCount = () => clamp(Math.round((w * h) / 2400), 260, 820);

    const initStars = () => {
      stars = [];
      const n = starCount();
      for (let i = 0; i < n; i++) stars.push(makeStar());
    };

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      cx = w / 2;
      cy = h / 2;
      canvas.width = w;
      canvas.height = h;
      initStars();
    };

    const drawStars = () => {
      const cos = Math.cos(roll), sin = Math.sin(roll);
      const ox = cx + px, oy = cy + py;

      for (const s of stars) {
        const k = FOCAL / s.z;
        const sx = ox + (s.x * cos - s.y * sin) * k;
        const sy = oy + (s.x * sin + s.y * cos) * k;
        const near = 1 - s.z / DEPTH;              // 0 最远 → 1 最近
        const size = near * 1.7 + 0.35;
        const alpha = clamp(near * 1.5, 0, 1) * s.alpha;

        if (s.sx === null) {
          // 首帧（以及减弱动效模式）没有上一位置可连，画点
          ctx.beginPath();
          ctx.fillStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
          ctx.arc(sx, sy, size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${s.color}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = size;
          ctx.lineCap = 'round';
          ctx.moveTo(s.sx, s.sy);
          ctx.lineTo(sx, sy);
          ctx.stroke();
        }

        if (prefersReducedMotion) continue;

        s.sx = sx;
        s.sy = sy;
        s.z -= s.speed * warp;

        // 冲出视野或穿过镜头就回到远处，维持中心密度
        if (s.z < 1 || sx < -w * 0.6 || sx > w * 1.6 || sy < -h * 0.6 || sy > h * 1.6) {
          Object.assign(s, makeStar(DEPTH));
        }
      }
    };

    const spawnMeteor = () => {
      if (meteors.length >= 3) return;
      const angle = Math.PI * (0.13 + Math.random() * 0.12);   // 向右下方斜切
      const speed = 7 + Math.random() * 6;
      meteors.push({
        x: randomInt(-Math.round(w * 0.15), Math.round(w * 0.85)),
        y: randomInt(-Math.round(h * 0.25), Math.round(h * 0.45)),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        tail: 90 + Math.random() * 150,
        life: 1
      });
    };

    const drawMeteors = () => {
      const p = palette();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const speed = Math.hypot(m.vx, m.vy) || 1;
        const tx = m.x - (m.vx / speed) * m.tail;
        const ty = m.y - (m.vy / speed) * m.tail;

        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
        grad.addColorStop(0, `rgba(${p.meteor}, ${(m.life * 0.9).toFixed(3)})`);
        grad.addColorStop(1, `rgba(${p.meteor}, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.012;

        if (m.life <= 0 || m.x - m.tail > w || m.y - m.tail > h) meteors.splice(i, 1);
      }
    };

    const draw = () => {
      ctx.fillStyle = palette().trail;
      ctx.fillRect(0, 0, w, h);
      drawStars();
    };

    const animate = () => {
      if (enablePointerFx) {
        px += ((-pointer.nx * 22) - px) * 0.04;
        py += ((-pointer.ny * 22) - py) * 0.04;
      }

      // 滚动越快，星流推进越猛；松手后自然衰减
      warp = 1 + motion.warpBoost;
      motion.warpBoost *= 0.93;

      draw();
      drawMeteors();

      if (--meteorCountdown <= 0) {
        spawnMeteor();
        meteorCountdown = randomInt(150, 480);
      }

      roll += 0.00035;
      requestAnimationFrame(animate);
    };

    // 切换主题时重建星点并立即重绘，避免旧颜色残留在拖尾里
    onThemeChange(() => {
      if (!w || !h) return;
      initStars();
      meteors = [];
      ctx.clearRect(0, 0, w, h);
      draw();
    });

    // 页面在不可见状态下加载时尺寸可能为 0，等拿到真实尺寸再画
    const start = () => {
      if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
        requestAnimationFrame(start);
        return;
      }
      resize();
      if (prefersReducedMotion) {
        draw();
      } else {
        animate();
      }
    };
    start();

    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        resize();
        if (prefersReducedMotion) draw();
      }, 120);
    });
  };

  // ===== Navigation =====
  const initNavigation = () => {
    const nav = document.getElementById('sideNav');
    const indicator = document.getElementById('navIndicator');
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const moveIndicator = () => {
      const active = document.querySelector('.nav-link.active');
      if (!nav || !indicator || !active) return;
      indicator.style.width = active.offsetWidth + 'px';
      indicator.style.height = active.offsetHeight + 'px';
      indicator.style.transform = `translate(${active.offsetLeft}px, -50%)`;
      nav.classList.add('nav-ready');
    };

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
          });
          moveIndicator();
        }
      });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));

    moveIndicator();
    // 网页字体加载完成后字宽会变，重新对齐一次
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(moveIndicator).catch(() => {});
    }
    window.addEventListener('resize', moveIndicator);
  };

  // ===== Tags：级联入场索引 + 磁吸跟手 =====
  const initTags = () => {
    document.querySelectorAll('.skill-group').forEach(group => {
      group.querySelectorAll('.tag').forEach((tag, i) => {
        tag.style.setProperty('--i', i);

        if (!enablePointerFx) return;
        tag.addEventListener('pointermove', e => {
          const r = tag.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          tag.style.transform = `translate(${(dx * 4).toFixed(2)}px, ${(dy * 2.5 - 2).toFixed(2)}px)`;
        });
        tag.addEventListener('pointerleave', () => {
          tag.style.transform = '';
        });
      });
    });
  };

  // ===== Cards：3D 倾斜 + 光标聚光 =====
  const initCardTilt = () => {
    if (!enablePointerFx) return;

    document.querySelectorAll('.link-card').forEach(card => {
      const inner = card.querySelector('.link-card-inner');
      let raf = null, last = null;

      const apply = () => {
        raf = null;
        if (!last) return;
        const r = card.getBoundingClientRect();
        const nx = (last.clientX - r.left) / r.width;
        const ny = (last.clientY - r.top) / r.height;
        card.style.setProperty('--ry', ((nx - 0.5) * 9).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((0.5 - ny) * 7).toFixed(2) + 'deg');
        if (inner) {
          inner.style.setProperty('--mx', (nx * 100).toFixed(1) + '%');
          inner.style.setProperty('--my', (ny * 100).toFixed(1) + '%');
        }
      };

      card.addEventListener('pointerenter', () => card.classList.add('is-tilting'));
      card.addEventListener('pointermove', e => {
        last = e;
        if (!raf) raf = requestAnimationFrame(apply);
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });
  };

  // ===== Scroll：进度条 + 导航收缩 + 星流加速（共用一个监听）=====
  const initScrollEffects = () => {
    const bar = document.getElementById('scrollProgress');
    const nav = document.getElementById('sideNav');

    let ticking = false;
    let lastY = window.scrollY;

    const update = () => {
      const y = window.scrollY;

      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${clamp(max > 0 ? y / max : 0, 0, 1)})`;
      }

      if (nav) nav.classList.toggle('is-compact', y > 80);

      if (!prefersReducedMotion) {
        motion.warpBoost = clamp(motion.warpBoost + Math.abs(y - lastY) * 0.05, 0, 9);
      }
      lastY = y;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });

    update();
  };

  // ===== Scroll Reveal =====
  const initScrollReveal = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  };

  // ===== Year =====
  const updateYear = () => {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  };

  // ===== Init =====
  const init = () => {
    initPointerTracking();
    initSlogan();
    initHeroTitle();
    initTheme();
    initCursorGlow();
    initHeroMotion();
    initStarField();
    initNavigation();
    initTags();
    initCardTilt();
    initScrollEffects();
    initScrollReveal();
    updateYear();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
