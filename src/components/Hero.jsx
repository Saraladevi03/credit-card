import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import './Hero.css'
import LightRays from './LightRays';
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useScroll, useTransform, motion as m } from "framer-motion";

function CardModel() {
  const { scene } = useGLTF("/models/Gold.glb");

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.material = new THREE.MeshStandardMaterial({
        color: "#A56231",   
        metalness: 1,
        roughness: 0.3,
      });
    }
  });

  return (
    <group position={[-2.5, 0.3, 0]}>
      <primitive object={scene} scale={0.18} rotation={[0, performance.now() / 2000, 0]}  />
    </group>
  );
}

export default function Hero() {
  return (
    <>
        <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        background: "black",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <LightRays
        raysOrigin="top-center"
        raysColor="#A56231"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
       style ={{
        position :'absolute',
        inset:0,
        zIndex:0,
       }}
      />
   <div className="hero-content">
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5, duration: 0.8, ease: "easeOut" }}
      >
        Luxury Beyond Limits
      </motion.h3>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
      >
        Experience the elegance of premium cards crafted with precision,
        designed for those who deserve more than ordinary.
      </motion.p>

      <div className="hero-buttons">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 6, duration: 0.8, ease: "easeOut" }}
        >
          Explore
        </motion.button>

        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 6.5, duration: 0.8, ease: "easeOut" }}
        >
          Get Yours
        </motion.button>
      </div>
    </div>
      <div className="card">
  <Canvas
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "transparent",
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <CardModel />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3}  target={[-2.5, 0, 0]} />
      </Canvas>
      </div>
    
<div className="hero-center">
  <h3> THE GOLD CARD</h3>
</div>

   <div className="hero-right">
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 5, duration: 0.8, ease: "easeOut" }}
      >
        Discover the finest crafted cards that combine modern luxury
        with timeless elegance. Perfectly designed to suit your lifestyle.
      </motion.p>

      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
      >
        Learn More
      </motion.button>
    </div>

    </div>
 

    </>

  );
}
