/* PRINTZIN — Cart, Checkout, Razorpay mock, Confirmation */

const persSummary = pers => {
  const bits = [];
  if (pers.color) {
    const c = (window.PZ_DATA.COLORS.find(x => x.id === pers.color) || {}).name;
    if (c) bits.push(c);
  }
  if (pers.size) bits.push('Size ' + pers.size);
  if (pers.photoName) bits.push('Photo: ' + pers.photoName);
  if (pers.text) bits.push('Text: “' + pers.text + '”');
  return bits;
};

/* ============ CART LINE ============ */
const CartLine = ({
  item
}) => {
  const {
    setQty,
    removeItem,
    nav
  } = usePZ();
  const p = item.product;
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-cline"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-cline-img",
    onClick: () => nav('product', {
      id: p.id
    })
  }, item.pers.photo ? /*#__PURE__*/React.createElement("img", {
    src: item.pers.photo,
    alt: "",
    className: "pz-cline-photo"
  }) : /*#__PURE__*/React.createElement(ProductImage, {
    product: p,
    glyph: 40,
    showHint: false,
    rounded: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-cline-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-cline-top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-cline-name",
    onClick: () => nav('product', {
      id: p.id
    })
  }, p.name), /*#__PURE__*/React.createElement("button", {
    className: "pz-cline-del",
    onClick: () => removeItem(item.key)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 17
  }))), persSummary(item.pers).length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "pz-cline-pers"
  }, persSummary(item.pers).map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkle",
    size: 11
  }), b))), /*#__PURE__*/React.createElement("div", {
    className: "pz-cline-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-qty sm"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(item.key, item.qty - 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 14,
    stroke: 2.6
  })), /*#__PURE__*/React.createElement("span", null, item.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(item.key, item.qty + 1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    stroke: 2.6
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-cline-price"
  }, /*#__PURE__*/React.createElement("strong", null, fmt(p.price * item.qty)), item.qty > 1 && /*#__PURE__*/React.createElement("span", null, fmt(p.price), " each")))));
};
const OrderSummary = ({
  totals,
  cta,
  onCta,
  coupon,
  setCoupon,
  applyCoupon,
  couponMsg
}) => /*#__PURE__*/React.createElement("div", {
  className: "pz-summary"
}, /*#__PURE__*/React.createElement("h3", null, "Order summary"), setCoupon && /*#__PURE__*/React.createElement("div", {
  className: "pz-coupon"
}, /*#__PURE__*/React.createElement("div", {
  className: "pz-coupon-in"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "tag",
  size: 17
}), /*#__PURE__*/React.createElement("input", {
  value: coupon,
  onChange: e => setCoupon(e.target.value.toUpperCase()),
  placeholder: "Coupon code"
}), /*#__PURE__*/React.createElement("button", {
  onClick: applyCoupon
}, "Apply")), couponMsg && /*#__PURE__*/React.createElement("p", {
  className: 'pz-coupon-msg' + (couponMsg.ok ? ' ok' : ' err')
}, couponMsg.text), /*#__PURE__*/React.createElement("div", {
  className: "pz-coupon-hint"
}, "Try ", /*#__PURE__*/React.createElement("button", {
  onClick: () => {
    setCoupon('PRINTZIN10');
  }
}, "PRINTZIN10"), " for 10% off")), /*#__PURE__*/React.createElement("div", {
  className: "pz-sum-rows"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmt(totals.subtotal))), totals.discount > 0 && /*#__PURE__*/React.createElement("div", {
  className: "pz-sum-disc"
}, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("span", null, "-", fmt(totals.discount))), totals.coupon > 0 && /*#__PURE__*/React.createElement("div", {
  className: "pz-sum-disc"
}, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("span", null, "-", fmt(totals.coupon))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Delivery"), /*#__PURE__*/React.createElement("span", null, totals.delivery === 0 ? /*#__PURE__*/React.createElement("em", {
  className: "pz-free"
}, "FREE") : fmt(totals.delivery)))), /*#__PURE__*/React.createElement("div", {
  className: "pz-sum-total"
}, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmt(totals.total))), /*#__PURE__*/React.createElement("p", {
  className: "pz-sum-saved"
}, "You save ", fmt(totals.discount + totals.coupon + (totals.deliverySaved || 0)), " on this order \uD83C\uDF89"), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-primary btn-lg btn-block",
  onClick: onCta
}, cta, " ", /*#__PURE__*/React.createElement(Icon, {
  name: "arrowRight",
  size: 18
})), /*#__PURE__*/React.createElement("div", {
  className: "pz-sum-trust"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "lock",
  size: 14
}), " Secured by Razorpay \xB7 100% safe"));

