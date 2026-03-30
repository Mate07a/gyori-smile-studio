import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Manufacturer {
  name: string;
  logo: string;
  products: { name: string; url?: string }[];
}

const manufacturers: Manufacturer[] = [
  {
    name: "Schülke",
    logo: "https://logo.clearbit.com/schuelke.com",
    products: [
      { name: "Aspirmatic" }, { name: "Aspirmatic cleaner" }, { name: "Dentavon Liquid" },
      { name: "Desderman Pure" }, { name: "Desderman Pure Gél" }, { name: "Desderman N" },
      { name: "Desmanol pure" }, { name: "Esemtan" }, { name: "Esemtan waschlotion" },
      { name: "Gigasept Instru AF" }, { name: "Gigazyme" }, { name: "Kodan TF" },
      { name: "Kodan TF 250ml" }, { name: "Kodan fertőtlenítő kendő" },
      { name: "Mikrozid fertőtlenítő kendő" }, { name: "Mikrozid fertőtlenítő JUMBO kendő" },
      { name: "Mikrozid Sensitive fertőtlenítő kendő" }, { name: "Mikrozid Sensitive liquid" },
      { name: "Mikrozid liquid" }, { name: "Octenidol" }, { name: "Octenisept" },
      { name: "Octenisept gél" }, { name: "Perform" }, { name: "Primasept med" },
      { name: "Rotasept" }, { name: "Sensiva" }, { name: "Terralin Protect" }, { name: "Waschlotion" },
    ],
  },
  {
    name: "Ecolab",
    logo: "https://logo.clearbit.com/ecolab.com",
    products: [
      { name: "Incidin" }, { name: "Activator, Secusept Easy-hez" }, { name: "Deskaseptol Gel" },
      { name: "Incides N" }, { name: "Incidin Extra" }, { name: "Incidin Extra N" },
      { name: "Incidin Foam" }, { name: "Incidin Liquid Spray" }, { name: "Incidur Spray" },
      { name: "Into Fresh" }, { name: "Manisoft" }, { name: "Minudes" },
      { name: "Seku Zyme" }, { name: "Sekudrill" }, { name: "Sekusept Aktiv" },
      { name: "Sekusept Easy" }, { name: "Sekusept Extra N" }, { name: "Sekusept Forte" },
      { name: "Sekusept Plus" }, { name: "Sekusept Pulver Classic" },
      { name: "Sekusept Pulver Classic Activator" }, { name: "Seraman sensitive" },
      { name: "Silonda" }, { name: "Silonda Lipid" }, { name: "Skinman Asept" },
      { name: "Skinman Scrub" }, { name: "Skinman Soft N" }, { name: "Skinsept Color" },
      { name: "Skinsept Mucosa" }, { name: "Skinsept Pur" }, { name: "Spitaderm" },
    ],
  },
  {
    name: "Dr. Schumacher",
    logo: "https://logo.clearbit.com/schumacher-online.com",
    products: [
      { name: "Perfektan endo" }, { name: "Descobohrerbad" }, { name: "Descoprent" },
      { name: "Descosept AF Kendő" }, { name: "Descosept AF Folyadék" }, { name: "Descosuc" },
    ],
  },
  {
    name: "3M",
    logo: "https://logo.clearbit.com/3m.com",
    products: [
      { name: "Single bond" }, { name: "Relyx ceramic primer" }, { name: "Vitremer" },
      { name: "Relyx luting" }, { name: "VPS kanálragasztó folyadék" }, { name: "Scotchbond" },
      { name: "Vitrebond liquid" }, { name: "Vitrebond powder" }, { name: "Scotchbond primer" },
      { name: "Scotchbond multi" }, { name: "Polyether" }, { name: "Foszforsav gel" },
      { name: "Ketac Cem liquid" }, { name: "Ketac Cem powder" }, { name: "Ketac Cem Mú powder" },
      { name: "Relyx Unicem aplicap/maxicap liquid" }, { name: "Relyx Unicem aplicap/maxicap powder" },
    ],
  },
];

const SafetyDataSheets = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Biztonsági adatlapok</h1>
        <p className="text-muted-foreground">Termékeink biztonsági adatlapjai gyártónként</p>
      </div>

      <div className="space-y-10">
        {manufacturers.map((mfr) => (
          <Card key={mfr.name}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-lg bg-white border flex items-center justify-center p-2 shrink-0">
                  <img
                    src={mfr.logo}
                    alt={mfr.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <h2 className="text-xl font-bold text-foreground">{mfr.name}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {mfr.products.map((product) => (
                  <div
                    key={product.name}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer py-1.5 px-3 rounded-md hover:bg-primary/5"
                  >
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    <span>{product.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SafetyDataSheets;
