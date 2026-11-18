/* Golden Hour — combined site behaviour */
(function () {
  "use strict";

  var DESIGN_WIDTH = 1920;
  var DEFAULT_TITLE = "Golden Hour — Restaurant, Café & Lounge";
  var LEGACY = {
    "page-PB7DVLHqLLC75XxK": "beranda",
    "page-PBx4Z9tSCSD9KxHy": "menu",
    "page-PBgKRSLPYml5cyqc": "lokasi",
    "page-PBHlXFH2BvZ4gwrS": "reservasi"
  };
  var TITLES = {
    beranda: DEFAULT_TITLE,
    menu: "Menu — Golden Hour",
    lokasi: "Lokasi — Golden Hour",
    reservasi: "Reservasi & Ulasan — Golden Hour"
  };

  var root = document.documentElement;
  var frame = 0;

  /* Keep the fixed 1920px Canva design fitted to any PC/laptop window width. */
  function fitCanvas() {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(function () {
      var width = window.innerWidth || root.clientWidth || DESIGN_WIDTH;
      var height = window.innerHeight || root.clientHeight || 768;
      var scale = Math.min(1, width / DESIGN_WIDTH);
      root.style.setProperty("--site-scale", String(scale));
      root.style.setProperty("--site-height", (height / scale) + "px");
    });
  }

  fitCanvas();
  window.addEventListener("resize", fitCanvas, { passive: true });
  window.addEventListener("orientationchange", fitCanvas);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", fitCanvas, { passive: true });
  }

  function currentRoute() {
    var raw = (location.hash || "").replace(/^#\/?/, "");
    try { raw = decodeURIComponent(raw); } catch (e) { /* keep raw */ }
    if (LEGACY[raw]) {
      raw = LEGACY[raw];
      if (history.replaceState) history.replaceState(null, "", "#" + raw);
    }
    return TITLES[raw] ? raw : "beranda";
  }

  function updateNav(route) {
    var items = document.querySelectorAll(".Bs7tyA");
    for (var i = 0; i < items.length; i++) items[i].classList.remove("oiIpEw");
    var links = document.querySelectorAll('a[href="#' + route + '"]');
    for (var j = 0; j < links.length; j++) {
      var item = links[j].closest(".Bs7tyA");
      if (item) item.classList.add("oiIpEw");
      links[j].setAttribute("aria-current", "page");
    }
    var other = document.querySelectorAll('a[aria-current="page"]');
    for (var k = 0; k < other.length; k++) {
      if (other[k].getAttribute("href") !== "#" + route) other[k].removeAttribute("aria-current");
    }
  }

  function showPage(route) {
    var pages = document.querySelectorAll(".site-page");
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      var active = page.id === route;
      page.classList.toggle("is-active", active);
      page.setAttribute("aria-hidden", active ? "false" : "true");
      if (active) page.removeAttribute("inert");
      else page.setAttribute("inert", "");
    }
    updateNav(route);
    document.title = TITLES[route] || DEFAULT_TITLE;
    var scroller = document.querySelector(".ZRRuDw");
    if (scroller) scroller.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function navigate() {
    showPage(currentRoute());
  }

  window.addEventListener("hashchange", navigate);

  /* Clicking the link for the page you are already on should still scroll up. */
  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var target = link.getAttribute("href").slice(1);
    if (target === currentRoute()) {
      var scroller = document.querySelector(".ZRRuDw");
      if (scroller) scroller.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  });

  /* Footer dialogs: terms/report and privacy. */
  function initDialogs() {
    var backdrop = document.getElementById("modal_backdrop");
    var report = document.getElementById("modal");
    var privacy = document.getElementById("privacy_policy_modal");
    var reportButton = document.getElementById("report_button");
    var privacyButton = document.getElementById("privacy_policy_button");
    var closeButtons = [
      document.getElementById("form_close_initial"),
      document.getElementById("form_close_privacy_policy")
    ];

    function closeDialogs() {
      if (report) report.classList.remove("show");
      if (privacy) privacy.classList.remove("show");
      if (backdrop) backdrop.classList.remove("show");
    }

    function openDialog(dialog) {
      closeDialogs();
      if (dialog) dialog.classList.add("show");
      if (backdrop) backdrop.classList.add("show");
    }

    if (reportButton) {
      reportButton.addEventListener("click", function () { openDialog(report); });
    }
    if (privacyButton) {
      privacyButton.addEventListener("click", function () { openDialog(privacy); });
    }
    for (var i = 0; i < closeButtons.length; i++) {
      if (closeButtons[i]) closeButtons[i].addEventListener("click", closeDialogs);
    }
    if (backdrop) backdrop.addEventListener("click", closeDialogs);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeDialogs();
    });

    var reportFormButton = document.getElementById("form_report");
    if (reportFormButton) {
      reportFormButton.addEventListener("click", function () {
        var base = reportFormButton.getAttribute("data-report-url") || "https://www.canva.com/help/report-content/";
        window.open(base + encodeURIComponent(location.href), "_blank", "noopener");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      fitCanvas();
      initDialogs();
      navigate();
    });
  } else {
    fitCanvas();
    initDialogs();
    navigate();
  }
})();
