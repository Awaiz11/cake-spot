import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cake Spot | Customised Cakes in Gulberg, Lahore",
  description:
    "Customised birthday, anniversary and theme cakes from Gulberg III, Lahore. Design your cake online and order on WhatsApp. Open daily 7 am to 2 am.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Cake Spot | Customised Cakes, Gulberg Lahore",
    description: "Design your cake and send it to us on WhatsApp. 4.9 stars from 570 Google reviews.",
    images: ["https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=1200&h=630&q=75"],
  },
};

export const viewport: Viewport = { themeColor: "#F6DCE0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
