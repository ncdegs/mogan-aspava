/* Mogan Aspava · sitenin tek bilgi dosyası.
   Saat, telefon, linkler, fotoğraflar, ikramlar ve menü burada değişir; başka dosyaya dokunmaya gerek yok.
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
    eposta: "mailto:moganaspava@gmail.com",
    /* Instagram gönderileri (sayfadaki kareler bunlara bağlanır) */
    igAksam: "https://www.instagram.com/p/DVRNgEnDVTI/",
    igEtDoner: "https://www.instagram.com/p/DaIGhO7gnJY/",
    igDoner: "https://www.instagram.com/p/DZhvPzIgYqt/",
    igSsk: "https://www.instagram.com/p/DZXppWUMggg/",
    igIftar: "https://www.instagram.com/p/C4fknMwq00I/",
    igIkramMasa: "https://www.instagram.com/p/DIRWm25qB5e/",
    igMezeMasa: "https://www.instagram.com/p/DCg73Nmq3LP/",
    igUstalarTepsi: "https://www.instagram.com/p/C84k2g7q1zo/",
    igUstalar: "https://www.instagram.com/p/CxvicwwKmHd/",
    igIftarSofrasi: "https://www.instagram.com/p/C4iWjszKEMV/",
    igPide: "https://www.instagram.com/p/CH7d2XfDC9c/",
    igCepheAksam: "https://www.instagram.com/p/CBsgaJxDW94/",
    igCepheGece: "https://www.instagram.com/p/CrHYd1QKsVM/",
    igCepheGunduz: "https://www.instagram.com/p/C_iNil7q9g5/",
    igKapiOnu: "https://www.instagram.com/p/CuxYam-qFjE/",
    igDisMasa: "https://www.instagram.com/p/CuxaMCDq92G/"
  },

  /* Mekân fotoğrafları. Yeni fotoğraf gelince yalnızca bu satırları değiştirin:
     src: ana dosya · srcset: varsa aynı fotoğrafın başka genişlikleri ("dosya 960w, dosya 1600w")
     genis / yuksek: ana dosyanın piksel ölçüsü · alt: fotoğrafı tarif eden kısa cümle.
     heroGece yatay bir fotoğraf olmalı; genişliği 1000 px ve üstündeyse masaüstünde tüm ekranı kaplar,
     daha darsa sağda dikey bir pano olarak durur (bulanık büyütme olmasın diye).
     (heroGece değişirse index.html içindeki açılış <img> satırındaki src de aynı yapılırsa fotoğraf iki kez indirilmez.)
     cepheGece: 7/24 bölümünün geniş fotoğrafı · kurucu, cepheGunduz ve cepheAksam: 1988 bölümündeki akan galeri (bütün halde, kırpılmadan).
     kurucu: null yapılırsa 1988 bölümünde kurucu fotoğrafı hiç görünmez. yazi: fotoğrafın altındaki ad. */
  fotolar: {
    heroGece: { src: "assets/img/cephe-gece-genis-1024.webp", srcset: "assets/img/cephe-gece-genis-720.webp 720w, assets/img/cephe-gece-genis-1024.webp 1024w", genis: 1024, yuksek: 739,
                alt: "Gece Mogan Aspava: ışıklı ASPAVA tabelası ve geometrik desenli cephe, girişte yeşil halı, dışarıdaki masalarda misafirler" },
    cepheGece: { src: "assets/img/ig-cephe-gece-kalabalik-1080.webp", genis: 1080, yuksek: 609,
                 alt: "Gece Mogan Aspava: tabela ışıklı, kaldırımdaki uzun sıra masalar kalabalık" },
    cepheGunduz: { src: "assets/img/ig-cephe-gunduz-1065.webp", genis: 1065, yuksek: 710,
                   alt: "Gündüz Mogan Aspava: desenli ASPAVA tabelası, MOGAN ASPAVA 7/24 tentesi ve kaldırım boyunca dış masalar" },
    cepheAksam: { src: "assets/img/ig-cephe-aksam-1080.webp", genis: 1080, yuksek: 1077,
                  alt: "Gün batarken Mogan Aspava'nın köşe cephesi: ışıkları yanmış tabela ve kaldırımdaki dolu masalar" },
    kurucu: { src: "assets/img/erol-akgeyik-ahmet-buran-724.webp", genis: 724, yuksek: 1000,
              yazi: "Erol Akgeyik ve Ahmet Buran, Mogan Aspava'nın önünde",
              alt: "Erol Akgeyik ve Ahmet Buran, Mogan Aspava'nın girişinde, altın renkli yıldız desenli sütunun yanında" }
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

  /* Menü (fiyatsız). ikon: kategori çizimi.
     gorseller: kategorinin fotoğrafları (en çok 3). video varsa sessiz kısa döngü olarak oynar.
     kaynak: "ig" = Mogan Aspava'nın Instagram'ı, "ys" = Yemeksepeti menü görseli. */
  menu: [
    { id: "doner", ad: "Et döner", ikon: "doner",
      kalemler: ["Et Döner", "Et Döner Dürüm", "SSK Döner", "Pilav Üstü Et Döner", "İskender", "Kaşarlı Beyti Döner"],
      gorseller: [
        { video: "assets/video/doner-kesim.mp4", poster: "assets/img/doner-kesim-poster-540.webp", alt: "Ustanın et döneri kesişi", genis: 540, yuksek: 675, kaynak: "ig" },
        { src: "assets/img/iskender-540.webp", alt: "Tereyağı dökülmüş iskender tabakları", genis: 540, yuksek: 675, kaynak: "ig" }
      ] },
    { id: "kebap", ad: "Kebap & ızgara", ikon: "kebap",
      kalemler: ["Adana Kebap", "Urfa Kebap", "Yoğurtlu Adana", "Sarma Beyti", "Patlıcanlı Kebap", "Yaprak Kebabı", "Çöp Şiş", "Kuzu Şiş", "Tavuk Şiş", "Tavuk Kanat", "Izgara Köfte", "Dana Biftek", "Karışık Kebap"],
      gorseller: [
        { src: "assets/img/adana-540.webp", alt: "Pasajda servise çıkan Adana kebap tabağı", genis: 540, yuksek: 675, kaynak: "ig" },
        { src: "assets/img/kat-cop-sis-600.webp", alt: "Lavaş, soğan ve közlenmiş domatesle çöp şiş", genis: 600, yuksek: 600, kaynak: "ys" },
        { src: "assets/img/kat-sarma-beyti-600.webp", alt: "Yoğurt ve bulgur pilavıyla sarma beyti", genis: 600, yuksek: 600, kaynak: "ys" }
      ] },
    { id: "durum", ad: "Dürüm", ikon: "durum",
      kalemler: ["Adana Dürüm", "Urfa Dürüm"],
      gorseller: [
        { src: "assets/img/durum-800.webp", alt: "Dilimlenmiş et döner dürümleri, yanında salata ve yoğurt", genis: 800, yuksek: 600, kaynak: "ys" },
        { src: "assets/img/kat-adana-durum-600.webp", alt: "Domates ve soğanla sarılmış Adana dürüm", genis: 600, yuksek: 600, kaynak: "ys" }
      ] },
    { id: "pide", ad: "Pide & lahmacun", ikon: "pide",
      kalemler: ["Kıymalı Pide", "Kıymalı Kaşarlı Pide", "Kaşarlı Pide", "Kaşarlı Sucuklu Pide", "Kuşbaşılı Pide", "Kuşbaşılı Kaşarlı Pide", "Karışık Pide", "Kapalı Döner Pidesi", "Lahmacun (acılı / acısız)"],
      gorseller: [
        { src: "assets/img/pide-firin-540.webp", alt: "Pide ustası fırının başında, arkası dönük", genis: 540, yuksek: 675, kaynak: "ig" },
        { src: "assets/img/ig-pide-720.webp", alt: "Tabakta susamlı, dilimlenmiş tırnak pide", genis: 720, yuksek: 725, kaynak: "ig" },
        { src: "assets/img/kat-lahmacun-600.webp", alt: "Bütün bir lahmacun", genis: 600, yuksek: 600, kaynak: "ys" }
      ] },
    { id: "kiremit", ad: "Kiremitte", ikon: "kiremit",
      kalemler: ["Kiremitte Tavuk Şiş", "Kiremitte Köfte", "Kiremitte Kuzu Şiş"],
      gorseller: [
        { src: "assets/img/kat-kiremit-tavuk-600.webp", alt: "Döküm kapta, domates soslu kiremitte tavuk", genis: 600, yuksek: 600, kaynak: "ys" },
        { src: "assets/img/kat-kiremit-kofte-600.webp", alt: "Kaşarlı, domates soslu kiremitte köfte", genis: 600, yuksek: 600, kaynak: "ys" }
      ] },
    { id: "corba", ad: "Çorba", ikon: "corba",
      kalemler: ["Mercimek", "Ezogelin"],
      gorseller: [
        { src: "assets/img/kat-mercimek-600.webp", alt: "Limonla bir kâse mercimek çorbası", genis: 600, yuksek: 600, kaynak: "ys" },
        { src: "assets/img/kat-ezogelin-600.webp", alt: "Limonla bir kâse ezogelin çorbası", genis: 600, yuksek: 600, kaynak: "ys" }
      ] },
    { id: "icecek", ad: "İçecek", ikon: "icecek",
      kalemler: ["Ayran", "Kola", "Fanta", "Sprite", "Soda", "Su"],
      gorseller: [
        { src: "assets/img/kat-ayran-600.webp", alt: "Bir bardak ayran", genis: 600, yuksek: 600, kaynak: "ys" }
      ] }
  ],

  /* Misafir yorumları: herkese açık yorumlardan kısa, kelimesi kelimesine alıntılar.
     Ad yazılmaz; yalnızca kaynak ve ay. yer: "salonda" ya da "pakette". */
  yorumlar: [
    /* yildiz: yalnızca Google yorumları için (hepsi 5 yıldızlı yorumlardan seçildi). Sıra: salon ve paket karışık. */
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Ekim 2026", metin: "Ankara'da böyle güzel döner yemeyeli yıllar olmuştu. İkram olarak gelen patates kızartması o kadar güzeldi ki tarifini istedim." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Kasım 2025", metin: "O kadar güzel ve özenli bir teslimatti ki çok memnunuz her seferinde aynı kalite ve aynı özen. Kuşbaşılı pide ve beyti ikisi de sıcacık teslim edildi. Tüm ikramlar ayrı ayrı iki kişilik konulmuştu." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Ocak 2026", metin: "Daha sipariş vermeden mezeler masaya gelmeye başladı. Salata, patates kızartmasını fazla fazla koydular. Döner çok lezzetliydi…" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Nisan 2026", metin: "Her şey çok lezzetliydi. Döner beytiye bayıldık. Ama favorim sonda gelen irmik helvası." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ekim 2026", metin: "gerçekten çok lezzetliydi gelen ikramlar sıcak ve taze geldi teşekkür ediyorum iyi çalışmalar" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Haziran 2026", metin: "Ankara gölbaşı'nda mogan gölüne yürüme mesafesinde. Adamların etleri, kaliteleri çok iyi." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Mayıs 2026", metin: "Tesadüf olarak burayı bulduk. Siparişlerimiz gelmeden önce ikram olarak çeşit çok fazlaydı ve doyurucuydu. Bu yetmezmiş gibi ikramlar bittiğinde yenileri sürekli geliyordu." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ağustos 2026", metin: "Bayildim bayildim ustam naptın bu işin kitabını mı okudun mektebinimi bitirdin helal olsun" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Haziran 2026", metin: "Geç saatte gitmemize nazaran yemekleri lezzetliydi personel alakalı servis hızlı yol üzerinde uğrayacağım mekanlardan biri" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Mart 2026", metin: "ASPAVA yı ilk defa denedik. Sınırsız meze çeşitleri, sınırsız Çay hizmeti yanı sıra yemekten sonra gelen Künefe bile ikram edildi." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ekim 2026", metin: "ikramlar için tesekkur ederim adana dürümde çok güzeldi" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Ekim 2025", metin: "Eti, mezeleri çok güzeldi. Sonda verilen irmik helvası için bile özellikle gelinir." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Ağustos 2026", metin: "Gölbaşı da doğru düzgün yemek yenilecek kafa dinlenecek nadir yerlerden biri döneri ile meşhur çalışanları kibar ve ilgili tavsiye ederim." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Eylül 2026", metin: "Kurye tam söylenen vakitte getirdi, yemek de sıcacık geldi" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Temmuz 2026", metin: "Eşim ve bebeğimle sürekli tercih ettiğimiz bir mekan." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Mart 2026", metin: "Her şey çok güzel gölbaşının en iyi aspavası. Yemekler iftar saatinde geldi sıcaktı, güzeldi. İkramlar lezzetliydi." },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ağustos 2026", metin: "Notlara dikkat ediyorlar teslimat zamanında yapıldı ve oldukça lezzetli ellerinize emeğinize sağlık" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Mayıs 2026", metin: "Yol ustu yol üstü tesadüfen karşılaştık gerçekten doymadan kaldırmadılar her türlü ikramlara da yaptılar artan yemekleri de paket yaptılar çaylar zaten söylemiyorum bile çok güzeldi ya" },
    { yer: "pakette", kaynak: "Migros Yemek", tarih: "Ocak 2026", metin: "Talepler dikkate alınmıştı. Yemekler sıcak geldi, lezzeti iyiydi." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Kasım 2025", metin: "Karşılama çok güzeldi oturur oturmaz meze getirdiler onlar da çok güzeldi servis çok hızlıydı çok memnun kaldık" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Haziran 2026", metin: "Bir harika, özellikleri pideleri çok güzel" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ekim 2026", metin: "çok beğendim sıcacık ve lezzetli hızlı teslimat çok teşekkür ederim" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Nisan 2026", metin: "Biz istanbuldan geldik şans eseri girdik buraya. Puanının çok üstünde hizmet lezzet ve fiyat performans kesinlikle" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Temmuz 2026", metin: "Sürekli ailecek geldiğimiz bir restaurant. Herşey taze ve lezzetli" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Mart 2026", metin: "tam zamaninda geldi lezzetliydi yılların degismez adresi" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Ekim 2025", metin: "SSK’yı çok lezzetli ve doyurucu buldum. … Sonrasında verilen irmik helvası, dondurma ve çay ikramları gayet iyiydi." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Haziran 2026", metin: "Yoldan geçerken tesadüf eseri girdik güler yüz hijyen bol ikram fiyatlarda normal tavsiye ederim" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Mart 2026", metin: "Her şey eksiksiz ve lezzetliydi. Ellerinize sağlık. İyi bayramlar" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Eylül 2026", metin: "Yemekleri lezzetli, ikramları bol, çay ve tatlı ikramı var, personel ilgili, ön tarafta ücretsiz otopark var." },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Haziran 2026", metin: "Lahmacunu özellikle deneyin" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Şubat 2026", metin: "Tavsiye ederim güzel sıcak geliyor hızlı teslimat" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Eylül 2026", metin: "Yemekleri çok güzeldi personeller güler yüzlü içeri tertemiz herkesin gelmesi tavsiye ederiz" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Eylül 2026", metin: "sıcaktı ve hızlıydı" },
    { yer: "salonda", kaynak: "Google", yildiz: 5, tarih: "Kasım 2026", metin: "Yemekleri lezzetli çeşit bol ikramları bol" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Şubat 2026", metin: "hızlı temiz ve lezzetli" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Temmuz 2026", metin: "Ben çok beğendim ellerinize sağlık" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Mart 2026", metin: "olması gerektiği gibiydi elinize sağlık teşekkür ederim" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Ekim 2026", metin: "Hocam elinize sağlık çok güzeldi" },
    { yer: "pakette", kaynak: "Yemeksepeti", tarih: "Mayıs 2026", metin: "Eksiksizdi , teşekkürler" }
  ]
};
