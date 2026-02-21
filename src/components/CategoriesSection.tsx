import { motion } from "framer-motion";
import { Smartphone, Laptop, Headphones, Watch, Tv, Cable } from "lucide-react";

const categories = [
  { icon: Smartphone, label: "Smartphones", count: "120+ Products" },
  { icon: Laptop, label: "Laptops", count: "80+ Products" },
  { icon: Headphones, label: "Audio", count: "95+ Products" },
  { icon: Watch, label: "Wearables", count: "60+ Products" },
  { icon: Tv, label: "TVs & Displays", count: "45+ Products" },
  { icon: Cable, label: "Accessories", count: "200+ Products" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you need</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:glow-border cursor-pointer transition-all"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon className="h-6 w-6" />
              </div>
              <span className="font-semibold text-sm">{cat.label}</span>
              <span className="text-xs text-muted-foreground">{cat.count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
