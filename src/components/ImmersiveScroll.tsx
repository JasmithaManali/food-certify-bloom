import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImmersiveScrollProps {
  children: React.ReactNode;
}

const ImmersiveScroll: React.FC<ImmersiveScrollProps> = ({ children }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    // // Scene setup
    // const scene = new THREE.Scene();
    // sceneRef.current = scene;

    // // Camera setup
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 5;
    // cameraRef.current = camera;

    // // Renderer setup
    // const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // renderer.setClearColor(0x000000, 0); // Make background transparent
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement); // Append directly to body
    // rendererRef.current = renderer;

    // // Set canvas styles directly
    // renderer.domElement.style.position = 'fixed';
    // renderer.domElement.style.top = '0';
    // renderer.domElement.style.left = '0';
    // renderer.domElement.style.width = '100%';
    // renderer.domElement.style.height = '100%';
    // renderer.domElement.style.zIndex = '-1'; // Ensure it's in the background

    // // Basic Cube
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // cubeRef.current = cube;

    // // Animation loop
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   renderer.render(scene, camera);
    // };
    // animate();

    // // GSAP ScrollTrigger animations
    // gsap.to(cube.rotation, {
    //   x: Math.PI * 2,
    //   y: Math.PI * 2,
    //   scrollTrigger: {
    //     trigger: document.body,
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     scrub: true,
    //   },
    // });

    // gsap.to(camera.position, {
    //   z: 10,
    //   scrollTrigger: {
    //     trigger: document.body,
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     scrub: true,
    //   },
    // });

    // // Handle window resize
    // const handleResize = () => {
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    // };
    // window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    //   if (renderer.domElement && document.body.contains(renderer.domElement)) {
    //     document.body.removeChild(renderer.domElement);
    //   }
    //   // Clean up Three.js objects
    //   // scene.remove(cube);
    //   // geometry.dispose();
    //   // material.dispose();
    //   // renderer.dispose();
    // };
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', background: 'var(--background)' }}>
      {children}
    </div>
  );
};

export default ImmersiveScroll;