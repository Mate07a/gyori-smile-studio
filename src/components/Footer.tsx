import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                M
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Medi-Cont
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Győr vezető fogászati szaküzlete. Prémium minőségű fogászati eszközök és anyagok forgalmazása.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                H-9024 Győr, Hold u. 12.
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (06 96) 516 360
              </li>
              <li className="flex items-center gap-2">
                <Printer className="h-4 w-4 shrink-0 text-primary" />
                +36-96/516-365
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@medi-cont.hu
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Gyors linkek</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/shop", label: "Webáruház" },
                { to: "/partners", label: "Partnerek" },
                { to: "/catalogs", label: "Katalógusok" },
                { to: "/videos", label: "Videók" },
                { to: "/about", label: "Rólunk" },
                { to: "/contact", label: "Kapcsolat" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dokumentumok */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Dokumentumok</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/gdpr", label: "GDPR – Adatkezelési szabályzat" },
                { to: "/aszf", label: "Általános Szerződési Feltételek" },
                { to: "/safety-data-sheets", label: "Biztonsági adatlapok" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Sopron */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Nyitvatartás – Győr</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground mb-6">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                H-P: 8:00 – 16:00
              </li>
            </ul>
            <h4 className="font-semibold text-foreground mb-3 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Sopron</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                H-9400 Sopron, Móricz Zs. u. 1-3.
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +36-99/523-170
              </li>
              <li className="italic text-xs">Jelenleg ZÁRVA, keresse győri üzletünket.</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Győri Medi-Cont Kft. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
