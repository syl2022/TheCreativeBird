import {ContactShadows, useGLTF} from "@react-three/drei";
import {Suspense, useDeferredValue} from "react";
import {useFrame} from "@react-three/fiber";
import * as THREE from "three";
import React from 'react';

const MyMesh = () => {

    const deferred = useDeferredValue('/bird_orange.glb');
    const { scene, animations } = useGLTF(deferred);

    let mixer: THREE.AnimationMixer | null = null;
    mixer = new THREE.AnimationMixer(scene);
    void mixer.clipAction(animations[0]).play();
    useFrame((state, delta) => {
        // @ts-ignore
        mixer.update(delta);
    });

    return (<primitive object={scene} position={[0, 0, 0]}/>);
}

function Bird() {

    return (
        <group position={[0, -1, 0]} rotation={[0,-Math.PI/3, 0]}>
            <Suspense fallback={<mesh>..loading</mesh>}>
                <MyMesh />
            </Suspense>
        </group>
    );
}

export default Bird;