import { Particles } from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticlesFallBack() {
  const particlesInit = async (engine) => {
    try {
      await loadFull(engine);
    } catch (err) {
      console.error("particles loadFull error", err);
    }
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 z-0"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: { color: "#ffffff" },
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
        particles: {
          number: { value: 80, density: { enable: true, area: 900 } },
          color: { value: ["#34a853", "#ea4335", "#fbbc05", "#4285f4", "#8ecae6"] },
          shape: { type: ["circle"] },
          opacity: { value: 0.9 },
          size: { value: { min: 1, max: 6 } },
          move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        },
        detectRetina: true,
      }}
    />
  );
}
