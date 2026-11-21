import { PHONE, reviews, waLink, WA } from "./data";

export function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="logo" aria-label="Cake Spot home">
        <svg viewBox="0 0 40 40" aria-hidden>
          <rect x="7" y="18" width="26" height="15" rx="4" fill="#F4B9C4" />
          <path d="M7 22 Q11 28 14 22 Q17 28 20 22 Q23 28 26 22 Q29 28 33 22 V20 H7Z" fill="#C8323F" />
          <rect x="18.5" y="9" width="3" height="9" rx="1" fill="#3B1F1A" />
          <path d="M20 3 Q24 7 20 9 Q16 7 20 3Z" fill="#F5A623" />
        </svg>
        Cake Spot
      </a>
      <nav aria-label="Sections">
        <a href="#cakes">Cakes</a>
        <a href="#design">Design yours</a>
        <a href="#reviews">Reviews</a>
        <a href="#visit">Visit</a>
      </nav>
      <a className="btn btn-small" href={waLink("Assalam o Alaikum Cake Spot!")} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  );
}

export function Steps() {
  const steps = [
    ["Show us the idea", "Use the cake designer above, or send any photo you found and say what to change."],
    ["Get the price on WhatsApp", "We reply with the price, the flavour options and the earliest date we can make it."],
    ["Collect it fresh", "Pick it up from our shop in Gulberg III, or ask us about delivery in Lahore."],
  ];
  return (
    <section className="steps" aria-labelledby="steps-h">
      <h2 id="steps-h">How ordering works</h2>
      <ol>
        {steps.map(([t, d], i) => (
          <li key={t}>
            <span className="num" aria-hidden>{i + 1}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </li>
        ))}
      </ol>
      <p className="tip">For big cakes and tiers, tell us a few days early so we can fit your date.</p>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="reviews" id="reviews" aria-labelledby="rev-h">
      <div className="rev-score">
        <p className="big">4.9</p>
        <p className="stars" aria-hidden>★★★★★</p>
        <p>from 570 reviews on Google</p>
      </div>
      <div>
        <h2 id="rev-h">What people say after the party</h2>
        <ul className="rev-list">
          {reviews.map((r) => (
            <li key={r.who}>
              <blockquote>{r.q}</blockquote>
              <p>{r.who}, Google review</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section className="visit" id="visit" aria-labelledby="visit-h">
      <div className="visit-info">
        <h2 id="visit-h">Come by the shop</h2>
        <p className="addr">Block K, Gulberg III, Lahore</p>
        <table className="hours">
          <tbody>
            <tr><th scope="row">Every day</th><td>7:00 am to 2:00 am</td></tr>
          </tbody>
        </table>
        <div className="visit-ctas">
          <a className="btn btn-main" href={waLink("Assalam o Alaikum Cake Spot!")} target="_blank" rel="noreferrer">
            WhatsApp {PHONE}
          </a>
          <a className="btn btn-ghost" href={`tel:+${WA}`}>Call the shop</a>
          <a
            className="btn btn-ghost"
            href="https://www.google.com/maps/search/?api=1&query=Cake+Spot+customized+cake+shop+Gulberg+Lahore"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Cake Spot on Google Maps"
          src="https://maps.google.com/maps?q=31.4998627,74.3569439&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <p>Cake Spot, customised cakes in Gulberg III, Lahore.</p>
      <p className="credit">
        Preview website made for Cake Spot by{" "}
        <a href="https://portfolio1-hazel-seven.vercel.app" target="_blank" rel="noreferrer">NexaFlow (Aawaiz Ijaz)</a>.
        Gallery photos are samples from Unsplash.
      </p>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mbar">
      <a href="#design">Design a cake</a>
      <a href={waLink("Assalam o Alaikum Cake Spot! I want to order a cake.")} target="_blank" rel="noreferrer" className="wa">
        WhatsApp us
      </a>
    </div>
  );
}
