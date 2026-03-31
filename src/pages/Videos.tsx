import { Card, CardContent } from "@/components/ui/card";

interface Video {
  title: string;
  embedId: string;
}

const videos: Video[] = [
  { title: "Medi-Cont Kft.", embedId: "m9dYCSgCZwQ" },
  { title: "Mectron new MT-Bone", embedId: "ST8BoQRUvwQ" },
  { title: "Mectron Combi touch", embedId: "f3fO7foGoxE" },
  { title: "Mocom Thetys H10 Plus", embedId: "QGLjzKKCGVQ" },
  { title: "Mocom Tethys H10 + HMD", embedId: "bRFRQelYnZo" },
  { title: "Medency PRIMO", embedId: "6VKeRKD25r4" },
  { title: "Medency TRIPOLO", embedId: "q9D4KMFFvIg" },
  { title: "NewTom VG-ONE", embedId: "XByR_CuUggI" },
  { title: "NewTom GO 2D/3D CEPH", embedId: "oCpn6bhOryQ" },
  { title: "NewTom GianoHR", embedId: "dNOxLbtylcE" },
  { title: "NewTom 7G", embedId: "BzY7k1SxBx8" },
  { title: "NewTom VGi evo", embedId: "B8qqi6BncDA" },
];

const Videos = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Videók</h1>
        <p className="text-muted-foreground">Medi-Cont Kft. - Termékvideók és bemutatók</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground text-sm">{video.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Videos;
