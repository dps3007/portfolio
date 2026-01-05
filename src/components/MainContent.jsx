// MainContent.jsx
import LetterTyping from "./LetterTyping.jsx";
import SocialIcons from "./SocialIcons.jsx";
import Quote from "./Quote.jsx";
import Location from "./Location.jsx";
import Role from "./Role.jsx";
import Expertise from "./Expertise.jsx";
import DIcon from "../assets/img/d.png";


export default function MainContent() {
  return (
    <main className="min-h-screen pt-16 pb-16 flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">

        {/* Fixed-size D logo */}
        <img
          src={DIcon}
          alt="D logo"
          style={{ width: "200px", height: "200px" }}
          className=" pointer-events-none select-none"
        />

        {/* Content */}
        <div className="w-full max-w-3xl space-y-2">
          <LetterTyping />
          <Quote />
          <Role />
          <Expertise />
          <Location />
          <SocialIcons />
        </div>

      </div>
    </main>
  );
}
