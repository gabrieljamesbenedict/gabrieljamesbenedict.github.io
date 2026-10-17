import { useCallback, useEffect, useRef, useState } from "react";
import {
  backgroundOptions,
  defaultBackgroundId,
  vantaBaseOptions,
  vantaConfigs,
  type BackgroundOption,
  type VantaConfig,
} from "../data/BackgroundData";

declare global {
  interface VantaEffect {
    destroy(): void;
  }

  interface Window {
    VANTA?: Record<string, (options: Record<string, unknown>) => VantaEffect>;
  }
}

const STORAGE_KEY = "bg-preference";
const VANTA_VERSION = "0.5.24";
const THREE_SCRIPT_ID = "three-script";
const P5_SCRIPT_ID = "p5-script";

const ENGINE_SOURCES = {
  three: {
    id: THREE_SCRIPT_ID,
    src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",
  },
  p5: {
    id: P5_SCRIPT_ID,
    src: `https://cdn.jsdelivr.net/npm/vanta@${VANTA_VERSION}/vendor/p5.min.js`,
  },
} as const;

/** Load a script once, resolving when it is ready. Returns the existing tag if already present. */
const loadScript = (id: string, src: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else {
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(src)), { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error(src)), { once: true });
    document.head.appendChild(script);
  });

const readStoredId = (): string => {
  if (typeof window === "undefined") return defaultBackgroundId;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored && backgroundOptions.some((option) => option.id === stored)
    ? stored
    : defaultBackgroundId;
};

export interface UseBackgroundResult {
  selectedId: string;
  selected: BackgroundOption;
  options: BackgroundOption[];
  select: (id: string) => void;
  reduceMotion: boolean;
  vantaRef: React.RefObject<HTMLDivElement | null>;
  backdropClass: string;
  backdropStyle: React.CSSProperties | undefined;
}

export const useBackground = (): UseBackgroundResult => {
  const [selectedId, setSelectedId] = useState<string>(readStoredId);
  const [reduceMotion, setReduceMotion] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | undefined>(undefined);

  const selected =
    backgroundOptions.find((option) => option.id === selectedId) ??
    backgroundOptions.find((option) => option.id === defaultBackgroundId)!;

  const select = useCallback((id: string) => {
    setSelectedId(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // localStorage may be unavailable (private mode); ignore.
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // Initialize / tear down Vanta only when a Vanta background is selected.
  useEffect(() => {
    // Non-Vanta backgrounds cost nothing: no scripts, no WebGL.
    if (selected.kind !== "vanta") return;
    if (reduceMotion) return;

    const config: VantaConfig | undefined = selected.vantaConfigId
      ? vantaConfigs[selected.vantaConfigId]
      : undefined;
    if (!config) return;

    let cancelled = false;

    const init = async () => {
      try {
        const engine = ENGINE_SOURCES[config.engine];
        await loadScript(engine.id, engine.src);
        await loadScript(
          `vanta-${selected.id}-script`,
          `https://cdn.jsdelivr.net/npm/vanta@${VANTA_VERSION}/dist/vanta.${config.effect.toLowerCase()}.min.js`,
        );
      } catch {
        return; // Network failure: fall back to the static backdrop.
      }
      if (cancelled || !vantaRef.current) return;
      const factory = window.VANTA?.[config.effect];
      if (!factory) return;

      vantaEffect.current = factory({
        el: vantaRef.current,
        ...vantaBaseOptions,
        ...config.options,
      });
    };

    void init();

    return () => {
      cancelled = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = undefined;
      }
    };
  }, [selected, reduceMotion]);

  const backdropClass = selected.kind === "css" ? selected.cssClass ?? "" : "";
  const backdropStyle =
    selected.kind === "solid"
      ? { backgroundColor: selected.color }
      : selected.kind === "off"
        ? { backgroundColor: "#000000" }
        : undefined;

  return {
    selectedId: selected.id,
    selected,
    options: backgroundOptions,
    select,
    reduceMotion,
    vantaRef,
    backdropClass,
    backdropStyle,
  };
};
