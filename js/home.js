/* PRINTZIN — Home page */
const HomePage = () => {
  const {
    nav,
    tweaks
  } = usePZ();
  const {
    CATEGORIES,
    PRODUCTS
  } = window.PZ_DATA;
  const bestsellers = PRODUCTS.filter(p => p.bestseller).slice(0, 8);
  const trending = PRODUCTS.filter(p => p.badge === 'Trending' || p.badge === 'New').slice(0, 4);
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-home fade-in"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pz-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-hero-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 15
  }), " Personalised & printed gifts"), /*#__PURE__*/React.createElement("h1", null, "Gifts as ", /*#__PURE__*/React.createElement("span", {
    className: "pz-hl"
  }, "one-of-a-kind"), /*#__PURE__*/React.createElement("br", null), "as the people you love."), /*#__PURE__*/React.createElement("p", null, "Upload a photo, add a message, and we'll print it onto mugs, frames, tees & more \u2014 beautifully made and delivered across India."), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-cta"
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
    onClick: () => nav('listing', {
      cat: 'corporate'
    })
  }, "Shop corporate gifts")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-trust"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "4.8\u2605"), /*#__PURE__*/React.createElement("span", null, "12k+ reviews")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-sep"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "2 Lakh+"), /*#__PURE__*/React.createElement("span", null, "gifts printed")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-sep"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Same-day"), /*#__PURE__*/React.createElement("span", null, "metro delivery")))), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-card pz-hc1"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: PRODUCTS[0],
    ratio: "3 / 4",
    glyph: 70,
    rounded: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-hero-tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 12
  }), " Photo Mug")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-card pz-hc2"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: PRODUCTS.find(p => p.cat === 'frames'),
    ratio: "1 / 1",
    glyph: 56,
    rounded: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-hero-tag"
  }, "Frame")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-card pz-hc3"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: PRODUCTS.find(p => p.cat === 'led'),
    ratio: "1 / 1",
    glyph: 54,
    rounded: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-hero-tag"
  }, "LED Lamp")), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-confetti c1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-confetti c2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-confetti c3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-hero-confetti c4"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-values"
  }, [{
    ic: 'sparkle',
    t: 'Free personalisation',
    s: 'Photo + text on every product'
  }, {
    ic: 'truck',
    t: 'Fast delivery',
    s: 'Same-day in metro cities'
  }, {
    ic: 'shield',
    t: 'Quality promise',
    s: 'Vivid, fade-proof prints'
  }, {
    ic: 'refresh',
    t: 'Easy reprints',
    s: 'Damaged in transit? We redo it'
  }].map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-value",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-value-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.ic,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, v.t), /*#__PURE__*/React.createElement("span", null, v.s)))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Browse the studio"), /*#__PURE__*/React.createElement("h2", null, "What will you print today?")), /*#__PURE__*/React.createElement("button", {
    className: "pz-seeall",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-cats"
  }, (() => {
    // Tweak: which category fills the showcase slot. Corporate Gifts replaces Photo Frames when selected.
    const base = CATEGORIES.filter(c => c.id !== 'corporate');
    const corp = CATEGORIES.find(c => c.id === 'corporate');
    let cats = base;
    if ((tweaks && tweaks.featuredCategory) === 'corporate' && corp) {
      // Feature Corporate Gifts in the showcase slot while keeping Photo Frames in the grid.
      cats = [];
      base.forEach(c => {
        if (c.id === 'frames') cats.push(corp);
        cats.push(c);
      });
    }
    return cats.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "pz-cat",
      onClick: () => nav('listing', {
        cat: c.id
      }),
      style: {
        '--ct': c.tint,
        '--ca': c.accent
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pz-cat-art"
    }, /*#__PURE__*/React.createElement(ProductGlyph, {
      type: c.icon,
      size: 56,
      color: c.accent
    })), /*#__PURE__*/React.createElement("strong", null, c.name), /*#__PURE__*/React.createElement("span", null, c.tag)));
  })())), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-personalise-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-pb-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--amber)'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", null, "Three steps to a gift they'll never forget"), /*#__PURE__*/React.createElement("div", {
    className: "pz-steps"
  }, [{
    n: '1',
    t: 'Pick a product',
    s: 'Mug, frame, tee, cushion & more'
  }, {
    n: '2',
    t: 'Upload & customise',
    s: 'Add your photo and a personal message'
  }, {
    n: '3',
    t: 'We print & deliver',
    s: 'Studio-quality print at your doorstep'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    className: "pz-step",
    key: s.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-step-n"
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, s.t), /*#__PURE__*/React.createElement("span", null, s.s))))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-amber btn-lg",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Personalise a gift ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-pb-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-pb-mock"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: PRODUCTS[0],
    ratio: "1 / 1",
    glyph: 90,
    rounded: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-pb-upload"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "drop_your_photo.jpg"), /*#__PURE__*/React.createElement("i", {
    className: "pz-pb-check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 3
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Loved by gifters"), /*#__PURE__*/React.createElement("h2", null, "Bestselling personalised gifts")), /*#__PURE__*/React.createElement("button", {
    className: "pz-seeall",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Shop all ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-grid"
  }, bestsellers.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-offer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-offer-side pz-offer-coral"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-amber"
  }, "Combo deal"), /*#__PURE__*/React.createElement("h3", null, "Gift combos from ", fmt(549)), /*#__PURE__*/React.createElement("p", null, "Wallets, pens & more, gift-wrapped & ready."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: () => nav('listing', {
      cat: 'combos'
    })
  }, "Shop combos")), /*#__PURE__*/React.createElement("div", {
    className: "pz-offer-side pz-offer-amber"
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-coral"
  }, "New in"), /*#__PURE__*/React.createElement("h3", null, "Glow LED photo lamps"), /*#__PURE__*/React.createElement("p", null, "Turn memories into warm light for any room."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: () => nav('listing', {
      cat: 'led'
    })
  }, "Light it up")))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Fresh & trending"), /*#__PURE__*/React.createElement("h2", null, "New this season"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-grid"
  }, trending.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  })))), /*#__PURE__*/React.createElement("section", {
    className: "wrap pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Happy gifters"), /*#__PURE__*/React.createElement("h2", null, "What people are saying"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-testis"
  }, [{
    n: 'Aarohi M.',
    g: 'Mumbai',
    t: 'The magic mug blew my husband away on our anniversary. Print quality is gorgeous!',
    p: 'Couple Magic Mug Set'
  }, {
    n: 'Rohit S.',
    g: 'Bengaluru',
    t: 'Ordered 20 custom tees for our team offsite. Delivered in 2 days, perfect prints.',
    p: 'Custom Print Tee'
  }, {
    n: 'Neha & Kabir',
    g: 'Delhi',
    t: 'The LED photo lamp is the prettiest thing in our living room now. So thoughtful.',
    p: 'Rotating LED Lamp'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-testi",
    key: i
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 15
  }), /*#__PURE__*/React.createElement("p", null, "\"", r.t, "\""), /*#__PURE__*/React.createElement("div", {
    className: "pz-testi-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-testi-av"
  }, r.n[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, r.n), /*#__PURE__*/React.createElement("span", null, r.g, " \xB7 ", r.p))))))));
};
window.HomePage = HomePage;