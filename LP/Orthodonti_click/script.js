/**
 * スマイルデザイン矯正歯科 LP — script.js
 * 生成日: 2026-06-26
 */

(function () {
  "use strict";

  /* ── CTA 予約URL（ここを差し替えるだけで全CTAに反映） ── */
  var CTA_URL = "form.html"; // 予約フォームページ（外部予約システムURLに差し替え可）

  /* [data-cta-external] を持つ全CTAのhrefをCTA_URLで上書き */
  function initCtaLinks() {
    if (!CTA_URL) return;
    document.querySelectorAll("[data-cta-external]").forEach(function (el) {
      el.href = CTA_URL;
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  /* ── 1. FV アニメーション（ページロード） ──────── */

  function initFvAnimation() {
    var els = document.querySelectorAll(".fv-anim");
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    els.forEach(function (el) {
      var delay = parseFloat(el.dataset.animDelay || "0");
      setTimeout(function () {
        el.classList.add("fv-entered");
      }, delay * 1000);
    });
  }

  /* ── 2. スクロール連動アニメーション（IntersectionObserver） ── */

  function initScrollAnimations() {
    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll(".anim-item").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".anim-item").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── 3. フローティングCTAバーの表示制御 ─────────── */

  function initFloatingCta() {
    var bar = document.getElementById("cta-floating");
    if (!bar) return;

    var fv = document.getElementById("section-fv");
    var SCROLL_THRESHOLD = 300;
    var ticking = false;

    function update() {
      var scrollY = window.scrollY || window.pageYOffset;
      var fvBottom = fv ? fv.getBoundingClientRect().bottom + scrollY : 0;
      var pastFv = scrollY > fvBottom;
      var pastThreshold = scrollY > SCROLL_THRESHOLD;

      if (pastThreshold && pastFv) {
        bar.classList.add("is-visible");
      } else {
        bar.classList.remove("is-visible");
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 4. スムーズスクロール（アンカーリンク） ────── */

  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      var targetId = anchor.getAttribute("href").replace("#", "");
      if (!targetId) return;

      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      var headerHeight = 56; /* site-header 高さ */
      var targetY = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetY, behavior: "smooth" });
    });
  }

  /* ── 5. FAQ アコーディオン（details/summary） ──── */

  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq__item");
    items.forEach(function (item) {
      var summary = item.querySelector("summary");
      if (!summary) return;
      summary.addEventListener("click", function () {
        var isOpen = item.hasAttribute("open");
        summary.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });
    });
  }

  /* ── 6a. GSAP ScrollTrigger スタッガー（グリッド要素） ── */

  function initGsapStagger() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* グリッドの直下要素をスタッガーで Y 方向スライドアップ */
    function stagger(containerSel, childSel, delay) {
      var container = document.querySelector(containerSel);
      if (!container) return;
      var children = container.querySelectorAll(childSel);
      if (!children.length) return;
      gsap.from(children, {
        y: 22,
        duration: 0.55,
        ease: "power2.out",
        stagger: delay,
        scrollTrigger: {
          trigger: container,
          start: "top 83%",
          once: true,
        },
      });
    }

    stagger(".usp__grid",     ".usp__card",          0.12);
    stagger(".voice__grid",   ".voice__card",        0.15);
    stagger(".flow__list",    ".flow__step",         0.10);
    stagger(".results__grid", ".results__stat-card", 0.12);
    stagger(".problem__grid", ".problem__card",      0.10);
    stagger(".faq__list",     ".faq__item",          0.07);

    /* AIシミュレーション Before/After：左右から分割登場 */
    var baSection = document.querySelector(".simulation__before-after");
    if (baSection) {
      var cols = Array.from(baSection.querySelectorAll(".simulation__col"));
      gsap.from(cols, {
        x: function (i) { return i === 0 ? -30 : 30; },
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: baSection, start: "top 83%", once: true },
      });
    }
  }

  /* ── 6b. Animate.css ワンショット演出 ─────────── */

  function initAnimateCss() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* セクション EN ラベルをスクロールで fadeInDown */
    var ioLabel = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.animationDuration = "0.45s";
          el.classList.add("animate__animated", "animate__fadeInDown");
          ioLabel.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    /* FV の EN ラベルはページロード直後にアニメーション */
    var fvLabel = document.querySelector(".fv__en-label");
    if (fvLabel) {
      fvLabel.style.animationDuration = "0.6s";
      fvLabel.style.animationDelay   = "0.3s";
      fvLabel.classList.add("animate__animated", "animate__fadeInDown");
    }

    /* セクション内の EN ラベル（FV 以外）はスクロール連動 */
    document.querySelectorAll(".section-en-label").forEach(function (el) {
      ioLabel.observe(el);
    });
  }

  /* ── 7. GSAP カウントアップ（実績セクション） ──── */

  function initCountUp() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    /* 整数カウントアップ */
    document.querySelectorAll("[data-countup]").forEach(function (el) {
      var target = parseInt(el.dataset.countup, 10);
      var unitEl = el.querySelector(".results__stat-unit");
      var unitText = unitEl ? unitEl.textContent : "";

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: function () {
            var val = Math.round(this.targets()[0].innerText);
            /* 1000以上はカンマ区切り */
            var formatted = val >= 1000 ? val.toLocaleString("ja-JP") : String(val);
            this.targets()[0].innerHTML = formatted + '<span class="results__stat-unit">' + unitText + "</span>";
          },
        }
      );
    });

    /* 小数カウントアップ（評価値 4.8） */
    document.querySelectorAll("[data-countup-decimal]").forEach(function (el) {
      var target = parseFloat(el.dataset.countupDecimal);
      gsap.fromTo(
        { val: 0 },
        {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: function () {
            el.innerText = this.targets()[0].val.toFixed(1);
          },
        }
      );
    });
  }

  /* ── 7. GA4 / GTM クリック計測 ──────────────────── */

  function initCtaTracking() {
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-gtm-click]");
      if (!el) return;

      var label = el.dataset.gtmClick;

      /* GTM dataLayer push */
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "cta_click",
          cta_location: label,
        });
      }

      /* GA4 gtag イベント */
      if (typeof gtag === "function") {
        gtag("event", "cta_click", {
          cta_location: label,
        });
      }
    });
  }

  /* ── 6c. FV テキストアニメーション（GSAP） ────────── */

  function initFvGsap() {
    if (typeof gsap === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".fv-anim").forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    document.querySelectorAll(".fv-anim").forEach(function (el) {
      var delay = parseFloat(el.dataset.animDelay || "0");
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: delay }
      );
    });
  }

  /* ── 6d. HFブランドラベルオーバーレイ（GSAP） ────── */

  function initFvOverlay() {
    if (typeof gsap === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var lb = document.getElementById("fv-brand-label");
      if (lb) lb.style.opacity = "1";
      return;
    }

    var brandLabel = document.getElementById("fv-brand-label");
    var scrollHint = document.getElementById("fv-scroll-hint");
    if (!brandLabel) return;

    var tl = gsap.timeline({ delay: 1.2 });
    tl.to(brandLabel, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
    tl.to(scrollHint, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
    tl.to(brandLabel, {
      opacity: 0.75,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "sine.inOut",
    }, "+=1.5");
  }

  /* ── 8. ヘッダースクロール状態（影） ─────────────── */

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle("is-scrolled", (window.scrollY || window.pageYOffset) > 60);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 9. スクロールプログレスバー ──────────────────── */

  function initScrollProgress() {
    var bar = document.getElementById("scroll-progress");
    if (!bar) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrolled = window.scrollY || window.pageYOffset;
          var total = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.width = (total > 0 ? (scrolled / total * 100) : 0) + "%";
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 10. FV動画フェードイン（poster flash 防止） ── */

  function initFvVideo() {
    var video = document.querySelector(".fv__video");
    if (!video) return;

    function reveal() {
      video.classList.add("is-playing");
    }

    /* playing: 実際に再生フレームが描画された瞬間 */
    video.addEventListener("playing", reveal, { once: true });

    /* フォールバック: 800ms 後に強制表示（低スペック端末・省電力モード対策） */
    setTimeout(reveal, 800);
  }

  /* ── 初期化 ─────────────────────────────────────── */

  function initGsap() {
    initFvGsap();
    initFvOverlay();
    initCountUp();
    initGsapStagger();
  }

  function init() {
    initCtaLinks();
    initFvVideo();
    initScrollAnimations();
    initFloatingCta();
    initSmoothScroll();
    initFaqAccordion();
    initAnimateCss();
    initCtaTracking();
    initHeaderScroll();
    initScrollProgress();

    /* GSAP は CDN から非同期読み込みのため window.load 後に初期化 */
    if (document.readyState === "complete") {
      initGsap();
    } else {
      window.addEventListener("load", initGsap);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
