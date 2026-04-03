/**
 * AZRNG - Personal Portfolio
 * Modern vanilla JavaScript implementation
 */

(function() {
  'use strict';

  // ===== Slogan Array =====
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

  // ===== Utility Functions =====
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const setSlogan = () => {
    const sloganEl = document.getElementById('slogan');
    if (sloganEl) {
      const index = randomInt(0, slogans.length - 1);
      sloganEl.textContent = slogans[index];
    }
  };

  // ===== Star Field Animation =====
  const initStarField = () => {
    const canvas = document.getElementById('startrack');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let stars = [];
    let rotation = 0;

    // Set canvas size
    const resizeCanvas = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const maxDim = Math.max(width, height);
      const starCount = 2000;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: randomInt(-maxDim * 1.3, maxDim * 1.3),
          y: randomInt(-maxDim * 1.3, maxDim * 1.3),
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: `rgba(${randomInt(100, 255)}, ${randomInt(100, 255)}, ${randomInt(150, 255)},`
        });
      }
    };

    // Animation loop
    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Rotate and draw stars
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation * Math.PI / 180);
      ctx.translate(-width / 2, -height / 2);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color + star.opacity + ')';
        ctx.fill();
      });

      ctx.restore();

      rotation += 0.02;
      requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    });
  };

  // ===== Navigation =====
  const initNavigation = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Smooth scroll to section
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Update active link on scroll
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  };

  // ===== Skill Bar Animation =====
  const initSkillBars = () => {
    const skillItems = document.querySelectorAll('.skill-item');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    skillItems.forEach(item => observer.observe(item));
  };

  // ===== Year Update =====
  const updateYear = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  // ===== Initialize =====
  const init = () => {
    setSlogan();
    initStarField();
    initNavigation();
    initSkillBars();
    updateYear();

    console.log('AZRNG Portfolio - Initialized');
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
