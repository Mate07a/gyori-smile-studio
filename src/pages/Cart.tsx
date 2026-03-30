import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-3">A kosara üres</h1>
        <p className="text-muted-foreground mb-6">Böngéssze termékeinket és találja meg, amire szüksége van!</p>
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
      <h1 className="text-3xl font-bold text-foreground mb-8">Kosár</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id}>
              <CardContent className="p-4 flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="h-20 w-20 rounded-lg object-cover bg-muted shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm truncate">{item.product.name}</h3>
                  <p className="text-primary font-bold mt-1">{formatPrice(item.product.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                      onClick={() => { removeFromCart(item.product.id); toast.info("Termék eltávolítva"); }}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="h-fit sticky top-20">
          <CardHeader>
            <CardTitle className="text-lg">Összesítés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Részösszeg</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Szállítás</span>
              <span>{totalPrice >= 50000 ? "Ingyenes" : formatPrice(1500)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Összesen</span>
              <span className="text-primary">{formatPrice(totalPrice + (totalPrice >= 50000 ? 0 : 1500))}</span>
            </div>
            <Button className="w-full" size="lg" onClick={() => toast.info("A fizetési folyamat hamarosan elérhető!")}>
              Megrendelés
            </Button>
            <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={() => { clearCart(); toast.info("Kosár kiürítve"); }}>
              Kosár kiürítése
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
