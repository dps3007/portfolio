import resumeUrl from "../assets/resume/resume.pdf";

export default function Resume() {
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
      className="relative font-sans text-sm font-medium after:absolute after:bottom-[-6px] after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full sm:text-base"
      style={{ color: "#222222", transform: "scaleX(1.1)" }}
    >
      Resume
    </a>
  );
}
