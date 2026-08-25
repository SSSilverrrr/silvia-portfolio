"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ArchiveItem = {
  title: string;
  detail: string;
  src: string;
  type?: "image" | "video";
  software?: string;
};

const featured: ArchiveItem[] = [
  { title: "Snake Year Silk Scarf", detail: "Illustration & textile concept", src: "/creative-archive/snake-year-silk-scarf.png" },
  { title: "Chanel No. 5 Poster", detail: "Fragrance campaign illustration", src: "/creative-archive/chanel-no5-poster.png" },
];

const zodiac: ArchiveItem[] = [
  { title: "Gemini", detail: "Zodiac illustration", src: "/creative-archive/zodiac-01.png" },
  { title: "Leo", detail: "Zodiac illustration", src: "/creative-archive/zodiac-02.png" },
  { title: "Aries", detail: "Zodiac illustration", src: "/creative-archive/zodiac-03.png" },
  { title: "Cancer", detail: "Zodiac illustration", src: "/creative-archive/zodiac-04.png" },
  { title: "Scorpio", detail: "Zodiac illustration", src: "/creative-archive/zodiac-05.png" },
  { title: "Aquarius", detail: "Zodiac illustration", src: "/creative-archive/zodiac-06.png" },
];

const motionWorks: ArchiveItem[] = [
  { title: "Classic of Mountains and Seas", software: "DREAMINA + CAPCUT", detail: "AI VISUAL / VIDEO EDIT", src: "/creative-archive/edited-film.mov", type: "video" },
  { title: "My Italian Life", software: "CAPCUT", detail: "VIDEO EDIT", src: "/creative-archive/animation-study.mov", type: "video" },
];

export function CreativeArchive() {
  const [selected, setSelected] = useState<ArchiveItem | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const Tile = ({ item, className = "" }: { item: ArchiveItem; className?: string }) => (
    <motion.button
      type="button"
      className={`creative-tile ${className}`}
      onClick={() => setSelected(item)}
      whileHover={{ y: -5, rotate: item.type === "video" ? 0 : 0.45 }}
      whileTap={{ scale: 0.985 }}
    >
      {item.type === "video" ? (
        <video muted playsInline preload="metadata" src={item.src} />
      ) : (
        <img src={item.src} alt={item.title} />
      )}
      <span className="creative-tile-meta"><b>{item.title}</b>{item.software ? <small className="creative-software-meta"><strong>{item.software}</strong><span>{item.detail}</span></small> : <small>{item.detail}</small>}</span>
      <span className="creative-open">OPEN ↗</span>
    </motion.button>
  );

  return <section id="drawings" className="creative-archive" aria-labelledby="creative-archive-title">
    <p className="eyebrow">[ 02 / DRAWINGS ]</p>
    <h2 id="creative-archive-title">Drawings<br /><span>&amp; Motion.</span></h2>
    <p className="creative-intro">A small collection of visual experiments — from fashion objects and campaign posters to a growing zodiac universe and moving-image studies.</p>

    <div className="creative-featured">{featured.map((item) => <Tile key={item.title} item={item} />)}</div>
    <div className="creative-subhead"><p>12 ZODIAC STUDIES / SELECTED SIX</p><i>✦</i></div>
    <div className="creative-zodiac">{zodiac.map((item) => <Tile key={item.title} item={item} />)}</div>
    <div className="creative-subhead"><p>MOVING IMAGE</p><i>✦</i></div>
    <div className="creative-motion">{motionWorks.map((item) => <Tile key={item.title} item={item} />)}</div>

    <AnimatePresence>
      {selected && <motion.div className="creative-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className="creative-lightbox-window" onClick={(event) => event.stopPropagation()} initial={{ y: 20, scale: .98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: .98 }}>
          <div className="creative-lightbox-bar"><span>ARCHIVE / {selected.title.toUpperCase()}</span><button type="button" onClick={() => setSelected(null)}>✕ CLOSE</button></div>
          <div className="creative-lightbox-media">
            {selected.type === "video" ? <video src={selected.src} controls autoPlay playsInline /> : <img src={selected.src} alt={selected.title} />}
          </div>
          <p>{selected.detail}</p>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </section>;
}
