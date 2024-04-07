import { Geometry, Base, Addition, Subtraction, ReverseSubtraction, Intersection, Difference } from '@react-three/csg'
import { useControls } from 'leva'

export default function Cube(props) {
    return <mesh {...props}>
        <meshStandardMaterial color={props.color} metalness={0.1} roughness={0.9} />
        <boxGeometry args={[5, 5, 5, 1]} />
    </mesh>
}