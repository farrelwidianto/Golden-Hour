/* Golden Hour — mobile layout (< 768px)
   Desktop, laptop, and landscape tablet (>= 768px) keep the original
   1920px Canva canvas scaled proportionally to fit the window. */
(function () {
  "use strict";

  var ROUTES = ["beranda", "menu", "lokasi", "reservasi"];
  var IMG = "assets/images/";

  function asset(name) { return IMG + name; }

  /* ------------------------------------------------------------------ data */
  var facilities = [
    {
      img: "img-758f79f793ea.jpg",
      title: "Bar Table",
      text: "Nikmati kopi sambil bersantai di area bar yang hangat."
    },
    {
      img: "img-02df12135444.jpg",
      title: "Lounge",
      text: "Ruang nyaman untuk ngobrol, bekerja, atau sekedar melepas penat."
    },
    {
      img: "img-24fcecf8ff24.jpg",
      title: "Rooftop",
      text: "Saksikan matahari terbenam dari rooftop kami yang memukau."
    },
    {
      img: "img-0684a577eea8.jpg",
      title: "VIP Room",
      text: "Nikmati suasana eksklusif dengan privasi dan kenyamanan lebih."
    }
  ];

  var highlights = [
    {
      title: "Golden Hour Coffee Signature",
      text: "Perpaduan sempurna espresso khas, susu lembut, dan sentuhan sirup gula aren organik yang gurih."
    },
    {
      title: "Citrus Sunset Refresh",
      text: "Kesegaran ekstrak buah jeruk asli dipadu soda water dan sentuhan mint segar di sore hari."
    },
    {
      title: "Sunset Caramel Latte",
      text: "Kopi espresso berpadu sirup karamel manis dan kelembutan foamed milk yang hangat."
    },
    {
      title: "Almond Chocolate Toast",
      text: "Roti panggang lembut dengan lelehan cokelat premium dan taburan irisan kacang almond renyah."
    },
    {
      title: "Butter Croissant",
      text: "Pastry renyah beraroma mentega gurih, sangat pas dinikmati bersama cangkir kopi favoritmu."
    },
    {
      title: "Golden Hour Gelato",
      text: "Penutup manis berupa gelato lembut variasi rasa coklat atau matcha pilihan."
    }
  ];

  var menu = [
    {
      img: "img-a37d02c0caeb.jpg",
      title: "Almond Chocolate Toast",
      text: "Roti panggang lembut dengan lelehan cokelat premium dan taburan irisan kacang almond renyah."
    },
    {
      img: "img-53a08cd3a59d.png",
      title: "Citrus Sunset Refresh",
      text: "Kesegaran ekstrak buah jeruk asli dipadu soda water dan sentuhan mint segar di sore hari."
    },
    {
      img: "img-58fca11b8ddf.png",
      title: "Matcha Cloud Latte",
      text: "Perpaduan matcha dengan susu lembut dan lapisan foam creamy yang menggugah."
    },
    {
      img: "img-6beacd793753.png",
      title: "Butter Croissant",
      text: "Pastry renyah beraroma mentega gurih, sangat pas dinikmati bersama cangkir kopi favoritmu."
    },
    {
      img: "img-7191aaab653f.jpg",
      title: "Golden Snack Platter",
      text: "Aneka camilan gurih dan renyah yang cocok dinikmati bersama teman."
    },
    {
      img: "img-5c7df03c8515.jpg",
      title: "Golden Hour Coffee Signature",
      text: "Perpaduan sempurna espresso khas, susu lembut, dan sentuhan sirup gula aren organik yang gurih."
    },
    {
      img: "img-e6b27a59ea67.png",
      title: "Sunset Caramel Latte",
      text: "Kopi espresso berpadu sirup karamel manis dan kelembutan foamed milk yang hangat."
    },
    {
      img: "img-51190b7adf5b.png",
      title: "Golden Hour Gelato",
      text: "Sajian penutup manis berupa gelato lembut dengan berbagai varian rasa pilihan."
    },
    {
      img: "img-c6ffe5f03bcb.png",
      title: "Creamy Chicken Pasta",
      text: "Pasta dengan potongan ayam pilihan yang dipadukan dengan saus creamy lembut dan kaya rasa."
    },
    {
      img: "img-3300d07b3946.png",
      title: "Classic Spaghetti",
      text: "Spaghetti dengan saus gurih yang lezat, cocok untuk dinikmati kapan saja."
    }
  ];

  var locations = [
    {
      img: "img-84761605837a.jpg",
      alt: "Golden Hour Coffee Kebon Jeruk",
      city: "Jakarta Barat",
      address: "Jl. Perumahan Intercon Kebon Jeruk Blok B No 16, Srengseng, Kec. Kembangan, Kota Jakarta Barat",
      maps: "https://maps.app.goo.gl/PCV3Rcbx8EfpWh9R8?g_st=ic",
      route: "https://maps.app.goo.gl/Fmu9uCWfnRwZ5oGt7?g_st=ic"
    },
    {
      img: "img-f32cd48e2ce3.jpg",
      alt: "Golden Hour Coffee Graha Raya",
      city: "Tangerang",
      address: "Jl. Boulevard Graha Raya, Kunciran Indah, Kec. Pinang, Kota Tangerang, Banten",
      maps: "https://maps.app.goo.gl/cxb44V1XN1btfgkA7?g_st=ic",
      route: "https://maps.app.goo.gl/C2CnMtE8kAxez4Zp7?g_st=ic"
    }
  ];

  var packages = [
    { name: "Reservasi Meja (Reguler)", price: "Rp 50.000", unit: "/ Meja" },
    { name: "Reservasi Meja (Group)", price: "Rp 75.000", unit: "/ Meja" },
    { name: "Event & Gathering", price: "Rp 350.000", unit: "/ Paket" }
  ];

  var reviews = [
    { img: "img-db89e962efa0.png", alt: "Ulasan pelanggan di Google" },
    { img: "img-793f1046d134.png", alt: "Ulasan pelanggan di Google" },
    { img: "img-79f9758b7872.jpg", alt: "Ulasan pelanggan di Google" }
  ];

  /* --------------------------------------------------------------- helpers */
  function imgTag(src, alt, cls, lazy, w, h) {
    return '<img' +
      (cls ? ' class="' + cls + '"' : '') +
      ' src="' + asset(src) + '"' +
      ' alt="' + (alt || "") + '"' +
      (w ? ' width="' + w + '"' : '') +
      (h ? ' height="' + h + '"' : '') +
      (lazy ? ' loading="lazy" decoding="async"' : '') +
      '>';
  }

  function section(inner, cls) {
    return '<section class="m-sec' + (cls ? " " + cls : "") + '">' + inner + "</section>";
  }

  function pageHead(title, withLogo) {
    return '<section class="m-sec m-page-head">' +
      (withLogo ? imgTag("img-4b59ca9a0ebc.png", "Golden Hour", "m-page-logo", false, 458, 258) : "") +
      '<h1 class="m-title m-title--center">' + title + "</h1>" +
      "</section>";
  }

  function dishList(items) {
    return '<ul class="m-dishes">' + items.map(function (item) {
      return "<li><h3>" + item.title + "</h3><p>" + item.text + "</p></li>";
    }).join("") + "</ul>";
  }

  function facilityCards() {
    return '<div class="m-cards">' + facilities.map(function (item) {
      return '<article class="m-card">' +
        '<div class="m-card-media">' + imgTag(item.img, item.title, null, true, 289, 300) + "</div>" +
        '<div class="m-card-pill">' + item.title + "</div>" +
        '<div class="m-card-body"><p>' + item.text + "</p></div>" +
        "</article>";
    }).join("") + "</div>";
  }

  function menuCards() {
    return '<div class="m-menu-grid">' + menu.map(function (item) {
      return '<article class="m-menu-card">' +
        '<div class="m-menu-thumb">' +
        imgTag(item.img, item.title, null, true, 256, 256) +
        "</div>" +
        '<div class="m-menu-desc"><p>' + item.text + "</p></div>" +
        '<div class="m-menu-pill">' + item.title + "</div>" +
        "</article>";
    }).join("") + "</div>";
  }

  function locationCards() {
    return locations.map(function (loc) {
      return '<article class="m-loc">' +
        '<figure class="m-photo">' + imgTag(loc.img, loc.alt, null, true, 366, 371) + "</figure>" +
        "<h3>" + loc.city + "</h3>" +
        '<p class="m-address">' + loc.address + "</p>" +
        '<div class="m-loc-actions">' +
        '<a class="m-btn m-btn--terracotta m-btn--maps" href="' + loc.maps + '" target="_blank" rel="noopener">Buka di Google Maps</a>' +
        '<a class="m-btn m-btn--terracotta m-btn--route" href="' + loc.route + '" target="_blank" rel="noopener">Rute</a>' +
        "</div>" +
        "</article>";
    }).join("");
  }

  /* ------------------------------------------------------------------ pages */
  var hero =
    '<section class="m-hero">' +
    imgTag("img-bb75258a0663.png", "Golden Hour — Restaurant, Café & Lounge", "m-hero-logo", false, 1094, 615) +
    '<div class="m-hero-chars">' +
    imgTag("img-75dad7284391.png", "", null, false, 322, 256) +
    imgTag("img-f4bcf07e0588.png", "", null, false, 281, 324) +
    imgTag("img-bbe2ca93c499.png", "", null, false, 316, 363) +
    "</div>" +
    "</section>";

  var homePage =
    '<div class="m-page" id="m-beranda">' +
    hero +
    section(
      '<h2 class="m-title">Tentang Golden Hour</h2>' +
      '<p class="m-text">Golden Hour merupakan destinasi kuliner dengan konsep Restaurant, Cafe, &amp; Lounge yang berdiri sejak tahun 2018. Berawal dari kafe kecil tempat sekelompok sahabat berkumpul, menikmati kopi, dan menyaksikan matahari terbenam, Golden Hour kini berkembang menjadi tempat bersantap dan bersantai yang menawarkan pengalaman kuliner dengan suasana hangat dan nyaman.</p>' +
      '<p class="m-text">Dengan menggunakan bahan-bahan pilihan, Golden Hour menyajikan beragam menu, mulai dari sarapan, hidangan utama, hingga kopi signature berkualitas yang dirancang untuk menemani setiap momen kalian.</p>' +
      '<figure class="m-photo m-photo--tall">' +
      imgTag("img-044c822e061d.jpg", "Suasana Golden Hour saat matahari terbenam", null, true, 421, 632) +
      "</figure>"
    ) +
    section('<h2 class="m-title m-title--center">Fasilitas Kami</h2>' + facilityCards()) +
    section(
      '<h2 class="m-title m-title--center">Menu Paling Laris</h2>' +
      '<figure class="m-board"><div class="m-board-inner">' +
      imgTag("img-9d4a169e2564.png", "Papan menu Golden Hour", "m-board-img", true, 342, 433) +
      imgTag("img-f29140775c5d.png", "Best seller", "m-board-badge", true, 152, 152) +
      "</div></figure>" +
      dishList(highlights) +
      '<a class="m-btn m-btn--block" href="#menu">LIHAT SEMUA MENU</a>'
    ) +
    section(
      '<div class="m-promo-box">' +
      "<h2>Golden Hour Special</h2>" +
      "<p>Dapatkan penawaran menarik dan diskon khusus untuk setiap pembelian paket coffee &amp; pastry favoritmu setiap hari mulai pukul 16:00 - 18.00 WIB:</p>" +
      '<ul class="m-bullets">' +
      "<li>Disk. 15% All Coffee</li>" +
      "<li>Free Pastry Upgrade</li>" +
      "</ul>" +
      "<p>Kunjungi outlet kami atau pesan secara online melalui aplikasi favoritmu sekarang juga!</p>" +
      '<p class="m-promo-tagline">Good Food<br>Better Sunset</p>' +
      "</div>" +
      '<div class="m-promo-media">' +
      imgTag("img-55acca94ec1d.png", "Croissant dan kopi", "m-promo-plate", true, 347, 462) +
      '<figure class="m-photo">' + imgTag("img-2f5e65852680.jpg", "Matahari terbenam di Golden Hour", null, true, 551, 980) + "</figure>" +
      "</div>"
    ) +
    section(
      '<h2 class="m-title">Lebih dari Sekedar Cafe. Tempat untuk Melepas Penat.</h2>' +
      '<p class="m-text">Terinspirasi dari cantiknya kehangatan cahaya senja, Golden Hour menghadirkan suasana santai yang nyaman dengan aroma kopi segar pilihan. Cocok untuk tempat berkumpul, bekerja, atau sekadar melepas penat di penghujung hari.</p>'
    ) +
    section(
      '<h2 class="m-title">Setiap senja punya cerita. Mari ciptakan ceritamu di Golden Hour</h2>' +
      '<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">' +
      '<a class="m-btn m-btn--block" href="#reservasi">Reservasi Sekarang</a>' +
      "</div>"
    ) +
    "</div>";

  var menuPage =
    '<div class="m-page" id="m-menu">' +
    pageHead("Menu Lengkap", true) +
    section(menuCards()) +
    "</div>";

  var locationPage =
    '<div class="m-page" id="m-lokasi">' +
    pageHead("Lokasi Cafe Kami", true) +
    section(locationCards(), "m-locs") +
    "</div>";

  var STAR_OUTLINE = "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z";
  var STAR_FILLED = "M13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z";

  function starSvg(filled) {
    return '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="' + (filled ? STAR_FILLED : STAR_OUTLINE) + '" fill="#ffffff"></path>' +
      "</svg>";
  }

  function formFooterNote() {
    return '<p class="m-form-note">' +
      "Your Canva profile name will be shared. Never submit passwords.<br>" +
      '<a href="https://www.canva.com/policies/privacy-policy/" target="_blank" rel="noopener">Learn how we handle your data</a>' +
      "</p>";
  }

  function reservationFormCard() {
    return '<form class="m-form-card" id="mResvForm">' +
      '<h3 class="m-form-title">Pesan Meja</h3>' +
      '<div class="m-form-fields">' +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-resv-name">Nama</label>' +
      '<input class="m-input" id="m-resv-name" name="nama" type="text" placeholder="Masukkan nama Anda" required>' +
      "</div>" +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-resv-date">Tanggal</label>' +
      '<input class="m-input" id="m-resv-date" name="tanggal" type="text" placeholder="Contoh: 20 November 2026" required>' +
      "</div>" +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-resv-time">Waktu</label>' +
      '<input class="m-input" id="m-resv-time" name="waktu" type="text" placeholder="Contoh: 18.30 WIB" required>' +
      "</div>" +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-resv-guests">Tamu</label>' +
      '<input class="m-input" id="m-resv-guests" name="tamu" type="text" inputmode="numeric" placeholder="Jumlah tamu (contoh: 4)" required>' +
      "</div>" +
      "</div>" +
      '<button class="m-form-submit" type="submit">Pesan Sekarang</button>' +
      '<div class="m-form-status" id="mResvStatus" role="status" aria-live="polite" hidden></div>' +
      formFooterNote() +
      "</form>";
  }

  function reviewFormCard() {
    var stars = "";
    for (var s = 1; s <= 5; s++) {
      stars += '<button class="m-star-btn" type="button" data-rating="' + s + '" aria-label="' + s + ' star' + (s > 1 ? "s" : "") + '" aria-pressed="false">' +
        starSvg(false) +
        "</button>";
    }

    var options = [
      "Ya, dengan nama saya",
      "Ya, tetapi tanpa nama",
      "Tidak"
    ];

    var radios = options.map(function (opt, idx) {
      var id = "m-rev-perm-" + idx;
      return '<label class="m-radio-item" for="' + id + '">' +
        '<input id="' + id + '" type="radio" name="izin_testimoni" value="' + opt + '">' +
        "<span>" + opt + "</span>" +
        '<span class="m-radio-check" aria-hidden="true"></span>' +
        "</label>";
    }).join("");

    return '<form class="m-form-card" id="mRevForm">' +
      '<h3 class="m-form-title">Ulasan untuk Golden Hour</h3>' +
      '<div class="m-form-fields">' +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-rev-name">Nama</label>' +
      '<input class="m-input" id="m-rev-name" name="nama" type="text" placeholder="Masukkan nama Anda" required>' +
      "</div>" +
      '<fieldset class="m-field">' +
      '<legend class="m-field-label">Bagaimana anda menilai pengalaman anda secara keseluruhan?</legend>' +
      '<input type="hidden" name="rating" id="mRevRating" value="">' +
      '<div class="m-stars" id="mRevStars">' + stars + "</div>" +
      "</fieldset>" +
      '<div class="m-field">' +
      '<label class="m-field-label" for="m-rev-story">Bersediakah anda berbagi sedikit cerita mengenai pengalaman anda?</label>' +
      '<textarea class="m-textarea" id="m-rev-story" name="cerita" rows="3" placeholder="Tulis pengalaman Anda di sini..." required></textarea>' +
      "</div>" +
      '<fieldset class="m-field">' +
      '<legend class="m-field-label">Bolehkah kami menampilkan testimoni anda?</legend>' +
      '<div class="m-radio-list" id="mRevRadios">' + radios + "</div>" +
      "</fieldset>" +
      "</div>" +
      '<button class="m-form-submit" type="submit">Kirim</button>' +
      '<div class="m-form-status" id="mRevStatus" role="status" aria-live="polite" hidden></div>' +
      formFooterNote() +
      "</form>";
  }

  var reservationPage =
    '<div class="m-page" id="m-reservasi">' +
    pageHead("Reservasi") +
    section(
      '<div class="m-resv">' +
      imgTag("img-0684a577eea8.jpg", "VIP Room Golden Hour", null, true, 348, 522) +
      '<div class="m-resv-body">' +
      "<h2>Nikmati Hidangan di Suasana yang Hangat</h2>" +
      '<ul class="m-prices">' + packages.map(function (item) {
        return "<li><span>" + item.name + "</span><b>" + item.price + " <small>" + item.unit + "</small></b></li>";
      }).join("") + "</ul>" +
      "</div></div>" +
      reservationFormCard()
    ) +
    section(
      '<h2 class="m-title">Ulasan</h2>' +
      '<p class="m-kicker">211 Cerita Dari Meja Kami</p>' +
      '<figure class="m-rating">' +
      imgTag("img-5f4c08b899ed.png", "Rating 4,7 dari 211 ulasan", null, true, 501, 159) +
      "</figure>" +
      '<div class="m-reviews">' + reviews.map(function (item) {
        return imgTag(item.img, item.alt, null, true, 216, 157);
      }).join("") + "</div>" +
      reviewFormCard()
    ) +
    "</div>";

  var footer =
    '<footer class="m-footer">' +
    '<div class="m-footer-inner">' +
    '<div class="m-footer-top">' +
    imgTag("img-ab16f74aab36.png", "Golden Hour — Restaurant, Café & Lounge", "m-footer-logo", true, 504, 456) +
    '<p class="m-footer-seeyou">See You at<br>Golden Hour!</p>' +
    "</div>" +
    '<div class="m-contact">' +
    '<p class="m-kicker">JAM OPERASIONAL</p>' +
    "<p>SETIAP HARI: 10.00 - 22.00</p>" +
    '<a href="tel:+621234567890">+62-123-456-7890</a>' +
    '<a href="mailto:goldenhour@gmail.com">goldenhour@gmail.com</a>' +
    "</div>" +
    '<div class="m-socials-wrap">' +
    '<p class="m-kicker">TETAP TERHUBUNG</p>' +
    '<div class="m-socials" aria-label="Media sosial Golden Hour">' +
    imgTag("img-2eb5b92f50fa.svg", "Facebook", null, true, 38, 38) +
    imgTag("img-a50d5bc33557.svg", "Instagram", null, true, 38, 38) +
    imgTag("img-dffae9318761.svg", "Twitter", null, true, 38, 38) +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="m-scallop" aria-hidden="true"></div>' +
    '<div class="m-footer-bar">&copy; 2026 Golden Hour &middot; Restaurant, Caf&eacute; &amp; Lounge</div>' +
    "</footer>";

  function initForms(site) {
    var resvForm = site.querySelector("#mResvForm");
    var resvStatus = site.querySelector("#mResvStatus");
    if (resvForm && resvStatus) {
      resvForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var nama = (resvForm.elements.nama.value || "").trim();
        var tanggal = (resvForm.elements.tanggal.value || "").trim();
        var waktu = (resvForm.elements.waktu.value || "").trim();
        var tamu = (resvForm.elements.tamu.value || "").trim();
        resvStatus.textContent = "Terima kasih, " + nama + "! Reservasi meja untuk " + tamu + " tamu pada " + tanggal + " pukul " + waktu + " telah dikirim.";
        resvStatus.hidden = false;
        resvForm.reset();
      });
    }

    var revForm = site.querySelector("#mRevForm");
    var revStatus = site.querySelector("#mRevStatus");
    var ratingInput = site.querySelector("#mRevRating");
    var starBtns = site.querySelectorAll("#mRevStars .m-star-btn");
    var radioItems = site.querySelectorAll("#mRevRadios .m-radio-item");

    function renderStars(value) {
      for (var i = 0; i < starBtns.length; i++) {
        var score = Number(starBtns[i].getAttribute("data-rating"));
        var active = score <= value;
        starBtns[i].setAttribute("aria-pressed", active ? "true" : "false");
        starBtns[i].innerHTML = starSvg(active);
      }
    }

    for (var i = 0; i < starBtns.length; i++) {
      starBtns[i].addEventListener("click", function () {
        var val = Number(this.getAttribute("data-rating")) || 0;
        if (ratingInput) ratingInput.value = String(val);
        renderStars(val);
      });
    }

    for (var j = 0; j < radioItems.length; j++) {
      var radio = radioItems[j].querySelector("input[type=radio]");
      if (radio) {
        radio.addEventListener("change", function () {
          for (var k = 0; k < radioItems.length; k++) {
            var r = radioItems[k].querySelector("input[type=radio]");
            radioItems[k].classList.toggle("is-selected", !!(r && r.checked));
          }
        });
      }
    }

    if (revForm && revStatus) {
      revForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var rating = Number(ratingInput ? ratingInput.value : 0);
        if (!rating) {
          revStatus.textContent = "Silakan pilih penilaian bintang (1–5) terlebih dahulu.";
          revStatus.hidden = false;
          return;
        }
        var selectedRadio = revForm.querySelector('input[name="izin_testimoni"]:checked');
        if (!selectedRadio) {
          revStatus.textContent = "Silakan pilih salah satu opsi penampilan testimoni Anda.";
          revStatus.hidden = false;
          return;
        }
        var nama = (revForm.elements.nama.value || "").trim();
        revStatus.textContent = "Terima kasih, " + nama + "! Ulasan bintang " + rating + " Anda untuk Golden Hour telah diterima.";
        revStatus.hidden = false;
        revForm.reset();
        if (ratingInput) ratingInput.value = "";
        renderStars(0);
        for (var k = 0; k < radioItems.length; k++) {
          radioItems[k].classList.remove("is-selected");
        }
      });
    }
  }

  /* ------------------------------------------------------------------- init */
  function init() {
    if (document.getElementById("mSite")) return;

    var nav = ROUTES.map(function (route) {
      return '<a href="#' + route + '" data-route="' + route + '">' + {
        beranda: "Beranda",
        menu: "Menu",
        lokasi: "Lokasi",
        reservasi: "Reservasi & Ulasan"
      }[route] + "</a>";
    }).join("");

    var markup =
      '<div class="m-site" id="mSite">' +
      '<header class="m-header">' +
      '<nav class="m-inline-nav" aria-label="Navigasi utama">' + nav + "</nav>" +
      "</header>" +
      '<main class="m-main">' + homePage + menuPage + locationPage + reservationPage + "</main>" +
      footer +
      "</div>";

    document.body.insertAdjacentHTML("beforeend", markup);

    var site = document.getElementById("mSite");

    function currentRoute() {
      var raw = (location.hash || "").replace(/^#\/?/, "");
      try { raw = decodeURIComponent(raw); } catch (e) { /* keep raw */ }
      return ROUTES.indexOf(raw) >= 0 ? raw : "beranda";
    }

    function sync() {
      var route = currentRoute();
      var pages = site.querySelectorAll(".m-page");
      for (var i = 0; i < pages.length; i++) {
        pages[i].classList.toggle("is-active", pages[i].id === "m-" + route);
      }
      var links = site.querySelectorAll(".m-inline-nav a[data-route]");
      for (var j = 0; j < links.length; j++) {
        var current = links[j].getAttribute("data-route") === route;
        links[j].classList.toggle("is-current", current);
        if (current) links[j].setAttribute("aria-current", "page");
        else links[j].removeAttribute("aria-current");
      }
      window.scrollTo(0, 0);
    }

    initForms(site);
    window.addEventListener("hashchange", sync);
    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();