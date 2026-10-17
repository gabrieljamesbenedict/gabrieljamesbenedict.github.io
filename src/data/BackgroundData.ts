export type BackgroundKind = "vanta" | "css" | "solid" | "off";

export interface BackgroundOption {
  id: string;
  label: string;
  kind: BackgroundKind;
  /** Key into vantaConfigs. Only used when kind is "vanta". */
  vantaConfigId?: string;
  /** CSS class applied to the backdrop. Only used when kind is "css". */
  cssClass?: string;
  /** Solid color applied to the backdrop. Only used when kind is "solid". */
  color?: string;
}

export interface VantaConfig {
  /** Vanta effect name, e.g. "NET". */
  effect: string;
  /** Rendering engine backing the effect; determines which vendor lib to load. */
  engine: "three" | "p5";
  /** Options passed to Vanta; merged over vantaBaseOptions. */
  options?: Record<string, unknown>;
}

/**
 * Shared defaults applied to every Vanta effect.
 * Per-effect values in vantaConfigs are merged over these (per-effect wins).
 */
export const vantaBaseOptions = {
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x543fff,
  color1: 0x543fff,
  color2: 0x9ea7a8,
  baseColor: 0x543fff,
  backgroundColor: 0x0d0d24,
};

/**
 * Per-effect Vanta configuration. Edit each block to tune that effect
 * independently; anything omitted falls back to vantaBaseOptions.
 * See https://www.vantajs.com/ and each effect's dist/*.min.js for the
 * full list of options an effect accepts.
 */
export const vantaConfigs: Record<string, VantaConfig> = {
  NET: {
    effect: "NET",
    engine: "three",
    options: {
      points: 40.0,
      maxDistance: 40.0,
      spacing: 30.0,
      showDots: true,
    },
  },

  BIRDS: {
    effect: "BIRDS",
    engine: "three",
    options: {
      quantity: 3.0,
      birdSize: 1.5,
      wingSpan: 20.0,
      speedLimit: 10.0,
    },
  },

  CELLS: {
    effect: "CELLS",
    engine: "p5",
    options: {
      color2: 0x543fff,
    },
  },

  DOTS: {
    effect: "DOTS",
    engine: "p5",
    options: {},
  },

  GLOBE: {
    effect: "GLOBE",
    engine: "three",
    options: {
      size: 1.0,
      spacing: 15.0,
    },
  },

  HALO: {
    effect: "HALO",
    engine: "three",
    options: {
      size: 1.5,
      amplitudeFactor: 1.0,
      xOffset: 0.0,
      yOffset: 0.0,
    },
  },

  RINGS: {
    effect: "RINGS",
    engine: "three",
    options: {},
  },

  TOPOLOGY: {
    effect: "TOPOLOGY",
    engine: "p5",
    options: {},
  },

  TRUNK: {
    effect: "TRUNK",
    engine: "p5",
    options: {
      spacing: 0.0,
      chaos: 1.0,
    },
  },

  WAVES: {
    effect: "WAVES",
    engine: "three",
    options: {
      color: 0x22196e,
      shininess: 10.0,
      waveHeight: 10.0,
      waveSpeed: 1.5,
      zoom: 0.75,
    },
  },
};

export const backgroundOptions: BackgroundOption[] = [
  // Vanta (WebGL, heaviest)
  { id: "vanta-net", label: "Net", kind: "vanta", vantaConfigId: "NET" },
  { id: "vanta-birds", label: "Birds", kind: "vanta", vantaConfigId: "BIRDS" },
  { id: "vanta-cells", label: "Cells", kind: "vanta", vantaConfigId: "CELLS" },
  { id: "vanta-dots", label: "Dots", kind: "vanta", vantaConfigId: "DOTS" },
  { id: "vanta-globe", label: "Globe", kind: "vanta", vantaConfigId: "GLOBE" },
  { id: "vanta-halo", label: "Halo", kind: "vanta", vantaConfigId: "HALO" },
  { id: "vanta-rings", label: "Rings", kind: "vanta", vantaConfigId: "RINGS" },
  { id: "vanta-topology", label: "Topology", kind: "vanta", vantaConfigId: "TOPOLOGY" },
  { id: "vanta-trunk", label: "Trunk", kind: "vanta", vantaConfigId: "TRUNK" },
  { id: "vanta-waves", label: "Waves", kind: "vanta", vantaConfigId: "WAVES" },

  // Stylized CSS (cheap, no JavaScript)
  { id: "css-aurora", label: "Aurora", kind: "css", cssClass: "bg--aurora" },
  { id: "css-grid", label: "Grid", kind: "css", cssClass: "bg--grid" },
  { id: "css-starfield", label: "Starfield", kind: "css", cssClass: "bg--starfield" },
  { id: "css-dot-grid", label: "Dot Grid", kind: "css", cssClass: "bg--dot-grid" },
  { id: "css-radial-blurs", label: "Radial Blurs", kind: "css", cssClass: "bg--radial-blurs" },

  // Solid colors (cheapest)
  { id: "solid-default", label: "Solid", kind: "solid", color: "#1a1a2e" },
  { id: "solid-slate", label: "Slate", kind: "solid", color: "#0f172a" },
  { id: "solid-ink", label: "Ink", kind: "solid", color: "#0d0d24" },

  // Off
  { id: "off", label: "Off", kind: "off" },
];

export const defaultBackgroundId = "vanta-net";
