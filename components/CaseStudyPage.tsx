"use client";

import { useState } from "react";
import { Header } from "./Header";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project, projectsData } from "@/data/projectsData";
import { ContactBanner } from "./ContactBanner";

export function CaseStudyPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | Project["category"]>("All");
  const filters: Array<"All" | Project["category"]> = ["All", "Brand Marketing & PR", "Fashion Design"];
  const visibleProjects = (filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter))
    .slice()
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate));

  return <main className="case-study-page nudge-page"><Header active="case-study" />
    <section className="case-study-hero"><p className="scribble">case files<br /><u>________</u></p><h1>SELECTED<br /><span>WORK.</span></h1><p>Fashion concepts, cultural campaigns and brand stories by Silvia Zheng.</p></section>
    <section className="case-study-content">
      <div className="case-study-filters" aria-label="Filter case studies">
        {filters.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item === "All" ? "ALL WORK" : item}</button>)}
      </div>
      <div className="case-study-list">{visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelected(project)} />)}</div>
    </section>
    <ContactBanner />
    <ProjectModal project={selected} onClose={() => setSelected(null)} />
  </main>;
}
