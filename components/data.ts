export const WA = "923072445458";
export const PHONE = "+92 307 2445458";
export const waLink = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const img = (id: string, w = 800, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=75`;

export type Cat = "Birthday" | "Kids' theme" | "Anniversary" | "Drip" | "Floral";

export const gallery: { id: string; cap: string; cat: Cat }[] = [
  { id: "photo-1558301211-0d8c8ddee6ec", cap: "Pink sprinkle tier on a stand", cat: "Birthday" },
  { id: "photo-1760172551485-cea07abc5634", cap: "Teddy and hot-air balloon topper", cat: "Kids' theme" },
  { id: "photo-1588195538326-c5b1e9f80a1b", cap: "Chocolate drip on vanilla", cat: "Drip" },
  { id: "photo-1733515371242-2c7f8255fde6", cap: "50th anniversary sheet cake", cat: "Anniversary" },
  { id: "photo-1788240357882-cd75f945a19d", cap: "Hand-piped roses", cat: "Floral" },
  { id: "photo-1741969494234-7d4bcd1002ab", cap: "Rainbow and clouds", cat: "Kids' theme" },
  { id: "photo-1606983340126-99ab4feaa64a", cap: "Chocolate with buttercream roses", cat: "Birthday" },
  { id: "photo-1584982890941-b788ae5a54df", cap: "Dark ganache drip with strawberry", cat: "Drip" },
  { id: "photo-1775830154800-2b5c539c7fd3", cap: "Lilac with a script topper", cat: "Anniversary" },
  { id: "photo-1557164158-11e97f2bb220", cap: "Unicorn on a pink stand", cat: "Kids' theme" },
  { id: "photo-1780337092369-eefebe4facfd", cap: "Painted peonies", cat: "Floral" },
  { id: "photo-1702744382319-20efefc9dc19", cap: "Chocolate meringue crown", cat: "Drip" },
  { id: "photo-1670388429858-881804cbc864", cap: "Couple silhouette with hearts", cat: "Anniversary" },
  { id: "photo-1765947379276-8f33ac1b5a94", cap: "Princess castle, three tiers", cat: "Kids' theme" },
  { id: "photo-1610670444950-0b29430891b4", cap: "Candles on chocolate fudge", cat: "Birthday" },
  { id: "photo-1788876892990-1262984c37b2", cap: "White roses, simple and tall", cat: "Floral" },
];

export const reviews = [
  {
    q: "Superrrrrr tasty, rich, incredibly moist, and wonderfully light all at once.",
    who: "The showstopper cake",
  },
  {
    q: "This is actually my 4th time ordering cakes from you, and you never disappoint.",
    who: "Parents' anniversary",
  },
  {
    q: "The blue-and-white color theme and hand-crafted details were so neat and charming.",
    who: "Teddy bear cake, son's birthday",
  },
  {
    q: "So many family and friends asked where I got it from!",
    who: "Buttercream KitKat cake, first order",
  },
];
