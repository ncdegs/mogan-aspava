# Mogan Aspava

Gölbaşı / Ankara'daki Mogan Aspava restoranı için tek sayfalık site taslağı. Düz HTML, CSS ve JavaScript; kütüphane yok.

Adres: https://ncdegs.github.io/mogan-aspava/

Taslak aşamasında: sayfa arama motorlarına kapalı (`noindex`). Yayına hazır olunca `index.html` içindeki `<meta name="robots">` satırı kaldırılır.

## Güncelleme
Saat, telefonlar, bağlantılar, ikramlar ve menü tek dosyada: `js/veri.js`. Saat veya telefon değişirse `index.html` içindeki `application/ld+json` bloğu da aynı şekilde güncellenmeli.

## Künye
- Fotoğraflar (Wikimedia Commons, CC BY-SA 4.0, boyutlandırıldı):
  - Mogan Gölü gün batımı: Vikiçizer, https://commons.wikimedia.org/wiki/File:Mogan_G%C3%B6l%C3%BC.JPG
  - Mogan Parkı seyir kulesi: Tevfik Teker, https://commons.wikimedia.org/wiki/File:Lake_Mogan.jpg
  - Göl kıyısı: İZGİ ÖRS, https://commons.wikimedia.org/wiki/File:G%C3%B6l_Manzara.jpg
- Mekan, mutfak ve sofra fotoğrafları: Mogan Aspava'nın Instagram hesabındaki gönderi ve videolar (@moganaspava) ve işletmenin kendi fotoğrafları.
- Menü görselleri: restoranın Yemeksepeti menüsündeki ürün fotoğrafları.
- Tasarımdaki sekiz köşeli yıldız deseni, Mogan Aspava'nın cephesindeki desenden uyarlandı. Animasyonlar: GSAP 3.12.5 + ScrollTrigger (`js/lib/`, GreenSock standart lisansı).
- Misafir yorumları: Google, Yemeksepeti ve Migros Yemek'teki herkese açık yorumlardan kısa alıntılar (adsız).
- Harita verisi: © OpenStreetMap katkıda bulunanlar (ODbL), https://www.openstreetmap.org/copyright. Rota: OSRM.
- Yazı tipleri: Anybody ve Barlow (SIL Open Font License; `assets/fonts/OFL_*.txt`).
- Çizimler ve kod: bu depoya özel; "Mogan Aspava" adı ve logosu işletmeye aittir.
