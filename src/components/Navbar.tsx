import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-nav shadow-lg"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#inicio")}
          className="flex items-center gap-3 shrink-0"
        >
          <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
            DSI
          </span>
          <div className="w-px h-5 bg-white/30 hidden sm:block" />
          <span className="text-white/70 text-xs font-light tracking-[0.2em] uppercase hidden sm:block">
            Dehesa San Isidro
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/20 text-white transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-nav/95 backdrop-blur-md border-t border-white/10 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm font-medium text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
