import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Győr vezető fogászati szaküzlete. Prémium minőségű fogászati eszközök és anyagok forgalmazása 2005 óta.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Gyors linkek</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/shop", label: "Webáruház" },
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Elérhetőség</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                9024 Győr, Fő utca 12.
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +36 96 123 456
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@medicont.hu
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Nyitvatartás</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                H-P: 8:00 – 17:00
              </li>
              <li className="pl-6">Szo: 9:00 – 13:00</li>
              <li className="pl-6">V: Zárva</li>
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
