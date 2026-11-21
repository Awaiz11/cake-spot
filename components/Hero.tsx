import { cakes, LOGO, thumb, waLink } from "./data";

const ring = [0, 1, 2, 3, 6, 7, 9, 12].map((i) => cakes[i]);

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="sprinkles" aria-hidden>
        {Array.from({ length: 18 }).map((_, k) => (
          <i key={k} style={{ left: `${(k * 37) % 100}%`, top: `${(k * 53) % 90}%`, animationDelay: `${(k % 6) * 0.7}s` }} />
        ))}
      </div>

      <div className="hero-copy reveal">
        <p className="script">Taste of Royalty</p>
        <h1>
          Lahore&apos;s favourite
          {" "}<span className="hl">custom cakes</span>
        </h1>
        <p className="lede">
          Birthdays, mehndis, weddings and every party in between. Send us your idea, we bake it exactly
          like the picture and deliver anywhere in Lahore.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-pink" href="#order">Order a custom cake</a>
          <a className="btn btn-white" href="#cakes">Browse cakes</a>
        </div>
        <div className="trust">
          <span className="stars" aria-hidden>★★★★★</span>
          <span><b>4.9</b> on Google from 570 reviews</span>
          <span className="sep" aria-hidden />
          <span><b>11.7K</b> on Instagram</span>
        </div>
      </div>

      <div className="orbit-wrap reveal" aria-label="Some of our cakes">
        <div className="orbit-glow" aria-hidden />
        <div className="orbit-track" aria-hidden />
        <ul className="orbit">
          {ring.map((c, k) => (
            <li key={c.name} style={{ ["--a" as string]: `${k * 45}deg` }}>
              <a
                href={waLink(`Assalam o Alaikum Cake Spot! I like the "${c.name}" cake. Please share the price.`)}
                target="_blank"
                rel="noreferrer"
                title={c.name}
              >
                <img src={thumb(c.img)} alt={c.name} width={130} height={130} />
              </a>
            </li>
          ))}
        </ul>
        <div className="orbit-center">
          <img src={LOGO} alt="Cake Spot logo" width={200} height={200} />
        </div>
        <p className="badge b1">Delivery as early as <b>tomorrow</b></p>
        <p className="badge b2"><b>Rs 200 off</b> first order</p>
      </div>
    </section>
  );
}
