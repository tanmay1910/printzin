/* PRINTZIN — About Us page */
const AboutPage = () => {
  const {
    nav
  } = usePZ();
  const {
    PRODUCTS
  } = window.PZ_DATA;
  const find = name => PRODUCTS.find(p => p.name === name);

  // Curated, photogenic customised products for the galleries
  const heroPics = [find('Heart Handle Black Magic Mug'), find('Customize Collage Frame'), find('Photo Night Lamp')].filter(Boolean);
  const gallery = [find('Round Neck Cotton Biowash T-shirt'), find('5 in 1 Women Set'), find('Sublimation Tumbler 20 oz With Straw'), find('Magic Photo Mirror (White)'), find('A4 Photo Frame'), find('Polaroid Heart Photo Fridge Magnet'), find('Faux Leather Couple Combo Set of 2'), find('Magic Mug Regular')].filter(Boolean);
  const values = [{
    ic: 'sparkle',
    t: 'Made personal',
    s: 'Every piece carries your photo, your words, your moment — never off-the-shelf.'
  }, {
    ic: 'shield',
    t: 'Studio-grade prints',
    s: 'Vivid, fade-proof sublimation and UV printing that lasts for years.'
  }, {
    ic: 'truck',
    t: 'Delivered with care',
    s: 'Gift-wrapped and shipped pan-India, same-day in metro cities.'
  }, {
    ic: 'heart',
    t: 'Made with love',
    s: 'A small team that treats every order like a gift for our own family.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-about fade-in",
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pz-ab-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-ab-hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Our story"), /*#__PURE__*/React.createElement("h1", null, "We turn your memories into gifts worth keeping."), /*#__PURE__*/React.createElement("p", null, "Printzin Gifting Solution began with one simple belief \u2014 the best gifts aren't bought, they're ", /*#__PURE__*/React.createElement("em", null, "made personal"), ". From a photo mug that brings back a holiday to a glowing lamp that holds a face you love, we print emotion onto everyday things and deliver it to doorsteps across India."), /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Start personalising ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => nav('contact')
  }, "Talk to us"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-hero-art"
  }, heroPics.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: 'pz-ab-hcard pz-ab-hc' + (i + 1),
    onClick: () => nav('product', {
      id: p.id
    })
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: p,
    ratio: i === 0 ? '3 / 4' : '1 / 1',
    glyph: 64,
    rounded: 18,
    showHint: false
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-ab-htag"
  }, p.name.split(' ').slice(0, 2).join(' ')))), /*#__PURE__*/React.createElement("span", {
    className: "pz-ab-blob"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "pz-ab-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-ab-stats-in"
  }, [{
    n: '2 Lakh+',
    l: 'gifts printed & shipped'
  }, {
    n: '12k+',
    l: '5-star happy gifters'
  }, {
    n: '10',
    l: 'curated gifting studios'
  }, {
    n: '4.8★',
    l: 'average review rating'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-stat",
    key: i
  }, /*#__PURE__*/React.createElement("strong", null, s.n), /*#__PURE__*/React.createElement("span", null, s.l))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section pz-ab-story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-story-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why Printzin"), /*#__PURE__*/React.createElement("h2", null, "Thoughtful gifting, printed with heart."), /*#__PURE__*/React.createElement("p", null, "Birthdays, anniversaries, farewells, festivals \u2014 the moments that matter deserve more than a generic present. We built Printzin so anyone can create something genuinely one-of-a-kind in minutes: pick a product, upload a photo, add a message, and let our studio handle the rest."), /*#__PURE__*/React.createElement("p", null, "From single keepsakes to bulk corporate hampers, every order is printed, quality-checked and packed by people who care about how it lands in someone's hands. That's the Printzin promise \u2014 gifts as unique as the people you love."), /*#__PURE__*/React.createElement("ul", {
    className: "pz-ab-checks"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 3
  })), " Free personalisation on every product"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 3
  })), " 500+ products across 10 categories"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 3
  })), " Easy reprints if anything arrives damaged"))), /*#__PURE__*/React.createElement("button", {
    className: "pz-ab-story-pic",
    onClick: () => nav('product', {
      id: find('Photo Night Lamp').id
    })
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: find('Photo Night Lamp'),
    ratio: "4 / 5",
    glyph: 80,
    rounded: 22,
    showHint: false
  }))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Made for our customers"), /*#__PURE__*/React.createElement("h2", null, "A few favourites, personalised")), /*#__PURE__*/React.createElement("button", {
    className: "pz-seeall",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Shop everything ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-gallery"
  }, gallery.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: 'pz-ab-gtile' + (i === 0 || i === 5 ? ' tall' : ''),
    onClick: () => nav('product', {
      id: p.id
    })
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: p,
    ratio: i === 0 || i === 5 ? '3 / 4' : '1 / 1',
    glyph: 60,
    rounded: 16,
    showHint: false
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-ab-gcap"
  }, p.name))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "What we stand for"), /*#__PURE__*/React.createElement("h2", null, "Little things, done right"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-values"
  }, values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-value",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-ab-vic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", null, v.t), /*#__PURE__*/React.createElement("p", null, v.s))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-cta-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--amber)'
    }
  }, "Ready when you are"), /*#__PURE__*/React.createElement("h2", null, "Create a gift they'll never forget."), /*#__PURE__*/React.createElement("p", null, "It takes two minutes \u2014 and lasts a lifetime on their shelf.")), /*#__PURE__*/React.createElement("div", {
    className: "pz-ab-cta-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-amber btn-lg",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Browse gifts ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => nav('contact')
  }, "Bulk & corporate")))));
};
window.AboutPage = AboutPage;