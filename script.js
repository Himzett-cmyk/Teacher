/*
  ============================================================
  UNTUK PEMULA: BACA INI DULU
  ------------------------------------------------------------
  File ini adalah "otak" halaman: mengatur tombol Lanjut,
  buka hadiah, dan kembali ke awal.

  [BOLEH UBAH]  = boleh dimodifikasi (mis. menambah halaman baru)
  [JANGAN UBAH] = bagian penting, jangan dihapus/diubah

  Sebaiknya pemula TIDAK mengubah file ini, cukup ubah teks
  dan warna di file .html saja.
  ============================================================
 */

// [JANGAN UBAH] fungsi bantu: memindahkan dari satu halaman ke halaman lain
function switchPage(hideId, showId) {
  const hideEl = document.getElementById(hideId);
  const showEl = document.getElementById(showId);

  hideEl.classList.remove("active");
  setTimeout(() => {
    showEl.classList.add("active");
  }, 200);
}

const MATH_FORMULAS = ["f(x)=∑", "a²+b²=c²", "∫ π √x", "lim x→∞", "∑ 1/n²", "πr²", "dy/dx"];

let mathRain = null;

function startMathRain() {
  stopMathRain();

  mathRain = document.createElement("div");
  mathRain.className = "math-rain";

  for (let i = 0; i < 20; i++) {
    const drop = document.createElement("span");
    drop.className = "math-drop";
    drop.textContent = MATH_FORMULAS[Math.floor(Math.random() * MATH_FORMULAS.length)];
    drop.style.left = `${Math.random() * 95}%`;
    drop.style.setProperty("--drop-size", `${16 + Math.random() * 10}px`);
    drop.style.setProperty("--drop-duration", `${5 + Math.random() * 3}s`);
    drop.style.setProperty("--drop-delay", `${-Math.random() * 8}s`);
    drop.style.setProperty("--drift", `${Math.random() * 80 - 40}px`);
    mathRain.appendChild(drop);
  }

  document.body.appendChild(mathRain);
}

function stopMathRain() {
  if (mathRain) {
    mathRain.remove();
    mathRain = null;
  }
}

// [JANGAN UBAH] dipanggil tombol "Lanjut" di halaman 1
function nextPage() {
  switchPage("page1", "page2");
}

// [JANGAN UBAH] dipanggil saat kotak hadiah diklik
function showUcapan() {
  document.getElementById("ucapan").style.display = "block";
  startMathRain();
}

// [JANGAN UBAH] dipanggil tombol "Lanjut" setelah kartu ucapan
function showThanks() {
  stopMathRain();
  switchPage("page2", "page3");
}

// [UBAH] Jika ada Perubahan Pada Link Website
function goHome() {
  stopMathRain();
  switchPage("page3", "page1");
}