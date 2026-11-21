import { EMAIL, flavours, INSTA, LOGO, PHONE, reviews, SITE, WA, waLink } from "./data";

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Cake Spot, back to top">
        <img src={LOGO} alt="" width={52} height={52} />
        <span>
          Cake Spot
          <small>Taste of Royalty</small>
        </span>
      </a>
      <nav aria-label="Sections">
        <a href="#cakes">Cakes</a>
        <a href="#order">Custom order</a>
        <a href="#flavours">Flavours</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="btn btn-cyan btn-small" href={waLink("Assalam o Alaikum Cake Spot!")} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  );
}

export function Promises() {
  const items = [
    ["Delivery across Lahore", "As early as tomorrow, at the time you choose."],
    ["Same as the picture", "Send any design. Our decorators match it, or make it your own."],
    ["Pay the easy way", "JazzCash, EasyPaisa, bank transfer or card."],
  ];
  return (
    <section className="promises" aria-label="Why order from Cake Spot">
      <ul>
        {items.map(([t, d]) => (
          <li key={t}>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Flavours() {
  return (
    <section className="flavours" id="flavours" aria-labelledby="fl-h">
      <h2 id="fl-h">Eleven flavours inside</h2>
      <p className="sub">Every theme cake comes in any of these. Two-flavour cakes on request.</p>
      <ul>
        {flavours.map((f) => (
          <li key={f.name} className={f.star ? "star" : ""}>
            {f.name}
            {f.star && <span>Best seller</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Steps() {
  const s = [
    ["Pick or describe your cake", "Choose one from our cakes, or send us a picture and your theme."],
    ["Confirm on WhatsApp", "We share the price for your weight and flavour, and lock your date."],
    ["Delivered fresh", "We bring it to your door in Lahore, or you pick it up from Gulberg III."],
  ];
  return (
    <section className="steps" aria-labelledby="st-h">
      <h2 id="st-h">How it works</h2>
      <ol>
        {s.map(([t, d], i) => (
          <li key={t}>
            <span className="n" aria-hidden>{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="rv-h">
      <div className="rv-head">
        <h2 id="rv-h">Said after the party</h2>
        <p><b>4.9</b> stars from 570 reviews on Google</p>
      </div>
      <ul>
        {reviews.map((r) => (
          <li key={r.q}>
            <blockquote>{r.q}</blockquote>
            <p>{r.who} <span>on {r.src}</span></p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="ct-h">
      <div className="ct-info">
        <h2 id="ct-h">Talk to us</h2>
        <dl>
          <div><dt>WhatsApp and call</dt><dd><a href={`tel:+${WA}`}>{PHONE}</a></dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
          <div><dt>Shop</dt><dd>Block K, Gulberg III, Lahore</dd></div>
          <div><dt>Open</dt><dd>Every day, 7 am to 2 am</dd></div>
          <div><dt>Instagram</dt><dd><a href={INSTA} target="_blank" rel="noreferrer">@cakespot.pk</a></dd></div>
        </dl>
        <div className="ct-btns">
          <a className="btn btn-cyan" href={waLink("Assalam o Alaikum Cake Spot!")} target="_blank" rel="noreferrer">Message on WhatsApp</a>
          <a className="btn btn-line" href="https://www.google.com/maps/search/?api=1&query=Cake+Spot+customized+cake+shop+Gulberg+Lahore" target="_blank" rel="noreferrer">Get directions</a>
        </div>
      </div>
      <div className="map">
        <iframe title="Cake Spot on Google Maps" src="https://maps.google.com/maps?q=31.4998627,74.3569439&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <img src={LOGO} alt="Cake Spot, Taste of Royalty" width={72} height={72} />
      <p>Cake Spot, custom cakes in Lahore. <a href={SITE} target="_blank" rel="noreferrer">cakespot.pk</a></p>
      <p className="credit">
        Website redesign preview by <a href="https://portfolio1-hazel-seven.vercel.app" target="_blank" rel="noreferrer">NexaFlow (Aawaiz Ijaz)</a>. Photos and details from Cake Spot&apos;s own website and Instagram.
      </p>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mbar">
      <a href="#order">Custom order</a>
      <a className="wa" href={waLink("Assalam o Alaikum Cake Spot! I want to order a cake.")} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  );
}
