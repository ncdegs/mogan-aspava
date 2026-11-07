/* Mogan Aspava · sayfa davranışları. Bilgiler js/veri.js'ten gelir. Kütüphane yok. */
(function () {
  "use strict";
  var V = window.MOGAN;
  if (!V) return;
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var $$ = function (s, k) { return Array.prototype.slice.call((k || document).querySelectorAll(s)); };
  var azHareket = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var EASE = "cubic-bezier(.16,1,.3,1)";

  /* Linkler ve telefonlar: tek kaynak veri.js */
  $$("[data-link]").forEach(function (a) { var u = V.linkler[a.dataset.link]; if (u) a.href = u; });
  $$("[data-tel]").forEach(function (a) { var t = V.tel[a.dataset.tel]; if (t) a.href = t.href; });
  $$("[data-tel-yazi]").forEach(function (s) { var t = V.tel[s.dataset.telYazi]; if (t) s.textContent = t.goster; });

  /* ---------- Saat ---------- */
  var EKI_E = { 0: "a", 1: "e", 2: "ye", 3: "e", 4: "e", 5: "e", 6: "ya", 7: "ye", 8: "e", 9: "a" };
  var EKI_ONLAR = { 1: "a", 2: "ye", 3: "a", 4: "a", 5: "ye" };
  var EKI_DA = { 0: "da", 1: "de", 2: "de", 3: "te", 4: "te", 5: "te", 6: "da", 7: "de", 8: "de", 9: "da" };
  var EKI_DA_ONLAR = { 1: "da", 2: "de", 3: "da", 4: "ta", 5: "de" };
  function sonSayi(hhmm) { var p = hhmm.split(":"); var m = +p[1]; return m ? m : +p[0]; }
  function ekE(hhmm) { var n = sonSayi(hhmm); var b = n % 10; return hhmm + "'" + (b || n === 0 ? EKI_E[b] : EKI_ONLAR[n / 10]); }
  function ekDa(hhmm) { var n = sonSayi(hhmm); var b = n % 10; return hhmm + "'" + (b || n === 0 ? EKI_DA[b] : EKI_DA_ONLAR[n / 10]); }
  function dk(hhmm) { var p = hhmm.split(":"); return (+p[0]) * 60 + (+p[1]); }
  function simdi() {
    var p = new Intl.DateTimeFormat("tr-TR", { timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
    var h = 0, m = 0;
    p.forEach(function (x) { if (x.type === "hour") h = +x.value; if (x.type === "minute") m = +x.value; });
    return { h: h, m: m, dk: h * 60 + m, yazi: String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") };
  }
  function acikMi(dakika) {
    var s = V.saat;
    if (s.tip !== "aralik") return true;
    var a = dk(s.acilis), k = dk(s.kapanis);
    return k > a ? (dakika >= a && dakika < k) : (dakika >= a || dakika < k);
  }
  function saatleriYaz() {
    var s = V.saat, t = simdi(), acik = acikMi(t.dk), yirmidort = s.tip !== "aralik";
    var levha = $("[data-levha]");
    $("[data-levha-buyuk]").textContent = yirmidort ? "7/24" : (acik ? "AÇIK" : "KAPALI");
    $("[data-levha-kucuk]").textContent = yirmidort ? "AÇIK" : (acik ? ekE(s.kapanis) + " kadar" : ekDa(s.acilis) + " açılır");
    levha.classList.toggle("kapali", !acik);
    var durum = $("[data-durum]");
    durum.classList.toggle("kapali", !acik);
    $("[data-durum-yazi]").textContent = (acik ? "Şu an açık" : "Şu an kapalı") + " · Türkiye saatiyle " + t.yazi;
    $("[data-saat-yazi]").textContent = yirmidort ? "7/24 açık" : "Her gün " + s.acilis + "–" + s.kapanis;
    if (!yirmidort) {
      $("[data-gece-baslik]").textContent = "Gece " + ekE(s.kapanis) + " kadar açık";
    }
    simdiIsareti(t);
  }

  /* ---------- 24 saatlik halka ---------- */
  var SVGNS = "http://www.w3.org/2000/svg";
  function nokta(r, derece) { var a = (derece - 90) * Math.PI / 180; return [220 + r * Math.cos(a), 220 + r * Math.sin(a)]; }
  function halkaKur() {
    var g = $("[data-halka]");
    if (!g) return;
    for (var h = 0; h < 24; h++) {
      var a1 = h * 15 + .7, a2 = (h + 1) * 15 - .7, r1 = 158, r2 = 196;
      var p1 = nokta(r2, a1), p2 = nokta(r2, a2), p3 = nokta(r1, a2), p4 = nokta(r1, a1);
      var d = "M" + p1 + "A" + r2 + " " + r2 + " 0 0 1 " + p2 + "L" + p3 + "A" + r1 + " " + r1 + " 0 0 0 " + p4 + "Z";
      var el = document.createElementNS(SVGNS, "path");
      el.setAttribute("d", d.replace(/,/g, " "));
      el.setAttribute("class", "dilim " + (acikMi(h * 60) ? "acik" : "kapali-dilim"));
      el.style.setProperty("--i", h);
      g.appendChild(el);
    }
  }
  function simdiIsareti(t) {
    var g = $("[data-simdi]");
    if (!g) return;
    var aci = t.dk / 1440 * 360, ic = nokta(146, aci), dis = nokta(204, aci);
    g.innerHTML = '<line class="simdi-cizgi" x1="' + ic[0] + '" y1="' + ic[1] + '" x2="' + dis[0] + '" y2="' + dis[1] + '"/>' +
      '<circle class="simdi-nokta" cx="' + ic[0] + '" cy="' + ic[1] + '" r="6"/>';
  }

  /* ---------- Bir kez: ekrana girince ---------- */
  function gorununce(el, esik, fn) {
    if (!el) return;
    if (!("IntersectionObserver" in window)) { fn(); return; }
    var io = new IntersectionObserver(function (ks) {
      ks.forEach(function (k) { if (k.isIntersecting) { io.disconnect(); fn(); } });
    }, { threshold: esik });
    io.observe(el);
  }

  /* ---------- Sofrayı kur ---------- */
  var sahne = $("[data-sofra-sahne]"), tabaklar = $("[data-tabaklar]"), anaTabak = $("[data-ana]");
  var sofraSira = 0, sofraKuruldu = false;
  function sofraKur(yer) {
    var liste = V.ikram[yer] || [];
    var sira = ++sofraSira;
    $$("[data-sofra]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.sofra === yer)); });
    $("[data-sofra-not]").textContent = yer === "pakette" ? "Pakette gelenler, sipariş uygulamasındaki açıklamaya göre." : "Salonda ana yemekle masaya gelenler.";
    var eskiler = $$(".tabak", tabaklar);
    var temizle = function () {
      if (sira !== sofraSira) return;
      tabaklar.innerHTML = "";
      var n = liste.length, r = n > 5 ? 36 : 33, boy = n > 5 ? 19 : 23;
      if (!sofraKuruldu && !azHareket) {
        anaTabak.animate([{ opacity: 0, transform: "scale(.86)" }, { opacity: 1, transform: "none" }], { duration: 600, easing: EASE, fill: "both" });
      }
      sofraKuruldu = true;
      liste.forEach(function (it, i) {
        var aci = (-90 + i * 360 / n) * Math.PI / 180;
        var x = 50 + r * Math.cos(aci), y = 50 + r * Math.sin(aci);
        var d = document.createElement("div");
        d.className = "tabak";
        d.style.setProperty("--x", x.toFixed(2) + "%");
        d.style.setProperty("--y", y.toFixed(2) + "%");
        d.style.setProperty("--b", boy + "%");
        d.innerHTML = '<svg viewBox="0 0 100 100"><use href="#t-' + it.tur + '"/></svg><span class="tabak-ad"></span>';
        d.lastChild.textContent = it.ad;
        tabaklar.appendChild(d);
        var gecikme = 220 + i * 85;
        if (azHareket) {
          d.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, delay: i * 40, fill: "both" });
        } else {
          var dx = Math.cos(aci) * 70, dy = Math.sin(aci) * 70;
          d.animate([{ opacity: 0, transform: "translate(" + dx + "%," + dy + "%) scale(.82) rotate(" + (i % 2 ? 8 : -8) + "deg)" }, { opacity: 1, transform: "none" }],
            { duration: 700, delay: gecikme, easing: EASE, fill: "both" });
          d.lastChild.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, delay: gecikme + 380, fill: "both" });
        }
      });
      $("[data-sofra-duyuru]").textContent = "Sofra kuruldu, " + (yer === "pakette" ? "pakette" : "salonda") + ": " + liste.map(function (x) { return x.ad; }).join(", ") + ".";
    };
    if (eskiler.length && !azHareket) {
      var son = null;
      eskiler.forEach(function (e) { son = e.animate([{ opacity: 1 }, { opacity: 0, transform: "scale(.92)" }], { duration: 160, fill: "both" }); });
      son.onfinish = temizle;
    } else {
      temizle();
    }
  }
  $$("[data-sofra]").forEach(function (b) { b.addEventListener("click", function () { sofraKur(b.dataset.sofra); }); });
  gorununce(sahne, .35, function () { if (!sofraKuruldu) sofraKur("salonda"); });

  /* ---------- Menü sekmeleri ---------- */
  var sekmeKutu = $("[data-sekmeler]"), panel = $("[data-panel]"), pano = $("[data-pano]"), panoFoto = $("[data-pano-foto]");
  var panoGorunur = false;
  function el(ad, ozellik) {
    var e = document.createElement(ad);
    Object.keys(ozellik || {}).forEach(function (k) { if (ozellik[k] !== undefined) e.setAttribute(k, ozellik[k]); });
    return e;
  }
  function videoOynat() {
    var v = panoFoto && $("video", panoFoto);
    if (!v || azHareket) return;
    if (panoGorunur) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); }
  }
  function fotoGoster(kat) {
    if (!panoFoto) return;
    panoFoto.innerHTML = "";
    var f = kat.foto;
    pano.classList.toggle("foto-var", !!f);
    panoFoto.hidden = !f;
    if (!f) return;
    if (f.video) {
      var v = el("video", { poster: f.poster, width: f.genis, height: f.yuksek, preload: "none", "aria-label": f.alt });
      v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute("muted", ""); v.setAttribute("playsinline", "");
      if (azHareket) v.controls = true;
      v.appendChild(el("source", { src: f.video, type: "video/mp4" }));
      panoFoto.appendChild(v);
    } else {
      panoFoto.appendChild(el("img", { src: f.src, alt: f.alt, width: f.genis, height: f.yuksek, loading: "lazy", decoding: "async" }));
    }
    if (f.ek) panoFoto.appendChild(el("img", { src: f.ek.src, alt: f.ek.alt, width: f.ek.genis, height: f.ek.yuksek, loading: "lazy", decoding: "async", "class": "pano-foto-ek" }));
    if (!azHareket) { panoFoto.classList.remove("gir"); void panoFoto.offsetWidth; panoFoto.classList.add("gir"); }
    videoOynat();
  }
  function sekmeSec(i, odakla) {
    var kat = V.menu[i];
    $$(".sekme", sekmeKutu).forEach(function (b, j) {
      var secili = i === j;
      b.setAttribute("aria-selected", String(secili));
      b.tabIndex = secili ? 0 : -1;
      if (secili && odakla) b.focus();
    });
    panel.setAttribute("aria-labelledby", "sekme-" + kat.id);
    var lis = kat.kalemler.map(function (k) {
      var m = k.match(/^(.*?) (\(.*\))$/);
      var li = document.createElement("li");
      if (m) { li.textContent = m[1] + " "; var s = document.createElement("span"); s.textContent = m[2]; li.appendChild(s); } else { li.textContent = k; }
      return li;
    });
    panel.innerHTML = '<div class="pano-bas"><svg class="ik" aria-hidden="true"><use href="#i-' + kat.ikon + '"/></svg><h3></h3></div><ul class="pano-liste"></ul>';
    $("h3", panel).textContent = kat.ad;
    lis.forEach(function (li) { $("ul", panel).appendChild(li); });
    if (!azHareket) { panel.classList.remove("gir"); void panel.offsetWidth; panel.classList.add("gir"); }
    fotoGoster(kat);
  }
  if (sekmeKutu) {
    V.menu.forEach(function (kat, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "sekme"; b.id = "sekme-" + kat.id;
      b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "menu-panel");
      b.innerHTML = '<svg class="ik" aria-hidden="true"><use href="#i-' + kat.ikon + '"/></svg><span></span>';
      b.lastChild.textContent = kat.ad;
      b.addEventListener("click", function () { sekmeSec(i, false); });
      sekmeKutu.appendChild(b);
    });
    panel.id = "menu-panel";
    sekmeKutu.addEventListener("keydown", function (e) {
      var n = V.menu.length, sec = $$(".sekme", sekmeKutu).findIndex(function (b) { return b.getAttribute("aria-selected") === "true"; });
      var yeni = { ArrowRight: sec + 1, ArrowDown: sec + 1, ArrowLeft: sec - 1, ArrowUp: sec - 1, Home: 0, End: n - 1 }[e.key];
      if (yeni === undefined) return;
      e.preventDefault();
      sekmeSec((yeni + n) % n, true);
    });
    sekmeSec(0, null);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (ks) {
        ks.forEach(function (k) { panoGorunur = k.isIntersecting; videoOynat(); });
      }, { threshold: .35 }).observe(pano);
    }
  }

  /* ---------- Masadan sesler: Hepsi / Salonda / Pakette ---------- */
  var serit = $("[data-yorumlar]");
  if (serit && V.yorumlar) {
    var KAYNAK_ADI = { "Google": "Google yorumu", "Yemeksepeti": "Yemeksepeti yorumu", "Migros Yemek": "Migros Yemek yorumu" };
    V.yorumlar.forEach(function (y) {
      var li = el("li", { "class": "fis", "data-yer": y.yer });
      var bq = el("blockquote"), p = el("p"), alt = el("p", { "class": "fis-alt" }), etiket = el("span", { "class": "fis-yer" });
      p.textContent = "“" + y.metin + "”";
      alt.textContent = (KAYNAK_ADI[y.kaynak] || y.kaynak) + " · " + y.tarih;
      etiket.textContent = y.yer === "pakette" ? "Pakette" : "Salonda";
      bq.appendChild(p); li.appendChild(etiket); li.appendChild(bq); li.appendChild(alt);
      serit.appendChild(li);
    });
    var yorumSuz = function (yer) {
      var sayi = 0;
      $$("[data-yorum]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.yorum === yer)); });
      $$(".fis", serit).forEach(function (li) { var goster = yer === "hepsi" || li.dataset.yer === yer; li.hidden = !goster; if (goster) sayi++; });
      serit.scrollLeft = 0;
      $("[data-yorum-duyuru]").textContent = sayi + " yorum gösteriliyor.";
    };
    $$("[data-yorum]").forEach(function (b) { b.addEventListener("click", function () { yorumSuz(b.dataset.yorum); }); });
  }

  /* ---------- Göle 500 m: kaydırdıkça rota ---------- */
  var harita = $("[data-harita]"), sayac = $("[data-sayac]");
  if (harita && sayac) {
    var svg = harita.querySelector("svg"), bekliyor = false;
    var guncelle = function () {
      bekliyor = false;
      var r = harita.getBoundingClientRect(), vh = window.innerHeight;
      var p = (vh * .85 - r.top) / (vh * .45 + r.height * .5);
      p = Math.max(0, Math.min(1, p));
      svg.style.setProperty("--p", p.toFixed(3));
      sayac.textContent = String(Math.round(p * 50) * 10);
    };
    var kaydir = function () { if (!bekliyor) { bekliyor = true; requestAnimationFrame(guncelle); } };
    if (azHareket) {
      svg.style.setProperty("--p", "1");
    } else if ("IntersectionObserver" in window) {
      guncelle();
      new IntersectionObserver(function (ks) {
        ks.forEach(function (k) {
          if (k.isIntersecting) { window.addEventListener("scroll", kaydir, { passive: true }); guncelle(); }
          else { window.removeEventListener("scroll", kaydir); guncelle(); }
        });
      }).observe(harita);
    }
  }

  /* ---------- Gece de açık ---------- */
  halkaKur();
  saatleriYaz();
  setInterval(saatleriYaz, 60000);
  var gece = $("[data-gece]");
  gorununce(gece, .4, function () { gece.classList.add("is-on"); });

  /* ---------- Telefon: alt eylem çubuğu ---------- */
  var cubuk = $("[data-cubuk]"), vitrinEylem = $(".vitrin-eylem");
  if (cubuk && vitrinEylem && "IntersectionObserver" in window) {
    document.body.classList.add("cubuk-var");
    new IntersectionObserver(function (ks) {
      ks.forEach(function (k) {
        var goster = !k.isIntersecting && k.boundingClientRect.top < 0;
        cubuk.classList.toggle("gorunur", goster);
        cubuk.inert = !goster;
      });
    }).observe(vitrinEylem);
  }

  /* ---------- Sipariş seçimi ---------- */
  var pencere = $("#siparis"), acan = null;
  if (pencere && typeof pencere.showModal === "function") {
    $$("[data-siparis]").forEach(function (b) {
      b.addEventListener("click", function () { acan = b; pencere.showModal(); });
    });
    $("[data-kapat]", pencere).addEventListener("click", function () { pencere.close(); });
    pencere.addEventListener("click", function (e) { if (e.target === pencere) pencere.close(); });
    pencere.addEventListener("close", function () { if (acan && document.contains(acan)) acan.focus(); });
  } else {
    /* Eski tarayıcı: pencere yerine doğrudan Yemeksepeti */
    $$("[data-siparis]").forEach(function (b) { b.addEventListener("click", function () { location.href = V.linkler.yemeksepeti; }); });
  }
})();
