import Name from "./Name.jsx";
import Resume from "./Resume.jsx";

export default function Header({ resumePath = "/resume.pdf" }) {
    return (
        <header className="fixed top-0 left-0 w-full z-20 bg-transparent">
            <nav className="container mx-auto flex items-center     justify-between px-4 sm:px-6 md:px-4 py-4">
                  
                <Name />
        
                <Resume resumePath = '/resume.pdf' />    
        
            </nav>
        </header>
    );
}