// Melakukan permintaan fetch untuk mendapatkan data produk dari API
fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((response) => response.json())  // Mengonversi respons API menjadi JSON
    .then((res) => {
        // Memilih elemen dengan kelas 'tam' untuk menampilkan produk
        const box = document.querySelector('.tam');
        
        // Mengambil subset data produk dari indeks 70 hingga elemen terakhir
        const data = res.slice(70, -1);  // Mulai dari index 70, hindari elemen terakhir

        // Iterasi untuk setiap produk dalam data
        data.forEach((element) => {
            // Membuat elemen anchor yang akan menjadi kontainer produk
            const bx = document.createElement('a');
            bx.href = "detail.html";  // Mengatur href untuk navigasi ke halaman detail
            bx.className = 'cart';  // Menambahkan kelas 'cart' untuk styling

            // Membuat elemen gambar untuk menampilkan gambar produk
            const gbr = document.createElement('img');
            gbr.src = element.image_link;  // Mengatur sumber gambar produk
            gbr.className = 'gg';  // Menambahkan kelas 'gg' untuk styling
            gbr.alt = "Image Not Found";  // Mengatur teks alternatif jika gambar tidak ditemukan
            gbr.addEventListener('click', function () {
                // Menyimpan ID produk ke localStorage ketika gambar diklik
                localStorage.setItem('idUp', element.id); 
            });
            bx.appendChild(gbr);  // Menambahkan gambar ke dalam elemen anchor

            // Membuat elemen paragraf untuk menampilkan nama produk
            const nama = document.createElement('p');
            nama.textContent = element.name;  // Mengatur teks dengan nama produk
            nama.className = 'title';  // Menambahkan kelas 'title' untuk styling
            nama.addEventListener('click', function () {
                // Menyimpan ID produk ke localStorage ketika nama produk diklik
                localStorage.setItem('idUp', element.id); 
            });
            bx.appendChild(nama);  // Menambahkan nama produk ke dalam elemen anchor

            // Membuat elemen paragraf untuk menampilkan harga produk
            const price = document.createElement('p');
            price.textContent = "$" + element.price;  // Mengatur teks dengan harga produk
            price.className = 'price';  // Menambahkan kelas 'price' untuk styling
            price.addEventListener('click', function () {
                // Menyimpan ID produk ke localStorage ketika harga produk diklik
                localStorage.setItem('idUp', element.id); 
            });
            bx.appendChild(price);  // Menambahkan harga produk ke dalam elemen anchor

            // Menambahkan elemen anchor yang berisi informasi produk ke dalam elemen dengan kelas 'tam'
            box.appendChild(bx);
        });
    })
    .catch((error) => {
        // Menangani kesalahan jika permintaan fetch gagal
        console.error('Error fetching data:', error);
    });
