/* PRINTZIN — Product detail page */
const ProductPage = () => {
  const { view, nav, addToCart, toggleWish, wishlist, toast } = usePZ();
  const { bySlug, inCat, CATEGORIES, COLORS } = window.PZ_DATA;
  const product = bySlug(view.params?.id) || window.PZ_DATA.PRODUCTS[0];
  const cat = CATEGORIES.find(c => c.id === product.cat);

  const [color, setColor] = React.useState((product.colors||[])[0] || null);
  const [vIdx, setVIdx] = React.useState(0);
  const [size, setSize] = React.useState((product.sizes||[])[0] || null);
  const [qty, setQty] = React.useState(1);
  const [photo, setPhoto] = React.useState(null);      // dataURL
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
    window.scrollTo({ top: 0 });
    setColor((product.colors||[])[0]||null); setSize((product.sizes||[])[0]||null);
    setVIdx(0); setQty(product.corp ? product.moq : 1);
    setPhoto(null); setPhotoName(''); setCustText(''); setMsg(''); setActiveImg(0); setPinResult(null);
  }, [product.id]);

  const variants = product.variants || null;
  const variant = variants ? variants[vIdx] : null;
  const unitPrice = variant ? variant.price : product.price;
  const imgProduct = variant ? { ...product, image: variant.img } : product;

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setPhotoName(f.name);
    const r = new FileReader();
    r.onload = (ev) => setPhoto(ev.target.result);
    r.readAsDataURL(f);
  };

  const checkPin = () => {
    if (!/^\d{6}$/.test(pin)) { setPinResult({ ok: false, msg: 'Enter a valid 6-digit pincode' }); return; }
    const metro = ['11','40','56','60','70','50','38'];
    const sameDay = metro.includes(pin.slice(0,2));
    setPinResult({ ok: true, msg: sameDay ? 'Same-day delivery available 🎉' : 'Delivers in 2–4 days', sameDay });
  };

  const buildPers = () => ({ photo, photoName, text: custext.trim(), message: msg.trim(), color: variant ? variant.name : color, size, finish: variant ? variant.name : null });

  const handleAdd = (buy) => {
    let p = product;
    if (product.corp && variant) p = { ...product, price: variant.price, name: product.name + ' — ' + variant.name };
    addToCart(p, buildPers(), product.corp ? Math.max(qty, product.moq) : qty);
    if (buy) nav('cart');
    else toast(`Added “${p.name}” to cart`);
  };

  const related = inCat(product.cat).filter(p => p.id !== product.id).slice(0, 4);
  const relatedFill = related.length < 4 ? window.PZ_DATA.PRODUCTS.filter(p=>p.id!==product.id && !related.includes(p)).slice(0, 4-related.length) : [];

  return (
    <div className="wrap pz-pdp fade-in">
      <div className="pz-crumb">
        <button onClick={() => nav('home')}>Home</button><Icon name="chevron" size={13} />
        <button onClick={() => nav('listing', { cat: product.cat })}>{cat.name}</button><Icon name="chevron" size={13} />
        <span>{product.name}</span>
      </div>

      <div className="pz-pdp-top">
        {/* GALLERY */}
        <div className="pz-gallery">
          <div className="pz-gallery-thumbs">
            {variants ? variants.map((v, i) => (
              <button key={v.code} className={'pz-thumb' + (vIdx===i?' on':'')} onClick={() => setVIdx(i)} title={v.name}>
                <ProductImage product={{ ...product, image: v.img }} glyph={32} showHint={false} rounded={10} />
              </button>
            )) : [0,1,2,3].map(i => (
              <button key={i} className={'pz-thumb' + (activeImg===i?' on':'')} onClick={() => setActiveImg(i)}>
                <ProductImage product={product} glyph={32} showHint={false} rounded={10} />
              </button>
            ))}
          </div>
          <div className="pz-gallery-main">
            <ProductImage product={imgProduct} glyph={140} ratio="1 / 1" rounded={20} showHint={!photo && !product.corp} />
            {photo && (
              <div className="pz-photo-overlay">
                <img src={photo} alt="your upload" />
                <span className="pz-photo-ovl-tag"><Icon name="check" size={12} stroke={3}/> Your photo placed</span>
              </div>
            )}
            {custext && <div className="pz-text-overlay">{custext}</div>}
            <span className="pz-gallery-preview-note"><Icon name="sparkle" size={13}/> Live preview</span>
          </div>
        </div>

        {/* INFO */}
        <div className="pz-pdp-info">
          <div className="pz-pdp-tags">
            {product.badge && <span className={'badge ' + (product.badge==='Premium'?'badge-amber':product.badge==='New'?'badge-pink':'badge-coral')}>{product.badge}</span>}
            {product.corp && <span className="badge badge-soft">{product.moqGroup}</span>}
            {!product.corp && <span className="badge badge-soft">{product.off}% off</span>}
          </div>
          <h1 className="pz-pdp-name">{product.name}</h1>
          <div className="pz-pdp-rate">
            <Stars value={product.rating} size={17} />
            <strong>{product.rating.toFixed(1)}</strong>
            <span>· {product.reviews.toLocaleString('en-IN')} reviews</span>
            <span className="pz-pdp-sold">· 5k+ gifted</span>
          </div>
          <div className="pz-pdp-price">
            {product.poa ? (
              <span className="pz-pdp-now">Price on request</span>
            ) : (<>
              <span className="pz-pdp-now">{product.priceFrom?'from ':''}{fmt(unitPrice)}</span>
              {product.mrp > unitPrice && <span className="pz-pdp-mrp">{fmt(product.mrp)}</span>}
              {product.mrp > unitPrice && <span className="pz-pdp-save">Save {fmt(product.mrp - unitPrice)}</span>}
              {product.corp && <span className="pz-pdp-unit">/ piece</span>}
            </>)}
          </div>
          <p className="pz-pdp-blurb">{product.blurb}</p>

          {variants && (
            <div className="pz-opt">
              <label>Finish: <strong>{variant.name}</strong> <span className="pz-opt-code">({variant.code})</span></label>
              <div className="pz-swatches">
                {variants.map((v,i) => (
                  <button key={v.code} className={'pz-swatch lg'+(vIdx===i?' on':'')} onClick={()=>setVIdx(i)} title={v.name} style={{'--sw':v.hex}}><span style={{background:v.hex}}/></button>
                ))}
              </div>
            </div>
          )}

          {product.corp && (
            <div className="pz-moq-panel">
              <div className="pz-moq-row">
                <Icon name="tag" size={18} />
                <div>
                  <strong>Minimum order: {product.moq} pieces</strong>
                  <span>Sold by the master carton · {product.moqGroup} · series {product.series}</span>
                </div>
              </div>
              <div className="pz-moq-row">
                <Icon name="sparkle" size={18} />
                <div>
                  <strong>Free logo branding</strong>
                  <span>Add your company logo — UV print, engraving or screen print on every piece.</span>
                </div>
              </div>
              {!product.poa && (
                <div className="pz-moq-total">
                  <span>Indicative order value</span>
                  <strong>{fmt(unitPrice * Math.max(qty, product.moq))}</strong>
                  <em>{Math.max(qty, product.moq)} × {fmt(unitPrice)}</em>
                </div>
              )}
              <button className="pz-moq-link" onClick={()=>nav('corporate')}>View all MOQs &amp; how corporate gifting works <Icon name="chevron" size={13} /></button>
            </div>
          )}


          {product.sizes && (
            <div className="pz-opt">
              <label>Size: <strong>{size}</strong></label>
              <div className="pz-sizes">
                {product.sizes.map(s => <button key={s} className={'pz-size'+(size===s?' on':'')} onClick={()=>setSize(s)}>{s}</button>)}
              </div>
            </div>
          )}

          {/* PERSONALISE */}
          {product.personalizable && (
            <div className="pz-personalise">
              <div className="pz-personalise-h"><Icon name="sparkle" size={18}/> Personalise it — free</div>

              <input ref={fileRef} type="file" accept="image/*" hidden onChange={onFile} />
              {!photo ? (
                <button className="pz-upload" onClick={() => fileRef.current.click()}>
                  <Icon name="upload" size={26} />
                  <strong>Upload your photo</strong>
                  <span>JPG or PNG · high resolution looks best</span>
                </button>
              ) : (
                <div className="pz-upload-done">
                  <span className="pz-upload-prev"><img src={photo} alt=""/></span>
                  <div className="pz-upload-meta"><strong>{photoName}</strong><span>Looks great ✓</span></div>
                  <div className="pz-upload-acts">
                    <button onClick={() => fileRef.current.click()}><Icon name="refresh" size={15}/> Replace</button>
                    <button onClick={() => { setPhoto(null); setPhotoName(''); }}><Icon name="trash" size={15}/></button>
                  </div>
                </div>
              )}

              <div className="pz-field">
                <label>Custom text on the gift <span>(optional)</span></label>
                <input maxLength={24} value={custext} onChange={e=>setCustText(e.target.value)} placeholder="e.g. Happy Birthday Maa!" />
                <i className="pz-count">{custext.length}/24</i>
              </div>
              <div className="pz-field">
                <label>Gift message on the card <span>(optional)</span></label>
                <textarea maxLength={140} rows={2} value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Add a heartfelt note we'll print on a card…" />
                <i className="pz-count">{msg.length}/140</i>
              </div>
            </div>
          )}

          {/* QTY + ACTIONS */}
          <div className="pz-buybar">
            <div className="pz-qty">
              <button onClick={() => setQty(q => Math.max(product.corp ? product.moq : 1, q - (product.corp ? 5 : 1)))}><Icon name="minus" size={16} stroke={2.6}/></button>
              <span>{product.corp ? Math.max(qty, product.moq) : qty}</span>
              <button onClick={() => setQty(q => Math.max(product.corp?product.moq:1, q) + (product.corp ? 5 : 1))}><Icon name="plus" size={16} stroke={2.6}/></button>
            </div>
            <button className="btn btn-primary btn-lg" style={{flex:1}} onClick={() => handleAdd(false)}><Icon name="cart" size={18}/> {product.poa ? 'Add to enquiry' : 'Add to cart'}</button>
            <button className="pz-wish-lg" onClick={() => toggleWish(product.id)}><Icon name="heart" size={20} style={{fill: wished?'var(--coral)':'none', color:'var(--coral)'}}/></button>
          </div>
          <button className="btn btn-dark btn-lg btn-block" style={{marginTop:10}} onClick={() => handleAdd(true)}>{product.poa ? 'Request a quote' : (product.corp ? 'Order this set' : 'Buy now')}</button>

          {/* DELIVERY */}
          <div className="pz-deliver">
            <div className="pz-deliver-pin">
              <Icon name="pin" size={18}/>
              <input value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,'').slice(0,6))} placeholder="Enter pincode" />
              <button onClick={checkPin}>Check</button>
            </div>
            {pinResult && <p className={'pz-pin-res'+(pinResult.ok?' ok':' err')}>{pinResult.ok && <Icon name="truck" size={15}/>}{pinResult.msg}</p>}
            <div className="pz-deliver-perks">
              <span><Icon name="truck" size={15}/> Same-day in metros</span>
              <span><Icon name="shield" size={15}/> Fade-proof print</span>
              <span><Icon name="lock" size={15}/> Secure Razorpay checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="pz-tabs">
        <div className="pz-tab-row">
          {[['desc','Description'],['care','Care & material'],['ship','Delivery & returns']].map(([id,l])=>(
            <button key={id} className={'pz-tab'+(tab===id?' on':'')} onClick={()=>setTab(id)}>{l}</button>
          ))}
        </div>
        <div className="pz-tab-body">
          {tab==='desc' && (product.corp
            ? <p>{product.blurb} Supplied as a complete gift set in retail-ready packaging, with a minimum order of {product.moq} pieces ({product.moqGroup}, series {product.series}). Every piece can be branded with your company logo using UV printing, laser engraving or screen printing. Lead time is typically 7–12 working days after artwork approval.</p>
            : <p>{product.blurb} Each {product.name.toLowerCase()} is made to order in our studio using high-resolution UV printing for rich, long-lasting colour. Your uploaded photo and message are placed exactly as previewed, then quality-checked before dispatch.</p>)}
          {tab==='care' && <p>{product.corp ? 'Durable, premium materials chosen for daily corporate use — steel, PU leather, bamboo and cork. Branding is fade-resistant and dishwasher-safe on drinkware where noted.' : 'Premium materials built to last. Hand-wash recommended for printed surfaces; avoid abrasive scrubbers. Prints are fade-resistant and safe for everyday use. Tees are 100% combed cotton, pre-shrunk.'}</p>}
          {tab==='ship' && <p>{product.corp ? 'Bulk corporate orders ship in 7–12 working days after artwork approval. Pan-India delivery with carton-wise packing. GST invoice provided. Returns accepted only for manufacturing or print defects.' : 'Same-day delivery available in metro cities for orders placed before 3 PM. Standard delivery in 2–4 days nationwide. Because each gift is personalised, returns are accepted only for damage or print defects — we\u2019ll reprint and reship free of charge.'}</p>}
        </div>
      </div>

      {/* RELATED */}
      <section className="pz-section">
        <div className="pz-sec-head"><div><span className="eyebrow">You may also love</span><h2>More to personalise</h2></div></div>
        <div className="pz-grid">{[...related, ...relatedFill].map(p => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </div>
  );
};
window.ProductPage = ProductPage;
