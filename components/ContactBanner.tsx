import Link from "next/link";

export function ContactBanner() {
  return (
    <section className="site-contact-banner" aria-label="Contact Silvia Zheng">
      <Link href="/contact" className="site-contact-banner-link">
        <span className="site-contact-kicker">OPEN FOR COLLABORATIONS / PR / DESIGN</span>
        <span className="site-contact-word">CONTACT</span>
        <span className="site-contact-arrow" aria-hidden="true">↗</span>
        <span className="site-contact-caption">LET&apos;S MAKE SOMETHING MEMORABLE</span>
      </Link>
    </section>
  );
}
