// import * as THREE from "three";
import React, { Suspense } from "react";
// import { Vector2 } from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../Model/Avatar-mid";

export const AvatarModel = () => {
  return (
    <div
      style={{ width: "120px", height: "130px", margin: "0 auto" }}
    >
      <Canvas
        camera={{
          position: [-3, 0, 8],
          fov: 2.8,
        }}
      >
        <OrbitControls
          enableZoom={false}
          maxAzimuthAngle={Math.PI / 4}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={0.5}
        />
        <ambientLight intensity={0.3} />
        {/* <spotLight intensity={0.3} /> */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model position={[0, -0.58, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
