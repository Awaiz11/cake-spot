"use client";
import { useMemo, useState } from "react";
import { flavours, waLink } from "./data";

const occasions = ["Birthday", "Kids' birthday", "Mehndi / Mayoon", "Wedding", "Engagement", "Bridal shower", "Baby shower", "Anniversary", "Graduation", "Other"];
const weights = ["2 lb", "3 lb", "4 lb", "5 lb", "6 lb", "8 lb", "10 lb", "12 lb"];
const times = ["Morning", "Afternoon", "Evening", "Night"];
const payments = ["JazzCash", "EasyPaisa", "Bank transfer", "Card"];
const steps = ["Occasion", "Size and flavour", "Design", "Delivery"];

function Opts({ options, value, set, label }: { options: string[]; value: string; set: (v: string) => void; label: string }) {
  return (
    <div className="opts" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button type="button" key={o} role="radio" aria-checked={value === o} className={value === o ? "on" : ""} onClick={() => set(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Order() {
  const [step, setStep] = useState(0);
  const [occasion, setOccasion] = useState("Birthday");
  const [weight, setWeight] = useState("4 lb");
  const [flavour, setFlavour] = useState("Cadbury Chocolate");
  const [theme, setTheme] = useState("");
  const [writing, setWriting] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Evening");
  const [mode, setMode] = useState("Delivery");
  const [area, setArea] = useState("");
  const [pay, setPay] = useState("JazzCash");

  const text = useMemo(() => [
    "Assalam o Alaikum Cake Spot! I want to order a custom cake.",
    "",
    `Occasion: ${occasion}`,
    `Weight: ${weight}`,
    `Flavour: ${flavour}`,
    `Theme / colours: ${theme || "will discuss"}`,
    `Written on cake: ${writing || "nothing"}`,
    `Date: ${date || "to discuss"}, ${time.toLowerCase()}`,
    mode === "Delivery" ? `Delivery to: ${area || "Lahore (will share address)"}` : "Pickup from Gulberg III",
    `Payment: ${pay}`,
    "",
    "I'll send a reference picture if I have one. Please confirm the price.",
  ].join("\n"), [occasion, weight, flavour, theme, writing, date, time, mode, area, pay]);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="order" id="order" aria-labelledby="order-h">
      <div className="order-card reveal">
        <div className="order-side">
          <p className="script">Your idea, our oven</p>
          <h2 id="order-h">Order a custom cake in 4 steps</h2>
          <p>Takes a minute. Your order opens in WhatsApp, ready to send, and we reply with the price.</p>
          <ol className="prog" aria-label="Progress">
            {steps.map((s, k) => (
              <li key={s} className={k === step ? "now" : k < step ? "done" : ""}>
                <button type="button" onClick={() => setStep(k)}><span>{k + 1}</span>{s}</button>
              </li>
            ))}
          </ol>
        </div>

        <div className="order-main">
          <div className="panel" key={step}>
            {step === 0 && (
              <>
                <h3>What are we celebrating?</h3>
                <Opts label="Occasion" options={occasions} value={occasion} set={setOccasion} />
              </>
            )}
            {step === 1 && (
              <>
                <h3>How big?</h3>
                <Opts label="Weight" options={weights} value={weight} set={setWeight} />
                <h3 className="mt">Which flavour?</h3>
                <div className="opts" role="radiogroup" aria-label="Flavour">
                  {flavours.map((f) => (
                    <button type="button" key={f.name} role="radio" aria-checked={flavour === f.name} className={flavour === f.name ? "on" : ""} onClick={() => setFlavour(f.name)}>
                      {f.name}{f.star && <em> ★ best seller</em>}
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h3>Tell us the design</h3>
                <label>Theme and colours<input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder="e.g. blue and white, teddy on top" /></label>
                <label>Written on the cake<input value={writing} maxLength={40} onChange={(e) => setWriting(e.target.value)} placeholder="e.g. Happy 1st Birthday Rayan" /></label>
                <p className="hint">Have a picture? You can send it on WhatsApp after this.</p>
              </>
            )}
            {step === 3 && (
              <>
                <h3>When and where?</h3>
                <div className="two">
                  <label>Date<input type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} /></label>
                  <label>Time<select value={time} onChange={(e) => setTime(e.target.value)}>{times.map((t) => <option key={t}>{t}</option>)}</select></label>
                </div>
                <Opts label="Delivery or pickup" options={["Delivery", "Pickup from Gulberg III"]} value={mode} set={setMode} />
                {mode === "Delivery" && <label>Area<input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. DHA Phase 5" /></label>}
                <h3 className="mt sm">Payment</h3>
                <Opts label="Payment" options={payments} value={pay} set={setPay} />
              </>
            )}
          </div>

          <div className="summary">
            <span>{occasion}</span><span>{weight}</span><span>{flavour}</span>{date && <span>{date}</span>}
          </div>

          <div className="nav-btns">
            {step > 0 && <button type="button" className="btn btn-white" onClick={() => setStep(step - 1)}>Back</button>}
            {step < 3 ? (
              <button type="button" className="btn btn-cyan" onClick={() => setStep(step + 1)}>Next</button>
            ) : (
              <a className="btn btn-green" href={waLink(text)} target="_blank" rel="noreferrer">Send order on WhatsApp</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
