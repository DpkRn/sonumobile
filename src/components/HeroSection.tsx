import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 28, stiffness: 120 };
  const x = useSpring(useTransform(mouseX, [-1, 1], ["-1.5%", "1.5%"]), springConfig);
  const y = useSpring(useTransform(mouseY, [-1, 1], ["-1.5%", "1.5%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with subtle parallax – no overlay, fully transparent */}
      <motion.div
        className="absolute inset-0"
        style={{ x, y, scale: 1.02 }}
      >
        <img
          src={heroBanner}
          alt="Tech gadgets"
          className="w-full h-full object-cover opacity-60 dark:opacity-45 transition-opacity duration-500"
        />
      </motion.div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="origin-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 cursor-default">
              🔥 New Arrivals — Up to 40% Off
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Your One-Stop
            <br />
            <span className="text-primary glow-text">Tech Destination</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg dark:text-muted-foreground mb-8 max-w-lg text-white "
          >
            Discover the latest smartphones, laptops, accessories, and electronics at unbeatable prices. Quality guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#categories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold bg-background/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Browse Categories
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
