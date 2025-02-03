import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const StaticBackground = ({ children }) => {
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

    // Static positions for gradients
    const positions = [
      { x: 0, y: 0 },
      { x: canvas.width, y: 0 },
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width, y: canvas.height },
      { x: 0, y: canvas.height },
    ];

    const colors = [
      "rgba(139, 69, 19, 0.2)",
      "rgba(34, 139, 34, 0.2)",
      "rgba(210, 180, 140, 0.1)",
      "rgba(85, 107, 47, 0.2)",
      "rgba(160, 82, 45, 0.1)",
    ];

    // Draw static background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    positions.forEach((position, i) => {
      const gradient = ctx.createRadialGradient(
        position.x,
        position.y,
        0,
        position.x,
        position.y,
        canvas.width * 0.5
      );
      gradient.addColorStop(0, colors[i]);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

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
    <div className="font">
      <StaticBackground>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </StaticBackground>
    </div>
  );
};

export default Root;
