import { Card, CardContent } from "@/components/ui/card";

interface Video {
  title: string;
  embedId: string;
}

const videos: Video[] = [
  { title: "25 éves a győri Medi-Cont Kft.", embedId: "dQw4w9WgXcQ" },
  { title: "Mectron MT-Bone - Technical Presentation", embedId: "dQw4w9WgXcQ" },
  { title: "Mectron COMBI Touch - Assembly and Maintenance", embedId: "dQw4w9WgXcQ" },
  { title: "Piezosurgery Touch bemutató", embedId: "dQw4w9WgXcQ" },
  { title: "Euronda E9 Autoklláv kezelési útmutató", embedId: "dQw4w9WgXcQ" },
  { title: "Woodpecker LED lámpa teszt", embedId: "dQw4w9WgXcQ" },
  { title: "3M Scotchbond alkalmazási technika", embedId: "dQw4w9WgXcQ" },
  { title: "Fogászati sterilizálás alapjai", embedId: "dQw4w9WgXcQ" },
  { title: "NewTom CBCT röntgen bemutató", embedId: "dQw4w9WgXcQ" },
  { title: "Ultrahangos fogkő-eltávolítás", embedId: "dQw4w9WgXcQ" },
  { title: "Digitális lenyomatvétel", embedId: "dQw4w9WgXcQ" },
  { title: "Fogászati higiéniai protokoll", embedId: "dQw4w9WgXcQ" },
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
