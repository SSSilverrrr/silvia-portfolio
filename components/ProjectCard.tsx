"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projectsData";

export function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return <motion.article className={`case-file case-file-${index % 2}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onClick={onClick}>
    <div className="case-folder">
      <p className="case-date"><i aria-hidden="true">●</i>{project.year}</p>
      <button onClick={onClick} className="case-image" aria-label={`Open ${project.title}`}><img src={project.coverImage} alt={project.title} /><span>{project.category === "Fashion Design" ? "Fashion" : "PR"}</span></button>
    </div>
    <div className="case-copy"><h3>{project.title}</h3><p className="case-description">{project.description}</p><div className="case-tags"><span>{project.category}</span>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
  </motion.article>;
}
