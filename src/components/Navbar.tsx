import { useState, useEffect } from "react";
import { Menu, X, Tv } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Content", href: "#content" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2">
            <Tv className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-gradient-gold">IPTV Pro</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/966565662037"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300"
            >
              Subscribe Now
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/966565662037"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold text-center"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
