import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Order from "@/components/Order";
import Reveal from "@/components/Reveal";
import { TopBar, Nav, Marquee, Perks, Flavours, Reviews, Contact, Footer, FloatWA } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Perks />
        <Gallery />
        <Order />
        <Flavours />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatWA />
      <Reveal />
    </>
  );
}
