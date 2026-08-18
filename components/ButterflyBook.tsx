"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type PhotoBookProps = {
  folder: string;
  count: number;
  title: string;
  fileExtension?: "jpg" | "webp";
};

export function ButterflyBook({ folder, count, title, fileExtension = "webp" }: PhotoBookProps) {
  const [page, setPage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastWheelTime = useRef(0);
  const pages = Array.from(
    { length: count },
    (_, index) => `/${folder}/${String(index + 1).padStart(2, "0")}.${fileExtension}`,
  );
  const goTo = (nextPage: number) => setPage((nextPage + pages.length) % pages.length);

  const turnWithWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const now = Date.now();
    if (now - lastWheelTime.current < 260) return;
    lastWheelTime.current = now;
    goTo(page + (event.deltaY > 0 ? 1 : -1));
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsPreviewOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    thumbnailRefs.current[page]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [page]);

  return <div className="butterfly-book" aria-label={`${title} photography book`}>
    <div className="book-spread">
      <span className="book-page-number">{String(page + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}</span>
      <AnimatePresence mode="wait">
        <motion.img key={pages[page]} src={pages[page]} alt={`${title} photograph ${page + 1}`} initial={{ opacity: 0, rotateY: -10, x: 24 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} exit={{ opacity: 0, rotateY: 10, x: -24 }} transition={{ duration: .32, ease: "easeOut" }} />
      </AnimatePresence>
      <span className="book-caption">{title.toUpperCase()} / SILVIA ZHENG</span>
      <button type="button" className="book-turn-zone book-turn-previous" onClick={() => goTo(page - 1)} aria-label="Previous photograph">←</button>
      <button type="button" className="book-turn-zone book-turn-next" onClick={() => goTo(page + 1)} aria-label="Next photograph">→</button>
      <button type="button" className="book-expand" onClick={() => setIsPreviewOpen(true)}>EXPAND ↗</button>
    </div>
    <div className="book-controls"><button onClick={() => goTo(page - 1)} aria-label="Previous photograph">← PREV</button><button onClick={() => goTo(page + 1)} aria-label="Next photograph">NEXT →</button></div>
    <div className="book-thumbnails" onWheel={turnWithWheel} aria-label="Choose a photograph; use the mouse wheel to turn pages">{pages.map((image, index) => <button ref={(element) => { thumbnailRefs.current[index] = element; }} onClick={() => setPage(index)} className={index === page ? "is-active" : ""} key={image} aria-label={`Open photograph ${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span><img src={image} alt="" /></button>)}</div>
    <AnimatePresence>{isPreviewOpen && <motion.div className="photo-lightbox" role="dialog" aria-modal="true" aria-label={`${title} full screen preview`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPreviewOpen(false)}><motion.div className="photo-lightbox-window" initial={{ scale: .96, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 18 }} onClick={(event) => event.stopPropagation()}><div className="photo-lightbox-bar"><span>{title.toUpperCase()} / {String(page + 1).padStart(2, "0")} OF {String(pages.length).padStart(2, "0")}</span><button type="button" onClick={() => setIsPreviewOpen(false)}>✕ CLOSE</button></div><div className="photo-lightbox-image"><motion.img key={`lightbox-${pages[page]}`} src={pages[page]} alt={`${title} photograph ${page + 1}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .22 }} /><button type="button" className="photo-lightbox-turn photo-lightbox-previous" onClick={() => goTo(page - 1)} aria-label="Previous photograph">←</button><button type="button" className="photo-lightbox-turn photo-lightbox-next" onClick={() => goTo(page + 1)} aria-label="Next photograph">→</button></div><div className="photo-lightbox-controls"><button type="button" onClick={() => goTo(page - 1)}>← PREVIOUS</button><button type="button" onClick={() => goTo(page + 1)}>NEXT →</button></div></motion.div></motion.div>}</AnimatePresence>
  </div>;
}
