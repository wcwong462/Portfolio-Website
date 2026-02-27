"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export const QuantBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Configuration (Optimized for performance)
    const GRID_SIZE = 80;
    
    // Theme-based colors
    const isDark = theme === 'dark';
    const baseColor = isDark ? "255, 255, 255" : "37, 99, 235"; 
    const accentColor = isDark ? "255, 255, 255" : "124, 58, 237"; 

    const colors = {
      grid: `rgba(${baseColor}, 0)`, 
      line: `rgba(${baseColor}, ${isDark ? "0.2" : "0.3"})`, 
      particle: `rgba(${baseColor}, ${isDark ? "0.4" : "0.5"})`, 
      text: `rgba(${baseColor}, ${isDark ? "0.5" : "0.6"})`,     
      binary: `rgba(${baseColor}, ${isDark ? "0.2" : "0.3"})`,  
      accent: `rgba(${accentColor}, ${isDark ? "0.4" : "0.5"})`,   
      scan: `rgba(${baseColor}, 0)`,
    };

    // Data structures
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: "dot" | "number" | "signal";
      value: string;
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 35; // Reduced from 70
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 4 + 2,
        type: Math.random() > 0.7 ? "number" : (Math.random() > 0.85 ? "signal" : "dot"),
        value: (Math.random() * 100).toFixed(2),
      });
    }

    const binaryPackets: { x: number; y: number; val: string; speed: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Reduced Frequency of new packets
      if (Math.random() > 0.97) {
        binaryPackets.push({
          x: Math.floor(Math.random() * (width / GRID_SIZE)) * GRID_SIZE + 10,
          y: -20,
          val: Math.random() > 0.5 ? "1" : "0",
          speed: Math.random() * 2 + 1,
        });
      }

      ctx.font = "16px 'JetBrains Mono', monospace";
      ctx.fillStyle = colors.binary;
      for (let i = binaryPackets.length - 1; i >= 0; i--) {
        const b = binaryPackets[i];
        ctx.fillText(b.val, b.x, b.y);
        b.y += b.speed;
        if (b.y > height) binaryPackets.splice(i, 1);
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.particle;
          ctx.fill();
        } else if (p.type === "number") {
          ctx.font = "14px 'JetBrains Mono', monospace";
          ctx.fillStyle = colors.text;
          ctx.fillText(p.value, p.x, p.y);
          if (Math.random() > 0.99) p.value = (Math.random() * 100).toFixed(2);
        } else {
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, (Date.now() / 8) % 30, 0, Math.PI * 2);
          ctx.globalAlpha = 1 - ((Date.now() / 8) % 30) / 30;
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1;
        }
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = colors.line;
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = (1 - dist / 130) * 0.8;
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.lineWidth = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-1000 ${theme === 'dark' ? 'opacity-80' : 'opacity-80'}`}
    />
  );
};
