// import * as THREE from "three";
import React, { Suspense } from "react";
// import { Vector2 } from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../Model/Avatar-full";


export const AvatarModel = () => {

  return (
    <div style={{ position: "absolute", width: "auto", height: "95vh" }}>
      <Canvas
        camera={{
          position: [10, 5, 15],
          fov: 6,
        }}
        className="avatar-full"
        style={{ marginLeft: "20px" }}
      >
        <OrbitControls
          enableZoom={false}
          maxAzimuthAngle={Math.PI / 4}
          maxPolarAngle={Math.PI}
          minAzimuthAngle={-Math.PI / 4}
          minPolarAngle={0.5}
        />
        <ambientLight intensity={0.3}/>
        {/* <spotLight intensity={0.3} /> */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Model position={[0, -0.9, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};
