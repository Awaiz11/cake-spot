"use client";
import { useEffect, useState } from "react";
import { full, heroCakes, rs, waLink } from "./data";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % heroCakes.length), 4200);
    return () => clearInterval(id);
  }, []);
  const c = heroCakes[i];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="hero-kicker">Cake Spot, Gulberg III, Lahore</p>
        <h1>
          Taste of royalty,
          <br />
          made to your theme.
        </h1>
        <p className="lede">
          Custom cakes for birthdays, mehndis, weddings and every celebration in between. Tell us the
          theme, we design and bake it, and deliver anywhere in Lahore, as early as tomorrow.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-cyan" href="#cakes">See our cakes</a>
          <a
            className="btn btn-line"
            href={waLink("Assalam o Alaikum Cake Spot! I want to order a customised cake.")}
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
        <ul className="proof">
          <li><b>4.9</b> stars from 570 Google reviews</li>
          <li><b>11.7K</b> followers on Instagram</li>
          <li><b>1,000+</b> cakes posted</li>
        </ul>
      </div>

      <div className="vitrine">
        <svg className="outline" viewBox="0 0 400 520" aria-hidden>
          <path
            pathLength={1}
            d="M30 510 V200 A170 170 0 0 1 370 200 V510"
          />
          <path
            pathLength={1}
            className="o2"
            d="M120 96 C150 40 250 40 280 96 M150 78 C175 58 225 58 250 78"
          />
        </svg>
        <div className="arch">
          {heroCakes.map((h, k) => (
            <img
              key={h.img}
              src={full(h.img)}
              alt={h.name}
              className={k === i ? "on" : ""}
              fetchPriority={k === 0 ? "high" : "low"}
            />
          ))}
        </div>
        <div className="tag" aria-live="polite">
          <p className="tag-name">{c.name}</p>
          <p className="tag-note">{c.note}</p>
          <p className="tag-price">from {rs(c.from)}</p>
        </div>
        <div className="dots" role="tablist" aria-label="Featured cakes">
          {heroCakes.map((h, k) => (
            <button
              key={h.name}
              role="tab"
              aria-selected={k === i}
              aria-label={h.name}
              className={k === i ? "on" : ""}
              onClick={() => setI(k)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
