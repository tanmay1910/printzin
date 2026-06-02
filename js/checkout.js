/* PRINTZIN — Checkout + Confirmation */

const CheckoutPage = () => {
  const {
    cart,
    nav,
    totals,
    user,
    placeOrder
  } = usePZ();
  const [form, setForm] = React.useState({
    name: user ? user.name : '',
    phone: '',
    email: user ? user.email : '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    landmark: ''
  });
  const [slot, setSlot] = React.useState('std');
  const [errors, setErrors] = React.useState({});
  const [showRzp, setShowRzp] = React.useState(false);
  React.useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  if (cart.length === 0) {
    setTimeout(() => nav('home'), 0);
    return null;
  }
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const slots = [{
    id: 'std',
    label: 'Standard delivery',
    sub: '2–4 days',
    price: 0
  }, {
    id: 'same',
    label: 'Same-day delivery',
    sub: 'Order before 3 PM · metros',
    price: 149
  }, {
    id: 'mid',
    label: 'Midnight surprise',
    sub: '11 PM – 12 AM delivery',
    price: 249
  }];
  const slotPrice = slots.find(s => s.id === slot).price;
  const grandTotal = totals.total + slotPrice;
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = '10-digit mobile';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = '6-digit pincode';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.state.trim()) e.state = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const onPay = () => {
    if (!validate()) {
      const first = document.querySelector('.pz-co-field.err input, .pz-co-field.err textarea');
      if (first) first.focus();
      return;
    }
    setShowRzp(true);
  };
  const onSuccess = () => {
    setShowRzp(false);
    const order = placeOrder({
      address: form,
      slot: slots.find(s => s.id === slot),
      total: grandTotal
    });
    nav('confirm', {
      id: order.id
    });
  };
  const F = (k, label, opts = {}) => /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (errors[k] ? ' err' : '') + (opts.full ? ' full' : '')
  }, /*#__PURE__*/React.createElement("label", null, label, opts.opt && /*#__PURE__*/React.createElement("span", null, " (optional)")), opts.area ? /*#__PURE__*/React.createElement("textarea", {
    rows: 2,
    value: form[k],
    onChange: e => set(k, e.target.value),
    placeholder: opts.ph
  }) : /*#__PURE__*/React.createElement("input", {
    value: form[k],
    onChange: e => set(k, opts.num ? e.target.value.replace(/\D/g, '').slice(0, opts.num) : e.target.value),
    placeholder: opts.ph
  }), errors[k] && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, errors[k]));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-checkout fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-crumb"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('cart')
  }, "Cart"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, "Checkout")), /*#__PURE__*/React.createElement("h1", {
    className: "pz-page-title"
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    className: "pz-checkout-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-checkout-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "pz-co-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-co-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-co-num"
  }, "1"), /*#__PURE__*/React.createElement("h3", null, "Delivery address")), /*#__PURE__*/React.createElement("div", {
    className: "pz-co-form"
  }, F('name', 'Full name', {
    ph: 'Recipient name'
  }), F('phone', 'Mobile number', {
    ph: '10-digit mobile',
    num: 10
  }), F('email', 'Email', {
    ph: 'you@example.com'
  }), F('pincode', 'Pincode', {
    ph: '6-digit',
    num: 6
  }), F('address', 'Flat / House / Street', {
    ph: 'Address line',
    area: true,
    full: true
  }), F('city', 'City', {
    ph: 'City'
  }), F('state', 'State', {
    ph: 'State'
  }), F('landmark', 'Landmark', {
    ph: 'Nearby landmark',
    opt: true,
    full: true
  }))), /*#__PURE__*/React.createElement("section", {
    className: "pz-co-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-co-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-co-num"
  }, "2"), /*#__PURE__*/React.createElement("h3", null, "Delivery speed")), /*#__PURE__*/React.createElement("div", {
    className: "pz-slots"
  }, slots.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: 'pz-slot' + (slot === s.id ? ' on' : ''),
    onClick: () => setSlot(s.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-rzp-radio"
  }, slot === s.id && /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "pz-slot-meta"
  }, /*#__PURE__*/React.createElement("strong", null, s.label), /*#__PURE__*/React.createElement("span", null, s.sub)), /*#__PURE__*/React.createElement("span", {
    className: "pz-slot-price"
  }, s.price === 0 ? 'FREE' : fmt(s.price)))))), /*#__PURE__*/React.createElement("section", {
    className: "pz-co-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-co-step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-co-num"
  }, "3"), /*#__PURE__*/React.createElement("h3", null, "Payment")), /*#__PURE__*/React.createElement("div", {
    className: "pz-pay-method"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-pay-rzp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-pay-rzp-logo"
  }, "Razorpay"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Pay securely with Razorpay"), /*#__PURE__*/React.createElement("span", null, "UPI \xB7 Credit/Debit Cards \xB7 Netbanking \xB7 Wallets")), /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-pay-icons"
  }, ['UPI', 'VISA', 'RuPay', 'Mastercard', 'Paytm'].map(x => /*#__PURE__*/React.createElement("span", {
    key: x
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-checkout-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-co-items"
  }, /*#__PURE__*/React.createElement("h3", null, cart.reduce((s, i) => s + i.qty, 0), " items"), /*#__PURE__*/React.createElement("div", {
    className: "pz-co-itemlist no-sb"
  }, cart.map(it => /*#__PURE__*/React.createElement("div", {
    className: "pz-co-item",
    key: it.key
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-co-item-img"
  }, it.pers.photo ? /*#__PURE__*/React.createElement("img", {
    src: it.pers.photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(ProductImage, {
    product: it.product,
    glyph: 26,
    showHint: false,
    rounded: 9
  }), /*#__PURE__*/React.createElement("i", null, it.qty)), /*#__PURE__*/React.createElement("span", {
    className: "pz-co-item-name"
  }, it.product.name), /*#__PURE__*/React.createElement("span", {
    className: "pz-co-item-price"
  }, fmt(it.product.price * it.qty)))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-summary embedded"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sum-rows"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmt(totals.subtotal))), totals.discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pz-sum-disc"
  }, /*#__PURE__*/React.createElement("span", null, "Product discount"), /*#__PURE__*/React.createElement("span", null, "-", fmt(totals.discount))), totals.coupon > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pz-sum-disc"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("span", null, "-", fmt(totals.coupon))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("span", null, slotPrice === 0 ? /*#__PURE__*/React.createElement("em", {
    className: "pz-free"
  }, "FREE") : fmt(slotPrice)))), /*#__PURE__*/React.createElement("div", {
    className: "pz-sum-total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(grandTotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    onClick: onPay
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 17
  }), " Pay ", fmt(grandTotal)), /*#__PURE__*/React.createElement("div", {
    className: "pz-sum-trust"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), " 256-bit secure \xB7 Razorpay")))), showRzp && /*#__PURE__*/React.createElement(RazorpayModal, {
    amount: grandTotal,
    email: form.email,
    onClose: () => setShowRzp(false),
    onSuccess: onSuccess
  }));
};
window.CheckoutPage = CheckoutPage;

