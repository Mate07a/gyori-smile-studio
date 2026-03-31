import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Share2, ZoomIn, ZoomOut } from "lucide-react";

interface Catalog {
  id: string;
  title: string;
  pdfUrl: string;
}

const catalogs: Catalog[] = [
  {
    id: "1",
    title: "Medi-Cont katalógus 2024 – Gépek",
    pdfUrl: "/catalogs/Medicont-katalogus-2024-GEPEK.pdf",
  },
  {
    id: "2",
    title: "Medi-Cont katalógus 2024 – Gyártók",
    pdfUrl: "/catalogs/Medicont-katalogus-2024-GYARTOK.pdf",
  },
];

const CatalogViewer = ({ catalog }: { catalog: Catalog }) => {
  const [zoom, setZoom] = useState(100);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: catalog.title,
        text: `Nézze meg a ${catalog.title} katalógust!`,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link másolva a vágólapra!");
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h2 className="text-lg font-semibold text-foreground">{catalog.title}</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setZoom((z) => Math.max(50, z - 25))} title="Kicsinyítés">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[3rem] text-center">{zoom}%</span>
            <Button variant="outline" size="icon" onClick={() => setZoom((z) => Math.min(200, z + 25))} title="Nagyítás">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleShare} title="Megosztás">
              <Share2 className="h-4 w-4" />
            </Button>
            <a href={catalog.pdfUrl} download>
              <Button variant="outline" size="icon" title="Letöltés">
                <Download className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {/* PDF viewer */}
        <div
          className="relative bg-muted rounded-lg overflow-auto flex items-start justify-center"
          style={{ minHeight: "700px" }}
        >
          <iframe
            src={`${catalog.pdfUrl}#toolbar=0`}
            className="border-0"
            style={{
              width: `${700 * (zoom / 100)}px`,
              height: `${900 * (zoom / 100)}px`,
              maxWidth: "100%",
            }}
            title={catalog.title}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const Catalogs = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Katalógusok</h1>
        <p className="text-muted-foreground">Böngéssze termékkatalógusainkat online</p>
      </div>

      <div className="space-y-8">
        {catalogs.map((catalog) => (
          <CatalogViewer key={catalog.id} catalog={catalog} />
        ))}
      </div>
    </div>
  );
};

export default Catalogs;
