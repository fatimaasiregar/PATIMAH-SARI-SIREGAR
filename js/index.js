// Mengambil data dari API
fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((response) => {
        // Mengecek apakah response sukses
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Mengonversi response ke format JSON
    })
    .then((res) => {
        const box = document.querySelector('.tam'); // Mengambil elemen dengan kelas 'tam'
        const categories = new Set(); // Set untuk menyimpan kategori unik
        const data = res.slice(70); // Mengambil subset data dari indeks 70

        data.forEach((element) => {
            // Memeriksa apakah kategori sudah ada atau image_link tidak valid
            if (categories.has(element.category) || !element.image_link) return;
            
            categories.add(element.category); // Menambahkan kategori ke dalam Set

            const bx = document.createElement('div'); // Membuat elemen div untuk setiap produk
            bx.className = 'cart'; // Menetapkan kelas 'cart' pada div

            // Membuat elemen kategori
            const category = document.createElement('p'); // Elemen paragraf untuk kategori
            category.textContent = element.category || 'Pencil'; // Menetapkan teks kategori
            category.className = 'category'; // Menetapkan kelas 'category' pada paragraf
            bx.appendChild(category); // Menambahkan elemen kategori ke dalam div

            // Membuat elemen gambar
            const gbr = document.createElement('img'); // Elemen gambar
            gbr.src = element.image_link; // Menetapkan sumber gambar
            gbr.className = 'gg'; // Menetapkan kelas 'gg' pada gambar
            gbr.alt = "Image Not Found"; // Menetapkan teks alternatif untuk gambar
            gbr.addEventListener('click', function () {
                localStorage.setItem('id_up', element.id); // Menyimpan ID produk ke localStorage saat gambar diklik
            });
            bx.appendChild(gbr); // Menambahkan gambar ke dalam div

            // Membuat elemen judul produk
            const nama = document.createElement('p'); // Elemen paragraf untuk nama produk
            nama.textContent = element.name; // Menetapkan teks nama produk
            nama.className = 'title'; // Menetapkan kelas 'title' pada paragraf
            nama.addEventListener('click', function () {
                localStorage.setItem('id_up', element.id); // Menyimpan ID produk ke localStorage saat nama diklik
            });
            bx.appendChild(nama); // Menambahkan nama produk ke dalam div

            // Membuat elemen harga produk
            const price = document.createElement('p'); // Elemen paragraf untuk harga produk
            price.textContent = "$" + element.price; // Menetapkan teks harga produk
            price.className = 'price'; // Menetapkan kelas 'price' pada paragraf
            price.addEventListener('click', function () {
                localStorage.setItem('id_up', element.id); // Menyimpan ID produk ke localStorage saat harga diklik
            });
            bx.appendChild(price); // Menambahkan harga produk ke dalam div

            box.appendChild(bx); // Menambahkan div produk ke dalam elemen dengan kelas 'tam'
        });
    })
    .catch((error) => {
        // Menangani error jika terjadi kesalahan saat fetch data
        console.error('Error fetching data:', error);
    });
