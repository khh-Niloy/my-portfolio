import React, { useEffect, useRef, useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AnimatedBackground = ({ children }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const points = [
      { x: 0, y: 0, dx: 2.0, dy: 2.0 },
      { x: canvas.width, y: 0, dx: -2.0, dy: 2.0 },
      { x: canvas.width / 2, y: canvas.height / 2, dx: 2.0, dy: -2.0 },
      { x: canvas.width, y: canvas.height, dx: -2.0, dy: -2.0 },
      { x: 0, y: canvas.height, dx: 2.0, dy: -2.0 },
    ];

    const colors = [
      "rgba(139, 69, 19, 0.2)",
      "rgba(34, 139, 34, 0.1)",
      "rgba(210, 180, 140, 0.2)",
      "rgba(85, 107, 47, 0.2)",
      "rgba(160, 82, 45, 0.2)",
    ];

    const animate = () => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;
        if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;
      });

      for (let i = 0; i < points.length; i++) {
        const gradient = ctx.createRadialGradient(
          points[i].x,
          points[i].y,
          0,
          points[i].x,
          points[i].y,
          canvas.width * 0.5
        );
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative min-h-screen">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full" />
      {children}
    </div>
  );
};

const Root = () => {
    return (
        <div className='font'>
            <AnimatedBackground>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </AnimatedBackground>
        </div>
    );
};

export default Root;