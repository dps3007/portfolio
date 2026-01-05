import Name from "./Name.jsx";
import Resume from "./Resume.jsx";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-20 h-16 bg-transparent">
            <nav className="h-full flex items-center justify-between px-4 sm:px-6">
                  
                <Name />
        
                <Resume />    
        
            </nav>
        </header>
    );
}