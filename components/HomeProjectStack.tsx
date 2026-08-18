"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projectsData";

type Props = { projects: Project[]; onSelect: (project: Project) => void };

const folderColors = ["cyan", "black", "yellow", "pink"] as const;

export function HomeProjectStack({ projects, onSelect }: Props) {
  return <div className="home-project-stack" aria-label="Four selected project folders">
    {projects.map((project, index) => <motion.article
      id={`home-folder-${index}`}
      key={project.id}
      className={`home-folder home-folder-${folderColors[index]}`}
      style={{ zIndex: index + 1 }}
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
          <p>● &nbsp; {project.year}</p>
          <small>{project.category}</small>
          <h3>{project.title}</h3>
          <span>{project.description}</span>
          <button type="button" onClick={() => onSelect(project)}>VIEW PROJECT &nbsp;↗</button>
          <div>{project.tags.slice(0, 3).map((tag) => <em key={tag}>{tag}</em>)}</div>
        </div>
        <button type="button" className="home-folder-image" aria-label={`Open ${project.title}`} onClick={() => onSelect(project)}>
          <img src={project.coverImage} alt={project.title} />
          <b>IMAGE / {String(index + 1).padStart(2, "0")}</b>
        </button>
      </div>
    </motion.article>)}</div>;
}
