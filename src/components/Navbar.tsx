import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScorpionLogo from "./ScorpionLogo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Schedule", path: "/schedule" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path.includes("#contact")) {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-navbar"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={() => handleNavClick("/")}>
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ScorpionLogo size={128} className="h-32" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.path === "/"
                ? location.pathname === "/" && !location.hash
                : (link.path === "/#contact"
                  ? location.pathname === "/" && location.hash === "#contact"
                  : location.pathname === link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="relative group"
                >
                  <span
                    className={`font-medium tracking-wide transition-colors duration-300 ${isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                      }`}
                  >
                    {link.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={{
                      width: isActive ? "100%" : 0,
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-navbar border-t border-glass-border/20"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link, index) => {
                const isActive = link.path === "/"
                  ? location.pathname === "/" && !location.hash
                  : (link.path === "/#contact"
                    ? location.pathname === "/" && location.hash === "#contact"
                    : location.pathname === link.path);

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`block py-3 font-medium tracking-wide transition-colors ${isActive
                        ? "text-primary"
                        : "text-foreground/80"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
