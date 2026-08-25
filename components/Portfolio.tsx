"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Project, projectsData } from "@/data/projectsData";
import { Header } from "./Header";
import PixelCursor from "./PixelCursor";
import { ProjectModal } from "./ProjectModal";
import { HomeProjectStack } from "./HomeProjectStack";
import { RulerTracker } from "./RulerTracker";
import { ContactBanner } from "./ContactBanner";
import { SelectedLooks } from "./LookLab";

const homeProjectIds = ["functional-fashion", "material-experimental", "valentino-beauty-korea", "maison-margiela-machimachi"];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [chinaTime, setChinaTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const updateTime = () => setChinaTime(formatter.format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);
  const homeProjects = homeProjectIds.map((id) => projectsData.find((project) => project.id === id)).filter((project): project is Project => Boolean(project));
  return <main className="nudge-page home-page"><PixelCursor /><Header />
    <section id="top" className="nudge-hero canvas-section">
      <RulerTracker />
      <p className="live-time">SILVIA.Z / {chinaTime || "--:--:--"} CST</p>
      <div className="hero-composition"><p className="paper-label label-left">Fashion designer</p><p className="scribble name-scribble">my name is<br /><u>____</u></p><p className="paper-label label-right">Brand Marketing &amp; PR</p><div className="selected-name"><b>SILVIA</b><i /><i /><i /><i /></div><p className="availability-dot">Available for thoughtful projects</p></div>
      <div className="hero-side-avatar avatar-left"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=180&q=85" alt="" /></div><div className="hero-side-avatar avatar-right"><img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=180&q=85" alt="" /></div>
      <div className="hero-intro"><span className="yellow-sticker">FASHION / PR</span><p>I create <em>fashion worlds</em><br />and brand moments <mark>people remember</mark>.</p><span className="pink-sticker">SHENZHEN, CN</span><Link href="/contact">↗ &nbsp;Contact me</Link></div>
    </section>
    <section id="about" className="about-canvas canvas-section">
      <p className="scribble about-label">a little more about me</p>
      <p className="outlined-label">what&apos;s up</p>
      <div className="about-polaroid left-photo"><img src="/about/silvia-2026.jpg" alt="Silvia wearing a sculptural black headpiece" /><span>2026</span></div>
      <div className="about-polaroid right-photo"><img src="/about/silvia-moodboard.jpg" alt="Silvia's dark fashion moodboard" /><span>my moodboard</span></div>
      <p className="about-statement">
        <span>I&apos;m <b>Silvia Zheng</b> <i>✱</i> a fashion</span>
        <span>designer &amp; brand</span>
        <span>strategist <strong>✦</strong> turning bold</span>
        <span>ideas into memorable visual</span>
        <span>stories <em>●</em>.</span>
      </p>
      <div className="about-skill-board" aria-label="Silvia's focus areas">
        <span><b>Fashion Direction</b><i className="skill-icon icon-star" aria-hidden="true" /></span>
        <span><b>Creative Strategy</b><i className="skill-icon icon-orbit" aria-hidden="true" /></span>
        <span><b>PR Campaigns</b><i className="skill-icon icon-cube" aria-hidden="true" /></span>
        <span><b>Brand Worlds</b><i className="skill-icon icon-nodes" aria-hidden="true" /></span>
      </div>
    </section>
    <section id="projects" className="projects-canvas canvas-section"><p className="scribble work-note">explore my work!<br /><u>______</u></p><h2 className="pixel-heading">FEATURED<br />WORKS</h2><p className="project-postit">Four selected projects.<br />Scroll to explore each file.</p><HomeProjectStack projects={homeProjects} onSelect={setSelected} /><a className="home-all-work-link" href="/case-study">VIEW ALL CASE STUDIES &nbsp;↗</a></section>
    <SelectedLooks />
    <section id="playground" className="play-canvas canvas-section"><p className="scribble">the artist corner!</p><div className="play-object one">✿</div><div className="play-object two">☻</div><div className="play-object three">✦</div><h2>Colour experiments,<br /><i>tiny obsessions</i> and<br />happy accidents.</h2></section>
    <ContactBanner />
    <ProjectModal project={selected} onClose={() => setSelected(null)} />
  </main>;
}
