import projectData from "../data/project.json";

import {pagination} from "../helpers/Pagination"


export function getProject(projectName = "", pagesize = 10, currentpage = 1) {
  let project = projectData;

  if (projectName ) {
    project = project.filter((a) => a.projectName.includes(projectName));

  }
  return pagination(pagesize, currentpage, project);
}