import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories, manufacturers } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type SortOption = "default" | "name-asc" | "name-desc" | "price-asc" | "price-desc" | "discount";

const sortLabels: Record<SortOption, string> = {
  default: "Alapértelmezett rendezés",
  "name-asc": "Név szerint (A-Z)",
  "name-desc": "Név szerint (Z-A)",
  "price-asc": "Ár szerint növekvő",
  "price-desc": "Ár szerint csökkenő",
  discount: "Akciósak elől",
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const manufacturerParam = searchParams.get("manufacturer") || "";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500000]);
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [typeFilter, setTypeFilter] = useState<"all" | "anyag" | "gep">("all");
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    manufacturerParam ? [manufacturerParam] : []
  );
  const [showFilters, setShowFilters] = useState(false);

  const maxPrice = Math.max(...products.map((p) => p.price));

  const toggleManufacturer = (m: string) => {
    setSelectedManufacturers((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const filtered = products
    .filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesDiscount = !showDiscountOnly || !!p.originalPrice;
      const matchesType = typeFilter === "all" || p.type === typeFilter;
      const matchesManufacturer =
        selectedManufacturers.length === 0 || selectedManufacturers.includes(p.manufacturer);
      return matchesCategory && matchesSearch && matchesPrice && matchesDiscount && matchesType && matchesManufacturer;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name-asc": return a.name.localeCompare(b.name, "hu");
        case "name-desc": return b.name.localeCompare(a.name, "hu");
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "discount": {
          const aDisc = a.originalPrice ? (1 - a.price / a.originalPrice) : 0;
          const bDisc = b.originalPrice ? (1 - b.price / b.originalPrice) : 0;
          return bDisc - aDisc;
        }
        default: return 0;
      }
    });

  const setCategory = (cat: string) => {
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);

  const clearAllFilters = () => {
    setSearch("");
    setCategory("all");
    setSortBy("default");
    setPriceRange([0, maxPrice]);
    setShowDiscountOnly(false);
    setTypeFilter("all");
    setSelectedManufacturers([]);
  };

  const activeFilterCount =
    (activeCategory !== "all" ? 1 : 0) +
    (showDiscountOnly ? 1 : 0) +
    (typeFilter !== "all" ? 1 : 0) +
    selectedManufacturers.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Webáruház</h1>
        <p className="text-muted-foreground">Fedezze fel prémium fogászati termékeinket</p>
      </div>

      {/* Search & Sort row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Termék keresése..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
          <SelectTrigger className="w-full sm:w-[260px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(sortLabels).map(([key, label]) => (
              <SelectItem key={key} value={key}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Szűrők
          {activeFilterCount > 0 && (
            <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Expandable filters */}
      {showFilters && (
        <div className="border rounded-lg p-6 mb-6 space-y-6 bg-card">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Kategória</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant={activeCategory === "all" ? "default" : "outline"} size="sm" onClick={() => setCategory("all")}>
                Összes
              </Button>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.icon} {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Type filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Típus</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "all" as const, label: "Összes" },
                { value: "anyag" as const, label: "Anyagok" },
                { value: "gep" as const, label: "Gépek" },
              ].map((opt) => (
                <Button
                  key={opt.value}
                  variant={typeFilter === opt.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTypeFilter(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Discount filter */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="discount"
              checked={showDiscountOnly}
              onCheckedChange={(checked) => setShowDiscountOnly(checked === true)}
            />
            <Label htmlFor="discount" className="text-sm cursor-pointer">Csak akciós termékek</Label>
          </div>

          {/* Price range */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Ár: {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
            </h3>
            <Slider
              value={priceRange}
              onValueChange={(v) => setPriceRange(v as [number, number])}
              min={0}
              max={maxPrice}
              step={1000}
              className="max-w-lg"
            />
          </div>

          {/* Manufacturer filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Gyártó</h3>
            <div className="flex flex-wrap gap-2">
              {manufacturers.map((m) => (
                <Button
                  key={m}
                  variant={selectedManufacturers.includes(m) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleManufacturer(m)}
                >
                  {m}
                </Button>
              ))}
            </div>
          </div>

          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="gap-1 text-muted-foreground">
              <X className="h-3.5 w-3.5" /> Szűrők törlése
            </Button>
          )}
        </div>
      )}

      {/* Quick category row (when filters hidden) */}
      {!showFilters && (
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant={activeCategory === "all" ? "default" : "outline"} size="sm" onClick={() => setCategory("all")}>
            Összes
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat.id)}
            >
              {cat.icon} {cat.name}
            </Button>
          ))}
        </div>
      )}

      {/* Products */}
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} termék</p>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-lg text-muted-foreground">Nincs találat a keresési feltételeknek.</p>
          <Button variant="outline" className="mt-4" onClick={clearAllFilters}>
            Szűrők törlése
          </Button>
        </div>
      )}
    </div>
  );
};

export default Shop;
