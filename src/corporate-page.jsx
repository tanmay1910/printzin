/* PRINTZIN — Corporate Gifting info page (MOQ + how it works) */
const CorporatePage = () => {
  const { nav } = usePZ();
  const { CORP_MOQ, PRODUCTS } = window.PZ_DATA;
  const corpCount = PRODUCTS.filter(p => p.cat === 'corporate').length;
  const featured = PRODUCTS.filter(p => p.cat === 'corporate' && p.bestseller).slice(0, 4);

  const steps = [
    { ic: 'gift', t: 'Pick your sets', d: 'Browse the corporate range and shortlist sets that fit your budget and occasion.' },
    { ic: 'sparkle', t: 'Share your logo', d: 'Send your artwork — we mock up UV print, engraving or screen print, free of charge.' },
    { ic: 'check', t: 'Approve & confirm', d: 'Approve the proof and confirm quantities at or above the minimum order.' },
    { ic: 'truck', t: 'We brand & deliver', d: 'Carton-wise production in 7–12 working days, delivered pan-India with a GST invoice.' },
  ];

  return (
    <div className="pz-corp-page fade-in">
      {/* HERO */}
      <section className="pz-corp-hero">
        <div className="wrap pz-corp-hero-in">
          <div className="pz-corp-hero-txt">
            <span className="eyebrow" style={{ color: '#C9D4E8' }}>Printzin for Business</span>
            <h1>Corporate gifting, branded with your logo</h1>
            <p>Diaries, drinkware, tech and complete onboarding kits — {corpCount} ready-to-brand gift sets, supplied by the master carton. Free logo branding on every piece.</p>
            <div className="pz-corp-hero-cta">
              <button className="btn btn-primary btn-lg" onClick={() => nav('listing', { cat: 'corporate' })}><Icon name="gift" size={18} /> Browse corporate gifts</button>
              <button className="btn btn-ghost-light btn-lg" onClick={() => nav('contact')}>Talk to our team</button>
            </div>
          </div>
          <div className="pz-corp-hero-stats">
            <div><strong>{corpCount}+</strong><span>gift sets</span></div>
            <div><strong>10</strong><span>min. order from</span></div>
            <div><strong>7–12</strong><span>days to deliver</span></div>
          </div>
        </div>
      </section>

      <div className="wrap">
        {/* MOQ TABLE */}
        <section className="pz-section">
          <div className="pz-sec-head">
            <div>
              <span className="eyebrow">Minimum order quantities</span>
              <h2>How much do I need to order?</h2>
            </div>
            <p className="pz-sec-note">Corporate sets are produced and branded in batches, so each range carries a minimum order quantity (MOQ) — the master-carton size.</p>
          </div>
          <div className="pz-moq-table">
            <div className="pz-moq-thead">
              <span>Series</span><span>Range</span><span className="ta-r">Minimum order</span>
            </div>
            {CORP_MOQ.map((m, i) => (
              <div className="pz-moq-trow" key={i}>
                <span className="pz-moq-series">{m.series}</span>
                <span>{m.label}</span>
                <span className="ta-r"><strong>{m.moq}</strong> pcs</span>
              </div>
            ))}
          </div>
          <p className="pz-moq-foot"><Icon name="sparkle" size={14} /> Mixed-set orders and quantities above the MOQ are always welcome. Need fewer? <button className="pz-inline-link" onClick={() => nav('contact')}>Talk to us</button> — we’ll find a way.</p>
        </section>

        {/* HOW IT WORKS */}
        <section className="pz-section">
          <div className="pz-sec-head"><div><span className="eyebrow">Simple process</span><h2>From logo to doorstep</h2></div></div>
          <div className="pz-corp-steps">
            {steps.map((s, i) => (
              <div className="pz-corp-step" key={i}>
                <span className="pz-corp-step-n">{i + 1}</span>
                <span className="pz-corp-step-ic"><Icon name={s.ic} size={22} /></span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        {featured.length > 0 && (
          <section className="pz-section">
            <div className="pz-sec-head">
              <div><span className="eyebrow">Popular with teams</span><h2>Corporate bestsellers</h2></div>
              <button className="pz-sec-link" onClick={() => nav('listing', { cat: 'corporate' })}>View all <Icon name="chevron" size={14} /></button>
            </div>
            <div className="pz-grid">{featured.map(p => <ProductCard key={p.id} product={p} />)}</div>
          </section>
        )}

        {/* CTA */}
        <section className="pz-corp-cta">
          <div>
            <h2>Planning a bulk gift?</h2>
            <p>Tell us your occasion, headcount and budget — we’ll curate options and share a quote with branding mock-ups.</p>
          </div>
          <button className="btn btn-primary btn-lg" onClick={() => nav('contact')}><Icon name="mail" size={18} /> Request a quote</button>
        </section>
      </div>
    </div>
  );
};
window.CorporatePage = CorporatePage;
