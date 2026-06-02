/* PRINTZIN — Admin: login + product management (Supabase) */
const AdminPage = () => {
  const {
    nav
  } = usePZ();
  const S = window.PZ_STORE || {};
  const {
    CATEGORIES
  } = window.PZ_DATA;
  const [session, setSession] = React.useState(null);
  const [checking, setChecking] = React.useState(true);
  const [creds, setCreds] = React.useState({
    email: '',
    password: ''
  });
  const [authErr, setAuthErr] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [products, setProducts] = React.useState(() => window.PZ_DATA.PRODUCTS.slice());
  const [editing, setEditing] = React.useState(null); // form object or null
  const [msg, setMsg] = React.useState(null);
  const blank = {
    id: '',
    name: '',
    cat: 'mugs',
    price: '',
    mrp: '',
    code: '',
    blurb: '',
    image: '',
    badge: '',
    bestseller: false,
    personalizable: true,
    colors: 'coral, black, white',
    sizes: ''
  };

  // check existing session on mount
  React.useEffect(() => {
    let live = true;
    (async () => {
      if (S.configured) {
        const s = await S.getSession();
        if (live) setSession(s);
      }
      if (live) setChecking(false);
    })();
    return () => {
      live = false;
    };
  }, []);
  const refreshProducts = React.useCallback(async () => {
    if (S.configured) {
      const live = await S.loadProducts();
      if (live) {
        window.PZ_DATA.PRODUCTS = live;
        window.__pzRefresh && window.__pzRefresh();
        setProducts(live.slice());
        return;
      }
    }
    setProducts(window.PZ_DATA.PRODUCTS.slice());
  }, []);
  const flash = (text, ok = true) => {
    setMsg({
      text,
      ok
    });
    clearTimeout(window.__pzAdminMsg);
    window.__pzAdminMsg = setTimeout(() => setMsg(null), 3200);
  };
  const doLogin = async e => {
    e.preventDefault();
    setAuthErr(null);
    setBusy(true);
    const {
      error
    } = await S.signIn(creds.email.trim(), creds.password);
    setBusy(false);
    if (error) {
      setAuthErr(error);
      return;
    }
    const s = await S.getSession();
    setSession(s);
    refreshProducts();
  };
  const doLogout = async () => {
    await S.signOut();
    setSession(null);
  };
  const startAdd = () => {
    setEditing({
      ...blank
    });
    window.scrollTo({
      top: 0
    });
  };
  const startEdit = p => {
    setEditing({
      ...blank,
      ...p,
      colors: (p.colors || []).join(', '),
      sizes: (p.sizes || []).join(', '),
      badge: p.badge || '',
      code: p.code || '',
      image: p.image || ''
    });
    window.scrollTo({
      top: 0
    });
  };
  const saveForm = async e => {
    e.preventDefault();
    if (!editing.name.trim()) {
      flash('Product name is required', false);
      return;
    }
    if (!editing.price) {
      flash('Price is required', false);
      return;
    }
    setBusy(true);
    if (S.configured) {
      const {
        error
      } = await S.saveProduct(editing);
      setBusy(false);
      if (error) {
        flash('Save failed: ' + error, false);
        return;
      }
      flash('Saved “' + editing.name + '”');
      setEditing(null);
      refreshProducts();
    } else {
      // demo mode: update in-memory only
      const norm = S.normalize ? S.normalize(editing) : editing;
      const list = window.PZ_DATA.PRODUCTS.slice();
      const idx = list.findIndex(p => p.id === norm.id);
      if (idx >= 0) list[idx] = norm;else list.push(norm);
      window.PZ_DATA.PRODUCTS = list;
      window.__pzRefresh && window.__pzRefresh();
      setProducts(list.slice());
      setBusy(false);
      flash('Saved locally (demo mode — not connected to Supabase)');
      setEditing(null);
    }
  };
  const removeProduct = async p => {
    if (!window.confirm('Delete “' + p.name + '”? This cannot be undone.')) return;
    if (S.configured) {
      const {
        error
      } = await S.deleteProduct(p.id);
      if (error) {
        flash('Delete failed: ' + error, false);
        return;
      }
      flash('Deleted “' + p.name + '”');
      refreshProducts();
    } else {
      window.PZ_DATA.PRODUCTS = window.PZ_DATA.PRODUCTS.filter(x => x.id !== p.id);
      window.__pzRefresh && window.__pzRefresh();
      setProducts(window.PZ_DATA.PRODUCTS.slice());
      flash('Deleted locally (demo mode)');
    }
  };
  const seed = async () => {
    if (!window.confirm('Push all ' + (S.staticProducts || []).length + ' built-in products into your database? Existing rows with the same id are updated.')) return;
    setBusy(true);
    const {
      error,
      count
    } = await S.seedFromStatic();
    setBusy(false);
    if (error) {
      flash('Seed failed: ' + error, false);
      return;
    }
    flash('Seeded ' + count + ' products into the database');
    refreshProducts();
  };
  const onUpload = async file => {
    if (!file) return;
    if (!S.configured) {
      flash('Image upload needs a Supabase connection', false);
      return;
    }
    setBusy(true);
    const {
      error,
      url
    } = await S.uploadImage(file);
    setBusy(false);
    if (error) {
      flash('Upload failed: ' + error, false);
      return;
    }
    setEditing(s => ({
      ...s,
      image: url
    }));
    flash('Image uploaded');
  };
  const set = (k, v) => setEditing(s => ({
    ...s,
    [k]: v
  }));

  /* ---------- render ---------- */
  if (checking) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-loading"
    }, "Checking session\u2026");
  }

  // LOGIN GATE (only when Supabase is connected)
  if (S.configured && !session) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-login fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-login-card"
    }, /*#__PURE__*/React.createElement("button", {
      className: "pz-logo",
      onClick: () => nav('home')
    }, /*#__PURE__*/React.createElement("span", {
      className: "pz-logo-mark"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "gift",
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      className: "pz-logo-txt"
    }, "Printzin", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--amber)'
      }
    }, "."))), /*#__PURE__*/React.createElement("h1", null, "Admin sign in"), /*#__PURE__*/React.createElement("p", {
      className: "pz-admin-sub"
    }, "Manage your product catalog."), /*#__PURE__*/React.createElement("form", {
      onSubmit: doLogin
    }, /*#__PURE__*/React.createElement("div", {
      className: "pz-co-field"
    }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      value: creds.email,
      autoComplete: "username",
      onChange: e => setCreds(c => ({
        ...c,
        email: e.target.value
      })),
      placeholder: "admin@printzin.in"
    })), /*#__PURE__*/React.createElement("div", {
      className: "pz-co-field"
    }, /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: creds.password,
      autoComplete: "current-password",
      onChange: e => setCreds(c => ({
        ...c,
        password: e.target.value
      })),
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    })), authErr && /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-autherr"
    }, authErr), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-primary btn-lg btn-block",
      disabled: busy
    }, busy ? 'Signing in…' : 'Sign in')), /*#__PURE__*/React.createElement("button", {
      className: "pz-admin-back",
      onClick: () => nav('home')
    }, "\u2190 Back to store")));
  }

  // DASHBOARD
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-admin fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Product manager"), /*#__PURE__*/React.createElement("p", null, products.length, " products", S.configured ? ' · live database' : ' · demo mode (not connected)')), /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-head-actions"
  }, S.configured && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: seed,
    disabled: busy
  }, "Seed built-in catalog"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: startAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    stroke: 3
  }), " Add product"), S.configured && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: doLogout
  }, "Sign out"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => nav('home')
  }, "View store"))), !S.configured && /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-banner"
  }, /*#__PURE__*/React.createElement("strong", null, "Demo mode."), " You're not connected to Supabase yet, so changes live only in this browser tab. Add your keys in ", /*#__PURE__*/React.createElement("code", null, "src/supabase-config.js"), " to make them permanent and shared with all visitors."), msg && /*#__PURE__*/React.createElement("div", {
    className: 'pz-admin-toast' + (msg.ok ? '' : ' err')
  }, msg.text), editing && /*#__PURE__*/React.createElement("form", {
    className: "pz-admin-form",
    onSubmit: saveForm
  }, /*#__PURE__*/React.createElement("h2", null, editing.id ? 'Edit product' : 'New product'), /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-grid"
  }, /*#__PURE__*/React.createElement("label", {
    className: "f2"
  }, /*#__PURE__*/React.createElement("span", null, "Product name *"), /*#__PURE__*/React.createElement("input", {
    value: editing.name,
    onChange: e => set('name', e.target.value),
    placeholder: "e.g. Magic Photo Mug"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Category"), /*#__PURE__*/React.createElement("select", {
    value: editing.cat,
    onChange: e => set('cat', e.target.value)
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.id
  }, c.name)))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Price (\u20B9) *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: editing.price,
    onChange: e => set('price', e.target.value),
    placeholder: "299"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "MRP (\u20B9)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: editing.mrp,
    onChange: e => set('mrp', e.target.value),
    placeholder: "auto = +25%"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Product code"), /*#__PURE__*/React.createElement("input", {
    value: editing.code,
    onChange: e => set('code', e.target.value),
    placeholder: "optional"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Badge"), /*#__PURE__*/React.createElement("input", {
    value: editing.badge,
    onChange: e => set('badge', e.target.value),
    placeholder: "Bestseller / New / Combo"
  })), /*#__PURE__*/React.createElement("label", {
    className: "f3"
  }, /*#__PURE__*/React.createElement("span", null, "Description"), /*#__PURE__*/React.createElement("textarea", {
    value: editing.blurb,
    onChange: e => set('blurb', e.target.value),
    rows: 2,
    placeholder: "Short product blurb shown on the page."
  })), /*#__PURE__*/React.createElement("label", {
    className: "f2"
  }, /*#__PURE__*/React.createElement("span", null, "Image URL"), /*#__PURE__*/React.createElement("input", {
    value: editing.image,
    onChange: e => set('image', e.target.value),
    placeholder: "https://\u2026 or upload \u2192"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", null, "Upload image"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: e => onUpload(e.target.files[0])
  })), /*#__PURE__*/React.createElement("label", {
    className: "f2"
  }, /*#__PURE__*/React.createElement("span", null, "Colours (comma-separated ids)"), /*#__PURE__*/React.createElement("input", {
    value: editing.colors,
    onChange: e => set('colors', e.target.value),
    placeholder: "coral, black, white"
  })), /*#__PURE__*/React.createElement("label", {
    className: "f2"
  }, /*#__PURE__*/React.createElement("span", null, "Sizes (comma-separated, optional)"), /*#__PURE__*/React.createElement("input", {
    value: editing.sizes,
    onChange: e => set('sizes', e.target.value),
    placeholder: "S, M, L, XL"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-checks"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!editing.bestseller,
    onChange: e => set('bestseller', e.target.checked)
  }), " Bestseller"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: editing.personalizable !== false,
    onChange: e => set('personalizable', e.target.checked)
  }), " Personalizable")), /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-ghost",
    onClick: () => setEditing(null)
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: busy
  }, busy ? 'Saving…' : 'Save product'))), /*#__PURE__*/React.createElement("div", {
    className: "pz-admin-list"
  }, products.map(p => {
    const cat = CATEGORIES.find(c => c.id === p.cat);
    return /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-row",
      key: p.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-thumb"
    }, p.image ? /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: "",
      loading: "lazy"
    }) : /*#__PURE__*/React.createElement(ProductGlyph, {
      type: cat ? cat.icon : 'gift',
      size: 40,
      color: "var(--muted-2)"
    })), /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-info"
    }, /*#__PURE__*/React.createElement("strong", null, p.name), /*#__PURE__*/React.createElement("span", null, cat ? cat.name : p.cat, " \xB7 \u20B9", p.price, p.badge ? ' · ' + p.badge : '')), /*#__PURE__*/React.createElement("div", {
      className: "pz-admin-row-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm",
      onClick: () => startEdit(p)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-ghost btn-sm pz-admin-del",
      onClick: () => removeProduct(p)
    }, "Delete")));
  })));
};
window.AdminPage = AdminPage;