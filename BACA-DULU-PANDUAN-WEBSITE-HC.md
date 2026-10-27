# Panduan Website Portofolio Human Capital: Ashabul Kahfi

Paket ini adalah website satu halaman dengan animasi: tirai transisi saat klik menu, kata pembuka Build, Grow, Serve, angka yang berhitung, tangga karier yang tumbuh, garis waktu yang terisi saat digulir, galeri foto, dan menu HP.

Kamu hanya perlu mengedit **dua hal**: file `js/content.js` (semua teks) dan folder `assets/foto/` (semua foto). File lain tidak perlu disentuh.

---

## 1. Isi paket

```
index.html            kerangka halaman (tidak perlu diedit)
css/style.css         tampilan dan animasi (warna ada di bagian paling atas)
js/content.js         SEMUA TEKS, LINK, DAN DAFTAR FOTO  <- file yang kamu edit
js/main.js            mesin animasi (tidak perlu diedit)
assets/foto/          taruh foto di sini (sudah ada profil.jpg)
assets/cv/            taruh CV PDF di sini (sudah ada CV HR/HC)
```

---

## 2. Mencoba di komputer sebelum diupload

1. Ekstrak file zip ke satu folder.
2. Klik dua kali `index.html`. Halaman terbuka di browser.
3. Untuk melihat **di mana saja foto belum terpasang**, tambahkan `?debug=1` di ujung alamat, misalnya `file:///C:/portfolio/index.html?debug=1`. Setiap foto yang belum ada akan tampil sebagai kotak putus-putus berisi nama file yang harus kamu isi.
4. Buka juga di HP (setelah diupload) dan periksa menunya.

---

## 3. Upload ke GitHub

1. Buka repository `my-portfolio` kamu, klik **Add file**, lalu **Upload files**.
2. Seret **isi** folder (bukan folder induknya): `index.html`, folder `css`, folder `js`, folder `assets`. Browser Chrome dan Edge bisa menyeret folder langsung.
3. Kalau diminta mengganti `index.html` yang lama, setujui.
4. Klik **Commit changes**. Tunggu 1 sampai 2 menit.
5. Buka `https://kahfi-ashabul.github.io/my-portfolio/` lalu tekan **Ctrl + F5** supaya browser memuat versi baru.

**Penting:** GitHub Pages membedakan huruf besar dan kecil. `Hero.jpg` dan `hero.jpg` dianggap dua file berbeda. Pakai huruf kecil semua, tanpa spasi, persis seperti nama di tabel foto di bawah.

File lama yang tidak dipakai lagi (`operations.html`, `mt.html`, `foto-ashabul-kahfi.jpg`, `CV-Ashabul-Kahfi.pdf`) boleh dihapus dari repo supaya rapi.

---

## 4. Foto: apa, di mana, dan bagaimana

Semua foto bersifat **opsional**. Foto yang belum ada otomatis tidak ditampilkan, dan kalau tidak ada satu pun foto galeri, bagian Galeri dan menunya hilang sendiri. Jadi kamu bisa menambah foto bertahap.

### 4.1 Tabel slot foto

| File (di `assets/foto/`) | Tampil di | Ukuran dan rasio | Foto yang disarankan |
|---|---|---|---|
| `profil.jpg` | Lingkaran besar di bagian atas | Persegi atau 3:4, sisi panjang 800 px | Foto formal yang sama dengan CV (sudah terpasang) |
| `hero.jpg` | Latar belakang bagian atas | Landscape 16:9, lebar 1920 px | Lihat 4.2 |
| `profil-kerja.jpg` | Bagian Profil, di atas kartu fakta | Portrait 4:5, 800 x 1000 px | Kamu saat bekerja, berseragam, wajah terlihat jelas |
| `exp-absensi.jpg` | Kartu Admin Absensi & Support Produksi | Portrait 4:5, 600 x 750 px | Kamu di meja kerja atau area administrasi (data di layar dan kertas harus tidak terbaca) |
| `exp-lapangan.jpg` | Kartu Admin Lapangan | Portrait 4:5 | Area stok bahan kemas atau finished goods |
| `exp-operator.jpg` | Kartu Operator Produksi | Portrait 4:5 | Kamu di dekat mesin (tanpa data produk yang rahasia) |
| `exp-magang.jpg` | Kartu Magang | Portrait 4:5 | Foto magang 2019 di PT Purbaya Bagelen Mandiri |
| `galeri-upacara.jpg` | Galeri (foto pertama tampil besar) | Landscape 4:3, 1200 px | Apel pagi di pabrik bersama tim dan manajemen |
| `galeri-produksi.jpg` | Galeri | Landscape 4:3 | Suasana lantai produksi |
| `galeri-tim.jpg` | Galeri | Landscape 4:3 | Bersama tim shift |
| `galeri-arsip.jpg` | Galeri | Landscape 4:3 | **Sistem ordner dan denah rak 7x8 yang kamu susun.** Ini bukti nyata prinsip Build |
| `galeri-magang.jpg` | Galeri | Landscape 4:3 | Magang 2019 |
| `galeri-ipnu.jpg` | Galeri | Landscape 4:3 | Kegiatan IPNU Desa Leranwetan |
| `galeri-lingkungan.jpg` | Galeri | Landscape 4:3 | Kegiatan Peduli Lingkungan Dusun Karangdowo |
| `org-ipnu.jpg` | Kartu IPNU di bagian Pendidikan | Landscape 16:9 | Kegiatan IPNU |
| `org-lingkungan.jpg` | Kartu Peduli Lingkungan | Landscape 16:9 | Kegiatan kebersihan lingkungan |

