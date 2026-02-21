import { motion } from "framer-motion";
import { Shield, Truck, RotateCcw, Headset } from "lucide-react";

const features = [
  { icon: Shield, title: "Genuine Products", desc: "100% authentic products with manufacturer warranty" },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders above $50, delivered in 2-3 days" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free return and exchange policy" },
  { icon: Headset, title: "24/7 Support", desc: "Expert assistance available around the clock" },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Why Choose SONU MOBILE BETAHA?</h2>
          <p className="text-muted-foreground">We go the extra mile for our customers</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
