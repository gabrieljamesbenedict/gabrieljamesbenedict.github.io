export interface ProfileModel {
  name: string;
  fullName: string;
  title: string;
  bio: string[];
  education: string;
  languages: string;
  code: string[];
  stack: string[];
  interests: string[];
  footerTagline: string;
}

export const profile: ProfileModel = {
  name: "Gabriel Loslos",
  fullName: "Gabriel James Benedict M Loslos",
  title: "Software Developer & Designer",
  bio: [
    "Hello World! I am a Computer Science major from Mapua University.",
    "Designing and programming software has always been my passion ever since I was young. I first started coding in Scratch. My primary skill is Backend Development and my favorite framework to use is Spring Boot. I can also do Frontend Development and I've used React and Angular before.",
  ],
  education: "BS Computer Science — Mapua University",
  languages: "English, Filipino, Elven, Draconic",
  code: ["Java", "JavaScript", "TypeScript", "SQL", "Python", "HTML", "CSS", "PHP", "Visual Basic"],
  stack: ["SpringBoot", "React", "ExpressJS", "Fastify", "Node", "Angular", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  interests: ["Backend Development", "Game Development", "Pixel Art", "Gaming", "Anime", "D&D", "Magic: the Gathering"],
  footerTagline: "Built with React and Vite.",
};