/* ============ CART PAGE ============ */
const CartPage = () => {
  const {
    cart,
    nav,
    totals
  } = usePZ();
  if (cart.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-empty-page fade-in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cart",
    size: 34
  })), /*#__PURE__*/React.createElement("h2", null, "Your cart is empty"), /*#__PURE__*/React.createElement("p", null, "Let's fill it with something they'll treasure."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => nav('listing', {
      cat: 'mugs'
    })
  }, "Start personalising"));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-cartpage fade-in"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pz-page-title"
  }, "Your cart ", /*#__PURE__*/React.createElement("span", null, "(", cart.reduce((s, i) => s + i.qty, 0), " items)")), /*#__PURE__*/React.createElement("div", {
    className: "pz-cart-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-cart-lines"
  }, cart.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.key,
    item: it
  })), /*#__PURE__*/React.createElement("button", {
    className: "pz-cart-continue",
    onClick: () => nav('home')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron",
    size: 15,
    style: {
      transform: 'rotate(180deg)'
    }
  }), " Continue shopping")), /*#__PURE__*/React.createElement(OrderSummary, {
    totals: totals,
    cta: "Proceed to checkout",
    onCta: () => nav('checkout')
  })));
};
window.CartPage = CartPage;

/* ============ RAZORPAY MOCK ============ */
const RazorpayModal = ({
  amount,
  email,
  onClose,
  onSuccess
}) => {
  const [method, setMethod] = React.useState('upi');
  const [stage, setStage] = React.useState('select'); // select | processing | success
  const [upi, setUpi] = React.useState('');
  const methods = [{
    id: 'upi',
    label: 'UPI',
    sub: 'GPay, PhonePe, Paytm'
  }, {
    id: 'card',
    label: 'Cards',
    sub: 'Visa, Mastercard, RuPay'
  }, {
    id: 'nb',
    label: 'Netbanking',
    sub: 'All major banks'
  }, {
    id: 'wallet',
    label: 'Wallets',
    sub: 'Paytm, Mobikwik'
  }];
  const pay = () => {
    setStage('processing');
    setTimeout(() => setStage('success'), 1900);
    setTimeout(() => onSuccess(), 3100);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-backdrop",
    onClick: stage === 'select' ? onClose : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-merchant"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-rzp-logo"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Printzin Gifting"), /*#__PURE__*/React.createElement("span", null, email || 'guest@printzin.in'))), stage === 'select' && /*#__PURE__*/React.createElement("button", {
    className: "pz-rzp-close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-amount"
  }, /*#__PURE__*/React.createElement("span", null, "Amount payable"), /*#__PURE__*/React.createElement("strong", null, fmt(amount))), stage === 'select' && /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-methods"
  }, methods.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: 'pz-rzp-method' + (method === m.id ? ' on' : ''),
    onClick: () => setMethod(m.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-rzp-radio"
  }, method === m.id && /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, m.label), /*#__PURE__*/React.createElement("span", null, m.sub))))), method === 'upi' && /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-field"
  }, /*#__PURE__*/React.createElement("input", {
    value: upi,
    onChange: e => setUpi(e.target.value),
    placeholder: "yourname@upi"
  })), method === 'card' && /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-card"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Card number",
    maxLength: 19
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    maxLength: 7
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVV",
    maxLength: 3
  }))), /*#__PURE__*/React.createElement("button", {
    className: "pz-rzp-pay",
    onClick: pay
  }, "Pay ", fmt(amount)), /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-secure"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), " This is a demo checkout \u2014 no real payment is taken")), stage === 'processing' && /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-spinner"
  }), /*#__PURE__*/React.createElement("strong", null, "Processing payment\u2026"), /*#__PURE__*/React.createElement("span", null, "Please don't close this window")), stage === 'success' && /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rzp-tick"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 40,
    stroke: 3
  })), /*#__PURE__*/React.createElement("strong", null, "Payment successful"), /*#__PURE__*/React.createElement("span", null, "Redirecting to your order\u2026"))));
};
window.RazorpayModal = RazorpayModal;
window.OrderSummary = OrderSummary;
window.persSummary = persSummary;
window.CartLineExport = CartLine;