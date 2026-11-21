"use client";
import { useRef } from "react";
import { cakes, rows, rs, thumb, waLink, SITE } from "./data";

function Row({ title, id, cat }: { title: string; id: string; cat: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const list = cakes.filter((c) => c.cat === cat);
  const go = (d: number) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <div className="row reveal" id={id}>
      <div className="row-head">
        <h3>{title}</h3>
        <div className="arrows">
          <button onClick={() => go(-1)} aria-label={`Previous ${title}`}>‹</button>
          <button onClick={() => go(1)} aria-label={`More ${title}`}>›</button>
        </div>
      </div>
      <ul className="strip" ref={ref}>
        {list.map((c) => (
          <li key={c.name} className="cake">
            <a
              href={waLink(`Assalam o Alaikum Cake Spot! I'm interested in the "${c.name}" cake. Please share sizes and price.`)}
              target="_blank"
              rel="noreferrer"
            >
              <span className="ph">
                <img src={thumb(c.img)} alt={c.name} loading="lazy" width={300} height={300} />
                <span className="hover">Order on WhatsApp</span>
              </span>
              <span className="nm">{c.name}</span>
              <span className="pr">from {rs(c.from)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="gallery" id="cakes" aria-labelledby="cakes-h">
      <div className="sec-head center reveal">
        <p className="script">Fresh from our kitchen</p>
        <h2 id="cakes-h">Pick your occasion</h2>
      </div>

      <ul className="bubbles reveal">
        {rows.map((r) => (
          <li key={r.id}>
            <a href={`#${r.id}`}>
              <span className="ring"><img src={thumb(r.cover)} alt="" width={120} height={120} /></span>
              {r.title.replace(" cakes", "").replace("Graduation, sports and more", "More themes")}
            </a>
          </li>
        ))}
      </ul>

      {rows.map((r) => <Row key={r.id} {...r} />)}

      <p className="more reveal">
        Prices start from the smallest weight. Any design can be changed to your colours and name.{" "}
        <a href={SITE} target="_blank" rel="noreferrer">See the full menu on cakespot.pk</a>
      </p>
    </section>
  );
}
