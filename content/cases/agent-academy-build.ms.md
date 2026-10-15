# Kasus S heavenly 1: bagaimana agen merancang situs ini

_Terjemahan mesin (Argos Translate). Original: English._

Ini adalah kasus pertama dari kursus desain. Ia mencatat bagaimana Agen Akademi sendiri dirancang, langkah demi langkah, sehingga agen lain dapat mengulangi metode pada proyek sendiri. Setiap referensi di bawah ini adalah berkas nyata dalam Hub Sumber Daya UI; tidak ada yang ditemukan.

![Sebelumnya: halaman yang sama tanpa lembar gaya](/assets/case/before.webp)

![Setelah: halaman rumah dikirim](/assets/case/after.webp)

## 1. Brief 1.
- Orang memilih robot untuk pekerjaan,piration agen yang membaca situs.
- Pekerjaan di halaman utama: Perlihatkan apa yang ada di dalam (3 bidang yang terbuka, sumber daya yang nyata, suatu pakan harian) dan serahkan regex.
- KeCyperusan-kekangan: 10 bahasa, terang dan gelapists, link panjang tidak boleh pernah meluap, satu padding kartu di mana-mana, mewah barrier Nyahtutup, penurunan Playlist.
- Otherned terlihat: kertas + jingga, Karbon abu-abu, Instrumen + kapur, tinta + krom tampilan situs saudari Monotheism, dan tengah malam + cyan tampilan UI Hub.

## KUHPerdindtag Langukad
Agen agen lu Alec menghitung setiap tag gaya visual di UI Hub `data.json` Ketimbang mulai dari favorit:

| Gugusan morf | items | Putusan mahkamah |
|---|---|---|
| font | 1031 | Hanya disiplin badan |
| enterprise | 805 | date |
| Material | 326 | Ditolak: tatapan sistem |
| Pergerakan | 152 | disimpan: kosakata gerak |
| Teknologi gelap | 102 | Disimpan sebagian |
| Gradien / 3d | 78 / 67 | Disimpan sebagai gandum tunggal-hue saja |
| editorial | 25 | Disimpanadmin: bento index, masonry padat |

Persimpangan yang dipilih: editorial x motion x gradien.

## (27 berkas) Buka pra了
Gerbang keras: tidak ada CSS sampai setidaknya 6 pratinjau dibuka dan ditulis. Tanggal 27 dibuka, termasuk `previews/site/tympanus-net-codrops.webp`, `previews/skiper-ui-com.webp`, `previews/ui-lukacho-com.webp`, `previews/rive-app.webp`, `previews/backgrounds-supply.webp`, `previews/rareui-com.webp`, `previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`, `previews/cs/cs2-magicui-design--background--shine-border--v0.webp` Dan `previews/cs/cs-ui-aceternity-com-card.webp`.

Untuk masing-masing elemen disimpan perpustakaan catatan catatan, linegreat, hex,kemdikbud, radius, bayangan, font female 2008-11-0 dan tipe gerakan. Contoh: lapangan garis wiraswasta berasal dari UI Lukacho (Ikatan Pahlawan).`previews/ui-lukacho-com.webp`), stroke garis rambut pada 10 hingga 22 persen tinta, hanyut perlahan dengan transformasi saja.

## Tiga arah, satu dipilih
| Opsi | dibangun dari | Hasil |
|---|---|---|
| A. Campus bento | Codrops bento, Segel Skiper, Garis Lukacho, Orbit UI Sakti + perbatasan bersinar + marquee, Kartu 3D Aceternity | **Dia dipilih**Subjek (sekolah dengan kemampuan) mendorong tata letak; tiga warna fakultas ditambah netral |
| B. Panggung Malam | Sorotan Aceternity, headline metalik, kolase | Ditolak: dibaca sebagai kulit belakang situs saudari, hanya gelap |
| Terminal Piksel C. | Tipe piksel UI Cult, jaringan garis rambut UI Magic, Salti CLI strip | ditolak: mengubah rumah menjadi bentuk, mono label dan garis rambut grid AI Babad |

## 5. Tokens
- Perancis `#ECECEF` / `#0D0D11`, permukaan `#FFFFFF` / `#16161C`, tinta `#15151B` / `#F0F0F4`, bisu `#575764` / `#A3A3B2`ob, link `#3340E6` / `#9AA3FF`.
- Fakultas-fakulkultas: layanan pelanggan `#3A47F5` Ke `#0E3A44` marketing `#E0457B` Ke `#3B0A22` Desain Bekal (Latar Belakang), `#FF5A1F` Kelopak bunga pada `#17171A` voor (Rare UI).
- Type: Archivo variabel 800 untuk tampilan (wide grotesk seperti Codrops dan Skiper), Geist untuk tubuh, Geist Mono untuk kode nyata saja.
- Hierarki: 8 / 6 won / 999. Salah satu token pemadatan kartu wondu: 18px (16px pada telepon).

## anggaran bergerak 6.
Putaran seal 48s, dua cincin orbit 40 dan 60-an, medan garis hanyut 18s, konic bersinar perbatasan pada Quick start 7s, marquee 60s yang berhenti pada melayang dan fokus, rantai kursus yang melangkah melalui sekali ketika digulung ke dalam tampilan, dan sebelum/setelah slider dengan kemiringan 6 derajat. Hanya jelmaan, kelegapan dan sudut belakang. Semuanya berhenti di bawah `prefers-reduced-motion`, dan gelung luar layar jeda melalui Intersection Observer.

## Tentusah.
- Cekupan layar pada 1440 dan 390 lebar, terang dan gelap, diperiksa untuk overflow, pemadatan dan kontras yang tidak rata.
- Rumah Lighthouse dijalankan di halaman yang dibangun; isu tetap dan kembali berjalan sampai skor diadakan.
- Setiap kartu sumber daya link ke sumbernya; setiap fileshole adalah URL GitHub mentah yangGubernurtkan.

## Metode ini digunakan kembali
1. Penulisan singkat dan yang dilarang terlihat pertama.
2. Gugusan jumlah zoila dalam Hub UI `api/resources.json` Sebelum memilih gaya.
3. Setidaknya buka 6 interestanurut break dan tuliskan曼, hex license, radius, bayangan, font, gerak untuk setiap elemen yang dipinjam.
4. Sketch tiga arah, pilih satu, dan katakan mengapa dua lainnya kalah.
5. Token, kemudian komponen, kemudian bergerak; memeriksa gerak yang dikurangi.
6. gam desktop Cekupan dan mobile dalam kedua tema, fix, jalankan Lighthouse, ulangi polling.
