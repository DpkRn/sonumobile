import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "iPhone 15 Pro Max",
    category: "Smartphones",
    price: 134900,
    oldPrice: 159900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphones",
    price: 129999,
    oldPrice: 149999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
  },
  {
    name: "MacBook Air M3",
    category: "Laptops",
    price: 114900,
    oldPrice: 134900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
  },
  {
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 26990,
    oldPrice: 34990,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
  },
  {
    name: "Apple Watch Ultra 2",
    category: "Wearables",
    price: 89900,
    oldPrice: 99900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
  },
  {
    name: "iPad Pro M4",
    category: "Tablets",
    price: 99900,
    oldPrice: 119900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Featured Products</h2>
          <p className="text-muted-foreground">Handpicked deals just for you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 hover:glow-border transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-destructive text-destructive-foreground text-xs font-bold">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-3.5 w-3.5 fill-star text-star" />
                  <span className="text-sm text-muted-foreground">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.oldPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <button className="p-2 rounded-lg bg-primary text-primary-foreground hover:brightness-110 transition-all">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
