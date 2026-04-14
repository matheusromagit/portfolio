import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Canvas que lê as partículas reais do tsparticles e desenha linhas
// entre o mouse e as bolinhas próximas, com fade de ~2 segundos
const LingerLines = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const capturedRef = useRef([]); // [{x, y, time}] -- posições de partículas capturadas
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

    const GRAB_DIST = 180;
    const LINGER_MS = 2000;

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const container = containerRef.current;
      if (!container) return;

      const all = container.particles?.array;
      if (!all) return;

      // Para cada partícula próxima ao mouse, registra posição + timestamp
      for (const p of all) {
        const dx = p.position.x - e.clientX;
        const dy = p.position.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < GRAB_DIST) {
          capturedRef.current.push({
            // posição da bolinha no momento da captura
            px: p.position.x,
            py: p.position.y,
            // posição do mouse no momento da captura
            mx: e.clientX,
            my: e.clientY,
            time: Date.now(),
          });
        }
      }

      // Limpar entradas antigas
      const cutoff = Date.now() - LINGER_MS;
      capturedRef.current = capturedRef.current.filter((l) => l.time > cutoff);

      // Limite de memória
      if (capturedRef.current.length > 800) {
        capturedRef.current = capturedRef.current.slice(-800);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      for (const l of capturedRef.current) {
        const age = now - l.time;
        const life = Math.max(0, 1 - age / LINGER_MS);
        if (life <= 0) continue;

        ctx.beginPath();
        ctx.moveTo(l.mx, l.my); // posição do mouse quando a linha foi criada
        ctx.lineTo(l.px, l.py); // posição da bolinha no momento
        ctx.strokeStyle = `rgba(168, 85, 247, ${life * 0.6})`;
        ctx.lineWidth = life * 1.2;
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
  }, [containerRef]);

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
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: false }, // desativado — o canvas cuida das linhas
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
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

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
      <LingerLines containerRef={containerRef} />
    </>
  );
};

export default ParticleBackground;
