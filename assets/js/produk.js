/* Filter produk berdasarkan kategori */
(function () {
  /* Tulis nama produk persis seperti judul kartunya.
     Produk yang tidak tercantum otomatis masuk BAWAAN. */
  var KATEGORI = {
    bahan: [
      "Full Leather with Color Combination",
      "Kangaroo Leather with Sheep Skin & Mesh",
      "Silicone Printing",
      "Synthetic Leather Lycra Stretch",
      "Synthetic Fleece Lycra",
      "Full Synthetic Leather"
    ],
    jari: [
      "Full Finger with Neoprene",
      "Half Finger with Neoprene",
      "Full Finger Slimfit Lycra",
      "Half Finger Slimfit Lycra",
      "Full Finger with Mesh",
      "Basic Half",
      "Basic Full",
      "Bulnote",
      "Panone"
    ],
    aktivitas: [
      "Ski Glove",
      "Riding Glove",
      "Safety Glove",
      "Baseball Glove",
      "Hiking Glove",
      "Waterproof Glove"
    ],
    pelindung: [
      "Arm Sleeves",
      "Elbow Protector",
      "Defender",
      "Knee Detector Defender"
    ]
  };
  var BAWAAN = "jari";

  var kartu = document.querySelectorAll(".produk .row > *");
  var tombol = document.querySelectorAll(".produk-filters li");
  if (!kartu.length || !tombol.length) return;

  kartu.forEach(function (col) {
    var nama = ((col.querySelector("h3") || {}).textContent || "").trim();
    var hasil = BAWAAN;
    Object.keys(KATEGORI).forEach(function (k) {
      if (KATEGORI[k].indexOf(nama) > -1) hasil = k;
    });
    col.dataset.kategori = hasil;
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
