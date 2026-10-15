import { useEffect, useRef } from "react";

import "./styles/index.css"
import Header from "./sections/Header.tsx"
import Hero from "./sections/Hero.tsx"
import AboutMe from "./sections/AboutMe.tsx"
import Projects from "./sections/Projects.tsx"
import Skills from "./sections/Skills.tsx"
import Education from "./sections/Education.tsx"
import Contact from "./sections/Contact.tsx"
import Footer from "./sections/Footer.tsx"

declare global {
  interface VantaEffect {
    destroy(): void;
  }

  interface Window {
    VANTA?: {
      NET: (options: Record<string, unknown>) => VantaEffect;
    };
  }
}

const App = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaStarted = useRef(false);

  useEffect(() => {
    if (vantaStarted.current) return;
    vantaStarted.current = true;

    let vantaEffect: VantaEffect | undefined;
    
    const initVanta = () => {
      if (!window.VANTA) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const isMobileDevice =
        window.matchMedia("(max-width: 768px)").matches ||
        window.matchMedia("(pointer: coarse)").matches;
      vantaEffect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x543fff,
        backgroundColor: 0x0d0d24,
        points: isMobileDevice ? 14.00 : 20.00,
        maxDistance: isMobileDevice ? 24.00 : 26.00,
        spacing: isMobileDevice ? 16.00 : 14.00,
        showDots: true
      });
    };

    if (!document.getElementById("three-script")) {
      const threeScript = document.createElement("script");
      threeScript.id = "three-script";
      threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      document.head.appendChild(threeScript);

      threeScript.onload = () => {
        const vantaScript = document.createElement("script");
        vantaScript.id = "vanta-script";
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js";
        document.head.appendChild(vantaScript);
        
        vantaScript.onload = initVanta;
      };
    } else {
      initVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="app__background">
      <div ref={vantaRef} className="app__vanta" aria-hidden="true" />
      <Header/>
      <div className="app__container">
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;