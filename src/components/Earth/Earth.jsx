import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import earth from "../../assets/imgs/earth.png"

// Separate component for Earth that uses the useFrame hook
function EarthMesh() {
  const earthRef = useRef();  // Reference to the Earth mesh

  // Load the Earth texture
  const texture = new THREE.TextureLoader().load({earth});

  // Rotate the Earth using the useFrame hook
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;  // Adjust the rotation speed
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={earthRef}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

function Earth() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* Add some lighting to make the Earth visible */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Use the EarthMesh component inside the Canvas */}
      <EarthMesh />

      {/* OrbitControls allows the user to rotate the scene */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default Earth;
