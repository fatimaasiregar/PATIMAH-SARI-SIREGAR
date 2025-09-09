// Mengambil ID produk dari localStorage
let storage = localStorage.idUp;

// Mengambil data produk dari API menggunakan ID yang diambil dari localStorage
fetch("https://makeup-api.herokuapp.com/api/v1/products/" + storage + ".json")
    .then((response) => response.json())  // Mengonversi respons menjadi JSON
    .then((data) => {
        // Memilih elemen dengan kelas 'tam' untuk menampilkan informasi produk
        const box = document.querySelector('.tam');

        // Membuat elemen div untuk menampung informasi produk
        const cart = document.createElement('div');
        cart.className = 'cart';  // Menambahkan kelas 'cart' untuk styling

        // Membuat elemen p untuk menampilkan nama brand produk
        const brand = document.createElement('p');
        brand.textContent = data.brand;  // Mengatur teks dengan nama brand
        brand.className = 'title';  // Menambahkan kelas 'title' untuk styling
        cart.appendChild(brand);  // Menambahkan elemen brand ke dalam div cart

        // Membuat elemen div untuk menampung gambar produk
        const ggContainer = document.createElement('div');
        ggContainer.className = 'gg-container';  // Menambahkan kelas 'gg-container' untuk styling

        // Membuat elemen img untuk menampilkan gambar produk
        const image = document.createElement('img');
        image.src = data.image_link;  // Mengatur src dengan link gambar produk
        image.className = 'gg';  // Menambahkan kelas 'gg' untuk styling
        image.alt = "Image Not Found";  // Mengatur teks alternatif jika gambar tidak ditemukan
        ggContainer.appendChild(image);  // Menambahkan elemen gambar ke dalam div ggContainer

        cart.appendChild(ggContainer);  // Menambahkan div ggContainer ke dalam div cart

        // Membuat elemen p untuk menampilkan nama produk
        const name = document.createElement('p');
        name.textContent = `Name: ${data.name}`;  // Mengatur teks dengan nama produk
        name.className = 'nama';  // Menambahkan kelas 'nama' untuk styling
        cart.appendChild(name);  // Menambahkan elemen nama ke dalam div cart

        // Membuat elemen p untuk menampilkan harga produk
        const price = document.createElement('p');
        price.textContent = `Price: $${data.price}`;  // Mengatur teks dengan harga produk
        price.className = 'harga';  // Menambahkan kelas 'harga' untuk styling
        cart.appendChild(price);  // Menambahkan elemen harga ke dalam div cart

        // Membuat elemen p untuk menampilkan kategori produk
        const category = document.createElement('p');
        category.textContent = `Category: ${data.category}`;  // Mengatur teks dengan kategori produk
        category.className = 'kategori';  // Menambahkan kelas 'kategori' untuk styling
        cart.appendChild(category);  // Menambahkan elemen kategori ke dalam div cart

        // Membuat elemen p untuk menampilkan deskripsi produk
        const description = document.createElement('p');
        description.textContent = `Description: ${data.description}`;  // Mengatur teks dengan deskripsi produk
        description.className = 'des';  // Menambahkan kelas 'des' untuk styling
        cart.appendChild(description);  // Menambahkan elemen deskripsi ke dalam div cart

        // Menambahkan elemen div cart yang berisi informasi produk ke dalam elemen dengan kelas 'tam'
        box.appendChild(cart);
    });
