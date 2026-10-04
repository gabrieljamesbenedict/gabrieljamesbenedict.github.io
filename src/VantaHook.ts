import { useEffect, useRef } from "react";
import * as THREE from "three";

(window as any).THREE = THREE;

export function useVanta(activeVanta: any, options: any) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    
    if (vantaRef.current) {
      vantaEffect = activeVanta({
        el: vantaRef.current,
        THREE: THREE,
        ...options,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []); 

  return vantaRef;
}