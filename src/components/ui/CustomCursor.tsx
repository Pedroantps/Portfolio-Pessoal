"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // Detecção de hover em elementos interativos
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button, [role='button'], .hover-target");
      if (link) {
        setIsHovered(true);
        if (link.hasAttribute("data-cursor-text")) {
          setCursorText(link.getAttribute("data-cursor-text") || "");
        } else {
          setCursorText("");
        }
      }
    };
    const handleMouseOut = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full bg-text-primary mix-blend-difference text-bg-primary text-xs font-bold"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ width: 16, height: 16, opacity: 0 }}
      animate={{
        width: isHovered ? (cursorText ? 80 : 40) : 16,
        height: isHovered ? (cursorText ? 80 : 40) : 16,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mix-blend-normal"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
