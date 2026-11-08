/* Struktur organisasi: otomatis diperkecil agar muat di layar.
   Di HP, bagan boleh digeser, tapi hanya sampai ujung bagan (tidak ke area kosong). */
(function () {
  var MIN = 0.6; /* skala terkecil agar tulisan tetap terbaca */
  var wrap = document.querySelector(".struktur .org-scroll");
  var tree = wrap && wrap.querySelector(".tree");
  if (!wrap || !tree) return;

  /* pembungkus yang ukurannya mengikuti ukuran bagan setelah diperkecil */
  var sizer = document.createElement("div");
  sizer.style.margin = "0 auto";
  tree.parentNode.insertBefore(sizer, tree);
  sizer.appendChild(tree);

  function fit() {
    tree.style.transform = "none";
    tree.style.marginLeft = "";
    sizer.style.width = "auto";
    sizer.style.height = "auto";
    sizer.style.overflow = "visible";
    wrap.style.height = "auto";
    wrap.style.overflowX = "auto";

    var lebarWadah = wrap.clientWidth;
    var lebarBagan = tree.offsetWidth;
    var s = Math.min(1, lebarWadah / lebarBagan);
    if (s >= 1) return;
    if (s < MIN) s = MIN;

    tree.style.transformOrigin = "top left";
    tree.style.transform = "scale(" + s + ")";
    sizer.style.width = Math.ceil(lebarBagan * s) + "px";
    sizer.style.height = Math.ceil(tree.offsetHeight * s) + 10 + "px";
    sizer.style.overflow = "hidden";
    wrap.style.overflowX = lebarBagan * s <= lebarWadah ? "hidden" : "auto";
  }

  window.addEventListener("load", fit);
  window.addEventListener("resize", fit);
  fit();
})();