import React, { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
    const mesh = useRef(null);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
    return (
        <mesh ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="black" />
        </mesh>
    );
};

function App() {
    return (
        <>
            <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 50 }}>
                <ambientLight intensity={1} />
                <pointLight position={[-10, 0, -20]} intensity={1} />
                <pointLight position={[0, -20, 0]} intensity={2} />
                <Box />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default App;
