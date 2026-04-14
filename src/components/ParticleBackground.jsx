import { useEffect, useRef, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Overlay que registra as LINHAS entre pontos próximos ao passar o mouse
// e as deixa persistir por ~1.5s antes de sumirem
const LingerLines = () => {
  const canvasRef = useRef(null);
  const linesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
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
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Pega as partículas do tsparticles via DOM/container
      const container = window.tsParticles?.domItem(0);
      if (!container) return;

      const allParticles = container.particles?.array;
      if (!allParticles) return;

      const mx = e.clientX;
      const my = e.clientY;
      const grabDist = 220;

      // Partículas próximas ao mouse
      const nearby = allParticles.filter((p) => {
        const dx = p.position.x - mx;
        const dy = p.position.y - my;
        return Math.sqrt(dx * dx + dy * dy) < grabDist;
      });

      // Gera linhas entre pares de partículas próximas
      for (let i = 0; i < nearby.length; i++) {
        for (let j = i + 1; j < nearby.length; j++) {
          const a = nearby[i];
          const b = nearby[j];
          const dx = a.position.x - b.position.x;
          const dy = a.position.y - b.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            linesRef.current.push({
              x1: a.position.x,
              y1: a.position.y,
              x2: b.position.x,
              y2: b.position.y,
              life: 1.0,
              decay: 1 / (60 * 1.8), // ~1.8 segundos pra sumir
            });
          }
        }
      }

      // Limita quantidade de linhas na memória
      if (linesRef.current.length > 400) {
        linesRef.current = linesRef.current.slice(-400);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linesRef.current = linesRef.current.filter((l) => l.life > 0);

      for (const l of linesRef.current) {
        l.life -= l.decay;
        ctx.beginPath();
        ctx.moveTo(l.x1, l.y1);
        ctx.lineTo(l.x2, l.y2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${l.life * 0.6})`;
        ctx.lineWidth = l.life * 1.2;
        ctx.stroke();
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
        zIndex: -9, // acima do tsparticles (-10) mas abaixo do conteúdo
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
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          push: { quantity: 6 },
          grab: {
            distance: 220,
            links: { opacity: 0.7, color: "#a855f7" },
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
          value: 200,
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
