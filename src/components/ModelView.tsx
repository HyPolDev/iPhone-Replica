import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights.tsx";
import { Suspense } from "react";
import Iphone from "./Iphone.tsx"
import * as THREE from 'three'

type ModelViewProps = {
    index: any,
    groupRef: any,
    gsapType: string,
    controlRef: any,
    setRotationState: React.Dispatch<React.SetStateAction<number>>,
    item: any,
    size: string
};

const ModelView = ({
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    item,
    size
}: ModelViewProps): JSX.Element => {
    // Component logic here

    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute {index === 2  ? 'right-[-100%]' : ''}`}>
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimutalAngle())} />
            <group ref={groupRef} name={`${index == 1} ? 'small' : 'large' `} position={[0, 0, 0]}>
                <Suspense fallback={<Html><div>Loading...</div></Html>} >
                    <Iphone
                        scale={index === 1 ? [15, 15, 15] : [20, 20, 20]}
                        item={item}
                        size={size} />
                </Suspense>
            </group>
        </View>
    );
};

export default ModelView;