import { useState, useMemo } from "react";
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

const ITEMS_PER_PAGE = 20;

const Shop = () => {
  const [searchParams] = useSearchParams();
  const manufacturerParam = searchParams.get("manufacturer") || "";
  const typeParam = searchParams.get("type") || "";
  const discountParam = searchParams.get("discount") === "true";
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const maxPrice = Math.max(...products.map((p) => p.price));
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [showDiscountOnly, setShowDiscountOnly] = useState(discountParam);
  const [typeFilter, setTypeFilter] = useState<"all" | "anyag" | "gep">(
    typeParam === "gep" || typeParam === "anyag" ? typeParam : "all"
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
    manufacturerParam ? [manufacturerParam] : []
  );
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [manufacturerSearch, setManufacturerSearch] = useState("");
  const [showManufacturerDropdown, setShowManufacturerDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (catId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(catId) ? prev.filter((x) => x !== catId) : [...prev, catId]
    );
  };

  const toggleManufacturer = (m: string) => {
    setSelectedManufacturers((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );
    setCurrentPage(1);
  };

  const filteredManufacturers = manufacturers
    .sort((a, b) => a.localeCompare(b, "hu"))
    .filter((m) => m.toLowerCase().includes(manufacturerSearch.toLowerCase()));

  const filtered = useMemo(() => {
    return products
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
  }, [search, priceRange, showDiscountOnly, typeFilter, selectedSubcategory, selectedManufacturers, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedProducts = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
    setCurrentPage(1);
  };

  const activeFilterCount =
    (showDiscountOnly ? 1 : 0) +
    (typeFilter !== "all" ? 1 : 0) +
    (selectedSubcategory !== "all" ? 1 : 0) +
    selectedManufacturers.length +
    (priceRange[0] > 0 || priceRange[1] < maxPrice ? 1 : 0);

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3, 4);
      if (currentPage > 5) {
        pages.push("...");
        if (currentPage < totalPages - 3) {
          pages.push(currentPage - 1, currentPage, currentPage + 1, "...");
        }
      } else {
        pages.push("...");
      }
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    // deduplicate
    const unique: (number | "...")[] = [];
    for (const p of pages) {
      if (p === "..." && unique[unique.length - 1] === "...") continue;
      if (typeof p === "number" && unique.includes(p)) continue;
      unique.push(p);
    }
    return unique;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Webáruház</h1>
        <p className="text-muted-foreground">Fedezze fel prémium fogászati termékeinket</p>
      </div>

      {/* Search & Sort row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Termék keresése..." value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} className="pl-9" />
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

      {/* Horizontal filter bar */}
      {showFilters && (
        <div className="border rounded-lg p-4 bg-card mb-6 space-y-4">
          <div className="flex flex-wrap gap-6 items-start">
            {/* Kategória */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Kategória</h3>
              <div className="space-y-0.5 max-h-60 overflow-y-auto">
                <button
                  onClick={() => { setTypeFilter("all"); setSelectedSubcategory("all"); setCurrentPage(1); }}
                  className={`block w-full text-left px-2 py-1 text-sm rounded transition-colors hover:bg-muted ${
                    typeFilter === "all" ? "text-primary font-semibold bg-primary/5" : "text-muted-foreground"
                  }`}
                >
                  Összes
                </button>
                {categoryTree.map((cat) => (
                  <Collapsible
                    key={cat.id}
                    open={expandedCategories.includes(cat.id)}
                    onOpenChange={() => toggleCategory(cat.id)}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-1 text-sm font-medium hover:bg-muted rounded transition-colors">
                      <span
                        className={typeFilter === cat.type && selectedSubcategory === "all" ? "text-primary font-semibold" : ""}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTypeFilter(cat.type);
                          setSelectedSubcategory("all");
                          setCurrentPage(1);
                        }}
                      >
                        {cat.name}
                      </span>
                      {expandedCategories.includes(cat.id) ? (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-0.5">
                      {cat.subcategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setTypeFilter(cat.type);
                            setSelectedSubcategory(sub.id);
                            setCurrentPage(1);
                          }}
                          className={`block w-full text-left px-2 py-1 text-xs rounded transition-colors hover:bg-muted ${
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
                <button
                  onClick={() => { setShowDiscountOnly(!showDiscountOnly); setCurrentPage(1); }}
                  className={`flex items-center w-full px-2 py-1 text-sm rounded transition-colors hover:bg-muted ${
                    showDiscountOnly ? "text-primary font-semibold bg-primary/5" : ""
                  }`}
                >
                  🏷️ Akciós termékek
                </button>
              </div>
            </div>

            {/* Gyártó */}
            <div className="min-w-[200px] flex-1">
              <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Gyártó</h3>
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
            <div className="min-w-[200px] flex-1">
              <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                Ár: {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
              </h3>
              <Slider
                value={priceRange}
                onValueChange={(v) => { setPriceRange(v as [number, number]); setCurrentPage(1); }}
                min={0}
                max={maxPrice}
                step={1000}
              />
            </div>
          </div>

          {/* Clear */}
          {activeFilterCount > 0 && (
            <div className="flex justify-end">
              <Button variant="ghost" size="sm" onClick={clearAllFilters} className="gap-1 text-muted-foreground">
                <X className="h-3.5 w-3.5" /> Szűrők törlése
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Products */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">{filtered.length} termék</p>
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 mt-8">
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-2 text-sm font-medium border rounded hover:bg-muted transition-colors"
                  >
                    ‹
                  </button>
                )}
                {getPageNumbers().map((page, i) =>
                  page === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-3 py-2 text-sm text-muted-foreground">...</span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`px-3 py-2 text-sm font-medium border rounded transition-colors ${
                        currentPage === page
                          ? "bg-foreground text-background"
                          : "hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                {currentPage < totalPages && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-2 text-sm font-medium border rounded hover:bg-muted transition-colors"
                  >
                    KÖVETKEZŐ
                  </button>
                )}
              </div>
            )}
          </>
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
  );
};

export default Shop;
