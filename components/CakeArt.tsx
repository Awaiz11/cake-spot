export type Theme = { name: string; base: string; drip: string; trim: string };

export const themes: Theme[] = [
  { name: "Strawberry pink", base: "#F4B9C4", drip: "#C8323F", trim: "#FFF7F4" },
  { name: "Chocolate", base: "#8A5442", drip: "#3B1F1A", trim: "#F3D9C4" },
  { name: "Baby blue & white", base: "#CFE3F2", drip: "#FFFFFF", trim: "#7FA9CF" },
  { name: "Pistachio", base: "#CFDDAE", drip: "#F7F2E4", trim: "#7E9A4C" },
  { name: "White & gold", base: "#FBF4EC", drip: "#D9A441", trim: "#D9A441" },
  { name: "Lavender", base: "#D9CBEB", drip: "#8C6BB5", trim: "#FFFFFF" },
];

export type Topper = "Candles" | "Printed topper" | "Handmade fondant teddy" | "Fresh-look flowers";

type Props = {
  tiers: number;
  theme: Theme;
  topper: Topper;
  message?: string;
  animate?: boolean;
  fit?: boolean;
};

const TIERS = [
  { w: 236, h: 84 },
  { w: 176, h: 70 },
  { w: 124, h: 60 },
];

function dripPath(x: number, y: number, w: number, seed: number) {
  // wavy drips hanging from the top edge of a tier
  const n = Math.max(5, Math.round(w / 26));
  const step = w / n;
  let d = `M${x} ${y} `;
  for (let i = 0; i < n; i++) {
    const cx = x + i * step + step / 2;
    const len = 12 + (((i * 7 + seed * 5) % 5) * 7);
    d += `L${cx - step / 2 + 3} ${y + 6} `;
    d += `Q${cx - step / 4} ${y + len} ${cx} ${y + len + 4} `;
    d += `Q${cx + step / 4} ${y + len} ${cx + step / 2 - 3} ${y + 6} `;
  }
  d += `L${x + w} ${y} Z`;
  return d;
}

