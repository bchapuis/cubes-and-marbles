import { Geometry, Base, Addition, Subtraction, ReverseSubtraction, Intersection, Difference } from '@react-three/csg'

export default function Cube(props) {
    return <mesh {...props}>
        <meshStandardMaterial color={props.color} metalness={0.1} roughness={0.9} />
        <Geometry>
            <Base>
                <boxGeometry args={[5, 5, 5, 1]} />
            </Base>
            <Subtraction rotation={[Math.PI * 0.5, 0, 0]}>
                <cylinderGeometry args={[1, 1, 5, 32]} />
            </Subtraction>
            <Subtraction rotation={[Math.PI * 0.5, 0, 0]} position-y={2.5}>
                <cylinderGeometry args={[1, 1, 5, 32]} />
            </Subtraction>
            <Subtraction rotation={[0, 0, Math.PI * 0.5]} position-y={-2.5}>
                <cylinderGeometry args={[1, 1, 5, 32]} />
            </Subtraction>
        </Geometry>
    </mesh>
}