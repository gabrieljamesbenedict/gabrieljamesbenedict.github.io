export interface ProjectModel {
    description: string;
    tags: string[];
    github: string;
    url: string;
    images: string[];
}

export const ProjectData: Record<string, ProjectModel> = {
    "Riel Armory": {
        description: "Dockerized e-commerce web app that offers firearms and educates users about firearms best practices laws to follow.",
        tags: ["Angular", "Spring Boot", "Docker", "MySQL"],
        github: "https://github.com/gabrieljamesbenedict/riel-armory",
        url: "",
        images: []
    },

    "WikiRizal": {
        description: "A comprehensive digital encyclopedia dedicated to Dr. Jose Rizal, the national hero of the Philippines. This interactive website provides detailed information about his life, works, family, medical practice, and lasting impact on Philippine history.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/gabrieljamesbenedict/WikiRizal",
        url: "https://gabrieljamesbenedict.github.io/WikiRizal/",
        images: []
    },

    "TaskMaster": {
        description: "Full-stack productivity tracking mobile-app for parents to monitor children's task progress. Led backend development and database management",
        tags: ["Android Studio", "Android Views", "Java", "Firebase"],
        github: "https://github.com/XenDeQwak/TaskMaster",
        url: "",
        images: []
    },

    "Froststained Chat": {
        description: "A simple chat platform built for me and my friends, using a React client and an ExpressJS server.",
        tags: ["React", "ExpressJS", "Node", "JavaScript"],
        github: "https://github.com/gabrieljamesbenedict/froststained-chat",
        url: "",
        images: []
    },

    "Froststained Server Console": {
        description: "A LAN Minecraft Java server management console with a single-server-per-instance scope. Node and Fastify backend with a React SPA served on one port, packaged as a portable single executable via Node SEA.",
        tags: ["Node", "Fastify", "React", "SQLite"],
        github: "https://github.com/gabrieljamesbenedict/Froststained-Server-Console",
        url: "",
        images: []
    },

    "Porado": {
        description: "A compiled programming language that blends traditional C-family syntax with natural English speech for intuitive, readable code. Features static typing, arrays, functions, recursion, and a full set of loops and conditionals.",
        tags: ["Java", "Compiler", "Programming Language"],
        github: "https://github.com/gabrieljamesbenedict/porado",
        url: "",
        images: []
    },

    "Clearance Monitoring System": {
        description: "A web application for monitoring student clearance, built with a Next.js and TypeScript frontend backed by a Java service.",
        tags: ["Next.js", "TypeScript", "Java", "Web"],
        github: "https://github.com/gabrieljamesbenedict/clearance-monitoring-system-web",
        url: "",
        images: []
    },

    "Delicious Discoveries": {
        description: "A fictional digital initiative promoting the culinary heritage of Marinduque, Philippines. The platform serves as a virtual food guide where users can explore native delicacies, learn about their cultural significance, view preparation methods, and contact local vendors or culinary tour organizers.",
        tags: ["React", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/gabrieljamesbenedict/delicious-discoveries",
        url: "",
        images: []
    }
};