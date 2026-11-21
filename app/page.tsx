import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Builder from "@/components/Builder";
import { Nav, Steps, Reviews, Visit, Footer, MobileBar } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Builder />
        <Steps />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
