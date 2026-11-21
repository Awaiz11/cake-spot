"use client";
import { useState } from "react";
import { gallery, img, waLink, type Cat } from "./data";

const cats: ("All" | Cat)[] = ["All", "Birthday", "Kids' theme", "Anniversary", "Drip", "Floral"];

export default function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const items = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);

  return (
    <section className="gallery" id="cakes" aria-labelledby="cakes-h">
      <div className="sec-head">
        <h2 id="cakes-h">Cakes we make</h2>
        <p>See something you like? Tap it and send it to us as your reference.</p>
      </div>
      <div className="chips filter" role="tablist" aria-label="Cake type">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            className={`chip ${cat === c ? "on" : ""}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="grid" key={cat}>
        {items.map((g, k) => (
          <li key={g.id} style={{ animationDelay: `${k * 40}ms` }}>
            <a
              href={waLink(`Assalam o Alaikum Cake Spot! I'd like a cake like this: "${g.cap}" (${g.cat}). Please share the price.`)}
              target="_blank"
              rel="noreferrer"
            >
              <img src={img(g.id, 600, 720)} alt={g.cap} loading="lazy" width={600} height={720} />
              <span className="cap">
                {g.cap}
                <em>Ask for this one</em>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="fine center">Sample photos for this preview. Cake Spot&apos;s own cakes go here.</p>
    </section>
  );
}
