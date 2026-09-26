export interface ProjectModel {
    description: string;
    image: string;
    tags: string[];
    github: string;
    url: string;
}

export const ProjectData: Record<string, ProjectModel> = {
    "Riel Armory": {
        description: "Dockerized e-commerce web app that offers firearms and educates users about firearms best practices laws to follow.",
        image: "",
        tags: ["Angular", "Spring Boot", "Docker", "MySQL"],
        github: "https://github.com/gabrieljamesbenedict/riel-armory",
        url: ""
    },

    "WikiRizal": {
        description: "A comprehensive digital encyclopedia dedicated to Dr. Jose Rizal, the national hero of the Philippines. This interactive website provides detailed information about his life, works, family, medical practice, and lasting impact on Philippine history.",
        image: "",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/lorem/1",
        url: "https://gabrieljamesbenedict.github.io/WikiRizal/"
    },

    "TaskMaster": {
        description: "Full-stack productivity tracking mobile-app for parents to monitor children's task progress. Led backend development and database management",
        image: "",
        tags: ["Android Studio", "Android Views", "Java", "Firebase"],
        github: "https://github.com/XenDeQwak/TaskMaster",
        url: ""
    }
};