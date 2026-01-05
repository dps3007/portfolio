import ParticlesFallBack from "./components/ParticlesFallback.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";


export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      <ParticlesFallBack />

      <Header />

      <MainContent  />

      <Footer />
    </div>
  );
}
