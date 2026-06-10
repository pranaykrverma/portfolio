"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeAurora() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.6, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0a84ff, transparent: true, opacity: 0.012, wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let raf = 0;
    const render = () => {
      mesh.rotation.x += 0.0014;
      mesh.rotation.y += 0.0019;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    const resize = () => {
      if (!host) return;
      camera.aspect = host.clientWidth / Math.max(host.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      host.replaceChildren();
    };
  }, []);

  return <div ref={hostRef} className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen" aria-hidden />;
}
