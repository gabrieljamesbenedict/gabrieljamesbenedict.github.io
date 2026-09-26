export interface ProjectModel {
    description: string;
    image: string;
    tags: string[];
    github: string;
    url: string;
}

export const ProjectData: Record<string, ProjectModel> = {
    "Lorem Ipsum": {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/lorem1.png",
        tags: ["Lorem", "Ipsum"],
        github: "https://github.com/lorem/1",
        url: "https://lorem1.com"
    },

    "Dolor Sit": {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/lorem1.png",
        tags: ["Lorem", "Ipsum"],
        github: "https://github.com/lorem/1",
        url: "https://lorem1.com"
    },

    "Amet Consectetur": {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/images/lorem1.png",
        tags: ["Lorem", "Ipsum"],
        github: "https://github.com/lorem/1",
        url: "https://lorem1.com"
    }
};