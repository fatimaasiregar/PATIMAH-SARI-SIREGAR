// news.js

const apiKey = "a70f6f26c3824005a9023eb6ef4233ca";

// Fetch berita dari NewsAPI
fetch(`https://newsapi.org/v2/everything?q=cosmetic&language=en&apiKey=${apiKey}`)
  .then((response) => {
    if (!response.ok) throw new Error("HTTP Error " + response.status);
    return response.json();
  })
  .then((res) => {
    console.log(res); // Debug: cek hasil response

    const box = document.querySelector('.tam');
    const data = res.articles;

    if (!data || data.length === 0) {
      box.innerHTML = "<p>Tidak ada berita ditemukan.</p>";
      return;
    }

    // Batasi maksimal 25 berita
    const totalItems = Math.min(data.length, 25);

    data.slice(0, totalItems).forEach(element => {
      // Buat container berita
      const bx = document.createElement('div');
      bx.className = 'cart';

      // Judul berita
      const hrf = document.createElement('h2');
      hrf.textContent = element.title || "No title";
      hrf.className = 'p';
      bx.appendChild(hrf);

      // Gambar berita
      const g = document.createElement('img');
      g.src = element.urlToImage || 'default-image.png';
      g.alt = "Image not found";
      g.className = 'gg';
      bx.appendChild(g);

      // Tanggal publikasi
      const p = document.createElement('p');
      const d = new String(element.publishedAt);
      p.textContent = "Published at: " + d;
      p.className = 'l';
      bx.appendChild(p);

      // Ringkasan
      const s = document.createElement('h5');
      s.textContent = element.description || "No description available";
      bx.appendChild(s);

      // Link "Learn More"
      const l = document.createElement('a');
      l.href = element.url;
      l.textContent = "Learn More..";
      l.target = "_blank"; // buka tab baru
      bx.appendChild(l);

      // Tambahkan ke dalam box utama
      box.appendChild(bx);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    const box = document.querySelector('.tam');
    box.innerHTML = `<p style="color:red;">Gagal mengambil berita: ${error.message}</p>`;
  });
