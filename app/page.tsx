import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Order from "@/components/Order";
import { Nav, Promises, Flavours, Steps, Reviews, Contact, Footer, MobileBar } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Promises />
        <Gallery />
        <Order />
        <Flavours />
        <Steps />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
