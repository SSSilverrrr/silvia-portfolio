"use client";

import { FormEvent, useState } from "react";
import { Header } from "@/components/Header";
import PixelCursor from "@/components/PixelCursor";

const socialLinks = [
  { label: "EMAIL", symbol: "✉", href: "mailto:zhengsilvia981@163.com", detail: "WRITE A NOTE" },
  { label: "INSTAGRAM", symbol: "◎", href: "https://www.instagram.com/silverbysilvia?igsh=ZjM5YnAzbHlkbHpl", detail: "FOLLOW THE WORK" },
  { label: "LINKEDIN", symbol: "in", href: "https://www.linkedin.com/in/silviazheng981?utm_source=share_via&utm_content=profile&utm_medium=member_ios", detail: "CONNECT" },
];

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "A new contact");
    const subject = String(formData.get("subject") || "Portfolio enquiry");
    const message = String(formData.get("message") || "");
    const body = `From: ${name}\n\n${message}`;

    setStatus("Opening your email app…");
    window.location.href = `mailto:zhengsilvia981@163.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="contact-page nudge-page">
      <PixelCursor />
      <Header active="contact" />
      <section className="contact-page-canvas clean-contact-canvas">
        <p className="contact-page-note clean-contact-note">let&apos;s make something memorable</p>
        <div className="contact-page-title clean-contact-title"><span>CONTACT</span></div>
        <div className="contact-page-layout clean-contact-layout">
          <div className="contact-center-panel clean-contact-panel">
            <div className="contact-message-card clean-message-card">
              <p className="contact-kicker">START A CONVERSATION</p>
              <h1>Tell me about your next fashion story, brand idea or creative collaboration.</h1>
              <form className="contact-message-form" onSubmit={handleSubmit}>
                <label>YOUR NAME<input name="name" autoComplete="name" placeholder="How should I call you?" /></label>
                <label>SUBJECT<input name="subject" required placeholder="What are we creating?" /></label>
                <label className="contact-message-field">YOUR MESSAGE<textarea name="message" required placeholder="Share a little context, timeline or idea…" /></label>
                <div className="contact-form-actions">
                  <button type="submit">SEND MESSAGE ↗</button>
                  <p aria-live="polite">{status || "Opens a new email draft when you send."}</p>
                </div>
              </form>
            </div>
            <div className="contact-social-grid clean-social-grid">
              {socialLinks.map((item) => (
                <a key={item.label} className="contact-social-link" href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}>
                  <b>{item.symbol}</b><span>{item.label}</span><small>{item.detail}</small>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
