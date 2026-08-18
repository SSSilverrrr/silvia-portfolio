"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Project } from "@/data/projectsData";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [image, setImage] = useState(0);
  useEffect(() => {
    setImage(0);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);
  const previous = () => project && setImage((image - 1 + project.galleryImages.length) % project.galleryImages.length);
  const next = () => project && setImage((image + 1) % project.galleryImages.length);
  return <AnimatePresence>{project && <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-[#111]/75 p-2 backdrop-blur-sm md:items-center md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <motion.article initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 36, opacity: 0 }} className="modal-panel max-h-[94vh] w-full max-w-6xl overflow-y-auto">
      <header className="sticky top-0 z-10 flex items-center justify-between p-3"><span className="font-mono text-[10px]">ARTBOARD / {project.id.toUpperCase()} / PREVIEW</span><button onClick={onClose} className="close-btn">x Close</button></header>
      <div className="grid md:grid-cols-[1.3fr_.7fr]">
        <section className="bg-[#161616] p-3">{project.embedUrl ? <div className="canva-preview"><iframe src={project.embedUrl} title={`${project.title} interactive preview`} allowFullScreen allow="fullscreen" /></div> : <><div className="relative overflow-hidden rounded-lg"><img src={project.galleryImages[image]} alt={`${project.title} ${image + 1}`} className="h-[45vh] w-full object-cover md:h-[68vh]" /><button aria-label="Previous gallery image" onClick={previous} className="absolute left-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded bg-white/90 text-sm">&lt;</button><button aria-label="Next gallery image" onClick={next} className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded bg-white/90 text-sm">&gt;</button></div><div className="mt-3 flex gap-2 overflow-x-auto">{project.galleryImages.map((src, i) => <button aria-label={`Show image ${i + 1}`} key={src} onClick={() => setImage(i)} className={`h-14 w-14 shrink-0 overflow-hidden rounded border ${i === image ? "border-[#d9ff38]" : "border-transparent"}`}><img src={src} alt="" className="h-full w-full object-cover" /></button>)}</div></>}</section>
        <aside className="p-6 md:p-8"><p className="font-mono text-[10px] uppercase">{project.category} / {project.year}</p><h2 className="mt-3 text-5xl font-black uppercase leading-[.85] tracking-[-.08em]">{project.title}</h2><div className="my-7 border-t border-black/30" /><p className="text-lg leading-snug">{project.description}</p><h3 className="mt-7 font-mono text-[10px] uppercase">Role and scope</h3><p className="mt-2 text-sm leading-relaxed">{project.role}</p>{project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex border-2 border-black bg-[#d9ff38] px-4 py-3 font-mono text-[11px] font-bold uppercase">Open original project -&gt;</a>}{project.metrics && <div className="mt-8 grid grid-cols-3 gap-2">{Object.entries(project.metrics).map(([key, value]) => <div className="metric p-2" key={key}><b className="block text-lg">{value}</b><span className="font-mono text-[9px] uppercase">{key}</span></div>)}</div>}</aside>
      </div>
    </motion.article>
  </motion.div>}</AnimatePresence>;
}
