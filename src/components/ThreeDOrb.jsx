import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeDOrb() {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f2fe, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7f00ff, 4, 50);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // AI Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere (Icosahedron Wireframe + Inner Solid Core)
    const geometry = new THREE.IcosahedronGeometry(1.6, 3);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    coreGroup.add(wireframeMesh);

    const innerGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const innerMaterial = new THREE.MeshPhongMaterial({
      color: 0x0f172a,
      emissive: 0x1e1b4b,
      specular: 0x00f2fe,
      shininess: 100,
      flatShading: true,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMaterial);
    coreGroup.add(innerMesh);

    // Orbiting Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.6, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xe100ff, transparent: true, opacity: 0.4 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // Neural Particle Cloud
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);

      scaleArray[i / 3] = Math.random();
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle texture
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x4facfe,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeo, particleMat);
    coreGroup.add(particleSystem);

    // Neural Connections (Lines between nearby random points)
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4facfe,
      transparent: true,
      opacity: 0.15
    });
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];

    // Create a few random connection lines
    for (let i = 0; i < 30; i++) {
      const idx1 = Math.floor(Math.random() * particlesCount) * 3;
      const idx2 = Math.floor(Math.random() * particlesCount) * 3;
      linePositions.push(posArray[idx1], posArray[idx1 + 1], posArray[idx1 + 2]);
      linePositions.push(posArray[idx2], posArray[idx2 + 1], posArray[idx2 + 2]);
    }
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    coreGroup.add(lines);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    const handleTouchMove = (event) => {
      if (event.touches && event.touches[0]) {
        const rect = container.getBoundingClientRect();
        const x = event.touches[0].clientX - rect.left - rect.width / 2;
        const y = event.touches[0].clientY - rect.top - rect.height / 2;
        targetX = (x / rect.width) * 0.8;
        targetY = (y / rect.height) * 0.8;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        wireframeMesh.rotation.y = elapsedTime * 0.15;
        wireframeMesh.rotation.x = elapsedTime * 0.1;
        innerMesh.rotation.y = -elapsedTime * 0.2;
        
        ring1.rotation.z = elapsedTime * 0.25;
        ring2.rotation.x = elapsedTime * 0.2;

        particleSystem.rotation.y = elapsedTime * 0.05;

        // Smooth mouse dampening
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        coreGroup.rotation.y = mouseX * 0.6;
        coreGroup.rotation.x = -mouseY * 0.6;

        // Floating Bobbing effect
        coreGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particlesGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[300px] sm:min-h-[350px]">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 border border-cyan-500/30 flex items-center justify-center animate-pulse-slow">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-slate-900/80 border border-cyan-400/50 flex flex-col items-center justify-center text-center p-4">
            <span className="text-2xl sm:text-3xl font-bold text-gradient">AI Core</span>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-2">Neural Network Visualizer</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[280px] sm:h-[400px] lg:h-[520px] relative flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
      aria-label="Interactive 3D AI Neural Core Visualization"
    />
  );
}
