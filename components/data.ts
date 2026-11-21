export const WA = "923072445458";
export const PHONE = "+92 307 2445458";
export const EMAIL = "cakespot.pk@gmail.com";
export const INSTA = "https://www.instagram.com/cakespot.pk/";
export const SITE = "https://cakespot.pk";
export const LOGO = "https://cakespot.pk/wp-content/uploads/2025/04/IMG_20250408_001138-1.png";

export const waLink = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const UP = "https://cakespot.pk/wp-content/uploads/";
/** "~" in a path stands for the 650x650 thumbnail suffix */
export const thumb = (p: string) => UP + p.replace("~", "-650x650");
export const full = (p: string) => UP + p.replace("~", "");

export type Cat = "Kids" | "Weddings" | "Mehndi & bridal" | "Engagement" | "For her" | "More themes";

export type Cake = { name: string; cat: Cat; from: number; to: number; img: string };

export const cakes: Cake[] = [
  { name: "Blue teddy bear cake", cat: "Kids", from: 7000, to: 18000, img: "2025/11/Lumii_20251102_115741538-scaled~.jpg" },
  { name: "Blue Blossom", cat: "Weddings", from: 16500, to: 28000, img: "2025/07/Lumii_20250126_184452608~.jpg" },
  { name: "Dholki Vibes", cat: "Mehndi & bridal", from: 5500, to: 16000, img: "2025/07/Dholki-cake-2~.webp" },
  { name: "Glow Up", cat: "For her", from: 4200, to: 22000, img: "2025/07/Lumii_20240627_210238201~.jpg" },
  { name: "Crown Cake in Pink", cat: "Kids", from: 3200, to: 10300, img: "2025/07/Lumii_20241002_135134641~.jpg" },
  { name: "Couple's Dream", cat: "Engagement", from: 3500, to: 10000, img: "2025/09/43c25756423b6faf47f756ac3efe4f4d~.jpg" },
  { name: "Jungle Joy", cat: "Kids", from: 4200, to: 22000, img: "2025/03/Lumii_20250209_135642111-1~.webp" },
  { name: "Blue Elegance", cat: "Weddings", from: 16500, to: 28000, img: "2025/07/Lumii_20250426_192710911~.jpg" },
  { name: "Mehndi Muse", cat: "Mehndi & bridal", from: 5500, to: 17100, img: "2025/07/IMG_20231226_180535~.jpg" },
  { name: "Fairy Cake", cat: "Kids", from: 4500, to: 15500, img: "2026/09/Lumii_20260914_134543631-scaled~.jpg" },
  { name: "Beauty Box Delight", cat: "For her", from: 4200, to: 22000, img: "2025/07/IMG_20241116_200422~.jpg" },
  { name: "Forever Frosted", cat: "Weddings", from: 16500, to: 28000, img: "2025/03/Lumii_20250131_133114785-scaled-1~.webp" },
  { name: "Blue & White Delight", cat: "Kids", from: 8400, to: 22000, img: "2025/07/Lumii_20250621_141357374~.jpg" },
  { name: "Desi Deva", cat: "Mehndi & bridal", from: 4200, to: 22000, img: "2025/07/IMG_20250407_141049~.jpg" },
  { name: "Sweet Vows", cat: "Engagement", from: 3500, to: 10000, img: "2025/09/7e5d129bd693a9b83b9283d4bbbe0d74~.jpg" },
  { name: "Astrology Cake", cat: "Kids", from: 7000, to: 18000, img: "2025/07/Lumii_20250626_021612272~.jpg" },
  { name: "Lace & Love", cat: "Weddings", from: 16500, to: 28000, img: "2025/03/1000008847~.jpg" },
  { name: "Rang E Mayoon", cat: "Mehndi & bridal", from: 4200, to: 22000, img: "2025/07/IMG-20231117-WA0020~.jpg" },
  { name: "Chic Beauty", cat: "For her", from: 4500, to: 22000, img: "2025/09/IMG-20250830-WA0118~.jpg" },
  { name: "Dollie Delight", cat: "Kids", from: 3000, to: 9600, img: "2025/07/Lumii_20240804_220813328~.jpg" },
  { name: "True Love Tiers", cat: "Weddings", from: 16500, to: 28000, img: "2025/07/Lumii_20240408_004546662~.jpg" },
  { name: "Together Always", cat: "Engagement", from: 3500, to: 10000, img: "2025/09/Lumii_20250809_023442622~.jpg" },
  { name: "Bride To Be", cat: "Mehndi & bridal", from: 3000, to: 16800, img: "2025/03/Lumii_20241115_195721362~.jpg" },
  { name: "Car theme cake", cat: "Kids", from: 3000, to: 9600, img: "2025/07/Lumii_20250120_210911363~.jpg" },
  { name: "Black with red flowers", cat: "For her", from: 3000, to: 9600, img: "2025/07/Lumii_20241105_170239378-scaled~.jpg" },
  { name: "Luxe Layers", cat: "Weddings", from: 16500, to: 28000, img: "2025/07/IMG-20220306-WA0090~.jpg" },
  { name: "Mehndi Magic", cat: "Mehndi & bridal", from: 5500, to: 16000, img: "2025/07/Lumii_20241121_130310983~.jpg" },
  { name: "Future Awaits (graduation)", cat: "More themes", from: 3000, to: 9600, img: "2025/09/Lumii_20240816_124333221~.jpg" },
  { name: "Kick Off Treat (football)", cat: "More themes", from: 4200, to: 22000, img: "2025/09/IMG-20250802-WA0112~.jpg" },
  { name: "Picture theme cake", cat: "More themes", from: 3000, to: 16800, img: "2025/03/Lumii_20240809_105333428~.jpg" },
  { name: "Traveling theme cake", cat: "More themes", from: 3000, to: 16800, img: "2025/03/Lumii_20240630_132130275~.webp" },
  { name: "The Unity Cake", cat: "Weddings", from: 16500, to: 28000, img: "2025/07/IMG_20231117_183643~.jpg" },
];

