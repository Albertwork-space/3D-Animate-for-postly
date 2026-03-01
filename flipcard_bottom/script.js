// Mengambil elemen bagian dalam kartu yang akan diputar
const card = document.getElementById('card');

// Menyimpan status apakah kartu sedang dalam posisi terbalik
let flipped = false;

// Saat tombol NEXT (kanan) diklik
document.getElementById('next').addEventListener('click', () => {
    flipped = true; // Menandai bahwa kartu sekarang terbalik
    card.classList.add('flipped'); // Menambahkan class 'flipped' agar kartu berputar 180°
});

// Saat tombol PREV (kiri) diklik
document.getElementById('prev').addEventListener('click', () => {
    flipped = false; // Menandai bahwa kartu kembali ke posisi depan
    card.classList.remove('flipped'); // Menghapus class 'flipped' agar kartu kembali ke posisi awal
});