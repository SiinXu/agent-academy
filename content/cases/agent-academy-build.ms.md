## Taklimat
Agent Academy ialah sekolah yang dibaca oleh ejen: skill, prompt, pelayan MCP dan templat bot sebenar, disusun mengikut profesion, setiap satu dengan pautan sumber dan lesennya. Laman utama ada satu tugas: tunjukkan isi kandungan dan serahkan satu prompt untuk disalin. Kekangan: 10 bahasa, cerah dan gelap, pautan panjang tidak pernah melimpah, padding kad yang sama di mana-mana.

## Peraturan yang kekal
- **Neutral dan satu aksen.** Setiap gaya menggunakan satu skala neutral dan satu aksen sahaja; kontras teks kekal pada 4.5:1 atau lebih.
- **Setiap modul datang daripada UI Hub.** Setiap blok menamakan item Hub asalnya: id, pratonton dan kod asal. Jika pemindahan menyimpang, sebabnya dicatat.
- **Tangkapan skrin menentukan.** Tiada apa diterbitkan sebelum tangkapan desktop dan mudah alih dalam kedua-dua tema disemak untuk limpahan, keratan dan padding yang tidak sekata.

## Apa yang berubah antara pusingan
Pusingan awal memilih rupa dahulu dan mencari komponen kemudian. Hasilnya hiasan tanpa fungsi, dan ia ditolak. Mulai pusingan empat, susunannya diterbalikkan: pilih komponen Hub untuk setiap modul, pindahkan daripada sumbernya, kemudian gayakan dengan token. Itu juga sebabnya tiga gaya boleh berkongsi satu struktur halaman: hanya token, fon dan modul khas yang berubah.

## Cara pertukaran gaya berfungsi
Skrip kecil menetapkan `<html data-skin>` sebelum lukisan pertama, daripada `?skin=`, kemudian pilihan yang disimpan, dan jika tiada, A. Cerah dan gelap ialah suis berasingan. CSS setiap gaya terhad kepada skinnya, jadi pertukaran tidak memuatkan apa-apa yang baharu dan tidak pernah berkelip.
