import { useEffect, useRef, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Canvas overlay: registra posições do mouse e desenha linhas conectadas
// que persistem e somem gradualmente (~2 segundos)
const LingerLines = () => {
  const canvasRef = useRef(null);
  const historyRef = useRef([]); // lista de pontos {x, y, time}
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      historyRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
      // Mantém só os últimos 2 segundos
      const cutoff = Date.now() - 2000;
      historyRef.current = historyRef.current.filter((p) => p.time > cutoff);
    };

    window.addEventListener("mousemove", onMouseMove);

    const LINGER_MS = 2000; // duração total do fade

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const pts = historyRef.current;

      // Conecta pontos próximos entre si com linhas que somem de acordo com age
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 130) continue; // só conecta pontos próximos

          // Opacidade baseada no ponto mais antigo dos dois
          const oldest = Math.min(a.time, b.time);
          const age = now - oldest;
          const life = Math.max(0, 1 - age / LINGER_MS);

          if (life <= 0) continue;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${life * 0.65})`; // roxo neon
          ctx.lineWidth = life * 1.5;
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -9,
      }}
    />
  );
};

const ConstellationBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: true, zIndex: -10 },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" }, // linhas imediatas ao se aproximar
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          grab: {
            distance: 180,
            links: { opacity: 0.55, color: "#a855f7" },
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
          value: 200, // alta densidade
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
  return <Particles id="tsparticles" options={options} />;
};

const ParticleBackground = () => (
  <>
    <ConstellationBg />
    <LingerLines />
  </>
);

export default ParticleBackground;
