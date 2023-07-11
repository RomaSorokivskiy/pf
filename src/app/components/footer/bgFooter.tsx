"use client"
import { MathUtils } from 'three'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, SSAO } from '@react-three/postprocessing'

const particles = Array.from({ length: 150 }, () => ({
    factor: MathUtils.randInt(20, 60),
    speed: MathUtils.randFloat(0.01, 1),
    xFactor: MathUtils.randFloatSpread(80),
    yFactor: MathUtils.randFloatSpread(40),
    zFactor: MathUtils.randFloatSpread(40)
}))

const Bubbles = () => {
    const ref = useRef()
    // @ts-ignore
    useFrame((state, delta) => void (ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-state.mouse.x * Math.PI) / 6, 2.75, delta)))
    // @ts-ignore
    let instances = <><Instances limit={particles.length} ref={ref} castShadow receiveShadow position={[0, 10, 0]}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshStandardMaterial roughness={0} color="#333333"/>
        {particles.map((data, i) => (
            <Bubble key={i} {...data} />
        ))}
    </Instances></>;
    return instances
}
// @ts-ignore
const  Bubble = ({ factor, speed, xFactor, yFactor, zFactor }) => {
    const ref = useRef()
    useFrame((state) => {
        const t = factor + state.clock.elapsedTime * (speed / 10)
        // @ts-ignore
        ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5))
        // @ts-ignore
        ref.current.position.set(
            Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
            Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
            Math.sin(t) + Math.cos(t * 2) / 10 + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
    })
    return <Instance ref={ref} />
}
const BgFooter = () => {
    return (
        <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }} camera={{ fov: 50, position: [0, 0, 60], near: 10, far: 150 }} style={{position:"absolute",left:0,top:"90%",zIndex:-1}}>
            {/*<color attach="background" args={['#333333']} />*/}
            {/*<fog attach="fog" args={['white', 60, 110]} />*/}
            <ambientLight intensity={1} />
            <pointLight position={[100, 10, -50]} intensity={20} castShadow />
            <pointLight position={[-100, -100, -100]} intensity={5} color="blue" />
            <pointLight position={[100, 100, 100]} intensity={0.5} color="red" />
            <Bubbles />
            <ContactShadows position={[0, -30, 0]} opacity={0.6} scale={60} blur={1} far={10} />
            <EffectComposer multisampling={0}>
                <SSAO samples={31} radius={0.1} intensity={20} luminanceInfluence={0.1} color="blue" />
            </EffectComposer>
            <Suspense fallback={null}>
                <Environment preset="city" />
            </Suspense>
        </Canvas>
    )
}
export default BgFooter
