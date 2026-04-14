import { useEffect, useRef } from "react";

// Canvas-based mouse trail overlay (completely independent of tsparticles)
const MouseTrail = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

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
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
      // Spawn trail particles
      for (let i = 0; i < 3; i++) {
        trailRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          r: Math.random() * 2 + 0.5,
          alpha: 0.8 + Math.random() * 0.2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.3,
          life: 1.0, // full life
          decay: 0.008 + Math.random() * 0.006, // how fast it fades (1-2 seconds)
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail particles
      trailRef.current = trailRef.current.filter((p) => p.life > 0);

      for (const p of trailRef.current) {
        p.life -= p.decay;
        p.x += p.vx;
        p.y += p.vy;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${p.life * 0.9})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${p.life * 0.4})`);
        gradient.addColorStop(1, `rgba(99, 102, 241, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Glowing dot center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 180, 255, ${p.life})`;
        ctx.fill();
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

// tsParticles constellation background
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useMemo } from "react";

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
            distance: 200,
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
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" }, // Bounce: ficam na tela e se movem entre si
          random: true,
          speed: { min: 0.2, max: 0.8 }, // Velocidade variada — umas rápidas, outras lentas
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: { enable: true, area: 600 },
          value: 200, // MUITO mais partículas
        },
        opacity: {
          value: { min: 0.05, max: 0.7 },
          animation: {
            enable: true,       // Piscar: aparecem e somem organicamente
            speed: 1.2,
            sync: false,
            minimumValue: 0.05,
          },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 0.5, max: 3 },
          animation: {
            enable: true,
            speed: 3,
            sync: false,
          },
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
    <MouseTrail />
  </>
);

export default ParticleBackground;