export default function CakeArt({ tiers, theme, topper, message, animate = true, fit = false }: Props) {
  const plateY = 318;
  let y = plateY - 6;
  const parts = TIERS.slice(0, tiers).map((t, i) => {
    y -= t.h;
    const x = 160 - t.w / 2;
    return { ...t, x, y, i };
  });
  const top = parts[parts.length - 1];
  const topY = top.y;
  const msg = (message || "").slice(0, 22);

  return (
    <svg
      viewBox={fit ? `0 ${topY - 80} 320 ${340 - (topY - 80)}` : "0 0 320 340"}
      className={`cake-art ${animate ? "is-anim" : ""}`}
      role="img"
      aria-label={`${tiers}-tier ${theme.name} cake with ${topper.toLowerCase()}`}
    >
      <ellipse cx="160" cy={plateY + 6} rx="150" ry="16" fill="#3B1F1A" opacity=".12" />
      <ellipse cx="160" cy={plateY} rx="146" ry="14" fill="#FFFDFB" stroke="#E7CFC9" />

      {parts.map((p) => (
        <g key={p.i} className="tier" style={{ animationDelay: `${0.15 + p.i * 0.28}s` }}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="10" fill={theme.base} />
          <rect x={p.x} y={p.y + p.h - 18} width={p.w} height="18" fill="#000" opacity=".06" />
          <path
            className="drip"
            style={{ animationDelay: `${0.45 + p.i * 0.28}s` }}
            d={dripPath(p.x, p.y, p.w, p.i + 1)}
            fill={theme.drip}
          />
          {Array.from({ length: Math.floor(p.w / 14) }).map((_, k) => (
            <circle
              key={k}
              cx={p.x + 7 + k * 14 + (p.w % 14) / 2}
              cy={p.y + p.h - 2}
              r="6"
              fill={theme.trim}
            />
          ))}
        </g>
      ))}

      {msg && (
        <text
          x="160"
          y={plateY - 28}
          textAnchor="middle"
          className="cake-msg"
          fill={theme.base === "#8A5442" ? "#FFF7F4" : "#3B1F1A"}
        >
          {msg}
        </text>
      )}

      <g className="topper" style={{ animationDelay: `${0.4 + tiers * 0.28}s` }}>
        {topper === "Candles" &&
          [-22, 0, 22].map((dx, k) => (
            <g key={k} transform={`translate(${160 + dx} ${topY})`}>
              <rect x="-3.5" y="-34" width="7" height="34" rx="2" fill={k === 1 ? "#FFF7F4" : theme.trim} stroke="#3B1F1A" strokeOpacity=".15" />
              <path className="flame" d="M0 -50 Q7 -40 0 -36 Q-7 -40 0 -50Z" fill="#F5A623" />
            </g>
          ))}
        {topper === "Printed topper" && (
          <g transform={`translate(160 ${topY - 4})`}>
            <line x1="-18" y1="0" x2="-18" y2="-26" stroke="#3B1F1A" strokeWidth="2" />
            <line x1="18" y1="0" x2="18" y2="-26" stroke="#3B1F1A" strokeWidth="2" />
            <rect x="-34" y="-58" width="68" height="34" rx="6" fill="#FFFDFB" stroke="#3B1F1A" strokeOpacity=".3" />
            <text x="0" y="-36" textAnchor="middle" className="topper-txt">Happy day</text>
          </g>
        )}
        {topper === "Handmade fondant teddy" && (
          <g transform={`translate(160 ${topY - 2})`}>
            <ellipse cx="0" cy="-16" rx="20" ry="18" fill="#C98D5E" />
            <circle cx="0" cy="-44" r="16" fill="#C98D5E" />
            <circle cx="-13" cy="-56" r="6" fill="#C98D5E" />
            <circle cx="13" cy="-56" r="6" fill="#C98D5E" />
            <circle cx="-13" cy="-56" r="3" fill="#F2C9A8" />
            <circle cx="13" cy="-56" r="3" fill="#F2C9A8" />
            <ellipse cx="0" cy="-39" rx="7" ry="5" fill="#F2C9A8" />
            <circle cx="-6" cy="-47" r="1.8" fill="#3B1F1A" />
            <circle cx="6" cy="-47" r="1.8" fill="#3B1F1A" />
            <circle cx="0" cy="-41" r="2" fill="#3B1F1A" />
            <ellipse cx="0" cy="-14" rx="10" ry="9" fill="#F2C9A8" />
            <path d="M-9 -28 L0 -24 L9 -28 L9 -22 L0 -25 L-9 -22Z" fill={theme.trim === "#FFF7F4" ? "#C8323F" : theme.trim} />
          </g>
        )}
        {topper === "Fresh-look flowers" && (
          <g transform={`translate(160 ${topY - 2})`}>
            {[
              [-24, -6, "#C8323F"],
              [0, -14, "#F4B9C4"],
              [22, -6, "#FFF7F4"],
              [-10, -2, "#F7D9A8"],
              [12, -1, "#C8323F"],
            ].map(([dx, dy, c], k) => (
              <g key={k} transform={`translate(${dx} ${dy})`}>
                {[0, 72, 144, 216, 288].map((a) => (
                  <ellipse key={a} cx="0" cy="-6" rx="5" ry="7" fill={c as string} transform={`rotate(${a})`} stroke="#3B1F1A" strokeOpacity=".12" />
                ))}
                <circle r="3" fill="#E7B24A" />
              </g>
            ))}
            <path d="M-34 0 Q-20 -10 -8 0 M34 0 Q20 -10 8 0" stroke="#6E8B3D" strokeWidth="3" fill="none" />
          </g>
        )}
      </g>
    </svg>
  );
}
