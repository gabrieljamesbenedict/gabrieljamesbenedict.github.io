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
  interface Window {
    VANTA: any;
  }
}

const App = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    
    const initVanta = () => {
      if (!window.VANTA) return;
      vantaEffect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x543fff,
        backgroundColor: 0xd0d24,
        points: 20.00,
        maxDistance: 26.00,
        spacing: 14.00,
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
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
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
    <div>
      <Header/>
      <div ref={vantaRef} className="app__container">
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