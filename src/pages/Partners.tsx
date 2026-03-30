import { useState } from "react";
import { Link } from "react-router-dom";
import { partners } from "@/data/partners";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Partners = () => {
  const [search, setSearch] = useState("");

  const filtered = partners
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Partnereink</h1>
        <p className="text-muted-foreground">Megbízható gyártópartnereinket az alábbi listában tekintheti meg</p>
      </div>

      <div className="relative max-w-md mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Partner keresése..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="space-y-2">
        {filtered.map((partner) => {
          const shopLink = partner.manufacturerFilter
            ? `/shop?manufacturer=${encodeURIComponent(partner.manufacturerFilter)}`
            : partner.url || "#";
          const isExternal = !partner.manufacturerFilter;

          const content = (
            <Card className="hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="h-12 w-12 rounded-lg bg-white border flex items-center justify-center p-1.5 shrink-0">
                  {partner.logo && (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                </div>
                <span className="font-medium text-foreground text-sm">{partner.name}</span>
              </CardContent>
            </Card>
          );

          return partner.manufacturerFilter ? (
            <Link key={partner.name} to={shopLink}>
              {content}
            </Link>
          ) : (
            <a key={partner.name} href={shopLink} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-10">Nincs találat.</p>
      )}
    </div>
  );
};

export default Partners;
