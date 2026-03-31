import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Truck, Shield, HeadphonesIcon } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
              Győr vezető fogászati szaküzlete
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Prémium fogászati <span className="text-primary">eszközök</span> és anyagok
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Több mint 25 éve szolgáljuk ki Győr és környéke fogorvosait a legmagasabb minőségű fogászati termékekkel.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop">
                <Button size="lg" className="gap-2 text-base">
                  Webáruház megtekintése
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-base">
                  Kapcsolatfelvétel
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* USP Bar */}
      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Ingyenes szállítás", desc: "40.000 Ft felett" },
              { icon: Shield, title: "Garancia", desc: "Minden termékre" },
              { icon: HeadphonesIcon, title: "Szakértői támogatás", desc: "H-P 8:00–16:00" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Termékkategóriák</h2>
          <p className="text-muted-foreground">Válasszon a széleskörű kínálatunkból</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryTree.map((cat) => (
            <Link key={cat.id} to={`/shop?type=${cat.type}`}>
              <Card className="hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-5 text-center gap-2">
                  <span className="text-3xl">{cat.type === "gep" ? "⚙️" : "🧪"}</span>
                  <span className="text-sm font-medium text-foreground">{cat.name}</span>
                  <span className="text-xs text-muted-foreground">{cat.subcategories.length} alkategória</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Kiemelt termékek</h2>
              <p className="text-muted-foreground">Legnépszerűbb termékeink</p>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="gap-2 hidden sm:flex">
                Összes termék <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop">
              <Button variant="outline" className="gap-2">
                Összes termék <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-primary text-primary-foreground border-0 overflow-hidden relative">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-lg relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Kérdése van?</h2>
              <p className="mb-6 opacity-90">
                Szakértő csapatunk készséggel áll rendelkezésére. Keressen minket telefonon vagy személyesen üzletünkben!
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="gap-2">
                  Kapcsolatfelvétel
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
