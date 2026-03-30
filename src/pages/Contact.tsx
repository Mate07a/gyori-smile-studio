import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
        {/* Form */}
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
                  <Input id="email" type="email" required placeholder="peter@rendelő.hu" />
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

        {/* Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-5">
              <h2 className="text-xl font-semibold text-foreground">Elérhetőségeink</h2>
              {[
                { icon: MapPin, label: "Cím", value: "9024 Győr, Fő utca 12." },
                { icon: Phone, label: "Telefon", value: "+36 96 123 456" },
                { icon: Mail, label: "E-mail", value: "info@medicont.hu" },
                { icon: Clock, label: "Nyitvatartás", value: "H-P: 8:00–17:00 | Szo: 9:00–13:00" },
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
            </CardContent>
          </Card>

          {/* Map placeholder */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                title="Medi-Cont Győr"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.3!2d17.6348!3d47.6875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDQxJzE1LjAiTiAxN8KwMzgnMDUuMyJF!5e0!3m2!1shu!2shu!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
