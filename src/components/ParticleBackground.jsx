import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: true, zIndex: -10 },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "grab", // comportamento original: puxa linhas até o mouse
          },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
              color: "#a855f7", // neon roxo ao passar o mouse
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#e2e8f0", "#c4b5fd", "#93c5fd", "#a78bfa"],
        },
        links: {
          color: "#7c3aed",
          distance: 130,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: { min: 0.2, max: 0.7 },
          straight: false,
          attract: { enable: true, rotateX: 600, rotateY: 1200 },
        },
        number: {
          density: { enable: true, area: 600 },
          value: 200, // densidade alta atual
        },
        opacity: {
          value: { min: 0.05, max: 0.7 },
          animation: { enable: true, speed: 1.2, sync: false },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 0.5, max: 3 },
          animation: { enable: true, speed: 3, sync: false },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
};

export default ParticleBackground;
