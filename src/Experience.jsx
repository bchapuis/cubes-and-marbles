import { ContactShadows, Environment, Grid, OrbitControls } from '@react-three/drei'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { OrthographicCamera } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Cube1 from './Cube1'
import Cube2 from './Cube2'
import Cube3 from './Cube3'
import Cube4 from './Cube4'
import Cube5 from './Cube5'
import Cube6 from './Cube6'
import Cube7 from './Cube7'
import Cube8 from './Cube8'
import Cube9 from './Cube9'
import Cube10 from './Cube10'
import Cube11 from './Cube11'
import Cube12 from './Cube12'
import Cube13 from './Cube13'
import { Leva, useControls } from 'leva'
import { useEffect, useRef, useState } from 'react'
import { vec3 } from "@react-three/rapier";
import Marble from './Marble'

export default function Experience() {

    const [hitSound] = new useState(() => new Audio('/hit.mp3'))

    const {
        backgroundColor,
    } = useControls("Background", {
        backgroundColor: {
            value: "#e6645b"
        }
    })

    const {
        environmentPreset,
    } = useControls("Environment", {
        environmentPreset: {
            value: "warehouse",
            options: ["warehouse", "city", "sunset"]
        }
    })

    const {
        ambientLightIntensity,
    } = useControls("Ambient Light", {
        ambientLightIntensity: {
            value: 0.1,
            min: 0,
            max: 1,
            step: 0.1
        }
    })

    const {
        contactShadowsFar,
        contactShadowsBlur
    } = useControls("Contact Shadows", {
        contactShadowsFar: {
            value: 10,
            min: 0,
            max: 20,
            step: 1
        },
        contactShadowsBlur: {
            value: 2,
            min: 0,
            max: 10,
            step: 1
        }
    })

    const {
        woodColor,
    } = useControls("Wood", {
        woodColor: {
            value: "#ce9f7d"
        }
    })

    const {
        restitution,
        friction,
    } = useControls("Physics", {
        restitution: {
            value: 0.2,
            min: 0,
            max: 1,
            step: 0.2
        },
        friction: {
            value: 0.8,
            min: 0,
            max: 1,
            step: 0.1
        }
    })

    const cube = useRef()

    const whiteMarble = useRef()
    const redMarble = useRef()
    const blueMarble = useRef()

    useEffect(() => {
        whiteMarble.current.setTranslation(vec3({ x: -2, y: 3, z: 11 }))
        whiteMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        whiteMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        whiteMarble.current.setAngvel({ x: 0, y: 0, z: 0 })
        
        redMarble.current.setTranslation(vec3({ x: -2, y: 5, z: 11 }))
        redMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        redMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        redMarble.current.setAngvel({ x: 0, y: 0, z: 0 })

        blueMarble.current.setTranslation(vec3({ x: -2, y:7, z: 11 }))
        blueMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        blueMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        blueMarble.current.setAngvel({ x: 0, y: 0, z: 0 })
    }, [])

    const startWhiteMarble = (event) => {
        whiteMarble.current.setTranslation(vec3({ x: 0.0, y: 12.0, z: 0.0 }))
        whiteMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        whiteMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        whiteMarble.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    const startRedMarble = (event) => {
        redMarble.current.setTranslation(vec3({ x: 0.0, y: 12.0, z: 0.0 }))
        redMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        redMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        redMarble.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    const startBlueMarble = (event) => {
        blueMarble.current.setTranslation(vec3({ x: 0.0, y: 12.0, z: 0.0 }))
        blueMarble.current.setRotation({ x: 0, y: 0, z: 0 })
        blueMarble.current.setLinvel({ x: 0, y: 0, z: 0 })
        blueMarble.current.setAngvel({ x: 0, y: 0, z: 0 })
    }

    return <>
        {/*<Perf position="top-left" />*/}

        <OrbitControls makeDefault />

        <OrthographicCamera
            makeDefault
            zoom={30}
            position={[30, 30, 30]}
        />

        <color
            attach="background"
            args={[backgroundColor]}
        />

        <Environment preset={environmentPreset} />

        <ambientLight intensity={ambientLightIntensity} />

        <ContactShadows
            position={[0, -2.55, 0]}
            scale={60}
            far={contactShadowsFar}
            blur={contactShadowsBlur}
        />

        <Physics>
            <RigidBody
                ref={cube}
                type="dynamic"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube13 position={[-2, 1, 11]} rotation={[0, 6, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube1 position={[0, 0, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                ref={whiteMarble}
                type="dynamic"
                colliders="ball"
                restitution={restitution}
                friction={friction}
                gravityScale={2}
                onCollisionEnter={(event) => { hitSound.play() }}
            >
                <Marble onClick={startWhiteMarble} color="#fff" />
            </RigidBody>
            <RigidBody
                ref={redMarble}
                type="dynamic"
                colliders="ball"
                restitution={restitution}
                friction={friction}
                gravityScale={2}
                onCollisionEnter={(event) => { hitSound.play() }}
            >
                <Marble onClick={startRedMarble} color="#f00" />
            </RigidBody>
            <RigidBody
                ref={blueMarble}
                type="dynamic"
                colliders="ball"
                restitution={restitution}
                friction={friction}
                gravityScale={2}
                onCollisionEnter={(event) => { hitSound.play() }}
            >
                <Marble onClick={startBlueMarble} color="#00f" />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube1 position={[0, 5, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube12 position={[0, 10, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube1 position={[5, 0, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube10 position={[5, 5, 0]} rotation={[0, Math.PI * 0.5, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube11 position={[10, 0, 0]} rotation={[0, Math.PI * 1.5, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube3 position={[10, 5, 0]} rotation={[0, Math.PI * 0.5, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube1 position={[15, 0, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube2 position={[15, 5, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube1 position={[20, 0, 0]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube11 position={[20, 5, 0]} rotation={[0, Math.PI, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube6 position={[5, 0, 5]} rotation={[0, 0, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube4 position={[10, 0, 5]} rotation={[0, Math.PI *0.5, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube5 position={[15, 0, 5]} rotation={[0, Math.PI * 1.5, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube5 position={[15, 0, 10]} rotation={[0, Math.PI * 1, 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={restitution}
                friction={friction}
            >
                <Cube7 position={[10, 0, 10]} rotation={[0, Math.PI , 0]} color={woodColor} />
            </RigidBody>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                restitution={1}
                friction={0}
            >
                <CuboidCollider args={[25, 1, 25]} position={[0, -3.5, 0]} />
                <CuboidCollider args={[25, 2, 0.5]} position={[0, 0, 25.5]} />
                <CuboidCollider args={[25, 2, 0.5]} position={[0, 0, -25.5]} />
                <CuboidCollider args={[0.5, 2, 25]} position={[25.5, 0, 0]} />
                <CuboidCollider args={[0.5, 2, 25]} position={[-25.5, 0, 0]} />
            </RigidBody>
        </Physics>
    </>
}