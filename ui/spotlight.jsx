// ui/spotlight.js
"use client";

import React from "react";

/**
 * Spotlight Component
 * Renders a blurred circular gradient background for cool effects
 * 
 * Props:
 * - className: optional additional classes for positioning or styling
 */
export function Spotlight({ className = "" }) {
  return (
    <div
      className={`absolute rounded-full w-96 h-96 md:w-[40rem] md:h-[40rem] opacity-30 blur-3xl ${className}`}
      style={{
        pointerEvents: "none",
        background: `radial-gradient(circle, 
          #8C67FF 18%, 
          #C2B0FA 29%, 
          #4B0EFF 37%)`,
      }}
    />
  );
}
