import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Printer, Facebook, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import mcLogo from "@/assets/mc-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={mcLogo} alt="Medi-Cont logo" className="h-9 w-9 object-contain" />
              <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Medi-Cont
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              Győr vezető fogászati szaküzlete. Prémium minőségű fogászati eszközök és anyagok forgalmazása.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                H-9024 Győr, Hold u. 12.
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                (06 96) 516 360
              </li>
              <li className="flex items-center gap-1.5">
                <Printer className="h-3.5 w-3.5 shrink-0 text-primary" />
                +36-96/516-365
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                info@medi-cont.hu
              </li>
            </ul>
            <div className="flex items-center gap-2 mt-3">
              <a href="https://www.facebook.com/medicontkft/" target="_blank" rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/user/medicontkft" target="_blank" rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Gyors linkek */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 sm:mb-4 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Gyors linkek</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { to: "/shop", label: "Webáruház" },
                { to: "/partners", label: "Partnerek" },
                { to: "/catalogs", label: "Katalógusok" },
                { to: "/videos", label: "Videók" },
                { to: "/about", label: "Rólunk" },
                { to: "/contact", label: "Kapcsolat" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dokumentumok */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 sm:mb-4 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Dokumentumok</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { to: "/gdpr", label: "GDPR – Adatkezelési szabályzat" },
                { to: "/aszf", label: "Általános Szerződési Feltételek" },
                { to: "/safety-data-sheets", label: "Biztonsági adatlapok" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nyitvatartás Győr + Sopron */}
          <div>
            <h4 className="font-semibold text-foreground mb-2 sm:mb-4 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
              Nyitvatartás – Győr
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                H-9024 Győr, Hold u. 12.
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                (06 96) 516 360
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary" />
                H-P: 8:00 – 16:00
              </li>
            </ul>

            <Separator className="my-3" />

            <h4 className="font-semibold text-foreground mb-2 text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sopron
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                H-9400 Sopron, Móricz Zs. u. 1-3.
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                +36-99/523-170
              </li>
              <li className="italic text-xs">Jelenleg ZÁRVA, keresse győri üzletünket.</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Győri Medi-Cont Kft. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
