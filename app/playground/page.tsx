import { Header } from "@/components/Header";
import { ButterflyBook } from "@/components/ButterflyBook";
import { CreativeArchive } from "@/components/CreativeArchive";
import { ContactBanner } from "@/components/ContactBanner";

export default function PlaygroundPage() {
  return <main className="playground-page nudge-page"><Header active="playground" />
    <section className="playground-hero"><p className="scribble">the experimental corner!</p><h1>PLAY<br /><span>GROUND.</span></h1><p>A living sketchbook of images, drawings, colour studies and visual thoughts outside client work.</p></section>
    <section className="playground-shelf">
      <a href="#small-drawings" className="playground-slot sketch-slot"><span>01</span><h2>Small drawings</h2><p>Illustration, textile concepts and visual notes.</p><b>OPEN ARCHIVE ↘</b></a>
      <a href="#photography" className="playground-slot photo-slot"><span>02</span><h2>Photography</h2><p>Dreamscape, Northwest and Divine Girl — frames, textures and observations from daily life and travel.</p><b>36 FRAMES BELOW ↘</b></a>
      <a href="#colour-experiments" className="playground-slot colour-slot"><span>03</span><h2>Colour experiments</h2><p>Palettes, material play and accidental compositions.</p><b>EXPLORE SERIES ↘</b></a>
    </section>
    <section id="photography" className="photo-gallery" aria-labelledby="butterfly-series-title">
      <p className="eyebrow">[ 02 / PHOTOGRAPHY ]</p><h2 id="butterfly-series-title">Dream<br /><span>scape.</span></h2>
      <p className="photo-gallery-intro">A dreamlike visual diary of eighteen photographic fragments, where reflection, colour and imagination blur into one another.</p>
      <ButterflyBook folder="butterfly-series" count={18} title="Dreamscape Series" />
    </section>
    <section className="photo-gallery northwest-gallery" aria-labelledby="northwest-series-title">
      <p className="eyebrow">[ 03 / PHOTOGRAPHY ]</p><h2 id="northwest-series-title">Northwest<br /><span>Series.</span></h2>
      <p className="photo-gallery-intro">Nine photographs from Northwest China — open roads, changing light and quiet landscapes collected along the way.</p>
      <ButterflyBook folder="northwest-series" count={9} title="Northwest Series" />
    </section>
    <section className="photo-gallery divine-girl-gallery" aria-labelledby="divine-girl-series-title">
      <p className="eyebrow">[ 04 / PHOTOGRAPHY ]</p><h2 id="divine-girl-series-title">Divine<br /><span>Girl.</span></h2>
      <p className="photo-gallery-intro">神明少女 — nine dreamlike portraits exploring softness, ritual and a quiet otherworldly gaze.</p>
      <ButterflyBook folder="divine-girl-series" count={9} title="Divine Girl" fileExtension="jpg" />
    </section>
    <CreativeArchive />
    <ContactBanner />
  </main>;
}
