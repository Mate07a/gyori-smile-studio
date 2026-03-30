import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} hozzáadva a kosárhoz!`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);

  return (
    <Card className="group overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.originalPrice && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 font-semibold">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <Badge variant="secondary" className="text-sm">Elfogyott</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        <Button
          onClick={handleAdd}
          disabled={!product.inStock}
          className="w-full gap-2"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          Kosárba
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
