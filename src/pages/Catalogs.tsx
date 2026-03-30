import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Share2, ZoomIn, ZoomOut, FileText } from "lucide-react";

interface Catalog {
  id: string;
  title: string;
  pdfUrl: string;
  pages: number;
}

const catalogs: Catalog[] = [
  {
    id: "1",
    title: "Medi-Cont Általános katalógus 2024",
    pdfUrl: "",
    pages: 1,
  },
  {
    id: "2",
    title: "Medi-Cont Gépek és berendezések katalógus",
    pdfUrl: "",
    pages: 1,
  },
];

const CatalogViewer = ({ catalog }: { catalog: Catalog }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right");

  const nextPage = () => {
    if (currentPage < catalog.pages) {
      setFlipDirection("left");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => p + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setFlipDirection("right");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((p) => p - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

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
        <div className="flex items-center justify-between mb-4">
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
            {catalog.pdfUrl && (
              <a href={catalog.pdfUrl} download>
                <Button variant="outline" size="icon" title="Letöltés">
                  <Download className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* PDF viewer area */}
        <div
          className="relative bg-muted rounded-lg overflow-hidden flex items-center justify-center"
          style={{ minHeight: "500px", perspective: "1500px" }}
        >
          <div
            className={`transition-transform duration-400 ${
              isFlipping
                ? flipDirection === "left"
                  ? "animate-[flipLeft_0.4s_ease-in-out]"
                  : "animate-[flipRight_0.4s_ease-in-out]"
                : ""
            }`}
            style={{ transform: `scale(${zoom / 100})` }}
          >
            {catalog.pdfUrl ? (
              <iframe
                src={`${catalog.pdfUrl}#page=${currentPage}`}
                className="w-[700px] h-[900px] border-0"
                title={catalog.title}
              />
            ) : (
              <div className="w-[500px] h-[650px] bg-card border-2 border-dashed border-muted-foreground/20 rounded-lg flex flex-col items-center justify-center gap-4 shadow-lg">
                <FileText className="h-16 w-16 text-muted-foreground/30" />
                <p className="text-muted-foreground text-center px-8">
                  Töltse fel a PDF katalógust a <code className="text-xs bg-muted px-1 py-0.5 rounded">public/catalogs/</code> mappába
                </p>
                <p className="text-xs text-muted-foreground/60">Oldal: {currentPage} / {catalog.pages}</p>
              </div>
            )}
          </div>
        </div>

        {/* Page navigation */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button variant="outline" size="sm" onClick={prevPage} disabled={currentPage <= 1}>
            <ChevronLeft className="h-4 w-4 mr-1" /> Előző
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentPage} / {catalog.pages} oldal
          </span>
          <Button variant="outline" size="sm" onClick={nextPage} disabled={currentPage >= catalog.pages}>
            Következő <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
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
