import { Header } from "@/components/Header";
import { ContactBanner } from "@/components/ContactBanner";

const education = [
  {
    years: "Graduated 2026",
    school: "Frosinone Academy of Fine Arts",
    course: "Bachelor's degree, Fashion Design · Frosinone, Italy",
  },
  {
    years: "2022 — 2023",
    school: "Istituto Marangoni Milano",
    course: "Fashion & Luxury Brand Management · Milan, Italy",
  },
];

const experience = [
  {
    years: "2025",
    company: "Sunday Home",
    role: "Brand Promotion & Influencer Outreach",
    place: "Shenzhen, China",
    detail: "Coordinated online and offline campaigns, including KOL partnerships for Shanghai Zhangyuan × Disney.",
  },
  {
    years: "2024 — 2025",
    company: "De Wan Milano",
    role: "Branding & Product Development",
    place: "Milan, Italy",
    detail: "Supported brand strategy, product development and social storytelling across Instagram and RED.",
  },
  {
    years: "2022 — 2023",
    company: "Chinese Global Youth Summit",
    role: "Social Media Marketing",
    place: "Shenzhen, China",
    detail: "Created interviews and editorial social content that brought guest stories to a wider youth audience.",
  },
  {
    years: "2021",
    company: "My Custom Suit",
    role: "Fashion Designer · Store Internship",
    place: "Shenzhen, China",
    detail: "Selected styles with customers and created product-display brochures for the custom suit store.",
  },
];

const skills = [
  { label: "Languages", detail: "Italian · English · Chinese", icon: "文" },
  { label: "Design", detail: "CLO3D · Adobe · Photography", icon: "✦" },
  { label: "AI Creation", detail: "Generative AI", icon: "◌" },
  { label: "Workflow", detail: "Microsoft Office · Social Media", icon: "↗" },
];

export default function AboutPage() {
  return (
    <main className="about-page nudge-page">
      <Header active="about" />
      <div className="about-page-ruler" aria-hidden="true">
        <span>100</span><span>200</span><span>300</span><span>400</span><span>500</span><span>600</span><span>700</span><span>800</span><span>900</span><span>1000</span><span>1100</span><span>1200</span><span>1300</span><span>1400</span><span>1500</span>
      </div>

      <aside className="about-side-nav" aria-label="About page sections">
        <a className="is-active" href="#bio"><b aria-hidden="true">✿</b><span>BIO</span></a>
        <a href="#story"><b aria-hidden="true">▰</b><span>STORY</span></a>
        <a href="#skills"><b aria-hidden="true">✦</b><span>SKILLS</span></a>
        <a href="#work"><b aria-hidden="true">✦</b><span>WORK</span></a>
      </aside>

      <section id="bio" className="about-reference-hero">
        <p className="about-handnote">PROFILE / SILVIA ZHENG</p>
        <h1>ABOUT</h1>
        <figure className="about-portrait">
          <img src="/silvia-portrait.jpg" alt="Silvia Zheng" />
          <figcaption>SILVIA / 2026</figcaption>
        </figure>
        <article className="about-main-card">
          <i className="about-handle handle-tl" /><i className="about-handle handle-tr" />
          <i className="about-handle handle-bl" /><i className="about-handle handle-br" />
          <p className="about-card-label">MAIN BIO</p>
          <h2>
            I&apos;m Silvia Zheng, a fashion designer and brand marketing strategist who gets excited about <mark>fashion</mark>, <mark>brands</mark> and the cultural ideas that stay with people.
          </h2>
          <p>
            I&apos;m a keen observer who finds patterns in small details and explores them from different perspectives. My work connects fashion design, visual storytelling and brand strategy to turn a point of view into experiences people can feel.
          </p>
          <div className="about-profile-meta">
            <span>LANGUAGES / Chinese · English · Italian</span>
            <span>TOOLS / CLO3D · Adobe · Photography · Generative AI</span>
          </div>
        </article>
      </section>

      <section id="story" className="about-education-section">
        <div className="about-story-frame">
          <span className="about-story-label">MY STORY</span>
          <div className="about-section-heading">
            <h2>Learning the language of <em>fashion</em> and luxury.</h2>
            <p>My studies move between fashion-making, brand systems and the cultural context around them.</p>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <b>{item.years}</b>
                <h3>{item.school}</h3>
                <p>{item.course}</p>
              </article>
            ))}
          </div>
          <p className="about-story-note">From garment construction to luxury-brand systems, I learnt to move comfortably between the craft and the story around it.</p>
        </div>
      </section>

      <section id="skills" className="about-skills-section">
        <div className="about-skills-frame">
          <span className="about-skills-label">MY TOOLKIT</span>
          <div className="about-section-heading">
            <h2>Skills in <em>motion.</em></h2>
            <p>Tools, languages and practices that support the work from idea through to its final expression.</p>
          </div>
          <div className="resume-skills-grid">
            {skills.map((skill) => (
              <article key={skill.label}>
                <b aria-hidden="true">{skill.icon}</b>
                <div><h3>{skill.label}</h3><p>{skill.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="about-work-section">
        <div className="about-work-frame">
          <span className="about-work-label">MY WORK</span>
          <div className="about-section-heading">
            <h2>Work, ideas and <em>momentum.</em></h2>
            <p>Experience across fashion, brand development, influencer outreach and editorial social media.</p>
          </div>
          <div className="work-list">
            {experience.map((item) => (
              <article key={item.company}>
                <b>{item.years}</b>
                <div><h3>{item.company}</h3><p>{item.role}</p></div>
                <span>{item.place}</span>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
