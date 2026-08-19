"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface TextWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextWordReveal({ text, className = "", delay = 0 }: TextWordRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden pb-[0.4em] -mb-[0.4em] pt-[0.2em] -mt-[0.2em]">
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}
