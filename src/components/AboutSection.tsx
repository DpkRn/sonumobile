import { motion } from "framer-motion";
import ownerImage from "@/assets/owner.jpg";
import shop1 from "@/assets/shop1.jpg";
import shop2 from "@/assets/shop2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">About SONU MOBILE BETAHA</h2>
          <p className="text-muted-foreground">Meet our founder & explore our store</p>
        </motion.div>

        {/* Owner Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-sm"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-primary/30 glow-border">
              <img src={ownerImage} alt="Owner of SONU MOBILE BETAHA" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Founder & CEO
            </span>
            <h3 className="text-2xl font-bold mb-4">Passion for Technology, Service from the Heart</h3>
            <p className="text-muted-foreground mb-4">
              SONU MOBILE BETAHA & Electronics has been serving customers with the latest smartphones, home appliances, and electronics. 
              We are authorized dealers for top brands including Apple, Samsung, Vivo, Oppo, OnePlus, Whirlpool, Godrej, Panasonic, and Luminous.
            </p>
            <p className="text-muted-foreground">
              Our commitment is to provide genuine products at the best prices with unmatched after-sales service. 
              Visit our store and experience the difference!
            </p>
          </motion.div>
        </div>

        {/* Store Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold mb-2">Our Store</h3>
          <p className="text-muted-foreground">Visit us for the best deals</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[shop1, shop2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 hover:glow-border transition-all"
            >
              <img src={img} alt={`SONU MOBILE BETAHA Store ${i + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
