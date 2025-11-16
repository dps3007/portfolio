import LocationIcon from "../assets/img/location.png";

const Location = () => {
    return (
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <img src={LocationIcon} alt="location" className="w-10 h-10 sm:w-7 sm:h-7" />
            <p className="text-sm sm:text-base font-medium" style={{ color: "#222222", transform: "scaleX(1.1)" }}>Uttar Pradesh, India</p>
        </div>
    )
}
export default Location;