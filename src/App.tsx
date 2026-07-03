import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  // ⚠️ Important : exécuter le hook dans le composant racine
  useReveal();

  return (
    <div className="selection-orange min-h-screen bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
