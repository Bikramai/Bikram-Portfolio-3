import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  let computer;
  try {
    computer = useGLTF("./desktop_pc/scene");
    console.log("Model loaded successfully:", computer);
  }catch (error) {
    console.error("Error loading model:", error);
    return null; // Return null if model loading fails
  }

  console.log("Rendering Computers component");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {computer && (
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      )}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      if (mediaQuery) {
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
          setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }
    }
  }, []);

  console.log("Rendering ComputersCanvas component");
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default Computers;
