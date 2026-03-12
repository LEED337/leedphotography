import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Photo", path: "/photo" },
  { label: "Video", path: "/video" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback((e: React.MouseEvent, path: string) => {
    if (path === "/#about") {
      e.preventDefault();
      if (location.pathname === "/") {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
      setIsOpen(false);
    }
  }, [location.pathname, navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-wider text-foreground">
          LP
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className={`font-display text-sm tracking-widest uppercase transition-opacity duration-300 text-foreground ${
                location.pathname === item.path || (item.path === "/#about" && location.hash === "#about") ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground z-[60]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-foreground"
            >
              <X size={24} />
            </button>
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={(e) => { handleClick(e, item.path); setIsOpen(false); }}
                  className={`font-display text-3xl tracking-widest uppercase text-foreground transition-opacity ${
                    location.pathname === item.path ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
