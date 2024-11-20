// Ambil elemen dropdown untuk memilih ukuran font
const fontSizeSelector = document.getElementById('font-size-selector');

// Fungsi untuk mengubah ukuran font elemen .text p dan .judul
function changeFontSize() {
  const selectedSize = fontSizeSelector.value;
  
  // Mengubah ukuran font pada elemen dengan kelas .text p
  const textElements = document.querySelectorAll('.text p');
  textElements.forEach(element => {
    element.style.fontSize = selectedSize;
  });

  // Mengubah ukuran font pada elemen dengan kelas .judul
  const judulElements = document.querySelectorAll('.judul');
  judulElements.forEach(element => {
    element.style.fontSize = selectedSize;
  });
}

// Tambahkan event listener untuk perubahan ukuran font pada dropdown
fontSizeSelector.addEventListener('change', changeFontSize);