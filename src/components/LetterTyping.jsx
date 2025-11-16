import { useEffect, useState } from "react";

export default function LetterTyping({
  phrases = ["Fullstack Developer", "Software Engineer", "MERN Developer", "Backend Developer"],
  typingSpeed = 100,    // ms per letter when typing
  deletingSpeed = 50,   // ms per letter when deleting
  pauseAfterFull = 900, // ms pause after full word typed
  pauseAfterEmpty = 300 // ms pause after fully deleted
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    // If we've finished typing the whole phrase, pause then start deleting
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseAfterFull);
      return () => clearTimeout(t);
    }

    // If we've deleted everything, move to next phrase after a short pause
    if (deleting && charIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, pauseAfterEmpty);
      return () => clearTimeout(t);
    }

    // Normal typing / deleting tick
    const delay = deleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setCharIndex((ci) => ci + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseAfterFull, pauseAfterEmpty]);

  const display = phrases[phraseIndex].slice(0, charIndex);

  return (
    <div className="mt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="font-bold">
                <h1 className="text-3xl md:text-4xl font-semibold mt-3 font-sans">
      I'm a{" "}
      <span className="font-bold inline-block">
        {display}
        <span className="ml-1  w-0.5 h-6 align-middle bg-black animate-pulse" />
      </span>/
    </h1>
              </span>
            </h1>
          </div>
  );
}