/* ============ CONFIRMATION ============ */
const ConfirmPage = () => {
  const {
    nav,
    lastOrder
  } = usePZ();
  React.useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  const o = lastOrder;
  if (!o) {
    setTimeout(() => nav('home'), 0);
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-confirm fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-burst"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 48,
    stroke: 3
  })), /*#__PURE__*/React.createElement("span", {
    className: "conf-c c1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "conf-c c2"
  }), /*#__PURE__*/React.createElement("span", {
    className: "conf-c c3"
  }), /*#__PURE__*/React.createElement("span", {
    className: "conf-c c4"
  }), /*#__PURE__*/React.createElement("span", {
    className: "conf-c c5"
  })), /*#__PURE__*/React.createElement("h1", null, "Order confirmed! \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", null, "Thank you, ", o.address.name.split(' ')[0], "! We've started printing your gift with love."), /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Order ID"), /*#__PURE__*/React.createElement("strong", null, o.id)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Paid"), /*#__PURE__*/React.createElement("strong", null, fmt(o.total))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("strong", null, o.slot.label))), /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-track"
  }, ['Order placed', 'Printing', 'Out for delivery', 'Delivered'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: 'pz-track-step' + (i === 0 ? ' done' : i === 1 ? ' active' : ''),
    key: s
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-track-dot"
  }, i === 0 ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13,
    stroke: 3
  }) : i + 1), /*#__PURE__*/React.createElement("span", {
    className: "pz-track-label"
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-items"
  }, o.items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-item",
    key: it.key
  }, /*#__PURE__*/React.createElement("span", null, it.pers.photo ? /*#__PURE__*/React.createElement("img", {
    src: it.pers.photo,
    alt: ""
  }) : /*#__PURE__*/React.createElement(ProductImage, {
    product: it.product,
    glyph: 28,
    showHint: false,
    rounded: 10
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, it.product.name), persSummary(it.pers).length > 0 && /*#__PURE__*/React.createElement("small", null, persSummary(it.pers).join(' · '))), /*#__PURE__*/React.createElement("span", {
    className: "pz-confirm-item-q"
  }, "\xD7", it.qty)))), /*#__PURE__*/React.createElement("div", {
    className: "pz-confirm-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('home')
  }, "Continue shopping"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => nav('account')
  }, "View my orders")), /*#__PURE__*/React.createElement("p", {
    className: "pz-confirm-mail"
  }, "A confirmation has been sent to ", o.address.email)));
};
window.ConfirmPage = ConfirmPage;