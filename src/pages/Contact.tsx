import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Printer, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Üzenetét megkaptuk! Hamarosan felvesszük Önnel a kapcsolatot.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Kapcsolat</h1>
        <p className="text-muted-foreground">Keressen minket bizalommal!</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left column: Form + Szerviz */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Írjon nekünk</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Név</Label>
                    <Input id="name" required placeholder="Dr. Kiss Péter" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" required placeholder="peter@rendelo.hu" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Tárgy</Label>
                  <Input id="subject" required placeholder="Árajánlat kérés" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Üzenet</Label>
                  <Textarea id="message" required rows={5} placeholder="Miben segíthetünk?" />
                </div>
                <Button type="submit" className="w-full" disabled={sending}>
                  {sending ? "Küldés..." : "Üzenet küldése"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Szerviz */}
          <Card>
            <CardContent className="p-6 space-y-5">
              <h2 className="text-xl font-semibold text-foreground">Szerviz</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Vadász Dániel</p>
                  <p>Mobil: +36-30/352-3529</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Takáts Imre</p>
                  <p>Mobil: +36-30/551-0126</p>
                </div>
                <p>E-mail: <a href="mailto:szerviz@medi-cont.hu" className="text-primary hover:underline">szerviz@medi-cont.hu</a></p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Győr + Sopron */}
        <div className="space-y-6">
          {/* Győr */}
          <Card>
            <CardContent className="p-6 space-y-5">
              <h2 className="text-xl font-semibold text-foreground">Győr</h2>
              {[
                { icon: MapPin, label: "Cím", value: "H-9024 Győr, Hold u. 12." },
                { icon: Phone, label: "Telefon", value: "(06 96) 516 360" },
                { icon: Printer, label: "Fax", value: "+36-96/516-365" },
                { icon: Mail, label: "E-mail", value: "info@medi-cont.hu" },
                { icon: Clock, label: "Nyitvatartás", value: "H-P: 8:00–16:00" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground">Web: <a href="https://www.medi-cont.hu" className="text-primary hover:underline">www.medi-cont.hu</a></p>
              {/* Social */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/medicontkft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/user/medicontkft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Sopron */}
          <Card>
            <CardContent className="p-6 space-y-5">
              <h2 className="text-xl font-semibold text-foreground">Sopron</h2>
              {[
                { icon: MapPin, label: "Cím", value: "H-9400 Sopron, Móricz Zs. u. 1-3." },
                { icon: Phone, label: "Telefon", value: "+36-99/523-170" },
                { icon: Mail, label: "E-mail", value: "sopron@medi-cont.hu" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground">Web: <a href="https://www.medi-cont.hu" className="text-primary hover:underline">www.medi-cont.hu</a></p>
              <p className="text-sm text-muted-foreground italic">Nyitvatartás: Jelenleg ZÁRVA, keresse győri üzletünket.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
