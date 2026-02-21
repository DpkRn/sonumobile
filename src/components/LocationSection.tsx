import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, MessageCircle } from "lucide-react";

// 3D Globe with a glowing pin
const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const pinRef = useRef<THREE.Group>(null);

  // Demhua, Bihar 843331 – sphere surface (y-up: x = R cos(lat) sin(lon), y = R sin(lat), z = R cos(lat) cos(lon))
  const R = 1.52;
  const lat = 26.55;
  const lon = 85.45;
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const pinPos = useMemo(
    () =>
      new THREE.Vector3(
        R * Math.cos(latRad) * Math.sin(lonRad),
        R * Math.sin(latRad),
        R * Math.cos(latRad) * Math.cos(lonRad)
      ),
    [latRad, lonRad, R]
  );

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
    if (pinRef.current) {
      pinRef.current.rotation.y += delta * 0.15;
    }
  });

  const wireframeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("hsl(210, 100%, 56%)"),
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      }),
    []
  );

  const solidMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("hsl(222, 47%, 8%)"),
        roughness: 0.8,
        metalness: 0.2,
      }),
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#60a5fa" />

      {/* Solid inner globe */}
      <Sphere ref={globeRef} args={[1.48, 64, 64]} material={solidMaterial} />

      {/* Wireframe outer globe */}
      <Sphere args={[1.52, 32, 32]} material={wireframeMaterial} />

      {/* Pin */}
      <group ref={pinRef}>
        <mesh position={pinPos}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={2}
          />
        </mesh>
        {/* Pin glow ring */}
        <mesh position={pinPos} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.08, 0.12, 32]} />
          <meshBasicMaterial
            color="#3b82f6"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Find Our Store</h2>
          <p className="text-muted-foreground">Visit us at SONU MOBILE BETAHA, Demhua, Bihar</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-xl overflow-hidden border border-border/50 glow-border bg-background"
          >
            <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
              <Globe />
            </Canvas>
          </motion.div>

          {/* Info + Map */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    PM6J+VHF, Kumma-Bela Rd, Parihar Dakshini, Demhua, Bihar 843331, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">+91 94706 44544</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917050795540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-semibold hover:brightness-110 transition-all shadow-lg"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/6uGFe89oz6TyfhoB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-border/50 glow-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5!2d85.45!3d26.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed0f9e7b2aaaab%3A0x24a0a3b81e64cbff!2sA.R%20MOBILE!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SONU MOBILE BETAHA Location"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
