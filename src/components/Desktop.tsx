import { useState } from "react"
import { useVanta } from "../VantaHook"
import WAVES from "vanta/src/vanta.waves";

import "../styles/index.css"
import "../styles/Desktop.css"
import "../styles/Backgrounds.css"

const Desktop = () => {
    const vantaRef = useVanta(WAVES, {
        color: 0x111111,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        shininess: 5,
        waveHeight: 20,
        waveSpeed: 0.1,
        zoom: 1
    });

    const backgroundList = ["bg-mesh", "bg-dots", "bg-grid", "bg-stripes", "bg-gradient-static", "bg-scanlines"];
    const [currentBackground, setCurrentBackground] = useState<string>(backgroundList[0]);

    return (
        <div ref={vantaRef} className="desktop">
            <h1>Hello World</h1>
        </div>
    )
}

export default Desktop