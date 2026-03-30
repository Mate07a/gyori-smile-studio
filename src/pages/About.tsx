import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rólunk</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A Győri Medi-Cont Kft. 2005 óta áll a fogorvosok szolgálatában. Családi vállalkozásként indultunk, és mára Győr és környéke meghatározó fogászati szaküzletévé váltunk.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {[
          { icon: Calendar, value: "18+", label: "Év tapasztalat" },
          { icon: Users, value: "500+", label: "Elégedett ügyfél" },
          { icon: Award, value: "2000+", label: "Termék" },
          { icon: Heart, value: "100%", label: "Elköteleződés" },
        ].map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="p-6">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Történetünk</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Cégünk alapítói maguk is a fogászati szakmából érkeztek, így pontosan ismerik a mindennapi gyakorlat igényeit. Ez az ismeret határozza meg kínálatunkat és szolgáltatásainkat.
            </p>
            <p>
              Folyamatosan bővülő raktárkészletünk biztosítja, hogy ügyfeleink mindig hozzájussanak a szükséges anyagokhoz és eszközökhöz. Európai és világ vezető gyártóinak termékeit kínáljuk.
            </p>
            <p>
              Filozófiánk egyszerű: a legjobb termékek, a legjobb áron, a legjobb kiszolgálással.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop"
            alt="Fogászati rendelő"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Értékeink</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Minőség", desc: "Csak ellenőrzött, tanúsított termékeket forgalmazunk a világ vezető gyártóitól." },
            { title: "Megbízhatóság", desc: "Gyors szállítás, pontos rendelésteljesítés és következetes ügyfélszolgálat." },
            { title: "Szakértelem", desc: "Munkatársaink folyamatos képzésen vesznek részt, hogy naprakész tanácsot adhassanak." },
          ].map((val) => (
            <Card key={val.title}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2 text-lg">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
