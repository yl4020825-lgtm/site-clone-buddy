import { useState } from "react";
import { Menu, X, Phone, Mail, Search, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Video Center", href: "#" },
  { label: "Solution", href: "#solutions", hasDropdown: true },
  { label: "Support", href: "#", hasDropdown: true },
  { label: "Project", href: "#", hasDropdown: true },
  { label: "About Intco", href: "#about", hasDropdown: true },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full z-50 bg-card">
      {/* Top Bar */}
      <div className="bg-foreground text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold tracking-wider text-sm">INTCO DECOR</span>
            <div className="hidden md:flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Wall Panel
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Moulding & Accessories
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Outdoor
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <a href="tel:+86-13371591392" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />
              +86 - 13371591392
            </a>
            <a href="mailto:decor@intco.com.cn" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" />
              decor@intco.com.cn
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 60 40" className="w-16 h-10">
                <path
                  d="M30 2 L38 12 L34 12 L34 20 L38 20 L30 30 L22 20 L26 20 L26 12 L22 12 Z"
                  fill="hsl(var(--brand-blue))"
                />
                <circle cx="30" cy="6" r="2" fill="hsl(var(--brand-blue))" />
                <circle cx="24" cy="10" r="2" fill="hsl(var(--brand-blue))" />
                <circle cx="36" cy="10" r="2" fill="hsl(var(--brand-blue))" />
              </svg>
              <span className="text-brand-blue font-bold text-lg tracking-wider">INTCO</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="hidden md:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              EN
              <ChevronDown className="w-3 h-3" />
            </button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-foreground hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
