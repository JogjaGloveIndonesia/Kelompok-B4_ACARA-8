/* Struktur organisasi: otomatis diperkecil agar muat di layar (tanpa digeser) */
(function () {
  var MIN = 0.6; /* di bawah ini (layar HP) bagan boleh digeser agar tulisan tetap terbaca */
  var wrap = document.querySelector(".struktur .org-scroll");
  var tree = wrap && wrap.querySelector(".tree");
  if (!wrap || !tree) return;

  function fit() {
    tree.style.transform = "none";
    tree.style.marginLeft = "auto";
    wrap.style.height = "auto";
    wrap.style.overflowX = "auto";

    var lebarWadah = wrap.clientWidth;
    var lebarBagan = tree.scrollWidth;
    var s = Math.min(1, lebarWadah / lebarBagan);

    if (s >= 1) return;
    if (s < MIN) s = MIN;
    tree.style.transformOrigin = "top left";
    tree.style.transform = "scale(" + s + ")";
    var sisa = lebarWadah - lebarBagan * s;
    tree.style.marginLeft = (sisa > 0 ? sisa / 2 : 0) + "px";
    wrap.style.height = Math.ceil(tree.offsetHeight * s) + 10 + "px";
    wrap.style.overflowX = sisa >= 0 ? "hidden" : "auto";
  }

  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
  fit();
})();
