export interface ContactModel {
  label: string;
  command: string;
  url: string;
  icon: string;
}

export const contactLinks: ContactModel[] = [
  {
    label: "Email",
    command: "open --email",
    url: "mailto:benok.loslos@gmail.com",
    icon: "/icons/email-envelope-white-icon.png",
  },
  {
    label: "LinkedIn",
    command: "open --linkedin",
    url: "https://www.linkedin.com/in/gjbmloslos/",
    icon: "/icons/linkedin-app-white-icon.png",
  },
  {
    label: "GitHub",
    command: "open --github",
    url: "https://github.com/gabrieljamesbenedict",
    icon: "/icons/github-white-icon.png",
  },
];
