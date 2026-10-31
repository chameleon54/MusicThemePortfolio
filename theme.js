// Runs in <head> before first paint so light-theme visitors never see a dark flash.
(function () {
  var t = null;
  try { t = localStorage.getItem("ftk-theme"); } catch (e) { /* ignore */ }
  if (t !== "light" && t !== "dark") {
    t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  document.documentElement.setAttribute("data-theme", t);
})();
