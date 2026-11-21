import type { Metadata, Viewport } from "next";
import "@fontsource/baloo-2/600.css";
import "@fontsource/baloo-2/700.css";
import "@fontsource/baloo-2/800.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/dancing-script/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cake Spot | Customised Cakes in Gulberg, Lahore",
  description:
    "Custom theme cakes for birthdays, mehndis, weddings and more. Delivery across Lahore, as early as tomorrow. Order on WhatsApp.",
  icons: { icon: "https://cakespot.pk/wp-content/uploads/2025/04/IMG_20250408_001138-1.png" },
  openGraph: {
    title: "Cake Spot | Customised Cakes, Gulberg Lahore",
    description: "Taste of Royalty. Custom cakes delivered across Lahore. 4.9 stars from 570 Google reviews.",
    images: ["https://cakespot.pk/wp-content/uploads/2025/11/Lumii_20251102_115741538-scaled-650x650.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#19B8E6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
