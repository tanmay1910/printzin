/* PRINTZIN — Contact Us page (form → email via FormSubmit) */
const ContactPage = () => {
  const {
    nav
  } = usePZ();

  // Submissions are emailed here. To hide the address in the page source,
  // activate FormSubmit once and swap this for your hashed endpoint id.
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/gaurip5690@gmail.com';
  const [f, setF] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [err, setErr] = React.useState({});
  const [status, setStatus] = React.useState('idle'); // idle | sending | sent | error
  const set = (k, v) => setF(s => ({
    ...s,
    [k]: v
  }));
  const submit = async e => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email';
    if (!f.message.trim()) er.message = 'Please write a message';
    setErr(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: f.name,
          email: f.email,
          phone: f.phone,
          subject: f.subject || 'New enquiry from Printzin website',
          message: f.message,
          _subject: 'Printzin — new contact enquiry',
          _template: 'table'
        })
      });
      if (res.ok) {
        setStatus('sent');
        setF({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else setStatus('error');
    } catch (_) {
      setStatus('error');
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap pz-contact fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "We'd love to hear from you"), /*#__PURE__*/React.createElement("h1", null, "Get in touch"), /*#__PURE__*/React.createElement("p", null, "Questions about a gift, bulk orders or a custom idea? Send us a message and our team will get back within one working day.")), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "pz-contact-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-contact-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Call or WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919145474834",
    target: "_blank",
    rel: "noopener"
  }, "+91 91454 74834"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-contact-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Email us"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:gaurip5690@gmail.com"
  }, "gaurip5690@gmail.com"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-contact-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Delivery"), /*#__PURE__*/React.createElement("span", null, "Pan-India shipping \xB7 3\u20136 working days"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-hours"
  }, /*#__PURE__*/React.createElement("strong", null, "Support hours"), /*#__PURE__*/React.createElement("span", null, "Mon\u2013Sat \xB7 10:00 AM \u2013 7:00 PM IST"))), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-formwrap"
  }, status === 'sent' ? /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-thanks"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-contact-check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 34,
    stroke: 3
  })), /*#__PURE__*/React.createElement("h2", null, "Message sent!"), /*#__PURE__*/React.createElement("p", null, "Thanks for reaching out \u2014 we've received your message and will reply to your email shortly."), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-thanks-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => nav('home')
  }, "Back to store"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: () => setStatus('idle')
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.name ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Your name *"), /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Full name"
  }), err.name && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.name)), /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.email ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Email *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: f.email,
    onChange: e => set('email', e.target.value),
    placeholder: "you@example.com"
  }), err.email && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.email))), /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-co-field"
  }, /*#__PURE__*/React.createElement("label", null, "Mobile ", /*#__PURE__*/React.createElement("span", null, "(optional)")), /*#__PURE__*/React.createElement("input", {
    value: f.phone,
    onChange: e => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10)),
    placeholder: "10-digit mobile"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-co-field"
  }, /*#__PURE__*/React.createElement("label", null, "Subject ", /*#__PURE__*/React.createElement("span", null, "(optional)")), /*#__PURE__*/React.createElement("input", {
    value: f.subject,
    onChange: e => set('subject', e.target.value),
    placeholder: "What's this about?"
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'pz-co-field' + (err.message ? ' err' : '')
  }, /*#__PURE__*/React.createElement("label", null, "Message *"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    value: f.message,
    onChange: e => set('message', e.target.value),
    placeholder: "Tell us how we can help\u2026"
  }), err.message && /*#__PURE__*/React.createElement("i", {
    className: "pz-co-err"
  }, err.message)), status === 'error' && /*#__PURE__*/React.createElement("div", {
    className: "pz-contact-formerr"
  }, "Couldn't send right now. Please email us directly at ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:gaurip5690@gmail.com"
  }, "gaurip5690@gmail.com"), "."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn-block",
    disabled: status === 'sending'
  }, status === 'sending' ? 'Sending…' : 'Send message'), /*#__PURE__*/React.createElement("p", {
    className: "pz-contact-note"
  }, "We'll only use your details to respond to this enquiry.")))));
};
window.ContactPage = ContactPage;