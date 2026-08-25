"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projectsData";

type Props = { projects: Project[]; onSelect: (project: Project) => void };

const folderColors = ["cyan", "black", "yellow", "pink"] as const;

export function HomeProjectStack({ projects, onSelect }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFolder = (index: number) => setOpenIndex((current) => current === index ? null : index);
  const handleFolderClick = (index: number, event: MouseEvent<HTMLElement>) => {
    if (!window.matchMedia("(max-width: 700px)").matches) return;
    if ((event.target as HTMLElement).closest("button, a")) return;
    toggleFolder(index);
  };

  return <div className="home-project-stack" aria-label="Four selected project folders">
    {projects.map((project, index) => <motion.article
      id={`home-folder-${index}`}
      key={project.id}
      className={`home-folder home-folder-${folderColors[index]} ${openIndex === index ? "is-mobile-open" : ""}`}
      style={{ zIndex: index + 1 }}
      onClick={(event) => handleFolderClick(index, event)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .12 }}
      transition={{ duration: .45, delay: index * .05 }}
    >
      <div className="home-folder-tab" aria-hidden="true">
        <i>PROJECT {String(index + 1).padStart(2, "0")}</i>
        <b>{project.category === "Fashion Design" ? "DESIGN" : "MARKETING"}</b>
      </div>
      <div className="home-folder-body">
        <div className="home-folder-copy">
          <p className="home-folder-date">● &nbsp; {project.year}</p>
          <small>{project.category}</small>
          <h3>{project.title}</h3>
          <button
            type="button"
            className="home-folder-mobile-toggle"
            aria-expanded={openIndex === index}
            aria-controls={`home-folder-details-${index}`}
            onClick={(event) => { event.stopPropagation(); toggleFolder(index); }}
          >
            <span>{openIndex === index ? "CLOSE DETAILS" : "OPEN DETAILS"}</span>
            <b aria-hidden="true">{openIndex === index ? "−" : "+"}</b>
          </button>
          <span id={`home-folder-details-${index}`} className="home-folder-description">{project.description}</span>
          <button type="button" className="home-folder-view" onClick={() => onSelect(project)}>VIEW PROJECT &nbsp;↗</button>
          <div className="home-folder-tags">{project.tags.slice(0, 3).map((tag) => <em key={tag}>{tag}</em>)}</div>
        </div>
        <button type="button" className="home-folder-image" aria-label={`Open ${project.title}`} onClick={() => onSelect(project)}>
          <img src={project.coverImage} alt={project.title} />
          <b>IMAGE / {String(index + 1).padStart(2, "0")}</b>
        </button>
      </div>
    </motion.article>)}</div>;
}
