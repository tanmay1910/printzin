/* PRINTZIN — Corporate Gifting info page (MOQ + how it works) */
const CorporatePage = () => {
  const {
    nav
  } = usePZ();
  const {
    CORP_MOQ,
    PRODUCTS
  } = window.PZ_DATA;
  const corpCount = PRODUCTS.filter(p => p.cat === 'corporate').length;
  const featured = PRODUCTS.filter(p => p.cat === 'corporate' && p.bestseller).slice(0, 4);
  const steps = [{
    ic: 'gift',
    t: 'Pick your sets',
    d: 'Browse the corporate range and shortlist sets that fit your budget and occasion.'
  }, {
    ic: 'sparkle',
    t: 'Share your logo',
    d: 'Send your artwork — we mock up UV print, engraving or screen print, free of charge.'
  }, {
    ic: 'check',
    t: 'Approve & confirm',
    d: 'Approve the proof and confirm quantities at or above the minimum order.'
  }, {
    ic: 'truck',
    t: 'We brand & deliver',
    d: 'Carton-wise production in 7–12 working days, delivered pan-India with a GST invoice.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-page fade-in"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pz-corp-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-corp-hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-hero-txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: '#C9D4E8'
    }
  }, "Printzin for Business"), /*#__PURE__*/React.createElement("h1", null, "Corporate gifting, branded with your logo"), /*#__PURE__*/React.createElement("p", null, "Diaries, drinkware, tech and complete onboarding kits \u2014 ", corpCount, " ready-to-brand gift sets, supplied by the master carton. Free logo branding on every piece."), /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('listing', {
      cat: 'corporate'
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 18
  }), " Browse corporate gifts"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost-light btn-lg",
    onClick: () => nav('contact')
  }, "Talk to our team"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-hero-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, corpCount, "+"), /*#__PURE__*/React.createElement("span", null, "gift sets")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "10"), /*#__PURE__*/React.createElement("span", null, "min. order from")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "7\u201312"), /*#__PURE__*/React.createElement("span", null, "days to deliver"))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Minimum order quantities"), /*#__PURE__*/React.createElement("h2", null, "How much do I need to order?")), /*#__PURE__*/React.createElement("p", {
    className: "pz-sec-note"
  }, "Corporate sets are produced and branded in batches, so each range carries a minimum order quantity (MOQ) \u2014 the master-carton size.")), /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-thead"
  }, /*#__PURE__*/React.createElement("span", null, "Series"), /*#__PURE__*/React.createElement("span", null, "Range"), /*#__PURE__*/React.createElement("span", {
    className: "ta-r"
  }, "Minimum order")), CORP_MOQ.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-trow",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-moq-series"
  }, m.series), /*#__PURE__*/React.createElement("span", null, m.label), /*#__PURE__*/React.createElement("span", {
    className: "ta-r"
  }, /*#__PURE__*/React.createElement("strong", null, m.moq), " pcs")))), /*#__PURE__*/React.createElement("p", {
    className: "pz-moq-foot"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 14
  }), " Mixed-set orders and quantities above the MOQ are always welcome. Need fewer? ", /*#__PURE__*/React.createElement("button", {
    className: "pz-inline-link",
    onClick: () => nav('contact')
  }, "Talk to us"), " \u2014 we\u2019ll find a way.")), /*#__PURE__*/React.createElement("section", {
    className: "pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Simple process"), /*#__PURE__*/React.createElement("h2", null, "From logo to doorstep"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "pz-corp-step",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-corp-step-n"
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    className: "pz-corp-step-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))), featured.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Popular with teams"), /*#__PURE__*/React.createElement("h2", null, "Corporate bestsellers")), /*#__PURE__*/React.createElement("button", {
    className: "pz-sec-link",
    onClick: () => nav('listing', {
      cat: 'corporate'
    })
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-grid"
  }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  })))), /*#__PURE__*/React.createElement("section", {
    className: "pz-corp-cta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Planning a bulk gift?"), /*#__PURE__*/React.createElement("p", null, "Tell us your occasion, headcount and budget \u2014 we\u2019ll curate options and share a quote with branding mock-ups.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('contact')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " Request a quote"))));
};
window.CorporatePage = CorporatePage;