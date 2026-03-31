import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("transfer");

  const shipping = totalPrice >= 40000 ? 0 : 1500;
  const total = totalPrice + shipping;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      clearCart();
      toast.success("Megrendelését sikeresen rögzítettük! Hamarosan felvesszük Önnel a kapcsolatot.");
      navigate("/");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-3">A kosara üres</h1>
        <p className="text-muted-foreground mb-6">Adjon termékeket a kosárhoz a megrendeléshez.</p>
        <Link to="/shop">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Vissza a boltba
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Vissza a kosárhoz
      </Link>
      <h1 className="text-3xl font-bold text-foreground mb-8">Megrendelés</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Számlázási adatok</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Név *</Label>
                    <Input id="name" required placeholder="Dr. Kiss Péter" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" required placeholder="peter@rendelo.hu" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonszám *</Label>
                    <Input id="phone" type="tel" required placeholder="+36 30 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Cégnév (opcionális)</Label>
                    <Input id="company" placeholder="Fogászati Kft." />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax">Adószám (opcionális)</Label>
                  <Input id="tax" placeholder="12345678-1-08" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Szállítási cím</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zip">Irányítószám *</Label>
                    <Input id="zip" required placeholder="9024" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Város *</Label>
                    <Input id="city" required placeholder="Győr" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Utca, házszám *</Label>
                  <Input id="address" required placeholder="Hold u. 12." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Megjegyzés (opcionális)</Label>
                  <Textarea id="notes" rows={3} placeholder="Egyéb kérés a megrendeléssel kapcsolatban..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fizetési mód</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="transfer" id="transfer" />
                    <Label htmlFor="transfer" className="cursor-pointer">Banki átutalás</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="cursor-pointer">Utánvét / Készpénz átvételkor</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Order summary */}
          <Card className="h-fit sticky top-20">
            <CardHeader>
              <CardTitle className="text-lg">Rendelés összesítő</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground truncate mr-2">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Részösszeg</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Szállítás</span>
                <span>{shipping === 0 ? "Ingyenes" : formatPrice(shipping)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Összesen</span>
                <span className="text-primary">{formatPrice(total)}</span>
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={sending}>
                {sending ? "Feldolgozás..." : "Megrendelés leadása"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                A megrendelés leadásával elfogadja az{" "}
                <Link to="/aszf" className="text-primary hover:underline">ÁSZF</Link>-et és az{" "}
                <Link to="/gdpr" className="text-primary hover:underline">Adatkezelési szabályzat</Link>ot.
              </p>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
