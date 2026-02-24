import React, { useRef } from "react";
import { Box } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const SpinningBox = ({
  position,
  args: argsProp,
  color,
  speed,
  rot,
  minmax,
}) => {
  const ref = useRef(null);
  const moveSpeedRef = useRef(speed);
  const [min, max] = minmax;
  const posY = position[1];
  const { size } = useThree();
  const args = size.width < 580 ? argsProp.map((a) => a * 1.25) : argsProp;

  useFrame(() => {
    if (!ref.current) return;
    if (
      ref.current.position.y < posY - min ||
      ref.current.position.y > posY + max
    ) {
      moveSpeedRef.current *= -1;
    }
    ref.current.rotation.x = ref.current.rotation.y += rot;
    ref.current.position.y -= moveSpeedRef.current;
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <Box args={args}>
        <meshStandardMaterial
          attach="material"
          color={color}
          transparent
          opacity={0.4}
        />
      </Box>
    </mesh>
  );
};

const Fun = () => (
  <>
    <SpinningBox
      position={[10, 0, -15]}
      args={[3, 3, 3]}
      color="#4F7BFF"
      speed={0.015}
      rot={0.01}
      minmax={[2, 2]}
    />
    <SpinningBox
      position={[-18, 12, -45]}
      args={[4, 4, 4]}
      color="#FF4F7B"
      speed={-0.02}
      rot={-0.02}
      minmax={[4, 4]}
    />
    <SpinningBox
      position={[-12, -10, -20]}
      args={[3, 3, 3]}
      color="#7BFF4F"
      speed={0.03}
      rot={-0.025}
      minmax={[3, 3]}
    />
    <SpinningBox
      position={[15, -22, -35]}
      args={[4, 4, 4]}
      color="#FF4F7B"
      speed={0.02}
      rot={0.02}
      minmax={[5, 5]}
    />
    <SpinningBox
      position={[-10, -40, -35]}
      args={[3.5, 3.5, 3.5]}
      color="#4F7BFF"
      speed={0.015}
      rot={0.01}
      minmax={[2, 3]}
    />
    <SpinningBox
      position={[10, -55, -25]}
      args={[4, 4, 4]}
      color="#7BFF4F"
      speed={0.03}
      rot={-0.025}
      minmax={[3, 3]}
    />
  </>
);

export default Fun;
