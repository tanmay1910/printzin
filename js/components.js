/* PRINTZIN — shared components */

const PZContext = React.createContext(null);
window.PZContext = PZContext;
const usePZ = () => React.useContext(window.PZContext);
window.usePZ = usePZ;
const fmt = n => '₹' + Number(n).toLocaleString('en-IN');
window.fmt = fmt;

/* ---------- Rating ---------- */
const Stars = ({
  value = 5,
  size = 14
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    gap: 1,
    color: 'var(--star)'
  }
}, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
  key: i,
  name: "star",
  size: size,
  style: {
    fill: i < Math.round(value) ? 'var(--star)' : 'none',
    stroke: 'var(--star)',
    strokeWidth: 1.6
  }
})));

/* ---------- Placeholder product image ---------- */
const ProductImage = ({
  product,
  ratio = '1 / 1',
  glyph = 80,
  rounded = 16,
  showHint = true
}) => {
  const {
    CATEGORIES
  } = window.PZ_DATA;
  const cat = CATEGORIES.find(c => c.id === product.cat) || {};
  const [err, setErr] = React.useState(false);
  if (product.image && !err) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pz-imgph",
      style: {
        aspectRatio: ratio,
        background: '#fff',
        borderRadius: rounded,
        position: 'relative',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: product.image,
      alt: product.name,
      loading: "lazy",
      onError: () => setErr(true),
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-imgph",
    style: {
      aspectRatio: ratio,
      background: cat.tint || 'var(--peach)',
      borderRadius: rounded,
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .5,
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,.05) 1px, transparent 0)',
      backgroundSize: '14px 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: 10,
      zIndex: 1,
      padding: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(ProductGlyph, {
    type: cat.icon,
    size: glyph,
    color: cat.accent
  }), showHint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: cat.accent,
      opacity: .65
    }
  }, "Your photo here")));
};

/* ---------- Product card ---------- */
const ProductCard = ({
  product
}) => {
  const {
    nav,
    toggleWish,
    wishlist,
    addToCart
  } = usePZ();
  const wished = wishlist.includes(product.id);
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-card fade-in",
    onClick: () => nav('product', {
      id: product.id
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-card-img"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: product,
    glyph: 74
  }), /*#__PURE__*/React.createElement("div", {
    className: "pz-card-badges"
  }, product.badge && /*#__PURE__*/React.createElement("span", {
    className: 'badge ' + (product.badge === 'Premium' ? 'badge-amber' : product.badge === 'New' ? 'badge-pink' : 'badge-coral')
  }, product.badge), product.off >= 10 && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-soft"
  }, product.off, "% off")), /*#__PURE__*/React.createElement("button", {
    className: 'pz-wish' + (wished ? ' on' : ''),
    onClick: e => {
      e.stopPropagation();
      toggleWish(product.id);
    },
    "aria-label": "wishlist"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 18,
    style: {
      fill: wished ? 'var(--coral)' : 'none'
    }
  })), product.personalizable && /*#__PURE__*/React.createElement("span", {
    className: "pz-personalize-tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 13
  }), " Personalise"), product.corp && /*#__PURE__*/React.createElement("span", {
    className: "pz-personalize-tag pz-brand-tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 13
  }), " Add your logo")), /*#__PURE__*/React.createElement("div", {
    className: "pz-card-body"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "pz-card-name"
  }, product.name), product.corp ? /*#__PURE__*/React.createElement("div", {
    className: "pz-card-rate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-moq-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 12
  }), " MOQ ", product.moq, " pcs"), product.variants && product.variants.length > 1 && /*#__PURE__*/React.createElement("span", {
    className: "pz-card-rev"
  }, "\xB7 ", product.variants.length, " finishes")) : /*#__PURE__*/React.createElement("div", {
    className: "pz-card-rate"
  }, /*#__PURE__*/React.createElement(Stars, {
    value: product.rating,
    size: 12
  }), /*#__PURE__*/React.createElement("span", null, product.rating.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    className: "pz-card-rev"
  }, "(", product.reviews, ")")), /*#__PURE__*/React.createElement("div", {
    className: "pz-card-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-price"
  }, product.poa ? /*#__PURE__*/React.createElement("span", {
    className: "pz-price-now pz-price-poa"
  }, "Price on request") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "pz-price-now"
  }, product.priceFrom ? 'from ' : '', fmt(product.price)), product.mrp > product.price && /*#__PURE__*/React.createElement("span", {
    className: "pz-price-mrp"
  }, fmt(product.mrp)))), /*#__PURE__*/React.createElement("button", {
    className: "pz-card-add",
    onClick: e => {
      e.stopPropagation();
      product.corp ? nav('product', {
        id: product.id
      }) : addToCart(product, {}, 1);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    stroke: 2.6
  }), " ", product.corp ? 'View' : 'Add'))));
};

