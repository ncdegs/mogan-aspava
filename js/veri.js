/* Mogan Aspava · sitenin tek bilgi dosyası.
   Saat, telefon, linkler, ikramlar ve menü burada değişir; başka dosyaya dokunmaya gerek yok.
   (Tek istisna: index.html içindeki Google bilgi kutusu "application/ld+json"; saat ya da telefon
   değişirse orayı da aynı şekilde güncelleyin.) */
window.MOGAN = {
  /* Saat: 7/24 açıksa { tip: "7/24" }.
     Belirli saatlerde açıksa örnek: { tip: "aralik", acilis: "10:00", kapanis: "02:00" }
     (kapanış gece yarısını geçebilir). Saat dilimi her zaman Türkiye saatidir. */
  saat: { tip: "7/24" },

  tel: {
    rezervasyon: { goster: "0534 824 31 19", href: "tel:+905348243119" },
    sabit1: { goster: "0312 484 31 19", href: "tel:+903124843119" },
    sabit2: { goster: "0312 484 99 78", href: "tel:+903124849978" }
  },

  linkler: {
    whatsapp: "https://wa.me/905348243119?text=" + encodeURIComponent("Merhaba, rezervasyon için yazıyorum."),
    yolTarifi: "https://www.google.com/maps/dir/?api=1&destination=39.7921,32.8060",
    haritaKart: "https://maps.google.com/?cid=16174781775289406932",
    appleRota: "https://maps.apple.com/?daddr=39.7921,32.8060",
    yandexRota: "https://yandex.com.tr/harita/?rtext=~39.7921,32.8060&rtt=auto",
    yemeksepeti: "https://www.yemeksepeti.com/restaurant/q0pi/mogan-aspava-q0pi",
    migros: "https://www.migros.com.tr/yemek/mogan-aspava-golbasi-gaziosmanpasa-mah-st-23eed",
    instagram: "https://www.instagram.com/moganaspava/",
    eposta: "mailto:moganaspava@gmail.com"
  },

  /* İkram sofrası. tur: tabağın çizimi (salata, cigkofte, patates, ezme, yogurt, irmik, irmikDondurma, cay). */
  ikram: {
    salonda: [
      { ad: "Mevsim salatası", tur: "salata" },
      { ad: "Çiğ köfte", tur: "cigkofte" },
      { ad: "Patates kızartması", tur: "patates" },
      { ad: "Ezme", tur: "ezme" },
      { ad: "Yoğurt", tur: "yogurt" },
      { ad: "Dondurmalı irmik helvası", tur: "irmikDondurma" },
      { ad: "Çay", tur: "cay" }
    ],
    pakette: [
      { ad: "Mevsim salatası", tur: "salata" },
      { ad: "Çiğ köfte", tur: "cigkofte" },
      { ad: "Patates kızartması", tur: "patates" },
      { ad: "İrmik helvası", tur: "irmik" }
    ]
  },

  /* Menü (fiyatsız). ikon: kategori çizimi. foto: varsa kategorinin gerçek görseli
     (video: sessiz kısa döngü; ek: altına ikinci küçük fotoğraf). */
  menu: [
    { id: "doner", ad: "Et döner", ikon: "doner",
      kalemler: ["Et Döner", "Et Döner Dürüm", "SSK Döner", "Pilav Üstü Et Döner", "İskender", "Kaşarlı Beyti Döner"],
      foto: { video: "assets/video/doner-kesim.mp4", poster: "assets/img/doner-kesim-poster-540.webp", alt: "Ustanın et döneri kesişi", genis: 544, yuksek: 680,
              ek: { src: "assets/img/iskender-540.webp", alt: "Tereyağı dökülmüş iskender tabakları", genis: 540, yuksek: 675 } } },
    { id: "kebap", ad: "Kebap & ızgara", ikon: "kebap",
      kalemler: ["Adana Kebap", "Urfa Kebap", "Yoğurtlu Adana", "Sarma Beyti", "Patlıcanlı Kebap", "Yaprak Kebabı", "Çöp Şiş", "Kuzu Şiş", "Tavuk Şiş", "Tavuk Kanat", "Izgara Köfte", "Dana Biftek", "Karışık Kebap"],
      foto: { src: "assets/img/beyti-745.webp", alt: "Lavaş üstünde beyti kebap, közlenmiş biber ve domatesle", genis: 745, yuksek: 556 } },
    { id: "durum", ad: "Dürüm", ikon: "durum",
      kalemler: ["Adana Dürüm", "Urfa Dürüm"],
      foto: { src: "assets/img/durum-800.webp", alt: "Dilimlenmiş et döner dürümleri, yanında salata ve yoğurt", genis: 800, yuksek: 600 } },
    { id: "pide", ad: "Pide & lahmacun", ikon: "pide",
      kalemler: ["Kıymalı Pide", "Kıymalı Kaşarlı Pide", "Kaşarlı Pide", "Kaşarlı Sucuklu Pide", "Kuşbaşılı Pide", "Kuşbaşılı Kaşarlı Pide", "Karışık Pide", "Kapalı Döner Pidesi", "Lahmacun (acılı / acısız)"] },
    { id: "kiremit", ad: "Kiremitte", ikon: "kiremit",
      kalemler: ["Kiremitte Tavuk Şiş", "Kiremitte Köfte", "Kiremitte Kuzu Şiş"] },
    { id: "corba", ad: "Çorba", ikon: "corba",
      kalemler: ["Mercimek", "Ezogelin"] },
    { id: "icecek", ad: "İçecek", ikon: "icecek",
      kalemler: ["Ayran", "Kola", "Fanta", "Sprite", "Soda", "Su"] }
  ],

  /* Misafir yorumları: herkese açık yorumlardan kısa, kelimesi kelimesine alıntılar.
     Ad yazılmaz; yalnızca kaynak ve ay. yer: "salonda" ya da "pakette". */
  yorumlar: [
    { yer: "salonda", kaynak: "Google", tarih: "Ekim 2026", metin: "Ankara'da böyle güzel döner yemeyeli yıllar olmuştu. İkram olarak gelen patates kızartması o kadar güzeldi ki tarifini istedim." },
    { yer: "salonda", kaynak: "Google", tarih: "Ocak 2026", metin: "Daha sipariş vermeden mezeler masaya gelmeye başladı. Salata, patates kızartmasını fazla fazla koydular. Döner çok lezzetliydi…" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Kasım 2025", metin: "Kuşbaşılı pide ve beyti ikisi de sıcacık teslim edildi. Tüm ikramlar ayrı ayrı iki kişilik konulmuştu." },
    { yer: "salonda", kaynak: "Google", tarih: "Nisan 2026", metin: "Her şey çok lezzetliydi. Döner beytiye bayıldık. Ama favorim sonda gelen irmik helvası." },
    { yer: "salonda", kaynak: "Google", tarih: "Haziran 2026", metin: "Ankara gölbaşı'nda mogan gölüne yürüme mesafesinde. Adamların etleri, kaliteleri çok iyi." },
    { yer: "pakette", kaynak: "Migros Yemek", tarih: "Ocak 2026", metin: "Talepler dikkate alınmıştı. Yemekler sıcak geldi, lezzeti iyiydi." },
    { yer: "salonda", kaynak: "Google", tarih: "Haziran 2026", metin: "Geç saatte gitmemize nazaran yemekleri lezzetliydi personel alakalı servis hızlı yol üzerinde uğrayacağım mekanlardan biri" },
    { yer: "salonda", kaynak: "Google", tarih: "Ekim 2025", metin: "Eti, mezeleri çok güzeldi. Sonda verilen irmik helvası için bile özellikle gelinir." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ağustos 2026", metin: "Notlara dikkat ediyorlar teslimat zamanında yapıldı ve oldukça lezzetli ellerinize emeğinize sağlık" },
    { yer: "salonda", kaynak: "Google", tarih: "Temmuz 2026", metin: "Eşim ve bebeğimle sürekli tercih ettiğimiz bir mekan." }
  ]
};