export const heroCakes = [
  { name: "Blue teddy bear cake", note: "Two tiers, fondant teddy, cloud details", img: "2025/11/Lumii_20251102_115741538-scaled~.jpg", from: 7000 },
  { name: "Blue Blossom", note: "Three-tier wedding cake with sugar roses", img: "2025/07/Lumii_20250126_184452608~.jpg", from: 16500 },
  { name: "Dholki Vibes", note: "Hand-painted dholak for the mehndi night", img: "2025/07/Dholki-cake-2~.webp", from: 5500 },
  { name: "Blue Elegance", note: "Watercolour tiers with white and blue roses", img: "2025/07/Lumii_20250426_192710911~.jpg", from: 16500 },
];

export const flavours: { name: string; star?: boolean }[] = [
  { name: "Cadbury Chocolate", star: true },
  { name: "Caramel Crunch", star: true },
  { name: "Chocolate Fudge" },
  { name: "KitKat Chocolate" },
  { name: "Butterscotch" },
  { name: "Vanilla Crunch" },
  { name: "Red Velvet" },
  { name: "Coffee Chocolate" },
  { name: "Pineapple" },
  { name: "Coconut" },
  { name: "Seasonal Fruits" },
];

export const reviews = [
  { q: "The cake was made exactly the same as we asked and it was very very delicious. I am your permanent customer from now onwards.", who: "Sajjad Ahmad", src: "cakespot.pk" },
  { q: "This is actually my 4th time ordering cakes from you, and you never disappoint.", who: "Parents' anniversary order", src: "Google" },
  { q: "Everything was so accurate as per instructions regarding cake and its details.", who: "Junaid Malik", src: "cakespot.pk" },
  { q: "The blue-and-white color theme and hand-crafted details were so neat and charming.", who: "Teddy bear cake order", src: "Google" },
  { q: "Cake was same as pic, and was delicious n fresh. Delivered on time.", who: "sma 26", src: "cakespot.pk" },
  { q: "The buttercream KitKat cake was moist, subtle, delicious. So many family and friends asked where I got it from!", who: "First-time customer", src: "Google" },
];

export const rs = (n: number) => "Rs " + n.toLocaleString("en-PK");
