import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim carrega os recursos bases pra otimizar o bundle
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -5, // Fica atrás de todo o Glassmorphism, mas na frente da cor de fundo bruta
      },
      fpsLimit: 60, // Limite para manter a CPU gelada
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab", // Puxa uma teia da constelação até o mouse
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1, // Ao clicar, libera um pulso muito sutil
          },
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
              color: "#a855f7" // Teia interativa em Neon Roxo
            },
          },
        },
      },
      particles: {
        color: {
          value: "#cbd5e1", // Pontos platinados/brancos (Slate 300)
        },
        links: {
          color: "#8b5cf6", // Teia passiva Azul/Roxo (Violet 500)
          distance: 180,
          enable: true,
          opacity: 0.15, // Teia bem transparente quando inativa
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out", // Partículas nascem e somem nas bordas
          },
          random: true,
          speed: 0.3, // Movimentação extremamente lenta e premium
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000, // Maior área para...
          },
          value: 30, // ...poucas partículas (minimalismo VIP)
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};

export default ParticleBackground;
