/**
 * AZRNG - Personal Portfolio
 */

(function() {
  'use strict';

  // ===== Slogans =====
  const slogans = [
    "希望能成为有趣的人",
    "美丽总是隐藏在朦胧之中，隔纱看美人，越看越迷人",
    "若是美好，叫做精彩；若是糟糕，叫做经历",
    "任何傻瓜都会编写计算机能够理解的代码，好的程序员能够编写人能够理解的代码",
    "思从深而行从简，真正的高手能云淡风轻地用最简单的方法解决最复杂的问题",
    "活着不是靠泪水博得同情，而是靠汗水赢得掌声",
    "如果热爱与众望所归背道而驰，那我选择我所热爱的一切",
    "当你觉得晚了的时候，恰恰是最早的时候",
    "你要想得到你从未拥有过的东西，就要去做你从未做过的事情",
    "总有一天，你会渐渐活出写满答案的人生",
    "你不勇敢，没人替你坚强",
    "别否定自己，你特别好，特别温柔，特别值得",
    "改造自己，总比禁止别人来得难",
    "我在人间贩卖黄昏，只为收集世间的温柔去见你",
    "最怕你一生碌碌无为，还安慰自己平凡可贵",
    "乾坤未定，你我皆是黑马",
    "你想过的那种生活，得自己去挣"
  ];

  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const setSlogan = () => {
    const el = document.getElementById('slogan');
    if (el) el.textContent = slogans[randomInt(0, slogans.length - 1)];
  };

  // ===== Cursor Glow =====
  const initCursorGlow = () => {
    const glow = document.getElementById('cursorGlow');
    if (!glow || window.matchMedia('(max-width: 900px)').matches) return;

    let mx = -500, my = -500;
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
    });

    const tick = () => {
      glow.style.left = mx + 'px';
      glow.style.top = my + 'px';
      requestAnimationFrame(tick);
    };
    tick();
  };

  // ===== Star Field =====
  const initStarField = () => {
    const canvas = document.getElementById('startrack');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h, stars = [], rotation = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const dim = Math.max(w, h);
      for (let i = 0; i < 1800; i++) {
        stars.push({
          x: randomInt(-dim * 1.3, dim * 1.3),
          y: randomInt(-dim * 1.3, dim * 1.3),
          size: Math.random() * 1.4 + 0.4,
          opacity: Math.random() * 0.7 + 0.2,
          color: `rgba(${randomInt(120, 255)}, ${randomInt(120, 255)}, ${randomInt(160, 255)},`
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(6, 6, 12, 0.12)';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(rotation * Math.PI / 180);
      ctx.translate(-w / 2, -h / 2);

      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color + s.opacity + ')';
        ctx.fill();
      });

      ctx.restore();
      rotation += 0.018;
      requestAnimationFrame(animate);
    };

    resize();
    animate();

    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt);
      rt = setTimeout(resize, 120);
    });
  };

  // ===== Navigation =====
  const initNavigation = () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  };

  // ===== Skill Bars =====
  const initSkillBars = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.skill-item').forEach(item => observer.observe(item));
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
    setSlogan();
    initCursorGlow();
    initStarField();
    initNavigation();
    initSkillBars();
    initScrollReveal();
    updateYear();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
