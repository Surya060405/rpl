import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import ScorpionLogo from "./ScorpionLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:contact@rpl.edu", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-glass-border/20 bg-deep-black/80 backdrop-blur-sm">
      {/* Subtle scorpion watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.03]">
        <ScorpionLogo size={120} />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <ScorpionLogo size={28} />
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rabindranath Premier League. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
