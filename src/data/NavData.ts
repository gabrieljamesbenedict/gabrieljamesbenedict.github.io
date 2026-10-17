export interface NavLinkModel {
  href: string;
  label: string;
}

export const navLinks: NavLinkModel[] = [
  { href: "#aboutme", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export const contactLink: NavLinkModel = { href: "#contact", label: "Contact Me" };
