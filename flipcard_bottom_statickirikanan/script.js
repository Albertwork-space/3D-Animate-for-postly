// ===================== AMBIL ELEMEN DOM =====================
const flipCard = document.getElementById('flipCard'); // Ambil elemen kartu
const prevBtn = document.getElementById('prevBtn'); // Ambil tombol kiri (<)
const nextBtn = document.getElementById('nextBtn'); // Ambil tombol kanan (>)

// ===================== VARIABEL STATUS =====================
let currentAngle = 0; // Menyimpan sudut rotasi kartu (0 = depan, -180 = belakang)

// ===================== FUNGSI UTAMA =====================
function applyAngle(angle) { // Fungsi untuk mengubah sudut rotasi kartu
    currentAngle = angle; // Simpan sudut terbaru ke variabel
    flipCard.style.transform = `rotateY(${angle}deg)`; // Terapkan rotasi pada kartu
}

// ===================== TOMBOL KIRI (<) =====================
prevBtn.addEventListener('click', () => { // Saat tombol kiri diklik
    applyAngle(-180); // Putar kartu ke kiri untuk menampilkan sisi belakang
    //prevBtn.addEventListener('click', () => {
    //applyAngle(0); // rotasi ke kanan (flip penuh)
});

// ===================== TOMBOL KANAN (>) =====================
nextBtn.addEventListener('click', () => { // Saat tombol kanan diklik
    applyAngle(0); // Kembalikan kartu ke posisi awal (sisi depan)
    //nextBtn.addEventListener('click', () => { // Saat tombol kanan diklik
    //applyAngle(180); // Kembalikan kartu ke posisi awal (sisi depan)
});

// ===================== DUKUNGAN KEYBOARD =====================
window.addEventListener('keydown', (e) => { // Saat pengguna menekan tombol keyboard
    if (e.key === 'ArrowLeft') { // Jika tombol panah kiri ditekan
        applyAngle(-180); // Flip ke kiri
    } else if (e.key === 'ArrowRight') { // Jika tombol panah kanan ditekan
        applyAngle(0); // Kembali ke depan
    }
});

// ===================== POSISI AWAL =====================
applyAngle(0); // Pastikan kartu ditampilkan pada posisi awal (sisi depan)