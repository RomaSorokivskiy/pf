"use client"
import {Canvas, useFrame} from "@react-three/fiber";
import {Suspense, useRef} from "react";
import "../../stylesheets/header.scss"
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import {MathUtils} from "three";

const Model = () => {

    const gltf = useLoader(
        GLTFLoader,
        "models/crow/scene.gltf"
    )
    const ref = useRef()
    // @ts-ignore
    useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))
    gltf.scene.scale.set(0.55, 0.55, 0.55)
    gltf.scene.position.set(0, -5, 0)
    gltf.scene.rotation.set(0,-2.3,0)
    gltf.scene.traverse((object:any) => {
        object.castShadow = true;
        object.reciveShadow = true;
    })

    return <primitive object={gltf.scene} ref={ref}/>

}
const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="text">
                    <h2>SorokSkull</h2>
                    <h1>Full-Stack</h1>
                </div>
                <Suspense>
                    <Canvas camera={{ fov: 50, position: [0, 5, 18], near: 10, far: 150 }} dpr={[1, 2]} gl={{ antialias: false }} style={{height: "100%"}}>
                        <Model/>
                    </Canvas>
                </Suspense>
            </div>
        </header>
    )
}
export default Header
