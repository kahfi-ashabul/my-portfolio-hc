/* ==========================================================================
   content.js  -  SEMUA ISI TEKS WEBSITE ADA DI SINI
   Kamu cukup mengedit file ini untuk mengganti teks, link, dan daftar foto.
   Aturan: jangan hapus tanda kutip, koma, kurung kurawal { } atau kurung siku [ ].
   Teks boleh memakai tag sederhana: <strong>tebal</strong>, <em>miring</em>.
   Gunakan &amp; untuk tanda & di dalam teks.
   ========================================================================== */

window.SITE = {

  /* ---- 1. PENGATURAN UTAMA ------------------------------------------------ */
  // Website ini khusus jalur HR / Human Capital. Biarkan "hr".
  defaultFokus: "hr",

  // "wipe"   = ada animasi tirai saat klik menu (paling berkesan)
  // "smooth" = hanya gulir halus tanpa tirai
  transition: "wipe",

  // Tampilkan animasi pembuka (kata Build, Grow, Serve) sekali per kunjungan
  intro: true,

  /* ---- 2. DATA DIRI & LINK ------------------------------------------------ */
  person: {
    name: "Ashabul Kahfi",
    email: "ashabulkahfi1986@gmail.com",
    phone: "+62 838 3079 8271",
    phoneHref: "+6283830798271",
    linkedin: "https://www.linkedin.com/in/kahfi-ashabul",
    location: "Tuban, Jawa Timur"
  },

  // File CV (PDF). Taruh file di folder assets/cv/ dengan nama persis seperti ini.
  cv: {
    hr: "assets/cv/CV-Ashabul-Kahfi-HR-HC.pdf"
  },

  motto: ["Build", "Grow", "Serve"],

  /* ---- 3. ISI UTAMA (judul, ringkasan, angka, kompetensi) ----------------- */
  fokus: {

    hr: {
      label: "HR / HC",
      pageTitle: "Ashabul Kahfi | Human Resources / Human Capital",
      description: "Portofolio Ashabul Kahfi: administrasi SDM, penggajian, workforce scheduling, Pro-Int HRIS dan Oracle EBS, dengan 5+ tahun pengalaman manufaktur.",
      eyebrow: "Human Resources / Human Capital",
      headline: "Berawal dari operator produksi, kini mengelola administrasi SDM dan sistem perusahaan.",
      sub: "Lulusan S1 Manajemen dengan 5+ tahun di manufaktur berskala besar: penggajian dan absensi, workforce scheduling, Pro-Int HRIS dan Oracle EBS, serta pengalaman memimpin 1 shift berisi 85+ orang sebagai Acting Supervisor.",
      stats: [
        { v: 5,  s: "+", l: "Tahun di manufaktur" },
        { v: 85, s: "+",  l: "Orang dalam 1 shift yang dipimpin (acting)" },
        { v: 3,  s: "",  l: "Sistem: Oracle EBS, Pro-Int HRIS, OTLINK" }
      ],
      profil: "Lulusan <strong>S1 Manajemen (Universitas Terbuka)</strong> dengan pengalaman lebih dari 5 tahun di lingkungan manufaktur berskala besar: administrasi penggajian &amp; absensi, penjadwalan kerja lintas shift, penanganan keluhan karyawan (<em>complaint handling</em>), dan pelaporan ke manajemen. Terbiasa memakai <strong>Pro-Int HRIS</strong> dan <strong>Oracle E-Business Suite</strong> untuk administrasi data, serta pernah dipercaya memimpin 1 shift regu produksi berisi 85+ orang sebagai Acting Supervisor. Berorientasi pada <strong>people management</strong>, kepatuhan K3, dan keputusan berbasis data.",
      kompetensi: [
        { t: "HR Administration &amp; Payroll", x: "Rekapitulasi gaji dan lembur, absensi karyawan, penyelesaian keluhan penggajian." },
        { t: "Workforce Management",           x: "Penjadwalan kerja 3 shift tim kebersihan area produksi, koordinasi lintas fungsi." },
        { t: "People Leadership",              x: "Memimpin dan mengawasi 1 shift regu produksi (85+ orang) sebagai Acting Supervisor." },
        { t: "HR &amp; ERP Systems",           x: "Pro-Int HRIS, Oracle E-Business Suite, OTLINK, Microsoft Office, Google Workspace." },
        { t: "Employee Relations",             x: "Complaint handling dan komunikasi lintas level, dari operator hingga manajemen." },
        { t: "K3 &amp; Kepatuhan",             x: "Kepatuhan SOP dan K3, problem solving, analisis data dengan Pivot Table." }
      ],
      kontakJudul: "Terbuka untuk peluang di bidang Human Resource / Human Capital."
    }
  },

  /* ---- 4. FAKTA SINGKAT (kartu di bagian Profil) -------------------------- */
  fakta: [
    { k: "Lokasi",     v: "Tuban, Jawa Timur" },
    { k: "Pendidikan", v: "S1 Manajemen, Universitas Terbuka" },
    { k: "Pengalaman", v: "5+ tahun, manufaktur berskala besar" },
    { k: "Sistem",     v: "Oracle EBS, Pro-Int HRIS, OTLINK" },
    { k: "Bahasa",     v: "Indonesia (Native), Inggris (Intermediate)" }
  ],

  tools: ["Oracle E-Business Suite", "Pro-Int HRIS", "OTLINK", "Excel (Pivot Table)", "Google Sheets", "Google Workspace", "Microsoft Office"],

  /* ---- 5. BUILD, GROW, SERVE (prinsip kerja + pencapaian) ----------------- */
  // Tambahkan angka sebelum/sesudah kalau kamu punya datanya, misalnya "dari 15 menit menjadi 2 menit".
  prinsip: {
    judul: "Prinsip kerja saya",
    intro: "Membangun sistem yang rapi, bertumbuh lewat tanggung jawab baru, dan melayani dengan membuat pekerjaan orang lain lebih mudah.",
    kolom: [
      {
        kata: "Build",
        tagline: "Membangun fondasi yang rapi dan bisa dipakai orang lain.",
        poin: [
          "Merapikan arsip dokumen dengan sistem ordner terstruktur: nomor urut, nama, dan desain label yang menyambung, serta mengidentifikasi rak form lengkap dengan nomor, nama, dan denah untuk memudahkan pencarian.",
          "Berkontribusi dalam digitalisasi pencatatan data produksi."

        ]
      },
      {
        kata: "Grow",
        tagline: "Bertumbuh lewat tanggung jawab dan ilmu baru.",
        poin: [
          "Dari Operator Produksi (2021) ke Admin Lapangan, Admin Absensi &amp; Support Produksi, hingga dua penugasan acting: Production System Admin dan Supervisor Shift.",
          "Menempuh S1 Manajemen sambil bekerja penuh waktu."
        ]
      },
      {
        kata: "Serve",
        tagline: "Melayani dengan membuat kerja orang lain lebih mudah.",
        poin: [
          "Menelusuri selisih stok fisik bahan kemas yang berkelanjutan sampai tuntas.",
          "Menyelesaikan keluhan karyawan terkait penggajian (<em>complaint handling</em>) secara tuntas."
        ]
      }
    ]
  },

  /* ---- 6. TANGGA KARIER (animasi di bagian Pengalaman) -------------------- */
  tangga: [
    { y: "2021",    t: "Operator Produksi" },
    { y: "2023",    t: "Admin Lapangan" },
    { y: "2024",    t: "Admin Absensi &amp; Support" },
    { y: "2024-25", t: "Acting Admin Oracle &amp; Supervisor Shift" }
  ],

  /* ---- 7. PENGALAMAN KERJA ------------------------------------------------ */
  // photo: nama file foto di assets/foto/ (boleh dikosongkan atau foto belum ada, otomatis disembunyikan)
    pengalaman: [
    {
      role: "Admin Absensi &amp; Support Produksi",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Apr 2024 – Sekarang",
      current: true,
      bullets: [
      "Rekapitulasi gaji dan jam lembur karyawan harian secara akurat, serta penyelesaian keluhan (<em>complaint handling</em>) terkait penggajian.",
      "Mengolah data OEE (Overall Equipment Effectiveness) divisi produksi di Google Sheets, serta input data akhir ke website OTLINK.",
      "Penjadwalan kerja (<em>shift scheduling</em>) dan pengawasan operasional harian tim kebersihan area produksi 3 shift.",
      "Pengelolaan alur pengadaan barang operasional dan K3 (Purchase Requisition &amp; Purchase Order), serta pemantauan status persetujuan dari Manager hingga Finance melalui Oracle E-Business Suite.",
      "Pengolahan data downtime mesin dan visualisasi Pivot Table untuk laporan evaluasi manajemen.",
      "Pengarsipan laporan hasil produksi, formulir komplain pelanggan, dan dokumen audit pabrik."
      ],
      tools: "Pro-Int HRIS · Oracle EBS · OTLINK · Excel · Google Sheets",
      special: [
        {
          label: "Acting Supervisor Shift Produksi",
          period: "Jun – Jul 2025",
          text: "Dipercaya memimpin, menjadwalkan, dan mengawasi operasional 1 shift regu produksi (85+ orang), memastikan ketercapaian target output dan kepatuhan K3."
        },
        {
          label: "Acting Production System Admin (Oracle EBS)",
          period: "Agt – Okt 2024",
          text: "Dipercaya mengelola input dan integrasi data proses produksi, dari bahan baku sampai menjadi barang jadi melalui Oracle E-Business Suite, serta memimpin rekonsiliasi stok fisik vs sistem untuk seluruh bahan dan finished goods."
        }
      ],
      photo: "assets/foto/exp-absensi.jpg",
      photoAlt: "Bekerja sebagai Admin Absensi & Support Produksi"
    },
    {
      role: "Admin Lapangan Bahan Packing &amp; Finished Goods",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Jan 2023 – Apr 2024",
      bullets: [
        "Mengelola stok harian bahan kemas (<em>packaging material</em>) dan mengajukan permintaan ke gudang PPIC saat stok mencapai batas aman minimum.",
        "Stok opname harian bahan kemas dan barang jadi (<em>Finished Goods</em>), mencocokkan stok fisik di lapangan dengan stok di sistem.",
        "Menghitung inventaris barang jadi dan hasil setiap shift serta memproses transfer fisik dan sistem ke gudang logistik.",
        "Mengelola pengembalian (<em>return</em>) kelebihan bahan kemas saat terjadi perubahan varian, gramasi, atau stop produksi.",
        "Berkoordinasi lintas departemen: produksi, PPIC, dan logistik."
      ],
      photo: "assets/foto/exp-lapangan.jpg",
      photoAlt: "Mengelola stok bahan kemas dan finished goods"
    },
    {
      role: "Operator Produksi",
      org: "PT Ultra Prima Abadi",
      place: "Jombang, Jawa Timur",
      period: "Jun 2021 – Jan 2023",
      bullets: [
        "Mengoperasikan mesin produksi (<em>carton box, ballmill, enrober, oven, packing machine</em>) secara aman dan efisien sesuai penempatan tugas harian.",
        "Setup dan penyesuaian (<em>adjustment</em>) parameter mesin sesuai spesifikasi standar produk dan QC.",
        "Memantau performa mesin, melakukan tindakan korektif awal saat timbul kendala, dan mencatat data hasil produksi 1 shift secara presisi."
      ],
      photo: "assets/foto/exp-operator.jpg",
      photoAlt: "Mengoperasikan mesin produksi"
    },
    {
      role: "Magang",
      org: "PT Purbaya Bagelen Mandiri",
      place: "Tuban, Jawa Timur",
      period: "Okt 2019 – Nov 2019",
      bullets: [
        "Pemeriksaan harian dan pemeliharaan rutin alat pemadam api ringan (APAR) sesuai standar K3.",
        "Memindah dan mengawasi proses transfer Liquefied Petroleum Gas (LPG) dari truk pengirim ke tangki penyimpanan.",
        "Mengecek stok LPG setiap hari serta pencatatan riwayat pemindahan kendaraan pengangkut."
      ],
      photo: "assets/foto/exp-magang.jpg",
      photoAlt: "Magang di PT Purbaya Bagelen Mandiri"
    }
  ],

  /* ---- 8. GALERI KEGIATAN ------------------------------------------------- */
  // Foto yang filenya belum ada otomatis tidak tampil. Kalau belum ada satu pun, bagian Galeri disembunyikan.
  // Urutan di sini = urutan tampil. Foto pertama yang ada akan tampil lebih besar.
  galeri: [
    { src: "assets/foto/galeri-upacara.jpg",    cap: "Apel pagi di pabrik bersama tim dan manajemen" },
    { src: "assets/foto/galeri-produksi.jpg",   cap: "Di lantai produksi" },
    { src: "assets/foto/galeri-tim.jpg",        cap: "Bersama tim Admin" },
    { src: "assets/foto/galeri-arsip.jpg",      cap: "Sistem ordner yang saya susun" },
    { src: "assets/foto/galeri-magang.jpg",     cap: "Magang dan Pelatihan APAR di PT PURBAYA" },
    { src: "assets/foto/galeri-ipnu.jpg",       cap: "Kegiatan Buka Bersama Anak Yatim" },
    { src: "assets/foto/galeri-lingkungan.jpg", cap: "Tim Peduli Lingkungan Dusun Karangdowo" },
    { src: "assets/foto/galeri-kkn.jpg",        cap: "Sosialisasi" }
    // Contoh menambah foto lain (hapus tanda // di depan baris):
    // ,{ src: "assets/foto/galeri-kkn.jpg", cap: "Kegiatan KKN" }
  ],

  /* ---- 9. PENDIDIKAN & ORGANISASI ----------------------------------------- */
  pendidikan: [
    {
      title: "S1 Manajemen",
      org: "Universitas Terbuka",
      photo: "assets/foto/org-ut.jpg",
      period: "2022 – 2026",
      badge: "IPK 3,12 / 4,00",           // hapus isi ini ("") kalau tidak mau menampilkan IPK
      note: "Kuliah jarak jauh sambil bekerja penuh waktu di industri manufaktur serta ikut dalam pemberdayaan masyarakat."
    },
    {
      title: "Teknik Pengolahan Minyak, Gas &amp; Petrokimia",
      org: "SMK Negeri 1 Tuban",
      photo: "assets/foto/org-smk.jpg",
      period: "2018 – 2021",
      badge: "Nilai Akhir 89,20 / 100",
      note: "Melaksanakan pengukuran tangki minyak bumi menggunakan prosedur standar untuk memastikan akurasi data volume dan integritas operasional."
    }
  ],

  organisasi: [
    {
      title: "Sekretaris",
      org: "IPNU Desa Leranwetan",
      period: "2019 – 2021",
      note: "Berkontribusi mengatur berbagai kegiatan serta ikut melaksanakan kegiatan di lapangan.",
      photo: "assets/foto/org-ipnu.jpg",
      photoAlt: "Kegiatan IPNU Desa Leranwetan"
    },
    {
      title: "Anggota Kebersihan",
      org: "Peduli Lingkungan Dusun Karangdowo",
      period: "2019 – 2021",
      note: "Aktif dalam program kebersihan dusun yang berfokus pada pengelolaan sampah setiap minggu.",
      photo: "assets/foto/org-lingkungan.jpg",
      photoAlt: "Kegiatan Peduli Lingkungan Dusun Karangdowo"
    }
  ],

  /* ---- 10. FOTO LAIN ------------------------------------------------------ */
  foto: {
    profil: "assets/foto/profil.jpg",          // foto formal (bulat di bagian atas)
    hero: "assets/foto/hero.jpg",              // foto latar belakang bagian atas (lebar, landscape)
    profilKerja: "assets/foto/profil-kerja.jpg" // foto saat bekerja (bagian Profil)
  }
};
