import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 60 40" className="w-12 h-8">
                <path
                  d="M30 2 L38 12 L34 12 L34 20 L38 20 L30 30 L22 20 L26 20 L26 12 L22 12 Z"
                  fill="hsl(var(--brand-blue))"
                />
              </svg>
              <span className="text-brand-blue font-bold text-xl tracking-wider">INTCO</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              One-stop Solutions for Interior and Exterior Decorative Materials. 
              Premium quality products for residential and commercial spaces worldwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {["Wall Panel", "Moulding & Accessories", "Outdoor Decking", "Acoustic Panels", "Skirting Board"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Solutions", "Projects", "News Center", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">+86 - 13371591392</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">decor@intco.com.cn</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Zibo, Shandong Province, China
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Intco Decor. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
