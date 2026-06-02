/* PRINTZIN — Auth, Wishlist, Account */

const AuthPage = () => {
  const {
    nav,
    login
  } = usePZ();
  const [mode, setMode] = React.useState('login');
  const [f, setF] = React.useState({
    name: '',
    email: '',
    phone: '',
    pass: ''
  });
  const [err, setErr] = React.useState({});
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (mode === 'signup' && !f.name.trim()) er.name = 'Enter your name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email';
    if (f.pass.length < 4) er.pass = 'Min 4 characters';
    setErr(er);
    if (Object.keys(er).length) return;
    login({
      name: f.name.trim() || f.email.split('@')[0].replace(/^\w/, c => c.toUpperCase()),
      email: f.email
    });
    nav('home');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-auth fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-aside"
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
  }, "."))), /*#__PURE__*/React.createElement("h2", null, "Gifting, made personal."), /*#__PURE__*/React.createElement("p", null, "Save your designs, track orders and reorder favourites in a tap."), /*#__PURE__*/React.createElement("ul", {
    className: "pz-auth-perks"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 3
  }), " Faster personalised checkout"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 3
  }), " Order tracking & reprints"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 3
  }), " Exclusive member offers")), /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-deco"
  }, /*#__PURE__*/React.createElement(ProductGlyph, {
    type: "gift",
    size: 120,
    color: "rgba(255,255,255,.18)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: mode === 'login' ? 'on' : '',
    onClick: () => setMode('login')
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: mode === 'signup' ? 'on' : '',
    onClick: () => setMode('signup')
  }, "Create account")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, mode === 'signup' && /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.name ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Your name"
  }), err.name && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.name)), /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.email ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    value: f.email,
    onChange: e => set('email', e.target.value),
    placeholder: "you@example.com"
  }), err.email && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.email)), mode === 'signup' && /*#__PURE__*/React.createElement("div", {
    className: "pz-co-field"
  }, /*#__PURE__*/React.createElement("label", null, "Mobile ", /*#__PURE__*/React.createElement("span", null, "(optional)")), /*#__PURE__*/React.createElement("input", {
    value: f.phone,
    onChange: e => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10)),
    placeholder: "10-digit mobile"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.pass ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: f.pass,
    onChange: e => set('pass', e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), err.pass && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.pass)), mode === 'login' && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "pz-auth-forgot"
  }, "Forgot password?"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn-block",
    style: {
      marginTop: 8
    }
  }, mode === 'login' ? 'Sign in' : 'Create account')), /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-or"
  }, /*#__PURE__*/React.createElement("span", null, "or continue with")), /*#__PURE__*/React.createElement("div", {
    className: "pz-auth-social"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      login({
        name: 'Guest User',
        email: 'guest@printzin.in'
      });
      nav('home');
    }
  }, "Google"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      login({
        name: 'Guest User',
        email: 'guest@printzin.in'
      });
      nav('home');
    }
  }, "Phone OTP")), /*#__PURE__*/React.createElement("p", {
    className: "pz-auth-terms"
  }, "By continuing you agree to Printzin's Terms & Privacy Policy."))));
};
window.AuthPage = AuthPage;
const WishlistPage = () => {
  const {
    wishlist,
    nav
  } = usePZ();
  const items = wishlist.map(id => window.PZ_DATA.bySlug(id)).filter(Boolean);
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-empty-page fade-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 32
  })), /*#__PURE__*/React.createElement("h2", null, "Your wishlist is empty"), /*#__PURE__*/React.createElement("p", null, "Tap the heart on any gift to save it for later."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Browse gifts"));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-shop fade-in",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pz-page-title"
  }, "Your wishlist ", /*#__PURE__*/React.createElement("span", null, "(", items.length, ")")), /*#__PURE__*/React.createElement("div", {
    className: "pz-grid",
    style: {
      marginTop: 20
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  }))));
};
window.WishlistPage = WishlistPage;
const AccountPage = () => {
  const {
    user,
    nav,
    logout,
    orders
  } = usePZ();
  if (!user) {
    setTimeout(() => nav('auth'), 0);
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-account fade-in",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-account-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-account-av"
  }, user.name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hi, ", user.name.split(' ')[0], " \uD83D\uDC4B"), /*#__PURE__*/React.createElement("span", null, user.email)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => {
      logout();
      nav('home');
    }
  }, "Sign out")), /*#__PURE__*/React.createElement("h3", {
    className: "pz-account-sub"
  }, "Your orders"), orders.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pz-account-noorders"
  }, /*#__PURE__*/React.createElement("p", null, "No orders yet \u2014 your gifts will appear here."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Start shopping")) : /*#__PURE__*/React.createElement("div", {
    className: "pz-account-orders"
  }, orders.map(o => /*#__PURE__*/React.createElement("div", {
    className: "pz-order",
    key: o.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-order-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, o.id), /*#__PURE__*/React.createElement("span", null, o.date)), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-green"
  }, "Printing")), /*#__PURE__*/React.createElement("div", {
    className: "pz-order-items"
  }, o.items.map(it => /*#__PURE__*/React.createElement("span", {
    className: "pz-order-thumb",
    key: it.key
  }, it.pers.photo ? /*#__PURE__*/React.createElement("img", {
    src: it.pers.photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(ProductImage, {
    product: it.product,
    glyph: 24,
    showHint: false,
    rounded: 8
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-order-info"
  }, /*#__PURE__*/React.createElement("strong", null, o.items.reduce((s, i) => s + i.qty, 0), " item(s)"), /*#__PURE__*/React.createElement("span", null, o.slot.label)), /*#__PURE__*/React.createElement("strong", {
    className: "pz-order-total"
  }, fmt(o.total)))))));
};
window.AccountPage = AccountPage;