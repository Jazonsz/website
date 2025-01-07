document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".portfolio-categories li"); // Semua kategori
    const title = document.getElementById("portfolio-title"); // Elemen judul
    const description = document.getElementById("portfolio-description"); // Elemen deskripsi
    const grid = document.getElementById("portfolio-grid"); // Elemen grid untuk gambar
  
    // Data kategori (judul, deskripsi, dan gambar)
    const portfolioData = {
      billboard: {
        title: "Billboard",
        description: "Digital Printing Indah dipercaya oleh perusahaan-perusahaan besar untuk hasil cetakan Billboard berkualitas tinggi.",
        images: [
          "billboard1.jpg",
          "billboard2.jpg",
          "billboard3.jpg",
          "billboard4.jpg",
          "billboard5.jpg",
          "billboard6.jpg",
        ],
      },
      "billboard-backlite": {
        title: "Billboard Backlite",
        description: "Billboard dengan pencahayaan dari belakang, sangat cocok untuk promosi malam hari.",
        images: [
          "bb1.jpg",
          "bb2.jpg",
        ],
      },
      "one-way-vision": {
        title: "One Way Vision",
        description: "One Way Vision memberikan solusi branding pada kaca jendela tanpa mengurangi visibilitas dari dalam.",
        images: [
          "owv1.jpg",
          "owv2.jpg",
        ],
      },
      hoarding: {
        title: "Hoarding",
        description: "Hoarding digunakan untuk mempromosikan proyek besar seperti properti dan konstruksi.",
        images: [
          "h1.jpg",
          "h2.jpg",
        ],
      },
      jpo: {
        title: "JPO (Jembatan Penyeberangan Orang)",
        description: "Iklan di JPO sangat efektif untuk menarik perhatian pejalan kaki dan pengendara.",
        images: [
          "jpo1.jpg",
          "jpo2.jpg",
        ],
      },
      umbul: {
        title: "Umbul",
        description: "Umbul-umbul sangat cocok untuk promosi acara dan brand awareness.",
        images: [
          "umbul1.jpeg",
          "umbul2.jpg",
        ],
      },
      "sticker-cutting": {
        title: "Sticker Cutting",
        description: "Sticker Cutting untuk branding kendaraan, kaca, atau promosi lainnya.",
        images: [
          "s1.jpg",
        ],
      },
      "roll-banner": {
        title: "Roll Banner",
        description: "Roll Banner adalah solusi portabel untuk promosi indoor dan outdoor.",
        images: [
          "roll1.jpg",
          "roll2.jpg",
        ],
      },
      "layanan-cetak-dokumen": {
        title: "Layanan Cetak Dokumen",
        description: "Kami juga menyediakan layanan cetak dokumen berkualitas tinggi untuk kebutuhan Anda.",
        images: [
          "l1.jpg",
        ],
      },
    };
  
    // Event listener untuk kategori
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        // 1. Hapus kelas "active" dari semua kategori
        categories.forEach((cat) => cat.classList.remove("active"));
  
        // 2. Tambahkan kelas "active" ke kategori yang diklik
        category.classList.add("active");
  
        // 3. Ambil data kategori yang diklik
        const selectedCategory = category.getAttribute("data-category");
        const data = portfolioData[selectedCategory];
  
        // 4. Perbarui konten berdasarkan kategori
        title.textContent = data.title;
        description.textContent = data.description;
  
        // 5. Perbarui gambar
        grid.innerHTML = ""; // Kosongkan grid
        data.images.forEach((image) => {
          const imgElement = document.createElement("img");
          imgElement.src = image;
          imgElement.alt = data.title;
          grid.appendChild(imgElement); // Tambahkan ke grid
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    window.addEventListener("scroll", function () {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Offset untuk navbar
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });

  const animatedElements = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

animatedElements.forEach(el => observer.observe(el));

  