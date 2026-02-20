import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Proyectos de Sostenibilidad", href: "/sostenibilidad" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-nav text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-serif text-2xl font-bold tracking-tight leading-none">
            DSI
          </span>
          <span className="text-xs font-light tracking-widest uppercase opacity-90 hidden sm:block">
            Dehesa San Isidro
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-all rounded-sm hover:bg-white/20 whitespace-nowrap ${
                  active ? "bg-white/25 font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/20"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="md:hidden bg-nav border-t border-white/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium border-b border-white/10 hover:bg-white/10 px-2 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
