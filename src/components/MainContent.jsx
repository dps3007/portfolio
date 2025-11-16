// MainContent.jsx
import DLogo from "./DLogo.jsx";
import LetterTyping from "./LetterTyping.jsx";
import SocialIcons from "./SocialIcons.jsx";
import Quote from "./Quote.jsx";
import Location from "./Location.jsx";
import Role from "./Role.jsx";
import Expertise from "./Expertise.jsx";

export default function MainContent() {
  return (
    <>
    <div className=" relative top-1/2 left-1/2 z-40 -translate-x-1/2 ml-17">
        <DLogo size={200} />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-start px-4 text-center">
        <div className="mx-auto w-full">
          <LetterTyping />
          <Quote />
          <Role />
          <Expertise />
          <Location />
          <SocialIcons />
        </div>
      </main>
    </>
  );
}
