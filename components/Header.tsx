import Link from "next/link";

export function Header({ active = "home" }: { active?: "home" | "about" | "case-study" | "playground" | "contact" }) {
  return <header className="template-header">
    <Link href="/" className="template-mark" aria-label="Silvia Zheng home"><span /><span /><span /></Link>
    <nav aria-label="Primary navigation">
      <Link className={active === "home" ? "is-active" : ""} href="/"><i>⌂</i> Home</Link>
      <Link className={active === "about" ? "is-active" : ""} href="/about"><i>✱</i> About</Link>
      <Link className={active === "case-study" ? "is-active" : ""} href="/case-study"><i>▣</i> Case study</Link>
      <Link className={active === "playground" ? "is-active" : ""} href="/playground"><i>◩</i> Playground</Link>
    </nav>
    <div className="template-actions">
      <a className="contact-detail" href="mailto:zhengsilvia981@163.com"><b>EM</b><em>zhengsilvia981@163.com</em></a>
      <a className="contact-detail" href="tel:+8613823307126"><b>PH</b><em>+86 138 2330 7126</em></a>
      <Link className="contact-action" href="/contact">Contact</Link>
    </div>
  </header>;
}
