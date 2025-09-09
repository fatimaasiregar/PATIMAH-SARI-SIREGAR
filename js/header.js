// Mendapatkan elemen tombol hamburger dan menu navigasi mobile
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// Menambahkan event listener untuk tombol hamburger
hamburger.addEventListener('click', () => {
    // Menambahkan atau menghapus kelas 'active' pada menu navigasi mobile
    mobileNav.classList.toggle('active');
});
