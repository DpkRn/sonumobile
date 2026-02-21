import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Menu, X, ShoppingCart, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const linkClass =
    "text-sm font-medium relative py-1.5 px-3 rounded-md transition-all duration-200 " +
    "dark:text-muted-foreground dark:hover:text-primary " +
    "text-black hover:text-primary hover:bg-primary/10 active:scale-[0.98] " +
    "before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-0 before:bg-primary before:transition-all before:duration-200 before:-translate-x-1/2 hover:before:w-3/4";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold text-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
        >
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="dark:text-foreground">SONU MOBILE <span className="text-primary">PARIHAR</span></span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "harvest" : "dark")}
            className="p-2.5 rounded-lg transition-all duration-200 dark:text-muted-foreground dark:hover:text-primary text-black/80 hover:text-primary hover:bg-primary/10 active:scale-95"
            aria-label={theme === "dark" ? "Switch to Harvest theme" : "Switch to Dark theme"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="relative p-2.5 rounded-lg transition-all duration-200 dark:text-muted-foreground dark:hover:text-primary text-black/80 hover:text-primary hover:bg-primary/10 active:scale-95">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
              3
            </span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg dark:text-muted-foreground text-black/80 hover:bg-primary/10 transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border/50"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 px-3 rounded-lg text-black dark:text-muted-foreground dark:hover:text-primary font-medium hover:bg-primary/10 hover:text-primary transition-colors active:scale-[0.99]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
