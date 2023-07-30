import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const CanvasModel = () => {
  const gltf = useLoader(
    GLTFLoader,
    'https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/models/monkey.glb'
  )
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
      />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>

      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel