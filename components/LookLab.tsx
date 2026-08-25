import Image from "next/image";
import Link from "next/link";

type Look = {
  number: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const visualizingLooks: Look[] = [
  { number: "01", src: "/look-lab/visualizing-the-invisible/01.png", width: 1024, height: 1535, alt: "Visualizing the Invisible look 01" },
  { number: "02", src: "/look-lab/visualizing-the-invisible/02.png", width: 1086, height: 1448, alt: "Visualizing the Invisible look 02" },
  { number: "03", src: "/look-lab/visualizing-the-invisible/03.png", width: 992, height: 1586, alt: "Visualizing the Invisible look 03" },
  { number: "04", src: "/look-lab/visualizing-the-invisible/04.png", width: 1023, height: 1537, alt: "Visualizing the Invisible look 04" },
  { number: "05", src: "/look-lab/visualizing-the-invisible/05.png", width: 1023, height: 1537, alt: "Visualizing the Invisible look 05" },
];

const functionalLooks: Look[] = [
  { number: "01", src: "/look-lab/functional-fashion/01.png", width: 768, height: 1024, alt: "Functional Fashion look 01" },
  { number: "02", src: "/look-lab/functional-fashion/02.png", width: 768, height: 1024, alt: "Functional Fashion look 02" },
  { number: "03", src: "/look-lab/functional-fashion/03.png", width: 864, height: 1152, alt: "Functional Fashion look 03" },
  { number: "04", src: "/look-lab/functional-fashion/04.png", width: 864, height: 1152, alt: "Functional Fashion look 04" },
];

const selectedLookNumbers = new Set(["01", "04", "05"]);
const selectedLooks = visualizingLooks.filter((look) => selectedLookNumbers.has(look.number));

function EditorialGallery({ looks, seriesClass }: { looks: Look[]; seriesClass: string }) {
  return <div className={`look-lab-gallery ${seriesClass}`}>
    {looks.map((look) => <figure className="look-lab-figure" key={look.src}>
      <div className="look-lab-image">
        <Image
          src={look.src}
          width={look.width}
          height={look.height}
          sizes="(max-width: 700px) calc(100vw - 40px), 28vw"
          alt={look.alt}
        />
      </div>
      <figcaption>{look.number}</figcaption>
    </figure>)}
  </div>;
}

export function SelectedLooks() {
  return <section className="selected-looks canvas-section" aria-labelledby="selected-looks-title">
    <header className="selected-looks-header">
      <p>[ ONGOING SERIES / 2026 ]</p>
      <h2 id="selected-looks-title">SELECTED<br /><span>LOOKS</span></h2>
      <p>Visualizing the Invisible</p>
    </header>
    <div className="selected-looks-gallery">
      {selectedLooks.map((look) => <figure key={look.src}>
        <Image
          src={look.src}
          width={look.width}
          height={look.height}
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 46vw, 28vw"
          alt={look.alt}
        />
        <figcaption>LOOK {look.number}</figcaption>
      </figure>)}
    </div>
    <Link className="selected-looks-link" href="/playground">EXPLORE LOOK LAB <span>→</span></Link>
  </section>;
}

export function LookLab() {
  return <section id="look-lab" className="look-lab" aria-labelledby="look-lab-title">
    <header className="look-lab-header">
      <p>[ 01 / LOOK LAB ]</p>
      <h2 id="look-lab-title">LOOK<br /><span>LAB.</span></h2>
      <p>Original garment concepts and selected looks.</p>
    </header>

    <section className="look-lab-series" aria-labelledby="visualizing-series-title">
      <header>
        <p>01 — GRADUATION PROJECT / ONGOING</p>
        <h3 id="visualizing-series-title">VISUALIZING THE INVISIBLE</h3>
      </header>
      <EditorialGallery looks={visualizingLooks} seriesClass="visualizing-look-gallery" />
    </section>

    <section className="look-lab-series functional-look-series" aria-labelledby="functional-series-title">
      <header>
        <p>02 — FASHION DESIGN</p>
        <h3 id="functional-series-title">FUNCTIONAL FASHION</h3>
      </header>
      <EditorialGallery looks={functionalLooks} seriesClass="functional-look-gallery" />
    </section>
  </section>;
}
