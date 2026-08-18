"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = ["Hey there!", "Welcome!"];

export function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const word = greetings[wordIndex];

  useEffect(() => {
    if (characterCount < word.length) {
      const typeNextCharacter = window.setTimeout(() => setCharacterCount((count) => count + 1), 82);
      return () => window.clearTimeout(typeNextCharacter);
    }

    if (wordIndex < greetings.length - 1) {
      const changeGreeting = window.setTimeout(() => {
        setWordIndex((index) => index + 1);
        setCharacterCount(0);
      }, 680);
      return () => window.clearTimeout(changeGreeting);
    }

    const finishIntro = window.setTimeout(() => setIsVisible(false), 900);
    return () => window.clearTimeout(finishIntro);
  }, [characterCount, word, wordIndex]);

  return <AnimatePresence>{isVisible && <motion.div className="intro-overlay" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .42, ease: "easeInOut" } }} aria-live="polite" aria-label="Welcome animation"><motion.div className="intro-type-card" initial={{ opacity: 0, scale: .92, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .3, ease: "easeOut" }}><span>{word.slice(0, characterCount)}</span><i aria-hidden="true" /></motion.div></motion.div>}</AnimatePresence>;
}
