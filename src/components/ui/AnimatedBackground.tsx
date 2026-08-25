"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface OrbConfig {
  id: string;
  color: string;
  size: string;
  initialX: string;
  initialY: string;
  duration: number;
  delayOffset: number;
}

// ─── Orb configurations ───────────────────────────────────────────────────────

const ORBS: OrbConfig[] = [
  {
    id: "orb-indigo",
    color: "radial-gradient(ellipse, #6366F1 0%, transparent 70%)",
    size: "700px",
    initialX: "-10%",
    initialY: "5%",
    duration: 18,
    delayOffset: 0,
  },
  {
    id: "orb-cyan",
    color: "radial-gradient(ellipse, #06B6D4 0%, transparent 70%)",
    size: "550px",
    initialX: "60%",
    initialY: "60%",
    duration: 22,
    delayOffset: -6,
  },
  {
    id: "orb-purple",
    color: "radial-gradient(ellipse, #A855F7 0%, transparent 70%)",
    size: "620px",
    initialX: "40%",
    initialY: "-5%",
    duration: 20,
    delayOffset: -10,
  },
  {
    id: "orb-indigo-secondary",
    color: "radial-gradient(ellipse, #4F46E5 0%, transparent 65%)",
    size: "400px",
    initialX: "75%",
    initialY: "15%",
    duration: 25,
    delayOffset: -4,
  },
];

// ─── Floating Orb ─────────────────────────────────────────────────────────────

function FloatingOrb({ orb, paused }: { orb: OrbConfig; paused: boolean }) {
  const translateAnim = paused
    ? {}
    : {
      x: ["0px", "40px", "-30px", "20px", "0px"],
      y: ["0px", "-35px", "25px", "-15px", "0px"],
    };

  const scaleAnim = paused ? {} : { scale: [1, 1.12, 0.94, 1.08, 1] };

  return (
    <motion.div
      aria-hidden="true"
      animate={{ ...translateAnim, ...scaleAnim }}
      transition={{
        duration: orb.duration,
        delay: orb.delayOffset,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }}
      style={{
        position: "absolute",
        left: orb.initialX,
        top: orb.initialY,
        width: orb.size,
        height: orb.size,
        background: orb.color,
        filter: "blur(80px)",
        opacity: 0.35,
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        borderRadius: "50%",
        pointerEvents: "none",
      }}
    />
  );
}

// ─── Mouse Spotlight ──────────────────────────────────────────────────────────

function MouseSpotlight({ isMobile }: { isMobile: boolean }) {
  const mouseX = useMotionValue(
    typeof window !== "undefined" ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight / 2 : 0
  );

  const springConfig = { damping: 35, stiffness: 120, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "600px",
        height: "600px",
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(168,85,247,0.06) 35%, transparent 70%)",
        pointerEvents: "none",
        willChange: "transform",
        borderRadius: "50%",
        zIndex: 0,
      }}
    />
  );
}

// ─── Vignette ─────────────────────────────────────────────────────────────────

function Vignette() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 30%, rgba(5,7,11,0.65) 70%, rgba(5,7,11,0.95) 100%)",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

// ─── Noise Film Grain overlay (inline SVG, zero network requests) ─────────────

function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "screen",
      }}
    />
  );
}

// ─── Main AnimatedBackground ──────────────────────────────────────────────────

export function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768
      );
    };

    checkMobile();

    const mq = window.matchMedia("(pointer: coarse)");
    mq.addEventListener("change", checkMobile);
    window.addEventListener("resize", checkMobile, { passive: true });

    return () => {
      mq.removeEventListener("change", checkMobile);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Pause animations when reduced motion is preferred or on mobile
  const paused = (shouldReduceMotion ?? false) || isMobile;

  // Avoid SSR mismatch — render a static shell until mounted
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -10,
          backgroundColor: "var(--bg-primary)",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)",
        isolation: "isolate",
      }}
    >
      {/* ── Animated Orbs (Aurora / Mesh Gradient) ── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        {ORBS.map((orb) => (
          <FloatingOrb key={orb.id} orb={orb} paused={paused} />
        ))}
      </div>

      {/* ── Noise Film Grain ── */}
      <NoiseOverlay />

      {/* ── Vignette (depth / focus) ── */}
      <Vignette />

      {/* ── Mouse Follow Spotlight ── */}
      <MouseSpotlight isMobile={isMobile} />
    </div>
  );
}