### 4.2 Foto latar belakang (`hero.jpg`): pakai foto apa?

Latar ini otomatis digelapkan dengan lapisan biru tua, jadi foto hanya menjadi tekstur, bukan fokus. Urutan pilihan dari yang paling cocok:

1. **Foto apel atau upacara di pabrik** yang diambil dari jauh (banyak orang, wajah kecil). Ini menunjukkan skala tim 85 orang, selaras dengan cerita Human Capital.
2. **Foto lantai produksi atau mesin** tanpa wajah. Paling aman soal privasi.
3. Foto kamu bersama manager hanya kalau manager setuju dan kamu nyaman.

Hindari: foto KKN, nikahan, keluarga, dan foto santai sebagai latar utama. Foto KKN lebih cocok masuk Galeri (tambahkan barisnya di `content.js`, contohnya sudah ada sebagai komentar) dan hanya kalau kamu juga mencantumkannya di CV, supaya konsisten.

### 4.3 Aturan aman sebelum memasang foto

- **Izin wajah.** Minta izin orang yang wajahnya jelas terlihat, terutama manager dan rekan kerja. Untuk IPNU, anggotanya bisa jadi masih di bawah 18 tahun, jadi pilih foto yang wajah orang lain kecil atau kamu sendiri yang jadi fokus.
- **Kerahasiaan perusahaan.** Buram atau potong: layar komputer, dokumen, formulir, label produk, resep atau formula, dan denah internal. Halaman ini publik.
- **Hapus data lokasi foto.** Foto dari HP menyimpan koordinat GPS. Mengompres lewat squoosh.app (langkah berikut) sekaligus menghapusnya.
- **Terang dan tajam.** Foto buram atau gelap lebih baik tidak dipakai.

### 4.4 Mengecilkan ukuran foto

1. Buka **squoosh.app** di browser.
2. Seret foto, pilih format **MozJPEG** (hasilnya `.jpg`), kualitas sekitar 75.
3. Ubah ukuran: `hero.jpg` lebar 1920 px; foto lain sisi terpanjang 1200 px.
4. Target ukuran file: `hero.jpg` maksimal 350 KB, yang lain maksimal 200 KB.
5. Simpan dengan nama persis dari tabel.

Kalau fotomu berformat lain (misalnya `.png` atau `.webp`), ubah nama file di `js/content.js` supaya cocok.

### 4.5 Mengganti keterangan foto galeri

Buka `js/content.js`, cari bagian `galeri:`. Setiap baris berbentuk `{ src: "...", cap: "keterangan" }`. Ubah teks `cap`. Urutan baris menentukan urutan tampil. Foto pertama yang ada tampil lebih besar.

---

## 5. Mengedit teks (`js/content.js`)

Buka dengan Notepad atau VS Code. Aturan penting:
- Jangan hapus tanda kutip `" "`, koma `,`, kurung kurawal `{ }`, atau kurung siku `[ ]`.
- Gunakan `&amp;` untuk tanda &.
- Boleh memakai `<strong>tebal</strong>` dan `<em>miring</em>`.
- Kalau halaman tiba-tiba kosong setelah mengedit, hampir pasti ada tanda kutip atau koma yang terhapus. Kembalikan ke versi sebelumnya.

