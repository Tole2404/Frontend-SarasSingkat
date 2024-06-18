import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow2.png";

import penulis from "../assets/img/Writting.jpg";
import penulis1 from "../assets/img/Writter2.jpg";

import fiturIcon1 from "../assets/img/fitur/fitur1.svg";
import fiturIcon2 from "../assets/img/fitur/fitur2.svg";
import fiturIcon3 from "../assets/img/fitur/fitur3.svg";
import fiturIcon4 from "../assets/img/fitur/fitur4.svg";
import fiturIcon5 from "../assets/img/fitur/fitur5.svg";

import nadia from "../assets/img/testimonial/nadia.jpg";
import bayu from "../assets/img/testimonial/bayu.jpg";
import jeffrey from "../assets/img/testimonial/jeffrey.jpg";

export const dataTeam = [
  {
    id: 1,
    img: nadia,
    nama: "Nadia Fitriani",
    position: "UI/UX Designer",
    univ: "Institut Teknologi Garut",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nadia-fitriani-554a7829b/",
      instagram: "https://www.instagram.com/ndiaftr_",
      github: "https://github.com/nadiaff25",
    },
  },
  {
    id: 2,
    img: bayu,
    nama: "Tunggul Bayu Kusuma",
    position: "Front-End",
    univ: "Universitas Budi Luhur",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/tunggulbayukusuma/",
      instagram: "https://www.instagram.com/tnggulbyksma",
      github: "https://github.com/Tole2404",
    },
  },
  {
    id: 3,
    img: jeffrey,
    nama: "Jeffrey Jeverson Pasaribu",
    position: "Back-End",
    univ: "institut teknologi del",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/jeffreypasaribu",
      instagram: "https://www.instagram.com/jeffpsrb_?igsh=MjBkbXF5N2UyNXFs",
      github: "https://github.com/jeffpsrb",
    },
  },
];

export const dataPenulis = [
  {
    id: 1,
    img: penulis,
    title: "Jadi Penulis di SarasSingkat",
    deskripsi:
      "Bergabunglah dengan komunitas penulis kami di SarasSingkat dan berikan kontribusi Anda untuk meningkatkan literasi masyarakat Indonesia. Di sini, Anda memiliki kesempatan untuk berbagi pengetahuan dan wawasan Anda dengan ribuan pembaca setiap harinya. Menjadi penulis di SarasSingkat adalah langkah pertama Anda dalam menjelajahi dunia literasi yang menginspirasi dan bermakna.",
  },
  {
    id: 2,
    img: penulis1,
    title: "Menjadi Bagian dari Perubahan",
    deskripsi:
      "Dengan menulis untuk SarasSingkat, Anda tidak hanya membagikan ringkasan buku, tetapi juga menjadi bagian dari gerakan untuk meningkatkan minat baca dan pemahaman di Indonesia. Setiap ringkasan buku yang Anda tulis memiliki potensi untuk membuka pintu pengetahuan baru bagi pembaca dari berbagai latar belakang.",
  },
];

export const misiData = [
  {
    id: 1,
    img: arrow1,
    deskripsi:
      "Kami di SarasSingkat memiliki kepedulian yang besar terhadap isu literasi di Indonesia. Meningkatkan literasi dan minat baca masyarakat Indonesia merupakan hal yang sangat penting untuk kemajuan bangsa. Melalui aplikasi SarasSingkat, kami berkomitmen untuk memberikan kontribusi nyata dalam memudahkan akses informasi dan pengetahuan melalui buku.",
  },
  {
    id: 2,
    img: arrow2,
    deskripsi:
      "Kami percaya bahwa membaca tidak hanya harus bermanfaat, tetapi juga harus menyenangkan dan mudah diakses. Dengan menyediakan ringkasan buku yang singkat, informatif, dan menarik, kami bertujuan untuk membantu semua orang, dari berbagai latar belakang, untuk tetap terinspirasi dan termotivasi dalam membaca.",
  },
  {
    id: 3,
    img: arrow1,
    deskripsi:
      "Di SarasSingkat, Anda akan menemukan berbagai fitur yang dirancang untuk memudahkan dan memperkaya pengalaman membaca Anda. Mulai dari ringkasan buku yang padat dan jelas, berbagai kategori buku, hingga rekomendasi buku yang disesuaikan dengan minat Anda. Kami juga menyediakan fitur pencarian cepat dan kemampuan menyimpan ringkasan untuk dibaca nanti.",
  },
  {
    id: 4,
    img: arrow2,
    deskripsi: "Mari bergabung dengan kami di SarasSingkat, dan bersama-sama kita tingkatkan literasi di Indonesia. Temukan kemudahan dan keseruan membaca buku dengan cara baru yang lebih efisien dan menyenangkan.",
  },
];

