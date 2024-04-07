import { Geometry, Base, Addition, Subtraction, ReverseSubtraction, Intersection, Difference } from '@react-three/csg'

export default function Cube(props) {
    return <mesh {...props}>
        
        <meshStandardMaterial color={props.color} metalness={0.1} roughness={0.9} />
        <Geometry>
            <Base>
                <boxGeometry args={[5, 5, 5, 1]} />
            </Base>
            <Subtraction position={[2.5, 2.5, 2.5]} rotation={[Math.PI * 0.5, 0, Math.PI * 0.5]}>
                <torusGeometry args={[2.5, 1, 32, 32]} />
            </Subtraction>
            <Subtraction position={[-2.3, -0.95, 2.5]} rotation={[Math.PI * 0.5, Math.PI * 0.125, 0]}>
                <torusGeometry args={[2.5, 1, 32, 32]} />
            </Subtraction>
        </Geometry>
    </mesh>
}