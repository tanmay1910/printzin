/* ============================================================
   PRINTZIN — Corporate Gifts catalogue
   Sourced from the E Gift Store corporate master catalogue.
   Multi-item gift SETS, grouped by series; each series carries a
   master-carton MOQ (minimum order quantity). Colour variants of the
   same set are merged into one product with selectable finishes, each
   showing its own catalogue photo. Prices are unit MRP in INR.
   Loads AFTER data.js, BEFORE store.js (so it is part of the static
   catalogue snapshot).
   ============================================================ */
(function () {
  if (!window.PZ_DATA) return;
  const D = window.PZ_DATA;

  /* New storefront category */
  D.CATEGORIES.push({
    id: 'corporate', name: 'Corporate Gifts', tag: 'Gifting, by the carton',
    icon: 'hamper', tint: '#E7EBF2', accent: '#37507A',
  });

  const IMG = 'assets/corp/';
  const round5 = (n) => Math.round(n / 5) * 5;

  // deterministic pseudo-rating/reviews from code so they don't reshuffle
  function seed(str) { let h = 0; for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0; return h; }

  let pid = 700;
  // spec: [name, series, moq, price, blurb, variants[[code,colourName,hex,(price)]], badge?, priceFrom?]
  const SPEC = [
    /* ---- A · Pen & Keychain · MOQ 100 ---- */
    ['Metropolitan Pen & Keychain Set','A',100,255,'A sleek metal pen paired with a leather-tab keychain in a black gift box — ready for your logo.',[['A01','Black','#241712'],['A02','Red','#B83A2E'],['A03','Blue','#2A4C86'],['A04','Tan','#B0712F']],'Bestseller'],
    ['Essential Pen & Keychain Set','A',100,168,'A slim ballpoint and a polished ring keychain — a clean, budget-friendly corporate token.',[['A05','Blue','#2A4C86'],['A06','White','#E6DFD4'],['A07','Red','#B83A2E'],['A08','Black','#241712']]],
    ['Onyx Pen & Keychain Set','A',100,204,'Matte-black pen with a brushed-steel rectangle keychain in a foam-lined box.',[['A09','Onyx','#241712']]],
    ['Gold Edition Pen & Keychain Set','A',100,345,'A gold-accented pen and matching keychain for a premium first impression.',[['A10','Gold','#B9912F']],'Premium'],
    ['Tag Pen & Keychain Set','A',100,201,'Engravable metal-tag keychain with a twist-action pen.',[['A11','Steel','#8A8A8A']]],
    ['Carabiner Pen & Keychain Set','A',100,246,'A leather-loop carabiner keychain with a dark pen — sturdy everyday carry.',[['A12','Black','#241712']]],
    ['Grid Pen & Keychain Set','A',100,291,'Textured grid-barrel pen with a rectangle tag keychain.',[['A13','Black','#241712']]],
    ['Heritage Pen & Keychain Set','A',100,390,'A premium leather-tab keychain and refined pen, boxed for gifting.',[['A14','Navy','#1E2A44'],['A15','Black & Gold','#2C2417']]],

    /* ---- B · Cardholder, Pen & Keychain · MOQ 50 ---- */
    ['Executive Card, Pen & Keychain Set','B',50,420,'A card holder, pen and keychain trio in a magnetic gift box — a polished desk set.',[['B01','Tan','#B0712F'],['B02','Grey','#6F6F6F']]],
    ['Slim Card, Pen & Keychain Set','B',50,375,'A minimal metal card case with a slim pen and keychain.',[['B03','Black','#241712']]],
    ['Prestige Card, Pen & Keychain Set','B',50,660,'A premium card holder, pen and keychain set with gold or chrome accents.',[['B04','Grey','#6F6F6F'],['B05','Navy','#1E2A44'],['B06','Black','#241712']],'Premium'],

    /* ---- C · Diary & Pen · MOQ 30 ---- */
    ['Classic Diary & Pen Set','C',30,435,'An A5 soft-cover diary with a colour-matched metal pen.',[['C01','Black','#241712'],['C02','Red','#B83A2E'],['C03','Tan','#B0712F'],['C04','Blue','#2A4C86']],'Bestseller'],
    ['Bold Diary & Pen Set','C',30,375,'A vivid A5 diary and pen in a slim presentation box.',[['C05','Black','#241712'],['C06','Red','#B83A2E'],['C07','White','#E6DFD4'],['C08','Blue','#2A4C86']]],
    ['Magnetic-Flap Diary Set','C',30,690,'A premium organiser diary with a magnetic flap and metal pen.',[['C09','Black','#241712'],['C10','Blue','#2A4C86'],['C11','Tan','#B0712F']]],
    ['Soft-Touch Diary Set','C',30,540,'A suede-finish A5 diary with a metal-clasp band and pen.',[['C13','Black','#241712'],['C14','Tan','#B0712F'],['C15','Navy','#1E2A44'],['C16','Grey','#6F6F6F']]],
    ['Cork Diary & Pen Set','C',30,510,'An eco cork-cover diary paired with a matching pen.',[['C17','Cork','#C2A06A']]],
    ['Crest Badge Diary Set','C',30,765,'A textured diary with a metal crest badge and premium pen.',[['C18','Cork','#C2A06A']],'Premium'],
    ['Bamboo-Flap Diary Set','C',30,555,'A dark diary with a curved bamboo flap closure and pen.',[['C19','Black','#241712']]],
    ['Striped Diary Set','C',30,705,'A two-tone striped A5 diary with a colour-matched pen.',[['C20','Tan','#B0712F'],['C21','Beige','#D6C6A4']]],
    ['Patterned Diary Set','C',30,810,'A geometric-pattern diary with a magnetic button and metal pen.',[['C22','Blue','#2A4C86'],['C23','Grey','#9A9A9A'],['C24','Charcoal','#3A3A3C']],'Premium'],
    ['Premium Diary Set','C',30,750,'A magnetic-flap organiser diary with a card slot and pen.',[['C25','Black','#241712'],['C26','Blue','#2A4C86'],['C27','Tan','#B0712F'],['C28','Navy','#1E2A44'],['C29','Grey','#6F6F6F']]],
    ['Pinstripe Diary Set','C',30,750,'A fine-ribbed A5 diary with a metal badge and matching pen.',[['C30','Black','#241712'],['C31','Grey','#6F6F6F'],['C32','Navy','#1E2A44'],['C33','Pink','#E08CA8']]],
    ['Leather-Tab Diary & Pen Set','C',30,660,'A smooth diary with a metal-clasp leather tab and pen.',[['C34','Black','#241712'],['C35','Tan','#B0712F']]],
    ['Eco-Flap Diary & Pen Set','C',30,630,'A natural cork-and-bamboo diary with an eco pen.',[['C36','Cork','#C2A06A'],['C37','Bamboo','#C6A96B']]],

    /* ---- E · Pen, Diary & Keychain · MOQ 30 ---- */
    ['Trio Gift Set — Pen, Diary & Keychain','E',30,600,'A coordinated A5 diary, metal pen and keychain in a foam-lined box.',[['E01','Black','#241712'],['E02','Tan','#B0712F'],['E03','Red','#B83A2E'],['E04','Blue','#2A4C86']],'Bestseller'],
    ['Premium Trio Set','E',30,840,'A suede diary, pen and metal keychain with gold or chrome accents.',[['E05','Blue','#2A4C86'],['E06','Black','#241712']],'Premium'],
    ['Classic Trio Set','E',30,765,'A clean diary, pen and keychain trio for everyday corporate gifting.',[['E07','Black','#241712'],['E08','Tan','#B0712F']]],
    ['Textured Trio Set','E',30,735,'A canvas-texture diary with a metal pen and keychain.',[['E09','Grey','#6F6F6F']]],
    ['Embossed Trio Set','E',30,780,'An embossed-crest diary with a premium pen and leather keychain.',[['E10','Tan','#B0712F']]],
    ['Charcoal Trio Set','E',30,825,'A dark canvas diary with a metal pen and keychain.',[['E11','Charcoal','#3A3A3C']]],
    ['Executive Trio Set','E',30,1335,'A premium boxed diary, pen and keychain for senior gifting.',[['E12','Black','#241712']],'Premium'],
    ['Trio Set with Lifetime Calendar','E',30,975,'A bamboo diary, pen and a perpetual desk calendar.',[['E13','Natural','#C6A96B']]],
    ['Trio Set with Desk Calendar','E',30,1035,'A diary, pen and a 2026 desk calendar in a gift box.',[['E14','Natural','#C6A96B']]],

    /* ---- F · Pen, Diary, Keychain & Cardholder · MOQ 30 ---- */
    ['Quartet Gift Set','F',30,825,'A four-piece set — diary, pen, keychain and card holder — in a magnetic box.',[['F01','Black','#241712'],['F02','Tan','#B0712F'],['F03','Blue','#2A4C86'],['F04','Red','#B83A2E']],'Bestseller'],
    ['Premium Quartet Set','F',30,1200,'A suede-finish quartet with a metal-clasp diary and card holder.',[['F05','Navy','#1E2A44'],['F06','Black','#241712']],'Premium'],
    ['Canvas Quartet Set','F',30,930,'A textured canvas quartet — diary, pen, keychain and card holder.',[['F07','Charcoal','#3A3A3C'],['F10','Black','#241712'],['F11','Tan','#B0712F']]],
    ['Quartet Set Deluxe','F',30,1035,'A premium four-piece corporate set in coordinated finishes.',[['F08','Charcoal','#3A3A3C'],['F14','Black','#241712'],['F15','Grey','#6F6F6F'],['F16','Navy','#1E2A44']]],
    ['Heritage Quartet Set','F',30,1065,'An embossed-crest diary quartet for premium gifting.',[['F09','Tan','#B0712F']],'Premium'],
    ['Quartet Set Premium','F',30,960,'A refined quartet with metal accents and a card holder.',[['F12','Tan','#B0712F'],['F13','Black','#241712']]],

    /* ---- G · Pen, Diary & Mug · MOQ 10 ---- */
    ['Mug Trio Set','G',10,1260,'An A5 diary, pen and a ceramic mug, gift-boxed for branding.',[['G01','Black','#241712'],['G04','White','#E6DFD4']]],
    ['Mug Trio Set Plus','G',10,1320,'A premium diary, pen and mug set in a magnetic box.',[['G03','Blue','#2A4C86']]],
    ['Mug Trio Premium','G',10,1380,'A suede diary, pen and mug for senior corporate gifting.',[['G05','Black','#241712']],'Premium'],
    ['Mug Trio Deluxe','G',10,1590,'A deluxe diary, pen and mug presentation set.',[['G06','Navy','#1E2A44']],'Premium'],

    /* ---- H · Bottles · MOQ 10 ---- */
    ['Hydrate Trio — Pen, Diary & Temperature Bottle','H',10,990,'An A5 diary, pen and a smart temperature-display bottle.',[['H01','Black','#241712'],['H02','Red','#B83A2E'],['H03','Blue','#2A4C86'],['H04','White','#E6DFD4']],'Bestseller'],
    ['Bottle, Pen & Keychain Set','H',10,810,'A vacuum bottle, pen and keychain in a slim gift box.',[['H11','White','#E6DFD4'],['H12','Blue','#2A4C86'],['H13','Red','#B83A2E'],['H14','Black','#241712']]],
    ['Bamboo Bottle Trio','H',10,810,'A glass bottle with a bamboo lid, pen and keychain.',[['H15','Bamboo','#C6A96B']]],
    ['Steel Bottle & Diary Set','H',10,1470,'A 750ml steel bottle with an A5 diary and pen.',[['H16','Blue','#2A4C86'],['H17','Black','#241712']],'Premium'],
    ['Glass Bottle & Cork Diary Set','H',10,1050,'A cork-sleeve glass bottle with a cork diary and pen.',[['H18','Cork','#C2A06A']]],
    ['Bamboo Bottle Set','H',10,1590,'A bamboo bottle paired with a bamboo diary and pen.',[['H19','Bamboo','#C6A96B']],'Premium'],
    ['Glass Bottle Diary Set','H',10,1140,'A glass bottle with a bamboo lid, diary and pen.',[['H20','Natural','#C6A96B']]],
    ['Steel Bottle Trio','H',10,1170,'A vacuum steel bottle with a two-tone diary and pen.',[['H21','Black','#241712'],['H22','Blue','#2A4C86'],['H23','Grey','#6F6F6F']]],
    ['Steel Bottle Trio Plus','H',10,1230,'A premium steel bottle, diary and pen with a metal-clasp band.',[['H24','Tan','#B0712F'],['H25','Navy','#1E2A44']]],
    ['Steel Bottle Trio Gold','H',10,1350,'A gold-accented steel bottle, diary and pen set.',[['H26','Black & Gold','#2C2417']],'Premium'],

    /* ---- I · Pen, Keychain, Diary & Temp Bottle · MOQ 10 ---- */
    ['Quartet Bottle Set','I',10,1140,'Pen, keychain, diary and a temperature bottle in one gift box.',[['I01','Red','#B83A2E'],['I02','White','#E6DFD4'],['I03','Blue','#2A4C86'],['I04','Black','#241712']]],

    /* ---- J · + Pen Drive · MOQ 10 · price on request ---- */
    ['Tech Quartet Set with Pen Drive','J',10,0,'Pen, 32GB pen drive, diary and a temperature bottle — a smart tech combo.',[['J01','Black','#241712'],['J02','White','#E6DFD4'],['J03','Blue','#2A4C86'],['J04','Red','#B83A2E']]],

    /* ---- K · + Pen Drive & Mug · MOQ 10 · price on request ---- */
    ['Tech Mug Set with Pen Drive','K',10,0,'Pen, 32GB pen drive, diary and a ceramic mug.',[['K01','Black','#241712'],['K02','White','#E6DFD4'],['K03','Blue','#2A4C86']]],

    /* ---- L · 5-in-1 · MOQ 10 ---- */
    ['Pinnacle 5-in-1 Set','L',10,1470,'A five-piece set — pen, diary, keychain, card holder and temperature bottle.',[['L01','Blue','#2A4C86'],['L02','Black','#241712'],['L03','Red','#B83A2E']],'Premium'],
    ['Pinnacle 5-in-1 Set — Steel Bottle','L',10,1620,'A five-piece set with a premium steel bottle and card holder.',[['L04','Tan','#B0712F'],['L05','Grey','#6F6F6F']],'Premium'],

    /* ---- M · 5-in-1 with Mug · MOQ 10 ---- */
    ['Summit 5-in-1 Set','M',10,1920,'Pen, diary, keychain, mug and temperature bottle — a complete desk set.',[['M01','Blue','#2A4C86'],['M03','White','#E6DFD4']],'Premium'],
    ['Summit 5-in-1 Set Deluxe','M',10,2220,'A deluxe five-piece set with a suede diary and premium drinkware.',[['M02','Blue','#2A4C86']],'Premium'],

    /* ---- N · 6-in-1 · MOQ 10 ---- */
    ['Apex 6-in-1 Set','N',10,1890,'Pen, diary, mug, keychain, mobile stand and temperature bottle.',[['N01','Black','#241712'],['N02','White','#E6DFD4']],'Premium'],
    ['Apex 6-in-1 Set — Colour','N',10,2010,'A vivid six-piece desk set with mug and temperature bottle.',[['N03','Red','#B83A2E'],['N04','Blue','#2A4C86']],'Premium'],
    ['Apex 6-in-1 Set — Gold','N',10,2535,'A gold-accented six-piece executive set.',[['N05','Black','#241712'],['N10','Navy','#1E2A44']],'Premium'],
    ['Workstation Set with Pen Drive','N',10,0,'Diary, pen, temperature bottle, laptop stand and a 32GB pen drive.',[['N06','White','#E6DFD4'],['N07','Black','#241712']]],
    ['Workstation Set','N',10,1980,'Diary, pen, temperature bottle and an aluminium laptop stand.',[['N08','White','#E6DFD4'],['N09','Black','#241712']],'Premium'],

    /* ---- ECO · Sustainable sets ---- */
    ['Eco Diary, Card, Keychain & Pen Set','ECO',20,1020,'A bamboo or cork diary with card holder, keychain and pen — fully sustainable.',[['ECO01','Bamboo','#C6A96B'],['ECO03','Cork','#C2A06A']]],
    ['Eco Cork Diary Set','ECO',20,960,'A cork-cover diary with card holder, keychain and pen.',[['ECO02','Cork','#C2A06A']]],
    ['Eco Diary & Bottle Set','ECO',10,1320,'A cork/bamboo diary with a glass bottle, keychain and pen.',[['ECO04','Cork','#C2A06A',1320],['ECO05','Bamboo','#C6A96B',1365],['ECO06','Natural','#9A8B73',1395]],null,true],
    ['Eco Diary, Bottle & Card Set','ECO',10,1665,'A sustainable diary, glass bottle, card holder, keychain and pen.',[['ECO09','Cork','#C2A06A',1665],['ECO07','Bamboo','#C6A96B',1725],['ECO08','Natural','#9A8B73',1740]],null,true],
    ['Grand Eco 8-in-1 Hamper','ECO',10,3660,'An eight-piece eco hamper — diary, pen, keychain, card holder, bottle, mug, tote bag and pouch.',[['ECO10','Natural','#C6A96B']],'Premium'],
    ['Eco 7-in-1 Hamper','ECO',10,2760,'A seven-piece bamboo hamper with bottle, mug and tote bag.',[['ECO11','Bamboo','#C6A96B']],'Premium'],
    ['Eco 7-in-1 Set with Calendar','ECO',10,2460,'A seven-piece eco set with bottle, calendar stand and tote bag.',[['ECO12','Bamboo','#C6A96B']]],
    ['Rice Husk Eco 6-in-1 Set','ECO',10,2220,'A planter, seed pen, rice-husk mug, coasters and a jute glass bottle.',[['ECO13','Natural','#C6A96B']]],
    ['Coffee Cork 4-in-1 Set','ECO',10,1935,'A coffee-cork diary, cork pen, rice-husk mug and coasters.',[['ECO14','Cork','#C2A06A']]],
    ['Cork Mini Combo 5-in-1','ECO',10,1005,'A cork pouch with diary, pen, keychain and card holder.',[['MINI','Cork','#C2A06A']]],

    /* ---- EC · Power & tech combos · MOQ 20 ---- */
    ['Power 6-in-1 Set','EC',20,2910,'A six-piece set with pen, diary, temperature bottle, keychain, mobile stand and a 10000mAh power bank.',[['EC01','Black','#241712']],'Premium'],
    ['Power 6-in-1 Set with Mouse','EC',20,0,'A six-piece tech set with power bank, 32GB pen drive and wireless mouse.',[['EC02','Black','#241712']]],
    ['Power Bank, Pen & Keychain Set','EC',20,0,'A 10000mAh power bank with pen and keychain.',[['EC05','Black','#241712']]],
    ['Power Bank, Pen & Pen Drive Set','EC',20,0,'A 10000mAh power bank with pen and a 32GB pen drive.',[['EC06','Black','#241712']]],
    ['Power Tech Set with Mouse','EC',20,0,'A power bank, pen, pen drive and wireless mouse combo.',[['EC07','White','#E6DFD4'],['EC08','Black','#241712']]],
    ['Diary Tech Set with Mouse','EC',20,0,'A diary, pen, 32GB pen drive and wireless mouse.',[['EC09','White','#E6DFD4'],['EC11','Black','#241712'],['EC12','Natural','#C6A96B']]],
    ['Pen Tech Set with Mouse','EC',20,0,'A pen, 32GB pen drive and wireless mouse in a gift box.',[['EC10','Black','#241712']]],
    ['Premium Tech Hamper with Speaker','EC',20,0,'A diary, pen, keychain, card holder, wireless mouse and Bluetooth speaker.',[['EC13','Natural','#C6A96B']],'Premium'],

    /* ---- JK · Employee onboarding kits · MOQ 25 ---- */
    ['Onboarding Kit — Cork Essentials','JK',25,1545,'A jute bag, A5 cork diary, glass bottle, cork pen, keychain and card holder — a ready-to-gift welcome kit.',[['JK01','Natural','#C6A96B']]],
    ['Onboarding Kit — Laptop Bag Pro','JK',25,3150,'A laptop bag, 750ml steel bottle, A5 diary, metal pen, mobile stand and laptop stand.',[['JK02','Grey','#6F6F6F']],'Premium'],
    ['Onboarding Kit — Cork Pro','JK',25,3750,'A laptop bag, steel bottle, diary, cork pen, cork mug, keychain and card holder.',[['JK03','Natural','#C6A96B']],'Premium'],
    ['Onboarding Kit — Backpack Pro','JK',25,3750,'A 3-in-1 backpack, steel bottle, diary, metal pen, keychain, card holder, mobile stand and laptop stand.',[['JK04','Navy','#1E2A44'],['JK05','Grey','#6F6F6F'],['JK06','Black','#241712']],'Premium'],
  ];

  const SERIES_LABEL = {
    A:'Pen & Keychain', B:'Card, Pen & Keychain', C:'Diary & Pen', E:'Pen, Diary & Keychain',
    F:'Pen, Diary, Keychain & Card', G:'Diary, Pen & Mug', H:'Bottle Sets', I:'Bottle Combo',
    J:'Tech Combo', K:'Tech Combo', L:'5-in-1 Sets', M:'5-in-1 Sets', N:'6-in-1 Sets',
    ECO:'Sustainable Sets', EC:'Power & Tech', JK:'Onboarding Kits',
  };

  const products = SPEC.map(([name, series, moq, price, blurb, vars, badge, priceFrom]) => {
    pid += 1;
    const variants = vars.map(([code, cname, hex, vprice]) => ({
      code, name: cname, hex, img: IMG + code + '.png', price: vprice || price,
    }));
    const poa = price === 0;
    const mrp = poa ? 0 : round5(price * 1.26);
    const s = seed(variants[0].code);
    return {
      id: 'cg' + pid,
      name, cat: 'corporate', series, moqGroup: SERIES_LABEL[series] || series,
      moq, price, mrp,
      off: poa ? 0 : Math.round((1 - price / mrp) * 100),
      poa, priceFrom: !!priceFrom,
      blurb,
      code: variants[0].code,
      image: variants[0].img,
      variants,
      colors: null, sizes: null,
      personalizable: false, corp: true,
      bestseller: badge === 'Bestseller',
      badge: badge || null,
      rating: 4.5 + (s % 5) / 10,        // 4.5–4.9
      reviews: 30 + (s % 220),
    };
  });

  D.PRODUCTS.push(...products);

  /* MOQ reference, surfaced on the Corporate Gifting page */
  D.CORP_MOQ = [
    { series: 'A', label: 'Pen & Keychain sets', moq: 100 },
    { series: 'B', label: 'Card, pen & keychain sets', moq: 50 },
    { series: 'C / E / F', label: 'Diary, pen & combo sets', moq: 30 },
    { series: 'JK', label: 'Employee onboarding kits', moq: 25 },
    { series: 'ECO', label: 'Bamboo & cork sustainable sets', moq: '10–20' },
    { series: 'EC', label: 'Power bank & tech combos', moq: 20 },
    { series: 'G–N', label: 'Drinkware & premium multi-piece sets', moq: 10 },
  ];
  window.PZ_CORP = { products };
})();
