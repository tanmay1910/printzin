/* PRINTZIN — Listing + Search pages */

const SORTS = [{
  id: 'pop',
  label: 'Popularity'
}, {
  id: 'low',
  label: 'Price: Low to High'
}, {
  id: 'high',
  label: 'Price: High to Low'
}, {
  id: 'rate',
  label: 'Top rated'
}, {
  id: 'disc',
  label: 'Discount'
}];
function applySort(list, sort) {
  const a = [...list];
  if (sort === 'low') a.sort((x, y) => x.price - y.price);else if (sort === 'high') a.sort((x, y) => y.price - x.price);else if (sort === 'rate') a.sort((x, y) => y.rating - x.rating);else if (sort === 'disc') a.sort((x, y) => y.off - x.off);else a.sort((x, y) => (y.bestseller ? 1 : 0) - (x.bestseller ? 1 : 0) || y.reviews - x.reviews);
  return a;
}
const PRICE_BANDS = [{
  id: 'b1',
  label: 'Under ₹300',
  test: p => p.price < 300
}, {
  id: 'b2',
  label: '₹300 – ₹600',
  test: p => p.price >= 300 && p.price <= 600
}, {
  id: 'b3',
  label: '₹600 – ₹1000',
  test: p => p.price > 600 && p.price <= 1000
}, {
  id: 'b4',
  label: '₹1000 – ₹2000',
  test: p => p.price > 1000 && p.price <= 2000
}, {
  id: 'b5',
  label: 'Above ₹2000',
  test: p => p.price > 2000
}];
const FilterPanel = ({
  cat,
  setCat,
  bands,
  toggleBand,
  colorSel,
  toggleColor,
  persOnly,
  setPersOnly,
  minRate,
  setMinRate,
  clearAll
}) => {
  const {
    CATEGORIES,
    COLORS
  } = window.PZ_DATA;
  return /*#__PURE__*/React.createElement("aside", {
    className: "pz-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-head"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 18
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    onClick: clearAll
  }, "Clear all")), /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-grp"
  }, /*#__PURE__*/React.createElement("h4", null, "Category"), /*#__PURE__*/React.createElement("label", {
    className: "pz-radio"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: !cat,
    onChange: () => setCat(null)
  }), /*#__PURE__*/React.createElement("span", null, "All gifts")), CATEGORIES.map(c => /*#__PURE__*/React.createElement("label", {
    className: "pz-radio",
    key: c.id
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: cat === c.id,
    onChange: () => setCat(c.id)
  }), /*#__PURE__*/React.createElement("span", null, c.name)))), /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-grp"
  }, /*#__PURE__*/React.createElement("h4", null, "Price"), PRICE_BANDS.map(b => /*#__PURE__*/React.createElement("label", {
    className: "pz-check",
    key: b.id
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: bands.includes(b.id),
    onChange: () => toggleBand(b.id)
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    stroke: 3
  })), b.label))), /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-grp"
  }, /*#__PURE__*/React.createElement("h4", null, "Print colour"), /*#__PURE__*/React.createElement("div", {
    className: "pz-swatches"
  }, COLORS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: 'pz-swatch' + (colorSel.includes(c.id) ? ' on' : ''),
    onClick: () => toggleColor(c.id),
    title: c.name,
    style: {
      '--sw': c.hex
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: c.hex
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-grp"
  }, /*#__PURE__*/React.createElement("h4", null, "Rating"), [4.5, 4, 3.5].map(r => /*#__PURE__*/React.createElement("label", {
    className: "pz-radio",
    key: r
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: minRate === r,
    onChange: () => setMinRate(minRate === r ? 0 : r)
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 13,
    style: {
      fill: 'var(--star)',
      stroke: 'var(--star)'
    }
  }), " ", r, " & up")))), /*#__PURE__*/React.createElement("div", {
    className: "pz-filter-grp"
  }, /*#__PURE__*/React.createElement("label", {
    className: "pz-check"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: persOnly,
    onChange: () => setPersOnly(!persOnly)
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    stroke: 3
  })), "Personalisable only")));
};
const ResultsGrid = ({
  list
}) => {
  if (list.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "pz-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 32
  })), /*#__PURE__*/React.createElement("h3", null, "No gifts match those filters"), /*#__PURE__*/React.createElement("p", null, "Try removing a filter or two to see more."));
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-grid pz-grid-shop"
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  })));
};
const ShopPage = ({
  mode
}) => {
  const {
    view,
    nav,
    query
  } = usePZ();
  const {
    CATEGORIES,
    PRODUCTS
  } = window.PZ_DATA;
  const isSearch = mode === 'search';
  const [cat, setCat] = React.useState(view.params?.cat || null);
  const [bands, setBands] = React.useState([]);
  const [colorSel, setColorSel] = React.useState([]);
  const [persOnly, setPersOnly] = React.useState(false);
  const [minRate, setMinRate] = React.useState(0);
  const [sort, setSort] = React.useState('pop');
  const [sortOpen, setSortOpen] = React.useState(false);
  React.useEffect(() => {
    setCat(view.params?.cat || null);
  }, [view.params?.cat]);
  const toggleBand = id => setBands(b => b.includes(id) ? b.filter(x => x !== id) : [...b, id]);
  const toggleColor = id => setColorSel(c => c.includes(id) ? c.filter(x => x !== id) : [...c, id]);
  const clearAll = () => {
    setBands([]);
    setColorSel([]);
    setPersOnly(false);
    setMinRate(0);
    if (!isSearch) setCat(null);
  };
  const q = (isSearch ? view.params?.q || query || '' : '').trim().toLowerCase();
  let list = PRODUCTS.filter(p => {
    if (cat && p.cat !== cat) return false;
    if (q) {
      const catName = (CATEGORIES.find(c => c.id === p.cat) || {}).name || '';
      if (!(p.name + ' ' + catName + ' ' + (p.blurb || '')).toLowerCase().includes(q)) return false;
    }
    if (bands.length && !bands.some(id => PRICE_BANDS.find(b => b.id === id).test(p))) return false;
    if (colorSel.length && !colorSel.some(c => (p.colors || []).includes(c))) return false;
    if (persOnly && !p.personalizable) return false;
    if (minRate && p.rating < minRate) return false;
    return true;
  });
  list = applySort(list, sort);
  const catObj = CATEGORIES.find(c => c.id === cat);
  const heading = isSearch ? `Results for “${view.params?.q || ''}”` : catObj ? catObj.name : 'All Gifts';
  const sub = isSearch ? `${list.length} gift${list.length !== 1 ? 's' : ''} found` : catObj ? catObj.tag : 'Every personalised gift in the studio';
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-shop fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-crumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home')
  }, "Home"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, isSearch ? 'Search' : catObj ? catObj.name : 'All gifts')), !isSearch && catObj && /*#__PURE__*/React.createElement("div", {
    className: "pz-cat-banner",
    style: {
      background: catObj.tint
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: catObj.accent
    }
  }, catObj.tag), /*#__PURE__*/React.createElement("h1", null, catObj.name), /*#__PURE__*/React.createElement("p", null, cat === 'corporate' ? 'Ready-to-brand gift sets, supplied by the master carton. Free logo branding on every piece.' : 'Upload your photo, add a message — we print & deliver across India.'), cat === 'corporate' && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark btn-sm",
    style: {
      marginTop: 14
    },
    onClick: () => nav('corporate')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 15
  }), " MOQ & how it works")), /*#__PURE__*/React.createElement(ProductGlyph, {
    type: catObj.icon,
    size: 120,
    color: catObj.accent
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-shop-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "pz-shop-title"
  }, heading), /*#__PURE__*/React.createElement("span", {
    className: "pz-shop-sub"
  }, sub)), /*#__PURE__*/React.createElement("div", {
    className: "pz-sort"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-sort-btn",
    onClick: () => setSortOpen(o => !o)
  }, "Sort: ", /*#__PURE__*/React.createElement("strong", null, SORTS.find(s => s.id === sort).label), " ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevronDown",
    size: 15
  })), sortOpen && /*#__PURE__*/React.createElement("div", {
    className: "pz-sort-menu",
    onMouseLeave: () => setSortOpen(false)
  }, SORTS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: s.id === sort ? 'on' : '',
    onClick: () => {
      setSort(s.id);
      setSortOpen(false);
    }
  }, s.label, s.id === sort && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    stroke: 3
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-shop-body"
  }, /*#__PURE__*/React.createElement(FilterPanel, {
    cat: isSearch ? cat : cat,
    setCat: isSearch ? setCat : c => {
      setCat(c);
      if (c) nav('listing', {
        cat: c
      });
    },
    bands,
    toggleBand,
    colorSel,
    toggleColor,
    persOnly,
    setPersOnly,
    minRate,
    setMinRate,
    clearAll
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-shop-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-resultbar"
  }, /*#__PURE__*/React.createElement("span", null, list.length, " gift", list.length !== 1 ? 's' : '')), /*#__PURE__*/React.createElement(ResultsGrid, {
    list: list
  }))));
};
window.ShopPage = ShopPage;