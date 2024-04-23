import { PROJECT_STATUS } from "./enumeration";

export interface Project {
  name: string,
  company_name: string,
  status: PROJECT_STATUS,
}

export interface WorkflowStep {
  id: number,
  name: string,
}