"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface MaskScrollImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function MaskScrollImage({ src, alt, className = "" }: MaskScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(scrollYProgress, [0, 0.4], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ clipPath }} className="absolute inset-0 w-full h-full">
        <motion.div style={{ scale }} className="relative w-full h-full">
          <Image src={src} alt={alt} fill unoptimized={src.includes("placehold.co")} className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
