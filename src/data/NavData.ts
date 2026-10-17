export interface NavLinkModel {
  href: string;
  label: string;
  /** Renders with the emphasized "cta" styling. */
  special?: boolean;
}

export const navLinks: NavLinkModel[] = [
  { href: "#aboutme", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact Me", special: true },
];
