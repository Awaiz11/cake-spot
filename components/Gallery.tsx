"use client";
import { useState } from "react";
import { cakes, rs, thumb, waLink, SITE, type Cat } from "./data";

const cats: ("All" | Cat)[] = ["All", "Kids", "Mehndi & bridal", "Weddings", "Engagement", "For her", "More themes"];

export default function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [more, setMore] = useState(false);
  const list = cat === "All" ? cakes : cakes.filter((c) => c.cat === cat);
  const items = cat === "All" && !more ? list.slice(0, 12) : list;

  return (
    <section className="gallery" id="cakes" aria-labelledby="cakes-h">
      <div className="sec-head">
        <h2 id="cakes-h">Cakes from our kitchen</h2>
        <p>
          Real cakes we have made, with their starting price. Like one? Ask for it as it is, or tell us
          what to change.
        </p>
      </div>

      <div className="tabs" role="tablist" aria-label="Occasion">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            className={cat === c ? "on" : ""}
            onClick={() => { setCat(c); setMore(false); }}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="cards" key={cat + more}>
        {items.map((c, k) => (
          <li key={c.name} style={{ animationDelay: `${Math.min(k, 8) * 45}ms` }}>
            <div className="ph">
              <img src={thumb(c.img)} alt={c.name} loading="lazy" width={650} height={650} />
              <span className="pill">{c.cat}</span>
            </div>
            <div className="meta">
              <h3>{c.name}</h3>
              <p>{rs(c.from)} to {rs(c.to)}</p>
            </div>
            <a
              className="ask"
              href={waLink(`Assalam o Alaikum Cake Spot! I'm interested in the "${c.name}" cake (${c.cat}). Please share sizes and price.`)}
              target="_blank"
              rel="noreferrer"
            >
              Ask for this cake
            </a>
          </li>
        ))}
      </ul>

      <div className="gallery-foot">
        {cat === "All" && !more && (
          <button className="btn btn-line" onClick={() => setMore(true)}>Show all {cakes.length} cakes</button>
        )}
        <a className="btn btn-ghost-dark" href={SITE} target="_blank" rel="noreferrer">Full menu on cakespot.pk</a>
      </div>
      <p className="fine">Price depends on weight, from the smallest size to the largest. Every design can be changed to your colours, name and theme.</p>
    </section>
  );
}
