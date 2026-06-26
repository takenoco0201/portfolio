/**
 * スマイルデザイン矯正歯科 — 予約フォーム
 * form.js
 *
 * 送信先エンドポイントは SUBMIT_URL に設定してください。
 * 空の場合はデモ動作（確認メッセージのみ表示）します。
 */

(function () {
  "use strict";

  /* 送信先URL（Netlify Forms / formrun / Contact Form 7 等） */
  var SUBMIT_URL = "";

  var form      = document.getElementById("booking-form");
  var formWrap  = document.getElementById("form-wrap");
  var thanksMsg = document.getElementById("thanks-msg");
  var submitBtn = document.getElementById("submit-btn");

  if (!form) return;

  /* ── 日付の最小値をセット（今日以降） ──── */
  var today = new Date().toISOString().split("T")[0];
  var dateInputs = form.querySelectorAll('input[type="date"]');
  dateInputs.forEach(function (el) { el.min = today; });

  /* ── バリデーション ──────────────────── */

  function validate() {
    var ok = true;

    /* お名前 */
    var name = form.querySelector("#f-name");
    var errName = document.getElementById("err-name");
    if (!name.value.trim()) {
      showError(name, errName, "お名前を入力してください");
      ok = false;
    } else {
      clearError(name, errName);
    }

    /* 電話番号 */
    var phone = form.querySelector("#f-phone");
    var errPhone = document.getElementById("err-phone");
    var phoneClean = phone.value.replace(/[-\s]/g, "");
    if (!phone.value.trim()) {
      showError(phone, errPhone, "電話番号を入力してください");
      ok = false;
    } else if (!/^\d{10,11}$/.test(phoneClean)) {
      showError(phone, errPhone, "正しい電話番号を入力してください（ハイフン不要）");
      ok = false;
    } else {
      clearError(phone, errPhone);
    }

    /* プライバシー同意 */
    var privacy = form.querySelector("#f-privacy");
    var errPrivacy = document.getElementById("err-privacy");
    if (!privacy.checked) {
      showError(privacy, errPrivacy, "プライバシーポリシーへの同意が必要です");
      ok = false;
    } else {
      clearError(privacy, errPrivacy);
    }

    return ok;
  }

  function showError(field, errEl, msg) {
    field.classList.add("is-error");
    field.classList.remove("is-valid");
    if (errEl) errEl.textContent = msg;
  }

  function clearError(field, errEl) {
    field.classList.remove("is-error");
    field.classList.add("is-valid");
    if (errEl) errEl.textContent = "";
  }

  /* ── フォーム送信 ────────────────────── */

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;

    /* 送信中状態 */
    submitBtn.disabled = true;
    submitBtn.querySelector(".bform__submit-text").textContent = "送信中…";

    if (SUBMIT_URL) {
      /* 実際のエンドポイントへ POST */
      var data = new FormData(form);
      fetch(SUBMIT_URL, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            showThanks();
          } else {
            handleError();
          }
        })
        .catch(function () {
          handleError();
        });
    } else {
      /* デモ動作：500ms 後に完了メッセージ */
      setTimeout(showThanks, 500);
    }
  });

  function showThanks() {
    form.hidden = true;
    thanksMsg.hidden = false;
    thanksMsg.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleError() {
    submitBtn.disabled = false;
    submitBtn.querySelector(".bform__submit-text").textContent = "予約を申し込む";
    alert("送信に失敗しました。お手数ですがお電話（03-XXXX-XXXX）にてお問い合わせください。");
  }

  /* ── リアルタイムバリデーション（blur時） */

  form.querySelectorAll(".bform__input, .bform__select, .bform__textarea").forEach(function (el) {
    el.addEventListener("blur", function () {
      if (el.required && !el.value.trim()) {
        el.classList.add("is-error");
        el.classList.remove("is-valid");
      } else if (el.value.trim()) {
        el.classList.remove("is-error");
        el.classList.add("is-valid");
      }
    });
  });

})();