/* ---------- Header ---------- */
const Header = () => {
  const {
    nav,
    cartCount,
    view,
    query,
    setQuery,
    user,
    wishlist
  } = usePZ();
  const {
    CATEGORIES
  } = window.PZ_DATA;
  const [q, setQ] = React.useState(query || '');
  React.useEffect(() => {
    setQ(query || '');
  }, [query]);
  const submit = e => {
    e.preventDefault();
    nav('search', {
      q
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "pz-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-topstrip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-topstrip-in"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 15
  }), " Gifts as unique as the people you love"), /*#__PURE__*/React.createElement("span", {
    className: "pz-topstrip-mid"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 14
  }), " Free personalisation on every order"), /*#__PURE__*/React.createElement("a", {
    className: "pz-topstrip-help",
    href: "tel:+919145474834"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " Help: +91 91454 74834"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-mainbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-mainbar-in"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-logo",
    onClick: () => nav('home'),
    "aria-label": "Printzin home"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-logo-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-logo-txt"
  }, "Printzin", /*#__PURE__*/React.createElement("span", {
    className: "pz-logo-dot"
  }, "."))), /*#__PURE__*/React.createElement("form", {
    className: "pz-search",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 19
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search mugs, frames, hampers\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "pz-search-btn"
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    className: "pz-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-act",
    onClick: () => nav(user ? 'account' : 'auth')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 21
  }), /*#__PURE__*/React.createElement("span", null, user ? user.name.split(' ')[0] : 'Sign in')), /*#__PURE__*/React.createElement("button", {
    className: "pz-act",
    onClick: () => nav('wishlist')
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-act-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 21
  }), wishlist.length > 0 && /*#__PURE__*/React.createElement("i", {
    className: "pz-dot"
  }, wishlist.length)), /*#__PURE__*/React.createElement("span", null, "Wishlist")), /*#__PURE__*/React.createElement("button", {
    className: "pz-act",
    onClick: () => nav('cart')
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-act-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 21
  }), cartCount > 0 && /*#__PURE__*/React.createElement("i", {
    className: "pz-dot"
  }, cartCount)), /*#__PURE__*/React.createElement("span", null, "Cart"))))), /*#__PURE__*/React.createElement("nav", {
    className: "pz-catnav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-catnav-in no-sb"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'pz-catlink' + (view.name === 'home' ? ' active' : ''),
    onClick: () => nav('home')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 15
  }), " All Gifts"), [...CATEGORIES].sort((a, b) => a.id === 'corporate' ? -1 : b.id === 'corporate' ? 1 : 0).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: 'pz-catlink' + (c.id === 'corporate' ? ' pz-catlink-corp' : '') + (view.params?.cat === c.id ? ' active' : ''),
    onClick: () => nav('listing', {
      cat: c.id
    })
  }, c.name)))));
};

/* ---------- Footer ---------- */
const Footer = () => {
  const {
    nav
  } = usePZ();
  const {
    CATEGORIES
  } = window.PZ_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    className: "pz-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-brand"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-logo",
    onClick: () => nav('home')
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-logo-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-logo-txt",
    style: {
      color: '#fff'
    }
  }, "Printzin", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber)'
    }
  }, "."))), /*#__PURE__*/React.createElement("p", null, "Personalised gifts, printed with love and delivered to doorsteps across India. Every gift tells your story."), /*#__PURE__*/React.createElement("div", {
    className: "pz-social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Shop"), CATEGORIES.slice(0, 6).map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('listing', {
        cat: c.id
      });
    }
  }, c.name))), /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Company"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('about');
    }
  }, "About Printzin"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "How printing works"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('corporate');
    }
  }, "Bulk & corporate"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Careers")), /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-col"
  }, /*#__PURE__*/React.createElement("h5", null, "Support"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Track your order"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "Delivery & returns"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "FAQs"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('contact');
    }
  }, "Contact us"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Printzin Gifting Solution. Made with ", /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 12,
    style: {
      fill: 'var(--coral)',
      stroke: 'var(--coral)'
    }
  }), " in India."), /*#__PURE__*/React.createElement("span", {
    className: "pz-footer-pay"
  }, "Secure payments by ", /*#__PURE__*/React.createElement("strong", null, "Razorpay"), " \xB7 UPI \xB7 Cards \xB7 Netbanking"))));
};
Object.assign(window, {
  Stars,
  ProductImage,
  ProductCard,
  Header,
  Footer
});