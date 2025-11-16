import ParticlesFallBack from "./components/ParticlesFallback.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <div>
      <ParticlesFallBack />

      <Header resumePath="/src/assets/resume/resume.pdf" />

      <MainContent />

      <Footer />
    </div>
  );
}
