/* ぽん通知 LP — interactions */
(function () {
  "use strict";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- header state ----- */
  var head = document.querySelector(".site-head");
  function onScrollHead() {
    if (window.scrollY > 24) head.classList.add("scrolled");
    else head.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScrollHead, { passive: true });
  onScrollHead();

  /* ----- scroll reveal ----- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -7% 0px" });
  document.querySelectorAll(".rv, .rv-host").forEach(function (el) { io.observe(el); });

  /* ----- hero paw demo ----- */
  var heroPaw = document.getElementById("hero-paw");
  var heroNotif = document.getElementById("hero-notif");
  var heroNotifText = document.getElementById("hero-notif-text");
  var heroArt = heroPaw ? heroPaw.parentElement : null;
  if (heroPaw && heroNotif && heroNotifText) {
    var heroWords = ["帰るよ", "着いた", "大丈夫？", "見て", "すき"];
    var heroIdx = -1;
    heroPaw.addEventListener("click", function () {
      heroIdx = (heroIdx + 1) % heroWords.length;
      heroNotifText.textContent = "子犬が「" + heroWords[heroIdx] + "」を届けにきました";
      if (reduced) return;
      heroNotif.classList.remove("notif-pop");
      void heroNotif.offsetWidth; /* restart animation */
      heroNotif.classList.add("notif-pop");
      var rect = heroPaw.getBoundingClientRect();
      var host = heroArt.getBoundingClientRect();
      for (var i = 0; i < 3; i++) {
        var h = document.createElement("span");
        h.className = "nade-heart";
        h.style.left = (rect.left - host.left + rect.width * (0.25 + Math.random() * 0.5)) + "px";
        h.style.top = (rect.top - host.top - 2) + "px";
        h.style.setProperty("--hr", (Math.random() * 40 - 20).toFixed(0) + "deg");
        h.style.animationDelay = (i * 0.1) + "s";
        h.style.zIndex = "5";
        heroArt.appendChild(h);
        setTimeout(function (el) { el.remove(); }.bind(null, h), 1700);
      }
    });
  }

  /* ----- 届くまで story: scroll-driven scenes ----- */
  var storyGrid = document.getElementById("story-grid");
  if (storyGrid) {
    var storySteps = storyGrid.querySelectorAll(".story-step");
    /* on mobile the stage is pinned to the top, so the trigger band
       sits below it; on desktop it is the viewport center */
    var storyBand = window.matchMedia("(max-width: 860px)").matches
      ? "-58% 0px -28% 0px"
      : "-44% 0px -44% 0px";
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        storySteps.forEach(function (s) { s.classList.remove("active"); });
        e.target.classList.add("active");
        storyGrid.setAttribute("data-scene", e.target.getAttribute("data-step"));
      });
    }, { rootMargin: storyBand, threshold: 0 });
    storySteps.forEach(function (s) { sio.observe(s); });
  }

  /* ----- 合図パターン selector ----- */
  var SIGNALS = {
    kaeru:  { word: "帰るよ",   gesture: "しっぽを振って、走り出す", img: "web/pup-wag.webp",   alt: "しっぽを振って走り出す子犬" },
    tsuita: { word: "着いた",   gesture: "ちょこんと、おすわりして知らせる", img: "web/pup-sit.webp",   alt: "ちょこんとおすわりして前足を上げる子犬" },
    daijobu:{ word: "大丈夫？", gesture: "首をかしげて、そっと見つめる", img: "web/pup-tilt.webp",  alt: "首をかしげる子犬" },
    mite:   { word: "見て",     gesture: "前足で、ちょいちょいと誘う", img: "web/pup-paw.webp",   alt: "前足でちょいちょいする子犬" },
    suki:   { word: "すき",     gesture: "照れたように、ハートを届ける", img: "web/pup-heart.webp", alt: "ハートをくわえて届ける子犬" }
  };
  var order = ["kaeru", "tsuita", "daijobu", "mite", "suki"];
  var stage = document.getElementById("signal-stage");
  var stageImg = document.getElementById("stage-img");
  var stageWord = document.getElementById("stage-word");
  var stageGesture = document.getElementById("stage-gesture");
  var items = Array.prototype.slice.call(document.querySelectorAll(".signal-item"));
  var current = "kaeru";
  var autoTimer = null;
  var userTouched = false;

  function setSignal(key, animate) {
    if (!SIGNALS[key]) return;
    current = key;
    items.forEach(function (b) { b.classList.toggle("sel", b.dataset.sig === key); });
    var s = SIGNALS[key];
    if (animate && !reduced) {
      stage.classList.remove("stage-swap");
      void stage.offsetWidth; /* restart animation */
      stage.classList.add("stage-swap");
    }
    stageImg.src = s.img;
    stageImg.alt = s.alt;
    stageWord.textContent = "「" + s.word + "」";
    stageGesture.textContent = s.gesture;
  }
  items.forEach(function (b) {
    b.addEventListener("click", function () {
      userTouched = true;
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      setSignal(b.dataset.sig, true);
    });
  });
  /* gentle auto-rotate while visible, until the user interacts */
  if (stage && !reduced) {
    var sigIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !userTouched && !autoTimer) {
          autoTimer = setInterval(function () {
            var i = (order.indexOf(current) + 1) % order.length;
            setSignal(order[i], true);
          }, 3400);
        } else if (!e.isIntersecting && autoTimer) {
          clearInterval(autoTimer); autoTimer = null;
        }
      });
    }, { threshold: 0.4 });
    sigIO.observe(stage);
  }

  /* ----- なでる demo ----- */
  var nadeBtn = document.getElementById("nade-btn");
  var nadeReply = document.getElementById("nade-reply");
  var nadeDemo = document.getElementById("nade-demo");
  if (nadeBtn) {
    nadeBtn.addEventListener("click", function () {
      nadeReply.classList.add("show");
      if (reduced) return;
      var rect = nadeBtn.getBoundingClientRect();
      var host = nadeDemo.getBoundingClientRect();
      for (var i = 0; i < 4; i++) {
        var h = document.createElement("span");
        h.className = "nade-heart";
        var x = rect.left - host.left + rect.width * (0.2 + Math.random() * 0.6);
        var y = rect.top - host.top - 4;
        h.style.left = x + "px";
        h.style.top = y + "px";
        h.style.setProperty("--hr", (Math.random() * 40 - 20).toFixed(0) + "deg");
        h.style.animationDelay = (i * 0.09) + "s";
        nadeDemo.appendChild(h);
        setTimeout(function (el) { el.remove(); }.bind(null, h), 1800);
      }
    });
  }

  /* ----- 事前登録フォーム (demo) ----- */
  document.querySelectorAll(".reg-form").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var input = form.querySelector("input[type='email']");
      if (!input.value || input.validity.typeMismatch) {
        input.focus();
        return;
      }
      var done = form.parentElement.querySelector(".reg-done");
      form.style.display = "none";
      if (done) done.classList.add("show");
    });
  });
})();
