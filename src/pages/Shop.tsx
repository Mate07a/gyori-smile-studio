import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categoryTree, manufacturers } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X, ChevronDown, ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const manufacturerParam = searchParams.get("manufacturer") || "";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const maxPrice = Math.max(...products.map((p) => p.price));
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [showDiscountOnly, setShowDiscountOnly] = useState(false);
  const [typeFilter, setTypeFilter] = useState<"all" | "anyag" | "gep">("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    manufacturerParam ? [manufacturerParam] : []
  );
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [manufacturerSearch, setManufacturerSearch] = useState("");
  const [showManufacturerDropdown, setShowManufacturerDropdown] = useState(false);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(catId) ? prev.filter((x) => x !== catId) : [...prev, catId]
    );
  };

  const toggleManufacturer = (m: string) => {
    setSelectedManufacturers((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
  };

  const filteredManufacturers = manufacturers
    .sort((a, b) => a.localeCompare(b, "hu"))
    .filter((m) => m.toLowerCase().includes(manufacturerSearch.toLowerCase()));

  const filtered = products
    .filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesDiscount = !showDiscountOnly || !!p.originalPrice;
      const matchesType = typeFilter === "all" || p.type === typeFilter;
      const matchesSubcategory = selectedSubcategory === "all" || p.subcategory === selectedSubcategory;
      const matchesManufacturer =
        selectedManufacturers.length === 0 || selectedManufacturers.includes(p.manufacturer);
      return matchesSearch && matchesPrice && matchesDiscount && matchesType && matchesSubcategory && matchesManufacturer;
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

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);

  const clearAllFilters = () => {
    setSearch("");
    setSortBy("default");
    setPriceRange([0, maxPrice]);
    setShowDiscountOnly(false);
    setTypeFilter("all");
    setSelectedSubcategory("all");
    setSelectedManufacturers([]);
    setManufacturerSearch("");
  };

  const activeFilterCount =
    (showDiscountOnly ? 1 : 0) +
    (typeFilter !== "all" ? 1 : 0) +
    (selectedSubcategory !== "all" ? 1 : 0) +
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
          <Input placeholder="Termék keresése..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
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
        <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
          <SlidersHorizontal className="h-4 w-4" />
          Szűrők
          {activeFilterCount > 0 && (
            <Badge className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 shrink-0`}>
          <div className="border rounded-lg p-4 bg-card space-y-5 lg:sticky lg:top-20">
            {/* Kategória */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">KATEGÓRIA</h3>
              <div className="space-y-0.5">
                {categoryTree.map((cat) => (
                  <Collapsible
                    key={cat.id}
                    open={expandedCategories.includes(cat.id)}
                    onOpenChange={() => toggleCategory(cat.id)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium hover:bg-muted rounded transition-colors">
                      <span
                        className={typeFilter === cat.type && selectedSubcategory === "all" ? "text-primary font-semibold" : ""}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTypeFilter(cat.type);
                          setSelectedSubcategory("all");
                        }}
                      >
                        {cat.name}
                      </span>
                      {expandedCategories.includes(cat.id) ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setTypeFilter(cat.type);
                            setSelectedSubcategory(sub.id);
                          }}
                          className={`block w-full text-left px-2 py-1.5 text-sm rounded transition-colors hover:bg-muted ${
                            selectedSubcategory === sub.id
                              ? "text-primary font-semibold bg-primary/5"
                              : "text-muted-foreground"
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}

                {/* Akciós termékek */}
                <button
                  onClick={() => {
                    setShowDiscountOnly(!showDiscountOnly);
                  }}
                  className={`flex items-center w-full px-2 py-1.5 text-sm rounded transition-colors hover:bg-muted ${
                    showDiscountOnly ? "text-primary font-semibold bg-primary/5" : ""
                  }`}
                >
                  Akciós termékek
                </button>
              </div>
            </div>

            {/* Gyártó */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">GYÁRTÓ</h3>
              <Collapsible open={showManufacturerDropdown} onOpenChange={setShowManufacturerDropdown}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-1.5 text-sm border rounded hover:bg-muted transition-colors">
                  <span className="text-muted-foreground">
                    {selectedManufacturers.length > 0
                      ? `${selectedManufacturers.length} kiválasztva`
                      : "Válasszon gyártót..."}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 border rounded p-2">
                  <Input
                    placeholder="Keresés..."
                    value={manufacturerSearch}
                    onChange={(e) => setManufacturerSearch(e.target.value)}
                    className="mb-2 h-8 text-xs"
                  />
                  <ScrollArea className="h-48">
                    <div className="space-y-0.5">
                      {filteredManufacturers.map((m) => (
                        <label
                          key={m}
                          className={`flex items-center gap-2 px-2 py-1 text-sm rounded cursor-pointer hover:bg-muted transition-colors ${
                            selectedManufacturers.includes(m) ? "bg-primary/5 text-primary font-medium" : "text-foreground"
                          }`}
                        >
                          <Checkbox
                            checked={selectedManufacturers.includes(m)}
                            onCheckedChange={() => toggleManufacturer(m)}
                            className="h-3.5 w-3.5"
                          />
                          {m}
                        </label>
                      ))}
                    </div>
                  </ScrollArea>
                </CollapsibleContent>
              </Collapsible>
              {selectedManufacturers.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedManufacturers.map((m) => (
                    <Badge key={m} variant="secondary" className="text-xs gap-1 cursor-pointer" onClick={() => toggleManufacturer(m)}>
                      {m} <X className="h-3 w-3" />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Ár */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                ÁR: {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
              </h3>
              <Slider
                value={priceRange}
                onValueChange={(v) => setPriceRange(v as [number, number])}
                min={0}
                max={maxPrice}
                step={1000}
              />
            </div>

            {/* Clear */}
            {activeFilterCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="gap-1 text-muted-foreground w-full">
                <X className="h-3.5 w-3.5" /> Szűrők törlése
              </Button>
            )}
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-muted-foreground mb-4">{filtered.length} termék</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
};

export default Shop;
