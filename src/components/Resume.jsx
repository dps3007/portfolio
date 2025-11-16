
export default function Resume() {
    return (
        <a
            href='/src/assets/resume/resume.pdf'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            className="relative text-sm sm:text-base font-sans font-medium
            after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px]
            after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300
            after:-translate-x-1/2 hover:after:w-full"
            style={{ color: "#222222", transform: "scaleX(1.1)" }}
            >
            Resume 
        </a>
    )
}