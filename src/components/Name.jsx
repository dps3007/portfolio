export default function Name() {
    return (
        <a href="/"
            aria-label="Home"
            className="relative text-lg sm:text-2xl font-sans font-semibold
            after:content-[''] after:absolute after:left-1/2 after:bottom-[-6px]
            after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300
            after:-translate-x-1/2 hover:after:w-full"
            style={{ color: "#222222", transform: "scaleX(1.1)" }}
            >
            Deepanshu Pal
        </a>
    )
}