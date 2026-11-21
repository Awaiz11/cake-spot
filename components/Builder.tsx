"use client";
import { useMemo, useState } from "react";
import CakeArt, { themes, type Topper } from "./CakeArt";
import { waLink } from "./data";

const occasions = ["Birthday", "Kids' birthday", "Anniversary", "Engagement / nikah", "Congratulations", "Just because"];
const sizes = [
  { label: "2 lb", tiers: 1 },
  { label: "3 lb", tiers: 1 },
  { label: "4 lb", tiers: 1 },
  { label: "6 lb, 2 tiers", tiers: 2 },
  { label: "10 lb, 3 tiers", tiers: 3 },
];
const flavours = ["Chocolate fudge", "KitKat buttercream", "Vanilla", "Red velvet", "Pineapple", "Lotus Biscoff", "Coffee"];
const toppers: Topper[] = ["Candles", "Printed topper", "Handmade fondant teddy", "Fresh-look flowers"];

function Chips<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="chips" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          type="button"
          key={o}
          role="radio"
          aria-checked={value === o}
          className={`chip ${value === o ? "on" : ""}`}
          onClick={() => onChange(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Builder() {
  const [occasion, setOccasion] = useState(occasions[0]);
  const [size, setSize] = useState(sizes[1].label);
  const [flavour, setFlavour] = useState(flavours[0]);
  const [themeIdx, setThemeIdx] = useState(0);
  const [topper, setTopper] = useState<Topper>("Candles");
  const [message, setMessage] = useState("Happy Birthday Ali");
  const [date, setDate] = useState("");
  const [handover, setHandover] = useState("Pickup from Gulberg");
  const [name, setName] = useState("");
  const [refPhoto, setRefPhoto] = useState(false);

  const tiers = sizes.find((s) => s.label === size)!.tiers;
  const theme = themes[themeIdx];

  const text = useMemo(() => {
    const lines = [
      "Assalam o Alaikum Cake Spot! I'd like to order a custom cake:",
      `Occasion: ${occasion}`,
      `Size: ${size}`,
      `Flavour: ${flavour}`,
      `Colours: ${theme.name}`,
      `Topper: ${topper}`,
      `Written on cake: ${message || "(nothing)"}`,
      `Date needed: ${date || "(to discuss)"}`,
      `Pickup or delivery: ${handover}`,
    ];
    if (name) lines.push(`Name: ${name}`);
    if (refPhoto) lines.push("I'll send a reference photo next.");
    lines.push("Please share the price and confirm. Thank you!");
    return lines.join("\n");
  }, [occasion, size, flavour, theme, topper, message, date, handover, name, refPhoto]);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="builder" id="design" aria-labelledby="design-h">
      <div className="sec-head">
        <h2 id="design-h">Design your cake</h2>
        <p>
          Pick the basics here and watch the cake change. When you press send, everything goes to us on
          WhatsApp and we reply with the price and the earliest date.
        </p>
      </div>

      <div className="builder-grid">
        <form className="builder-form" onSubmit={(e) => e.preventDefault()}>
          <fieldset>
            <legend>Occasion</legend>
            <Chips name="Occasion" options={occasions} value={occasion} onChange={setOccasion} />
          </fieldset>

          <fieldset>
            <legend>Size</legend>
            <Chips name="Size" options={sizes.map((s) => s.label)} value={size} onChange={setSize} />
          </fieldset>

          <fieldset>
            <legend>Flavour</legend>
            <Chips name="Flavour" options={flavours} value={flavour} onChange={setFlavour} />
          </fieldset>

          <fieldset>
            <legend>Colours</legend>
            <div className="swatches" role="radiogroup" aria-label="Colours">
              {themes.map((t, k) => (
                <button
                  type="button"
                  key={t.name}
                  role="radio"
                  aria-checked={themeIdx === k}
                  className={`swatch ${themeIdx === k ? "on" : ""}`}
                  onClick={() => setThemeIdx(k)}
                >
                  <span style={{ background: `linear-gradient(135deg, ${t.base} 55%, ${t.drip} 55%)` }} />
                  {t.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>On top</legend>
            <Chips name="Topper" options={toppers} value={topper} onChange={setTopper} />
          </fieldset>

          <div className="fields">
            <label>
              Written on the cake
              <input
                value={message}
                maxLength={30}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Happy Birthday Ayesha"
              />
            </label>
            <label>
              Date needed
              <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              Pickup or delivery
              <select value={handover} onChange={(e) => setHandover(e.target.value)}>
                <option>Pickup from Gulberg</option>
                <option>Delivery in Lahore (please confirm)</option>
              </select>
            </label>
            <label>
              Your name
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" />
            </label>
          </div>
          <label className="check">
            <input type="checkbox" checked={refPhoto} onChange={(e) => setRefPhoto(e.target.checked)} />
            I have a reference photo I'll send on WhatsApp
          </label>
        </form>

        <aside className="preview" aria-label="Your cake so far">
          <div className="preview-cake">
            <CakeArt tiers={tiers} theme={theme} topper={topper} message={message} animate fit />
          </div>
          <dl className="summary">
            <div><dt>Occasion</dt><dd>{occasion}</dd></div>
            <div><dt>Size</dt><dd>{size}</dd></div>
            <div><dt>Flavour</dt><dd>{flavour}</dd></div>
            <div><dt>Date</dt><dd>{date ? new Date(date + "T12:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", weekday: "short" }) : "To discuss"}</dd></div>
          </dl>
          <a className="btn btn-main btn-wide" href={waLink(text)} target="_blank" rel="noreferrer">
            Send this cake on WhatsApp
          </a>
          <p className="fine">Price depends on size and design. We confirm it on WhatsApp before baking.</p>
        </aside>
      </div>
    </section>
  );
}
