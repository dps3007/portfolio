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
  className="pointer-events-none fixed inset-0 z-0"
  init={particlesInit}
  options={{
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, area: 900 } },
      color: { value: ["#34a853", "#ea4335", "#fbbc05", "#4285f4", "#8ecae6"] },
      size: { value: { min: 1, max: 6 } },
      move: { enable: true, speed: 0.6 },
    },
    detectRetina: true,
  }}
/>
  );
}
