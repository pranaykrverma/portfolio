import { dockApps, profile, projects } from "@/data/portfolio";
import type { AppId } from "@/types/portfolio";

export interface SearchResult {
  id: string;
  app: AppId;
  title: string;
  subtitle: string;
}

export function searchPortfolio(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  const base: SearchResult[] = [
    ...dockApps.map((app) => ({ id: app.id, app: app.id, title: app.title, subtitle: "Open app" })),
    ...profile.skills.map((skill) => ({ id: `skill-${skill}`, app: "skills" as const, title: skill, subtitle: "Skill" })),
    ...projects.map((project) => ({ id: `project-${project.name}`, app: "projects" as const, title: project.name, subtitle: project.description })),
  ];

  if (!q) return base.slice(0, 8);

  return base
    .filter((item) => `${item.title} ${item.subtitle}`.toLowerCase().includes(q))
    .slice(0, 8);
}
