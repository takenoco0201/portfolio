/* =====================================================================
   翠陵薬科大学 OC2026 LP — script.js
   1) スクロール連動リビール（IntersectionObserver）
   2) 実績数値のカウントアップ（FV到達時に発火）
   3) 追従CTAバナーの表示制御（300pxスクロール後）
   4) スムーズスクロール（アンカー）
   5) FAQアコーディオン（開閉）
   6) GA4イベント計測（data-gtm-click属性 → gtag 'cta_click'）
   ===================================================================== */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 1) リビール ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !prefersReduced) {
    var revObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); revObs.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { revObs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- 2) カウントアップ ---- */
  function runCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    if (isNaN(target)) return;
    if (prefersReduced) { el.textContent = target.toFixed(decimals); return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);          // easeOutCubic
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); cObs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cObs.observe(el); });
  } else {
    counters.forEach(runCount);
  }

  /* ---- 3) 追従CTA ---- */
  var floating = document.getElementById("cta-floating");
  if (floating) {
    var shown = false;
    var onScroll = function () {
      var show = window.scrollY > 300;
      if (show === shown) return;
      shown = show;
      if (show) { floating.hidden = false; requestAnimationFrame(function () { floating.classList.add("is-visible"); }); }
      else { floating.classList.remove("is-visible"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- 4) スムーズスクロール（アンカー） ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (ev) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      ev.preventDefault();
      t.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  /* ---- 5) FAQアコーディオン（後続セクションで生成される .faq-item に対応） ---- */
  document.addEventListener("click", function (ev) {
    var q = ev.target.closest(".faq-item__q");
    if (!q) return;
    var item = q.closest(".faq-item");
    if (!item) return;
    var open = item.classList.toggle("is-open");
    q.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---- 6) GA4イベント計測 ---- */
  document.addEventListener("click", function (ev) {
    var el = ev.target.closest("[data-gtm-click]");
    if (!el || typeof window.gtag !== "function") return;
    window.gtag("event", "cta_click", {
      cta_id: el.getAttribute("data-gtm-click"),
      cta_text: (el.textContent || "").trim().slice(0, 60),
      page_location: window.location.href
    });
  });

})();
