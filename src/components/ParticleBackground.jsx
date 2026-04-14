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
        zIndex: -10, // Garantia extrema de renderizar atrás de todos os nós do DOM
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
            mode: ["grab", "trail"], // Ativa conexão + caminho flutuante
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
          },
          grab: {
            distance: 180,
            links: {
              opacity: 0.6,
              color: "#a855f7" 
            },
          },
          trail: {
            delay: 0.05,
            pauseOnStop: true,
            quantity: 1,
            particles: {
              color: { value: "#8b5cf6" },
              links: {
                enable: true,
                color: "#8b5cf6",
                distance: 120,
                opacity: 0.3,
              },
              opacity: {
                value: { min: 0, max: 0.8 },
                animation: {
                  enable: true,
                  speed: 0.5,
                  sync: true,
                  startValue: "max",
                  destroy: "min", // Partícula morre ao somem
                },
              },
              size: { value: 1.5 },
              move: { enable: true, speed: 0.2 },
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
            area: 800, 
          },
          value: 40, // Densidade reduzida igual a da foto
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 3.5 }, // Variação alta (pontos minúsculos como estrelas distantes e grandes como nós vizinhos)
          animation: {
            enable: true,
            speed: 2,
            sync: false, // Faz elas piscarem aleatoriamente (twinkling)
          }
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
