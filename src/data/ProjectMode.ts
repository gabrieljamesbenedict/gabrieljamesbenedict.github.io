export class ProjectModel {
  public projectName: string;
  public projectDescription: string;
  public projectImagePath: string;
  public projectTags: string[];
  public githubLink: string;
  public liveLink: string;

  constructor(
    projectName: string,
    projectDescription: string,
    projectImagePath: string,
    projectTags: string[],
    githubLink: string,
    liveLink: string
  ) {
    this.projectName = projectName;
    this.projectDescription = projectDescription;
    this.projectImagePath = projectImagePath;
    this.projectTags = projectTags;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
  }
}

export async function fetchProjects(url: string): Promise<ProjectModel[]> {
  const response = await fetch(url);
  const data = await response.json();
  
  return data.map((item: any) => new ProjectModel(
    item.projectName,
    item.projectDescription,
    item.projectImagePath,
    item.projectTags,
    item.githubLink,
    item.liveLink
  ));
}