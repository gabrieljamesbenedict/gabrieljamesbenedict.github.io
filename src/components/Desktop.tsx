import { useState } from "react"

import "../styles/index.css"
import "../styles/Desktop.css"
import "../styles/Backgrounds.css"

const Desktop = () => {

    const backgroundList = ["bg-mesh", "bg-dots", "bg-grid", "bg-stripes", "bg-gradient-static", "bg-scanlines"];
    const [currentBackground, setCurrentBackground] = useState<string>(backgroundList[0])

    return (
        <div className={`desktop ${currentBackground}`}>
        </div>
  )
}

export default Desktop