import { EMAIL, flavours, INSTA, LOGO, PHONE, reviews, SITE, WA, waLink } from "./data";

export function TopBar() {
  return (
    <div className="topbar">
      First order? Use code <b>Cake200</b> for Rs 200 off. Delivery all across Lahore.
    </div>
  );
}

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Cake Spot, back to top">
        <img src={LOGO} alt="" width={48} height={48} />
        <span>Cake Spot</span>
      </a>
      <nav aria-label="Sections">
        <a href="#cakes">Cakes</a>
        <a href="#order">Custom order</a>
        <a href="#flavours">Flavours</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="btn btn-cyan btn-small" href="#order">Order now</a>
    </header>
  );
}

export function Marquee() {
  const words = ["Birthday cakes", "Mehndi cakes", "Wedding cakes", "Engagement cakes", "Baby shower", "Bride to be", "Graduation", "Picture cakes", "Islamic theme", "Anniversary"];
  const line = [...words, ...words];
  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track">
        {line.map((w, k) => <span key={k}>{w}<i>✦</i></span>)}
      </div>
    </div>
  );
}

export function Perks() {
  const items: [string, string, string][] = [
    ["🚚", "Delivery across Lahore", "As early as tomorrow, at your time"],
    ["🎂", "Same as the picture", "Send any design, we match it"],
    ["💳", "Easy payment", "JazzCash, EasyPaisa, bank or card"],
    ["⭐", "4.9 on Google", "Loved in 570 reviews"],
  ];
  return (
    <section className="perks">
      <ul>
        {items.map(([i, t, d]) => (
          <li key={t} className="reveal">
            <span className="ic" aria-hidden>{i}</span>
            <div><h3>{t}</h3><p>{d}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const flColors = ["#5B3A29", "#C98B3C", "#3B2420", "#B5121B", "#E3A857", "#F3E3C3", "#B8283A", "#6F4E37", "#F7D046", "#F1EDE4", "#E86A8E"];

export function Flavours() {
  return (
    <section className="flavours" id="flavours" aria-labelledby="fl-h">
      <div className="sec-head center reveal">
        <p className="script">Inside every cake</p>
        <h2 id="fl-h">11 flavours to choose from</h2>
      </div>
      <ul className="reveal">
        {flavours.map((f, k) => (
          <li key={f.name} className={f.star ? "star" : ""}>
            <span className="dot" style={{ background: flColors[k] }} aria-hidden />
            {f.name}
            {f.star && <em>Best seller</em>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Reviews() {
  const line = [...reviews, ...reviews];
  return (
    <section className="reviews" id="reviews" aria-labelledby="rv-h">
      <div className="sec-head center reveal">
        <p className="script">Happy customers</p>
        <h2 id="rv-h">4.9 stars from 570 Google reviews</h2>
      </div>
      <div className="rv-marquee">
        <ul className="rv-track">
          {line.map((r, k) => (
            <li key={k} aria-hidden={k >= reviews.length}>
              <span className="stars" aria-hidden>★★★★★</span>
              <blockquote>{r.q}</blockquote>
              <p>{r.who} <span>on {r.src}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="ct-h">
      <div className="ct-card reveal">
        <p className="script">Come say hi</p>
        <h2 id="ct-h">Visit or message us</h2>
        <ul className="ct-list">
          <li><b>WhatsApp / Call</b><a href={`tel:+${WA}`}>{PHONE}</a></li>
          <li><b>Shop</b><span>Block K, Gulberg III, Lahore</span></li>
          <li><b>Open</b><span>Every day, 7 am to 2 am</span></li>
          <li><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><b>Instagram</b><a href={INSTA} target="_blank" rel="noreferrer">@cakespot.pk</a></li>
        </ul>
        <div className="ct-btns">
          <a className="btn btn-green" href={waLink("Assalam o Alaikum Cake Spot!")} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <a className="btn btn-white" href="https://www.google.com/maps/search/?api=1&query=Cake+Spot+customized+cake+shop+Gulberg+Lahore" target="_blank" rel="noreferrer">Directions</a>
        </div>
      </div>
      <div className="map reveal">
        <iframe title="Cake Spot on Google Maps" src="https://maps.google.com/maps?q=31.4998627,74.3569439&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <img src={LOGO} alt="Cake Spot, Taste of Royalty" width={64} height={64} />
      <p>Cake Spot, custom cakes in Lahore. <a href={SITE} target="_blank" rel="noreferrer">cakespot.pk</a></p>
      <p className="credit">
        Website redesign preview by <a href="https://portfolio1-hazel-seven.vercel.app" target="_blank" rel="noreferrer">NexaFlow (Aawaiz Ijaz)</a>. Photos and details from Cake Spot&apos;s own website and Instagram.
      </p>
    </footer>
  );
}

export function FloatWA() {
  return (
    <a className="float-wa" href={waLink("Assalam o Alaikum Cake Spot! I want to order a cake.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden><path fill="#fff" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.8-1.7l-.4-.2-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5.1 9.9 10 5.2 16 5.2s10.9 4.7 10.9 10.6S22 26.4 16 26.4zm6-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2s0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.1 1.4 3.3c.2.2 2.3 3.5 5.6 4.9 2.8 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
    </a>
  );
}
