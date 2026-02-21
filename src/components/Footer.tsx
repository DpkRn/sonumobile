import { Smartphone, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
              Sonu Mobile <span className="text-primary">Parihar</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for smartphones, electronics, and home appliances. Authorized dealers for top brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "Products", "Categories", "About Us"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["FAQ", "Shipping", "Returns", "Warranty"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" /> PM6J+VHF, Kumma-Bela Rd, Demhua, Bihar 843331</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /> +91 70507 95540</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> hello@sonumobile.com</li>
              <li>
                <a
                  href="https://wa.me/917050795540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold hover:brightness-110 transition-all text-sm"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © 2025 SONU MOBILE BETAHA & Electronics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
