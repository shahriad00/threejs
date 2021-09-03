import React, { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, softShadows, Circle } from "@react-three/drei";

softShadows();

const Box = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh castShadow ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="blue" />
        </mesh>
    );
};

function App() {
    return (
        <>
            <Canvas
                shadowMap
                colorManagement
                camera={{ position: [-5, 2, 10], fov: 50 }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadowCameraBottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={1} />
                <pointLight position={[0, -20, 0]} intensity={2} />
                <group>
                    <mesh
                        receiveShadow
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, -3, 0]}
                    >
                        <planeBufferGeometry
                            attach="geometry"
                            args={[100, 100]}
                        />
                        <shadowMaterial attach="material" />
                    </mesh>
                </group>
                <Box />
                <Circle position={[0, -2, 0]} />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
