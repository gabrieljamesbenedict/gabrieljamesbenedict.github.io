import type { ReactNode } from "react";
import "../styles/window.css";

interface WindowProps {
  accent?: "purple" | "sky";
  tabs: ReactNode;
  children: ReactNode;
  bodyClassName?: string;
}

const Window = ({ accent = "purple", tabs, children, bodyClassName = "" }: WindowProps) => {
  return (
    <div className={`window window--${accent}`}>
      <div className="window__header">
        <div className="window__controls">
          <div className="window__dot window__dot--close"></div>
          <div className="window__dot window__dot--minimize"></div>
          <div className="window__dot window__dot--maximize"></div>
        </div>
        <div className="window__tabs">{tabs}</div>
      </div>
      <div className={`window__body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  );
};

export default Window;
