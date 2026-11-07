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

  /* Menü (fiyatsız). ikon: kategori çizimi. */
  menu: [
    { id: "doner", ad: "Et döner", ikon: "doner",
      kalemler: ["Et Döner", "Et Döner Dürüm", "SSK Döner", "Pilav Üstü Et Döner", "İskender", "Kaşarlı Beyti Döner"] },
    { id: "kebap", ad: "Kebap & ızgara", ikon: "kebap",
      kalemler: ["Adana Kebap", "Urfa Kebap", "Yoğurtlu Adana", "Sarma Beyti", "Patlıcanlı Kebap", "Yaprak Kebabı", "Çöp Şiş", "Kuzu Şiş", "Tavuk Şiş", "Tavuk Kanat", "Izgara Köfte", "Dana Biftek", "Karışık Kebap"] },
    { id: "durum", ad: "Dürüm", ikon: "durum",
      kalemler: ["Adana Dürüm", "Urfa Dürüm"] },
    { id: "pide", ad: "Pide & lahmacun", ikon: "pide",
      kalemler: ["Kıymalı Pide", "Kıymalı Kaşarlı Pide", "Kaşarlı Pide", "Kaşarlı Sucuklu Pide", "Kuşbaşılı Pide", "Kuşbaşılı Kaşarlı Pide", "Karışık Pide", "Kapalı Döner Pidesi", "Lahmacun (acılı / acısız)"] },
    { id: "kiremit", ad: "Kiremitte", ikon: "kiremit",
      kalemler: ["Kiremitte Tavuk Şiş", "Kiremitte Köfte", "Kiremitte Kuzu Şiş"] },
    { id: "corba", ad: "Çorba", ikon: "corba",
      kalemler: ["Mercimek", "Ezogelin"] },
    { id: "icecek", ad: "İçecek", ikon: "icecek",
      kalemler: ["Ayran", "Kola", "Fanta", "Sprite", "Soda", "Su"] }
  ]
};