export const fiturData = [
  {
    id: 1,
    logo: fiturIcon1,
    judul: "Ringkasan Singkat dan Mudah Dipahami:",
    deskripsi: "Dapatkan poin-poin penting dan informasi utama dari buku favorit Anda dalam waktu singkat.",
  },
  {
    id: 2,
    logo: fiturIcon2,
    judul: "Berbagai Kategori Buku:",
    deskripsi: "Temukan berbagai macam buku dari berbagai genre, seperti novel, non-fiksi, biografi, dan banyak lagi.",
  },
  {
    id: 3,
    logo: fiturIcon3,
    judul: "Fitur Pencarian:",
    deskripsi: "Temukan buku yang Anda inginkan dengan mudah dan cepat.",
  },
  {
    id: 4,
    logo: fiturIcon4,
    judul: "Simpan untuk Dibaca Nanti:",
    deskripsi: "Simpan ringkasan buku yang menarik perhatian Anda untuk dibaca kembali di lain waktu.",
  },
  {
    id: 5,
    logo: fiturIcon5,
    judul: "Fitur untuk Penulis:",
    deskripsi: "Dapatkan pengalaman yang mudah dan efisien dalam mempublikasikan ringkasan buku Anda.",
  },
];

export const navLinks = [
  {
    id: 1,
    path: "/",
    text: "Beranda",
  },
  {
    id: 2,
    path: "/penulis",
    text: "Penulis",
  },
  {
    id: 3,
    path: "/tentang",
    text: "Tentang",
  },
];

export const navLinksDashboard = [
  {
    id: 1,
    path: "/dashboard-pembaca",
    text: "Beranda",
  },
  {
    id: 2,
    path: "/dashboard-pembaca/koleksiku",
    text: "Koleksiku",
  },
  {
    id: 3,
    path: "/dashboard-pembaca/komunitas",
    text: "Komunitas",
  },
];

export const navLinksDashboardPenulis = [
  {
    id: 1,
    path: "/dashboard-penulis",
    text: "Beranda",
  },
  {
    id: 2,
    path: "/dashboard-penulis/kelolabuku",
    text: "kelolabuku",
  },
  {
    id: 3,
    path: "/dashboard-penulis/komunitas",
    text: "Komunitas",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa itu SarasSingkat?",
    desc: "SarasSingkat adalah platform berbasis digital yang menyediakan ringkasan buku yang informatif dan menarik dalam waktu singkat. Kami bertujuan untuk membantu masyarakat Indonesia meningkatkan pengetahuan dan wawasan mereka tanpa harus membaca buku secara keseluruhan.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana Cara Menggunakan SarasSingkat?",
    desc: "Anda dapat menggunakan SarasSingkat dengan mudah! Cukup daftar atau login ke akun Anda, telusuri kategori buku yang Anda minati, dan temukan ringkasan buku yang menarik. Anda juga dapat menggunakan fitur pencarian untuk menemukan buku berdasarkan judul, penulis, atau genre favorit Anda.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Apakah Saya Harus Membayar untuk Mengakses Ringkasan Buku?",
    desc: "Tidak, SarasSingkat sepenuhnya gratis untuk digunakan. Anda dapat mengakses semua ringkasan buku dan fitur-fiturnya tanpa biaya apapun.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apakah Saya Bisa Menjadi Penulis di SarasSingkat?",
    desc: "Tentu saja! Kami selalu mencari kontributor yang bersemangat untuk menulis ringkasan buku yang berkualitas. Anda dapat mendaftar sebagai penulis dan mulai berbagi pengetahuan Anda dengan ribuan pembaca kami.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah Buku yang Tersedia di SarasSingkat Terbatas?",
    desc: "Kami terus memperbarui koleksi buku kami untuk memberikan berbagai pilihan kepada pengguna kami. Namun, jika ada buku tertentu yang Anda ingin kami tambahkan, jangan ragu untuk memberi tahu kami!",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Apakah Saya Bisa Menyimpan Ringkasan Buku untuk Dibaca Nanti?",
    desc: "Ya, Anda dapat menyimpan ringkasan buku yang menarik perhatian Anda untuk dibaca kembali di lain waktu. Gunakan fitur 'Simpan untuk Dibaca Nanti' untuk membangun koleksi buku virtual Anda.",
  },
];
