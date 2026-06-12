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
      heroNotifText.textContent = "";
      ["子犬が「" + heroWords[heroIdx] + "」を", "届けにきました"].forEach(function (part) {
        var seg = document.createElement("span");
        seg.className = "nb";
        seg.textContent = part;
        heroNotifText.appendChild(seg);
      });
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
    var storyMQ = window.matchMedia("(max-width: 860px)");
    var sio = null;
    var buildStoryObserver = function () {
      if (sio) sio.disconnect();
      sio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          storySteps.forEach(function (s) { s.classList.remove("active"); });
          e.target.classList.add("active");
          storyGrid.setAttribute("data-scene", e.target.getAttribute("data-step"));
        });
      }, { rootMargin: storyMQ.matches ? "-58% 0px -28% 0px" : "-44% 0px -44% 0px", threshold: 0 });
      storySteps.forEach(function (s) { sio.observe(s); });
    };
    buildStoryObserver();
    if (storyMQ.addEventListener) storyMQ.addEventListener("change", buildStoryObserver);
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
  /* ----- Story home pon demo ----- */
  function initStoryHomePonDemo() {
    var home = document.querySelector("#story-grid .scene-1 .scr-home");
    var paw = document.getElementById("mock-paw");
    var cap = document.getElementById("mock-send-cap");

    if (!home || !paw || !cap) {
      return;
    }

    var chips = Array.prototype.slice.call(home.querySelectorAll(".home-sig"));
    var send = home.querySelector(".home-send") || paw.parentNode;
    var defaultCap = cap.textContent;
    var capTimer = 0;

    function cleanSignalName(chip) {
      var node = chip.querySelector("[data-signal-label], .home-sig-label, .home-sig-name, .home-sig-text, strong, b");
      var label = chip.getAttribute("data-signal") || chip.getAttribute("data-label") || "";

      if (!label && node) {
        label = node.textContent;
      }

      if (!label) {
        label = chip.textContent;
      }

      label = (label || "合図").replace(/\s+/g, " ").trim();

      var quoted = label.match(/「([^」]+)」/);
      if (quoted) {
        return quoted[1];
      }

      label = label.replace(/^例[:：]?\s*/, "").replace(/[「」]/g, "").trim();

      return label || "合図";
    }

    function selectChip(chip) {
      for (var i = 0; i < chips.length; i += 1) {
        chips[i].classList.remove("sel");
      }

      chip.classList.add("sel");
    }

    function getPawCenter() {
      var pawRect = paw.getBoundingClientRect();
      var sendRect = send.getBoundingClientRect();

      return {
        x: pawRect.left - sendRect.left + pawRect.width / 2,
        y: pawRect.top - sendRect.top + pawRect.height / 2,
        size: Math.max(pawRect.width, pawRect.height)
      };
    }

    function removeNode(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }

    function isReducedMotion() {
      if (typeof reduced !== "undefined") {
        if (typeof reduced === "boolean") {
          return reduced;
        }

        if (typeof reduced.matches === "boolean") {
          return reduced.matches;
        }

        return !!reduced;
      }

      return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    function addRing() {
      var center = getPawCenter();
      var ring = document.createElement("span");

      ring.className = "home-paw-ring";
      ring.setAttribute("aria-hidden", "true");
      ring.style.left = center.x + "px";
      ring.style.top = center.y + "px";
      ring.style.width = center.size + 18 + "px";
      ring.style.height = center.size + 18 + "px";
      send.appendChild(ring);

      window.setTimeout(function () {
        removeNode(ring);
      }, 900);
    }

    function addHeart(index) {
      var center = getPawCenter();
      var heart = document.createElement("span");
      var offset = index === 0 ? -18 : 20;

      heart.className = "nade-heart home-paw-heart home-paw-heart-" + (index + 1);
      heart.setAttribute("aria-hidden", "true");
      heart.textContent = index === 0 ? "♡" : "♥";
      heart.style.left = center.x + offset + "px";
      heart.style.top = center.y - 6 + "px";
      heart.style.animationDelay = index * 0.08 + "s";
      send.appendChild(heart);

      window.setTimeout(function () {
        removeNode(heart);
      }, 1700);
    }

    function playPawMotion() {
      paw.classList.remove("is-pon");
      void paw.offsetWidth;
      paw.classList.add("is-pon");

      window.setTimeout(function () {
        paw.classList.remove("is-pon");
      }, 260);
    }

    function sendSignal(event) {
      var selected = home.querySelector(".home-sig.sel") || chips[0];
      var signalName = selected ? cleanSignalName(selected) : "合図";

      if (event) {
        event.preventDefault();
      }

      cap.textContent = "「" + signalName + "」を送りました";
      window.clearTimeout(capTimer);
      capTimer = window.setTimeout(function () {
        cap.textContent = defaultCap;
      }, 1800);

      if (isReducedMotion()) {
        return;
      }

      addRing();
      addHeart(0);
      addHeart(1);
    }

    for (var i = 0; i < chips.length; i += 1) {
      chips[i].addEventListener("click", function (event) {
        event.preventDefault();
        selectChip(this);
      });
    }

    /* instant squish on press; the actual send runs on click so that
       programmatic and assistive activations also work */
    paw.addEventListener("pointerdown", function () {
      if (!isReducedMotion()) playPawMotion();
    });
    paw.addEventListener("click", sendSignal);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initStoryHomePonDemo);
  } else {
    initStoryHomePonDemo();
  }
})();
