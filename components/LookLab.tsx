import Image from "next/image";
import { SelectedLooksCarousel } from "./SelectedLooksCarousel";

type Look = {
  number: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

const visualizingLooks: Look[] = [
  { number: "01", src: "/look-lab/visualizing-the-invisible/perception-01.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Perception look 01" },
  { number: "01-2", src: "/look-lab/visualizing-the-invisible/perception-02.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Perception look 01 variation 2" },
  { number: "01-3", src: "/look-lab/visualizing-the-invisible/perception-03.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Perception look 01 variation 3" },
  { number: "02", src: "/look-lab/visualizing-the-invisible/02.png", width: 1086, height: 1448, alt: "Visualizing the Invisible look 02" },
  { number: "03", src: "/look-lab/visualizing-the-invisible/03.png", width: 992, height: 1586, alt: "Visualizing the Invisible look 03" },
  { number: "04", src: "/look-lab/visualizing-the-invisible/summoning-04.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Summoning look 04" },
  { number: "04-2", src: "/look-lab/visualizing-the-invisible/summoning-05.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Summoning look 04 variation 2" },
  { number: "04-3", src: "/look-lab/visualizing-the-invisible/summoning-06.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Summoning look 04 variation 3" },
  { number: "05", src: "/look-lab/visualizing-the-invisible/insight-07.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Insight look 05" },
  { number: "05-2", src: "/look-lab/visualizing-the-invisible/insight-08.jpg", width: 1600, height: 2133, alt: "Visualizing the Invisible Insight look 05 variation 2" },
  { number: "05-3", src: "/look-lab/visualizing-the-invisible/insight-09.jpg", width: 1600, height: 2134, alt: "Visualizing the Invisible Insight look 05 variation 3" },
];

const visualizingLookGroups: Array<{ title: string; looks: Look[] }> = [
  { title: "PERCEPTION", looks: visualizingLooks.slice(0, 5) },
  { title: "SUMMONING", looks: visualizingLooks.slice(5, 8) },
  { title: "INSIGHT", looks: visualizingLooks.slice(8, 11) },
];

const functionalLookGroups: Array<{ title: string; looks: Look[] }> = [
  {
    title: "BODYEXTENSION",
    looks: [
      { number: "01", src: "/look-lab/functional-fashion/v2-01.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyextension look 01" },
      { number: "02", src: "/look-lab/functional-fashion/v2-02.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyextension look 02" },
      { number: "03", src: "/look-lab/functional-fashion/v2-03.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyextension look 03" },
    ],
  },
  {
    title: "BODYSHAPE",
    looks: [
      { number: "04", src: "/look-lab/functional-fashion/v2-04.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyshape look 04" },
      { number: "05", src: "/look-lab/functional-fashion/v2-05.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyshape look 05" },
      { number: "06", src: "/look-lab/functional-fashion/v2-06.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyshape look 06" },
    ],
  },
  {
    title: "BODYSKIN",
    looks: [
      { number: "07", src: "/look-lab/functional-fashion/v2-07.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyskin look 07" },
      { number: "08", src: "/look-lab/functional-fashion/v2-08.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyskin look 08" },
      { number: "09", src: "/look-lab/functional-fashion/v2-09.png", width: 1024, height: 1536, alt: "Functional Fashion Bodyskin look 09" },
    ],
  },
];

const materialExperimentalGroups: Array<{ title: string; looks: Look[] }> = [
  {
    title: "METAVERSE",
    looks: [
      { number: "01", src: "/look-lab/material-experimental/01.png", width: 1024, height: 1536, alt: "Material Experimental Metaverse look 01" },
      { number: "02", src: "/look-lab/material-experimental/02.png", width: 1024, height: 1536, alt: "Material Experimental Metaverse look 02" },
      { number: "03", src: "/look-lab/material-experimental/03.png", width: 1024, height: 1536, alt: "Material Experimental Metaverse look 03" },
    ],
  },
  {
    title: "MICROSCOPE",
    looks: [
      { number: "04", src: "/look-lab/material-experimental/04.png", width: 1024, height: 1536, alt: "Material Experimental Microscope look 04" },
      { number: "05", src: "/look-lab/material-experimental/05.png", width: 1024, height: 1536, alt: "Material Experimental Microscope look 05" },
      { number: "06", src: "/look-lab/material-experimental/06.png", width: 1024, height: 1536, alt: "Material Experimental Microscope look 06" },
    ],
  },
  {
    title: "1990s",
    looks: [
      { number: "07", src: "/look-lab/material-experimental/07.png", width: 1024, height: 1536, alt: "Material Experimental 1990s look 07" },
      { number: "08", src: "/look-lab/material-experimental/08.png", width: 1024, height: 1536, alt: "Material Experimental 1990s look 08" },
      { number: "09", src: "/look-lab/material-experimental/09.png", width: 1024, height: 1536, alt: "Material Experimental 1990s look 09" },
    ],
  },
];

const findLooks = (looks: Look[], numbers: string[]) => numbers.map((number) => looks.find((look) => look.number === number)).filter((look): look is Look => Boolean(look));
const functionalLooks = functionalLookGroups.flatMap((group) => group.looks);
const materialExperimentalLooks = materialExperimentalGroups.flatMap((group) => group.looks);

const selectedLookGroups = [
  { title: "VISUALIZING THE INVISIBLE", looks: findLooks(visualizingLooks, ["01", "04", "05"]) },
  { title: "FUNCTIONAL FASHION", looks: findLooks(functionalLooks, ["01", "04", "08"]) },
  { title: "MATERIAL EXPERIMENTAL", looks: findLooks(materialExperimentalLooks, ["02", "04", "08"]) },
];

function EditorialGallery({ looks, seriesClass }: { looks: Look[]; seriesClass: string }) {
  return <div className={`look-lab-gallery ${seriesClass}`}>
    {looks.map((look) => <figure className="look-lab-figure" data-look-number={look.number} key={look.src}>
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
  return <SelectedLooksCarousel groups={selectedLookGroups} />;
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
      <div className="visualizing-look-groups">
        {visualizingLookGroups.map((group, index) => <section className="visualizing-look-group" key={group.title}>
          <h4><span>{String(index + 1).padStart(2, "0")}</span>{group.title}</h4>
          <EditorialGallery looks={group.looks} seriesClass="visualizing-look-gallery" />
        </section>)}
      </div>
    </section>

    <section className="look-lab-series functional-look-series" aria-labelledby="functional-series-title">
      <header>
        <p>02 — FASHION DESIGN</p>
        <h3 id="functional-series-title">FUNCTIONAL FASHION</h3>
      </header>
      <div className="functional-look-groups">
        {functionalLookGroups.map((group, index) => <section className="functional-look-group" key={group.title}>
          <h4><span>{String(index + 1).padStart(2, "0")}</span>{group.title}</h4>
          <EditorialGallery looks={group.looks} seriesClass="functional-look-gallery" />
        </section>)}
      </div>
    </section>

    <section className="look-lab-series material-experimental-series" aria-labelledby="material-experimental-series-title">
      <header>
        <p>03 — MATERIAL STUDY</p>
        <h3 id="material-experimental-series-title">MATERIAL EXPERIMENTAL</h3>
      </header>
      <div className="material-experimental-groups">
        {materialExperimentalGroups.map((group, index) => <section className="material-experimental-group" key={group.title}>
          <h4><span>{String(index + 1).padStart(2, "0")}</span>{group.title}</h4>
          <EditorialGallery looks={group.looks} seriesClass="material-experimental-look-gallery" />
        </section>)}
      </div>
    </section>
  </section>;
}
