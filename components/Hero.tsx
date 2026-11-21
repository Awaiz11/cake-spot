"use client";
import { useEffect, useState } from "react";
import CakeArt, { themes, type Topper } from "./CakeArt";
import { waLink } from "./data";

const looks: { t: number; topper: Topper; msg: string }[] = [
  { t: 0, topper: "Candles", msg: "Happy Birthday Ali" },
  { t: 2, topper: "Handmade fondant teddy", msg: "Rayan turns 1" },
  { t: 4, topper: "Fresh-look flowers", msg: "Happy Anniversary" },
  { t: 1, topper: "Candles", msg: "Congrats Sana" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % looks.length), 3800);
    return () => clearInterval(id);
  }, []);
  const look = looks[i];

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <a className="rating" href="#reviews">
          <span aria-hidden>★★★★★</span> 4.9 from 570 Google reviews
        </a>
        <h1>
          Your cake idea,
          <br />
          baked in Gulberg.
        </h1>
        <p className="lede">
          Customised birthday, anniversary and theme cakes. Tell us the occasion, the colours and the
          name on top, and we bake it the way you pictured it.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-main" href="#design">Design your cake</a>
          <a
            className="btn btn-ghost"
            href={waLink("Assalam o Alaikum Cake Spot! I want to order a customised cake.")}
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
        <p className="hero-note">Open every day, 7 am to 2 am. Block K, Gulberg III, Lahore.</p>
      </div>

      <div className="hero-cake">
        <div className="plate-glow" aria-hidden />
        <CakeArt tiers={i % 2 === 0 ? 2 : 3} theme={themes[look.t]} topper={look.topper} message={look.msg} />
        <p className="hero-cake-cap" aria-live="polite">
          {themes[look.t].name}, {look.topper.toLowerCase()}
        </p>
      </div>
    </section>
  );
}
