// Ambil elemen wrapper untuk menambah kemampuan toggle pada sentuhan / keyboard
const wrapper = document.querySelector('.flip-wrapper');

// Jika device sentuh (touch), hover tidak selalu bekerja — tambahkan toggle click untuk UX yang baik
let isTouch = false;
window.addEventListener('touchstart', () => { isTouch = true; }, { passive: true });

// Untuk perangkat sentuh: ketuk sekali untuk membalik, ketuk lagi untuk kembali
wrapper.addEventListener('click', (e) => {
    if (!isTouch) return; // non-touch biasanya hover sudah cukup; jangan ganggu desktop
    // toggle class flipped untuk memicu CSS rotate
    wrapper.classList.toggle('flipped');
});

// keyboard support: tekan Enter atau Space saat wrapper fokus untuk toggle
wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // cegah scroll pada Space
        wrapper.classList.toggle('flipped');
    }
});

// Opsional: jika pengguna menggerakkan kursor jauh dari card, kita bisa hapus flipped (desktop)
// namun kita biarkan hover CSS menangani ini; script hanya untuk case touch/keyboard.