| Mau mengubah | Cari di `content.js` |
|---|---|
| Judul besar, ringkasan, angka statistik | `fokus:` lalu `hr:` (`headline`, `sub`, `stats`) |
| Paragraf Profil | `profil:` |
| Enam kartu kompetensi | `kompetensi:` |
| Pencapaian Build, Grow, Serve | `prinsip:` |
| Tahapan tangga karier | `tangga:` |
| Pengalaman kerja | `pengalaman:` |
| Pendidikan dan IPK | `pendidikan:` |
| Organisasi | `organisasi:` |
| Link dan kontak | `person:` |
| File CV | `cv:` |

**Kata "Lulusan".** Teks Profil dan ringkasan memakai "Lulusan S1 Manajemen". Kalau kamu belum resmi wisuda, cari kata `Lulusan` di `content.js` dan ganti dengan `Mahasiswa tingkat akhir`. Samakan juga di CV dan LinkedIn.

**Menambah angka pada pencapaian.** Pencapaian Build, Grow, Serve sengaja ditulis tanpa angka agar tidak ada yang dikarang. Kalau kamu punya data nyata (misalnya waktu mencari dokumen dari 15 menit menjadi 2 menit, atau besar selisih stok), tambahkan di akhir kalimatnya. Angka nyata membuat pencapaian jauh lebih kuat.

**Menonaktifkan animasi tertentu** (baris paling atas `content.js`):
- `transition: "smooth"` mengganti tirai menjadi gulir halus biasa.
- `intro: false` mematikan animasi pembuka Build, Grow, Serve.
- Pengunjung yang mengaktifkan "kurangi gerakan" di perangkatnya otomatis tidak melihat animasi berat.

**Warna.** Bagian paling atas `css/style.css` (blok `:root`). Ganti kode warna heksadesimal di sana, dan seluruh situs ikut berubah.

---

## 6. IPK 3,12: perlu ditampilkan?

**Ya, tampilkan, dengan porsi kecil.** Alasannya:
- Banyak program Management Trainee dan seleksi korporat menyaring IPK dengan batas sekitar 2,75 sampai 3,00 (sebagian 3,25). IPK 3,12 melewati batas yang paling umum.
- Untuk peran HR dengan pengalaman kerja 5+ tahun, IPK bukan penentu, tapi tidak merugikan, dan sistem penyaring CV sering mencari angkanya.
- Di situs ini IPK ditaruh sebagai lencana kecil di kartu S1 (bagian Pendidikan), bukan di bagian atas, supaya pengalaman tetap menjadi sorotan. Untuk versi Management Trainee nanti, IPK akan dinaikkan menjadi salah satu angka utama.

**Syarat:** tampilkan hanya kalau itu IPK akhir (setelah lulus). Kalau masih sementara, ubah menjadi `IPK sementara 3,12 / 4,00`. Untuk menyembunyikan, kosongkan isi `badge: ""` pada kartu S1.

Tambahkan juga di CV pada baris pendidikan, misalnya: `S1 Manajemen, Universitas Terbuka, IPK 3,12/4,00, 2022 - 2026`.

---

## 7. Link CV

File CV harus ada di `assets/cv/` dengan nama persis `CV-Ashabul-Kahfi-HR-HC.pdf` (sudah terpasang dari CV terbarumu). Kalau mengganti CV, timpa file itu dengan nama yang sama. Tombol "Unduh CV" di bagian atas dan di bagian Kontak otomatis mengarah ke sana.

Link yang kamu taruh di CV dan LinkedIn: `https://kahfi-ashabul.github.io/my-portfolio/`

---

## 8. Kalau ada masalah

| Gejala | Penyebab dan solusi |
|---|---|
| Foto tidak muncul | Nama file beda dari tabel (cek huruf besar kecil dan ekstensi), atau foto belum ikut ter-commit. Buka `?debug=1` untuk melihat nama yang dicari |
| Halaman kosong atau hanya latar biru | Ada tanda kutip atau koma yang hilang di `content.js`. Kembalikan ke versi sebelumnya |
| Perubahan tidak terlihat | Tekan Ctrl + F5, atau tunggu 1 sampai 2 menit setelah commit |
| Huruf terlihat berbeda | Font diambil dari Google Fonts. Tanpa internet, browser memakai font cadangan, dan itu normal |
| Tombol Unduh CV menghasilkan 404 | File CV belum ada di `assets/cv/` atau namanya berbeda |

---

## 9. Langkah berikutnya

Versi **Management Trainee** dan **Operations** akan memakai mesin yang sama. Yang berbeda hanya `content.js` (judul, kompetensi, urutan bullet pengalaman, angka statistik) dan file CV-nya. Setelah versi Human Capital ini selesai dan kamu puas, kabari saya dan saya buatkan `content.js` untuk dua versi itu, siap diunggah ke repository masing-masing.
