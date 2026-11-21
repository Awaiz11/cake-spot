"use client";
import { useMemo, useState } from "react";
import { flavours, waLink } from "./data";

const occasions = ["Birthday", "Kids' birthday", "Mehndi / Mayoon", "Wedding", "Engagement", "Bridal shower", "Baby shower", "Anniversary", "Graduation", "Other"];
const weights = ["2 lb", "3 lb", "4 lb", "5 lb", "6 lb", "8 lb", "10 lb", "12 lb"];
const times = ["Morning", "Afternoon", "Evening", "Night"];
const payments = ["JazzCash", "EasyPaisa", "Bank transfer", "Card (Visa / MasterCard)"];

function Pick({ label, options, value, set }: { label: string; options: string[]; value: string; set: (v: string) => void }) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div className="opts" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button type="button" key={o} role="radio" aria-checked={value === o} className={value === o ? "on" : ""} onClick={() => set(o)}>
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Order() {
  const [occasion, setOccasion] = useState("Birthday");
  const [weight, setWeight] = useState("4 lb");
  const [flavour, setFlavour] = useState("Cadbury Chocolate");
  const [theme, setTheme] = useState("");
  const [writing, setWriting] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Evening");
  const [mode, setMode] = useState("Delivery in Lahore");
  const [area, setArea] = useState("");
  const [pay, setPay] = useState("JazzCash");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(true);

  const text = useMemo(() => {
    const l = [
      "Assalam o Alaikum Cake Spot! I want to order a custom cake.",
      "",
      `Occasion: ${occasion}`,
      `Weight: ${weight}`,
      `Flavour: ${flavour}`,
      `Theme / colours: ${theme || "will discuss"}`,
      `Written on cake: ${writing || "nothing"}`,
      `Date: ${date || "to discuss"} (${time})`,
      `${mode}${mode.startsWith("Delivery") && area ? `, area: ${area}` : ""}`,
      `Payment: ${pay}`,
    ];
    if (name) l.push(`Name: ${name}`);
    if (photo) l.push("", "I'll send a reference picture next.");
    l.push("", "Please confirm the price. Thank you!");
    return l.join("\n");
  }, [occasion, weight, flavour, theme, writing, date, time, mode, area, pay, name, photo]);

  const today = new Date().toISOString().slice(0, 10);
  const nice = date ? new Date(date + "T12:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }) : "Date to discuss";

  return (
    <section className="order" id="order" aria-labelledby="order-h">
      <div className="sec-head">
        <h2 id="order-h">Order a custom cake</h2>
        <p>
          Fill in what you know. It goes straight to our WhatsApp, and our designer replies with the price
          and any questions. Have a picture? Send it right after.
        </p>
      </div>

      <div className="order-grid">
        <form onSubmit={(e) => e.preventDefault()} className="order-form">
          <Pick label="Occasion" options={occasions} value={occasion} set={setOccasion} />
          <Pick label="Weight" options={weights} value={weight} set={setWeight} />
          <fieldset>
            <legend>Flavour</legend>
            <div className="opts" role="radiogroup" aria-label="Flavour">
              {flavours.map((f) => (
                <button type="button" key={f.name} role="radio" aria-checked={flavour === f.name} className={flavour === f.name ? "on" : ""} onClick={() => setFlavour(f.name)}>
                  {f.name}{f.star && <span className="star"> best seller</span>}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="fields">
            <label className="wide">
              Theme and colours
              <input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="e.g. blue and white with a teddy on top" />
            </label>
            <label className="wide">
              Writing on the cake
              <input value={writing} maxLength={40} onChange={(e) => setWriting(e.target.value)} placeholder="e.g. Happy 1st Birthday Rayan" />
            </label>
            <label>
              Date
              <input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label>
              Time
              <select value={time} onChange={(e) => setTime(e.target.value)}>
                {times.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>
              Delivery or pickup
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option>Delivery in Lahore</option>
                <option>Pickup from Gulberg III</option>
              </select>
            </label>
            {mode.startsWith("Delivery") ? (
              <label>
                Area
                <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. DHA Phase 5" />
              </label>
            ) : <span />}
            <label>
              Payment
              <select value={pay} onChange={(e) => setPay(e.target.value)}>
                {payments.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>
            <label>
              Your name
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" />
            </label>
          </div>
          <label className="check">
            <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} />
            I have a reference picture to send
          </label>
        </form>

        <aside className="slip" aria-label="Your order">
          <div className="slip-top">
            <p className="slip-h">Your cake</p>
            <p className="slip-date">{nice}</p>
          </div>
          <dl>
            <div><dt>Occasion</dt><dd>{occasion}</dd></div>
            <div><dt>Weight</dt><dd>{weight}</dd></div>
            <div><dt>Flavour</dt><dd>{flavour}</dd></div>
            <div><dt>Theme</dt><dd>{theme || "To discuss"}</dd></div>
            <div><dt>On the cake</dt><dd className="script">{writing || "…"}</dd></div>
            <div><dt>{mode.startsWith("Delivery") ? "Delivery" : "Pickup"}</dt><dd>{mode.startsWith("Delivery") ? area || "Lahore" : "Gulberg III"}, {time.toLowerCase()}</dd></div>
          </dl>
          <a className="btn btn-cyan btn-wide" href={waLink(text)} target="_blank" rel="noreferrer">
            Send order on WhatsApp
          </a>
          <p className="slip-fine">First order? Mention code <b>Cake200</b> for Rs 200 off.</p>
        </aside>
      </div>
    </section>
  );
}
