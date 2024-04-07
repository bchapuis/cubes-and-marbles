import { useControls } from "leva"

export default function Marble(props) {

    const {
        roughness,
        metalness,
    } = useControls("Marble", {
        roughness: { value: 0.3, min: 0, max: 1 },
        metalness: { value: 0.9, min: 0, max: 1 },
    })

    return <mesh
        castShadow
        receiveShadow
        {...props}
    >
        <sphereGeometry args={[0.9]} />
        <meshPhysicalMaterial
            color={props.color}
            roughness={roughness}
            metalness={metalness}
        />
    </mesh>
}