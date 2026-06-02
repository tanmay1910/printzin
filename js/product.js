/* PRINTZIN — Product detail page */
const ProductPage = () => {
  const {
    view,
    nav,
    addToCart,
    toggleWish,
    wishlist,
    toast
  } = usePZ();
  const {
    bySlug,
    inCat,
    CATEGORIES,
    COLORS
  } = window.PZ_DATA;
  const product = bySlug(view.params?.id) || window.PZ_DATA.PRODUCTS[0];
  const cat = CATEGORIES.find(c => c.id === product.cat);
  const [color, setColor] = React.useState((product.colors || [])[0] || null);
  const [vIdx, setVIdx] = React.useState(0);
  const [size, setSize] = React.useState((product.sizes || [])[0] || null);
  const [qty, setQty] = React.useState(1);
  const [photo, setPhoto] = React.useState(null); // dataURL
  const [photoName, setPhotoName] = React.useState('');
  const [custext, setCustText] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [activeImg, setActiveImg] = React.useState(0);
  const [tab, setTab] = React.useState('desc');
  const [pin, setPin] = React.useState('');
  const [pinResult, setPinResult] = React.useState(null);
  const fileRef = React.useRef(null);
  const wished = wishlist.includes(product.id);
  React.useEffect(() => {
    window.scrollTo({
      top: 0
    });
    setColor((product.colors || [])[0] || null);
    setSize((product.sizes || [])[0] || null);
    setVIdx(0);
    setQty(product.corp ? product.moq : 1);
    setPhoto(null);
    setPhotoName('');
    setCustText('');
    setMsg('');
    setActiveImg(0);
    setPinResult(null);
  }, [product.id]);
  const variants = product.variants || null;
  const variant = variants ? variants[vIdx] : null;
  const unitPrice = variant ? variant.price : product.price;
  const imgProduct = variant ? {
    ...product,
    image: variant.img
  } : product;
  const onFile = e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setPhotoName(f.name);
    const r = new FileReader();
    r.onload = ev => setPhoto(ev.target.result);
    r.readAsDataURL(f);
  };
  const checkPin = () => {
    if (!/^\d{6}$/.test(pin)) {
      setPinResult({
        ok: false,
        msg: 'Enter a valid 6-digit pincode'
      });
      return;
    }
    const metro = ['11', '40', '56', '60', '70', '50', '38'];
    const sameDay = metro.includes(pin.slice(0, 2));
    setPinResult({
      ok: true,
      msg: sameDay ? 'Same-day delivery available 🎉' : 'Delivers in 2–4 days',
      sameDay
    });
  };
  const buildPers = () => ({
    photo,
    photoName,
    text: custext.trim(),
    message: msg.trim(),
    color: variant ? variant.name : color,
    size,
    finish: variant ? variant.name : null
  });
  const handleAdd = buy => {
    let p = product;
    if (product.corp && variant) p = {
      ...product,
      price: variant.price,
      name: product.name + ' — ' + variant.name
    };
    addToCart(p, buildPers(), product.corp ? Math.max(qty, product.moq) : qty);
    if (buy) nav('cart');else toast(`Added “${p.name}” to cart`);
  };
  const related = inCat(product.cat).filter(p => p.id !== product.id).slice(0, 4);
  const relatedFill = related.length < 4 ? window.PZ_DATA.PRODUCTS.filter(p => p.id !== product.id && !related.includes(p)).slice(0, 4 - related.length) : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-pdp fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-crumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home')
  }, "Home"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 13
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('listing', {
      cat: product.cat
    })
  }, cat.name), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, product.name)), /*#__PURE__*/React.createElement("div", {
    className: "pz-pdp-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-gallery-thumbs"
  }, variants ? variants.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v.code,
    className: 'pz-thumb' + (vIdx === i ? ' on' : ''),
    onClick: () => setVIdx(i),
    title: v.name
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: {
      ...product,
      image: v.img
    },
    glyph: 32,
    showHint: false,
    rounded: 10
  }))) : [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: 'pz-thumb' + (activeImg === i ? ' on' : ''),
    onClick: () => setActiveImg(i)
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: product,
    glyph: 32,
    showHint: false,
    rounded: 10
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pz-gallery-main"
  }, /*#__PURE__*/React.createElement(ProductImage, {
    product: imgProduct,
    glyph: 140,
    ratio: "1 / 1",
    rounded: 20,
    showHint: !photo && !product.corp
  }), photo && /*#__PURE__*/React.createElement("div", {
    className: "pz-photo-overlay"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "your upload"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-photo-ovl-tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12,
    stroke: 3
  }), " Your photo placed")), custext && /*#__PURE__*/React.createElement("div", {
    className: "pz-text-overlay"
  }, custext), /*#__PURE__*/React.createElement("span", {
    className: "pz-gallery-preview-note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 13
  }), " Live preview"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-pdp-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-pdp-tags"
  }, product.badge && /*#__PURE__*/React.createElement("span", {
    className: 'badge ' + (product.badge === 'Premium' ? 'badge-amber' : product.badge === 'New' ? 'badge-pink' : 'badge-coral')
  }, product.badge), product.corp && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-soft"
  }, product.moqGroup), !product.corp && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-soft"
  }, product.off, "% off")), /*#__PURE__*/React.createElement("h1", {
    className: "pz-pdp-name"
  }, product.name), /*#__PURE__*/React.createElement("div", {
    className: "pz-pdp-rate"
  }, /*#__PURE__*/React.createElement(Stars, {
    value: product.rating,
    size: 17
  }), /*#__PURE__*/React.createElement("strong", null, product.rating.toFixed(1)), /*#__PURE__*/React.createElement("span", null, "\xB7 ", product.reviews.toLocaleString('en-IN'), " reviews"), /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-sold"
  }, "\xB7 5k+ gifted")), /*#__PURE__*/React.createElement("div", {
    className: "pz-pdp-price"
  }, product.poa ? /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-now"
  }, "Price on request") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-now"
  }, product.priceFrom ? 'from ' : '', fmt(unitPrice)), product.mrp > unitPrice && /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-mrp"
  }, fmt(product.mrp)), product.mrp > unitPrice && /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-save"
  }, "Save ", fmt(product.mrp - unitPrice)), product.corp && /*#__PURE__*/React.createElement("span", {
    className: "pz-pdp-unit"
  }, "/ piece"))), /*#__PURE__*/React.createElement("p", {
    className: "pz-pdp-blurb"
  }, product.blurb), variants && /*#__PURE__*/React.createElement("div", {
    className: "pz-opt"
  }, /*#__PURE__*/React.createElement("label", null, "Finish: ", /*#__PURE__*/React.createElement("strong", null, variant.name), " ", /*#__PURE__*/React.createElement("span", {
    className: "pz-opt-code"
  }, "(", variant.code, ")")), /*#__PURE__*/React.createElement("div", {
    className: "pz-swatches"
  }, variants.map((v, i) => /*#__PURE__*/React.createElement("button", {
    key: v.code,
    className: 'pz-swatch lg' + (vIdx === i ? ' on' : ''),
    onClick: () => setVIdx(i),
    title: v.name,
    style: {
      '--sw': v.hex
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: v.hex
    }
  }))))), product.corp && /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Minimum order: ", product.moq, " pieces"), /*#__PURE__*/React.createElement("span", null, "Sold by the master carton \xB7 ", product.moqGroup, " \xB7 series ", product.series))), /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Free logo branding"), /*#__PURE__*/React.createElement("span", null, "Add your company logo \u2014 UV print, engraving or screen print on every piece."))), !product.poa && /*#__PURE__*/React.createElement("div", {
    className: "pz-moq-total"
  }, /*#__PURE__*/React.createElement("span", null, "Indicative order value"), /*#__PURE__*/React.createElement("strong", null, fmt(unitPrice * Math.max(qty, product.moq))), /*#__PURE__*/React.createElement("em", null, Math.max(qty, product.moq), " \xD7 ", fmt(unitPrice))), /*#__PURE__*/React.createElement("button", {
    className: "pz-moq-link",
    onClick: () => nav('corporate')
  }, "View all MOQs & how corporate gifting works ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 13
  }))), product.sizes && /*#__PURE__*/React.createElement("div", {
    className: "pz-opt"
  }, /*#__PURE__*/React.createElement("label", null, "Size: ", /*#__PURE__*/React.createElement("strong", null, size)), /*#__PURE__*/React.createElement("div", {
    className: "pz-sizes"
  }, product.sizes.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: 'pz-size' + (size === s ? ' on' : ''),
    onClick: () => setSize(s)
  }, s)))), product.personalizable && /*#__PURE__*/React.createElement("div", {
    className: "pz-personalise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-personalise-h"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 18
  }), " Personalise it \u2014 free"), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    hidden: true,
    onChange: onFile
  }), !photo ? /*#__PURE__*/React.createElement("button", {
    className: "pz-upload",
    onClick: () => fileRef.current.click()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: 26
  }), /*#__PURE__*/React.createElement("strong", null, "Upload your photo"), /*#__PURE__*/React.createElement("span", null, "JPG or PNG \xB7 high resolution looks best")) : /*#__PURE__*/React.createElement("div", {
    className: "pz-upload-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-upload-prev"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-upload-meta"
  }, /*#__PURE__*/React.createElement("strong", null, photoName), /*#__PURE__*/React.createElement("span", null, "Looks great \u2713")), /*#__PURE__*/React.createElement("div", {
    className: "pz-upload-acts"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => fileRef.current.click()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh",
    size: 15
  }), " Replace"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPhoto(null);
      setPhotoName('');
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pz-field"
  }, /*#__PURE__*/React.createElement("label", null, "Custom text on the gift ", /*#__PURE__*/React.createElement("span", null, "(optional)")), /*#__PURE__*/React.createElement("input", {
    maxLength: 24,
    value: custext,
    onChange: e => setCustText(e.target.value),
    placeholder: "e.g. Happy Birthday Maa!"
  }), /*#__PURE__*/React.createElement("i", {
    className: "pz-count"
  }, custext.length, "/24")), /*#__PURE__*/React.createElement("div", {
    className: "pz-field"
  }, /*#__PURE__*/React.createElement("label", null, "Gift message on the card ", /*#__PURE__*/React.createElement("span", null, "(optional)")), /*#__PURE__*/React.createElement("textarea", {
    maxLength: 140,
    rows: 2,
    value: msg,
    onChange: e => setMsg(e.target.value),
    placeholder: "Add a heartfelt note we'll print on a card\u2026"
  }), /*#__PURE__*/React.createElement("i", {
    className: "pz-count"
  }, msg.length, "/140"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-buybar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(product.corp ? product.moq : 1, q - (product.corp ? 5 : 1)))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16,
    stroke: 2.6
  })), /*#__PURE__*/React.createElement("span", null, product.corp ? Math.max(qty, product.moq) : qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(q => Math.max(product.corp ? product.moq : 1, q) + (product.corp ? 5 : 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    stroke: 2.6
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    style: {
      flex: 1
    },
    onClick: () => handleAdd(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 18
  }), " ", product.poa ? 'Add to enquiry' : 'Add to cart'), /*#__PURE__*/React.createElement("button", {
    className: "pz-wish-lg",
    onClick: () => toggleWish(product.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    style: {
      fill: wished ? 'var(--coral)' : 'none',
      color: 'var(--coral)'
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark btn-lg btn-block",
    style: {
      marginTop: 10
    },
    onClick: () => handleAdd(true)
  }, product.poa ? 'Request a quote' : product.corp ? 'Order this set' : 'Buy now'), /*#__PURE__*/React.createElement("div", {
    className: "pz-deliver"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-deliver-pin"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    value: pin,
    onChange: e => setPin(e.target.value.replace(/\D/g, '').slice(0, 6)),
    placeholder: "Enter pincode"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: checkPin
  }, "Check")), pinResult && /*#__PURE__*/React.createElement("p", {
    className: 'pz-pin-res' + (pinResult.ok ? ' ok' : ' err')
  }, pinResult.ok && /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 15
  }), pinResult.msg), /*#__PURE__*/React.createElement("div", {
    className: "pz-deliver-perks"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 15
  }), " Same-day in metros"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 15
  }), " Fade-proof print"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 15
  }), " Secure Razorpay checkout"))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-tabs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-tab-row"
  }, [['desc', 'Description'], ['care', 'Care & material'], ['ship', 'Delivery & returns']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: 'pz-tab' + (tab === id ? ' on' : ''),
    onClick: () => setTab(id)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "pz-tab-body"
  }, tab === 'desc' && (product.corp ? /*#__PURE__*/React.createElement("p", null, product.blurb, " Supplied as a complete gift set in retail-ready packaging, with a minimum order of ", product.moq, " pieces (", product.moqGroup, ", series ", product.series, "). Every piece can be branded with your company logo using UV printing, laser engraving or screen printing. Lead time is typically 7\u201312 working days after artwork approval.") : /*#__PURE__*/React.createElement("p", null, product.blurb, " Each ", product.name.toLowerCase(), " is made to order in our studio using high-resolution UV printing for rich, long-lasting colour. Your uploaded photo and message are placed exactly as previewed, then quality-checked before dispatch.")), tab === 'care' && /*#__PURE__*/React.createElement("p", null, product.corp ? 'Durable, premium materials chosen for daily corporate use — steel, PU leather, bamboo and cork. Branding is fade-resistant and dishwasher-safe on drinkware where noted.' : 'Premium materials built to last. Hand-wash recommended for printed surfaces; avoid abrasive scrubbers. Prints are fade-resistant and safe for everyday use. Tees are 100% combed cotton, pre-shrunk.'), tab === 'ship' && /*#__PURE__*/React.createElement("p", null, product.corp ? 'Bulk corporate orders ship in 7–12 working days after artwork approval. Pan-India delivery with carton-wise packing. GST invoice provided. Returns accepted only for manufacturing or print defects.' : 'Same-day delivery available in metro cities for orders placed before 3 PM. Standard delivery in 2–4 days nationwide. Because each gift is personalised, returns are accepted only for damage or print defects — we\u2019ll reprint and reship free of charge.'))), /*#__PURE__*/React.createElement("section", {
    className: "pz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "You may also love"), /*#__PURE__*/React.createElement("h2", null, "More to personalise"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-grid"
  }, [...related, ...relatedFill].map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p
  })))));
};
window.ProductPage = ProductPage;