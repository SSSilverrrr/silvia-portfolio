"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Look = {
  number: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

type LookGroup = {
  title: string;
  looks: Look[];
};

export function SelectedLooksCarousel({ groups }: { groups: LookGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStart = useRef<number | null>(null);
  const activeGroup = groups[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + groups.length) % groups.length);
  };

  const finishSwipe = (clientX: number) => {
    if (swipeStart.current === null) return;
    const distance = clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
  };

  return <section id="selected-looks" className="selected-looks canvas-section" aria-labelledby="selected-looks-title">
    <header className="selected-looks-header">
      <p>[ ONGOING SERIES / 2026 ]</p>
      <h2 id="selected-looks-title">SELECTED<br /><span>LOOKS</span></h2>
      <p>Look Lab Edit / 3 Projects</p>
    </header>
    <div className="selected-looks-book">
      <div
        className="selected-looks-viewer"
        role="group"
        tabIndex={0}
        aria-label="Selected looks album"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onPointerDown={(event) => { swipeStart.current = event.clientX; }}
        onPointerUp={(event) => finishSwipe(event.clientX)}
        onPointerCancel={() => { swipeStart.current = null; }}
      >
        <button type="button" className="selected-look-arrow is-previous" onClick={() => move(-1)} aria-label="Previous project">←</button>
        <article className="selected-look-spread" key={activeGroup.title}>
          <header>
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(groups.length).padStart(2, "0")}</span>
            <h3>{activeGroup.title}</h3>
          </header>
          <div className="selected-look-spread-grid">
            {activeGroup.looks.map((look) => <figure className="selected-look-page" key={look.src}>
              <div className="selected-look-frame">
                <Image
                  src={look.src}
                  width={look.width}
                  height={look.height}
                  sizes="(max-width: 700px) 30vw, 28vw"
                  alt={look.alt}
                />
              </div>
              <figcaption>LOOK {look.number}</figcaption>
            </figure>)}
          </div>
        </article>
        <button type="button" className="selected-look-arrow is-next" onClick={() => move(1)} aria-label="Next project">→</button>
      </div>
      <div className="selected-look-project-tabs" role="tablist" aria-label="Choose a Look Lab project">
        {groups.map((group, index) => <button
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Show ${group.title}`}
          className={index === activeIndex ? "is-active" : ""}
          onClick={() => setActiveIndex(index)}
          key={group.title}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{group.title}</b>
        </button>)}
      </div>
    </div>
    <Link className="selected-looks-link" href="/playground">EXPLORE LOOK LAB <span>→</span></Link>
  </section>;
}
