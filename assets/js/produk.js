/* Filter produk: Semua / Tangan / Kaki */
(function () {
  /* Produk kategori KAKI (tulis persis sama dengan nama produk).
     Produk lain otomatis masuk kategori TANGAN. */
  var KAKI = ["Knee Detector Defender"];

  var kartu = document.querySelectorAll(".produk .row > *");
  var tombol = document.querySelectorAll(".produk-filters li");
  if (!kartu.length || !tombol.length) return;

  kartu.forEach(function (col) {
    var nama = (col.querySelector("h3") || {}).textContent || "";
    col.dataset.kategori = KAKI.indexOf(nama.trim()) > -1 ? "kaki" : "tangan";
  });

  tombol.forEach(function (li) {
    li.addEventListener("click", function () {
      var pilih = li.dataset.filter;
      tombol.forEach(function (x) { x.classList.toggle("aktif", x === li); });
      kartu.forEach(function (col) {
        col.hidden = !(pilih === "semua" || col.dataset.kategori === pilih);
      });
    });
  });
})();
