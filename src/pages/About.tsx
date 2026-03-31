import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Heart } from "lucide-react";
import szechenyi2020 from "@/assets/szechenyi-2020.png";
import energetikaiFejlesztes from "@/assets/energetikai-fejlesztes.png";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rólunk</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Társaságunk, 1992-ben Medi-Cont Bt néven alakult Győrben, a Nyugat-Magyarországon intenzív fejlődésnek induló fogorvosi rendelők és fogtechnikai laboratóriumok, anyagellátásának biztosítása érdekében. A teljes egészében családi tulajdonban működő vállalkozásunk, jelenleg 2 telephelyen, Győrben és Sopronban üzemeltet fogászati és szájápolási üzleteket.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {[
          { icon: Calendar, value: "30+", label: "Év tapasztalat" },
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Tevékenységünk</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Célunk a fogorvosi rendelők és a fogtechnikai laboratóriumok, anyagokkal, eszközökkel, gépekkel és szolgáltatásokkal történő, professzionális kiszolgálása. Saját szakszervizzel biztosítjuk az értékesített termékek garancia időn belüli és azon túli karbantartását és javítását.
            </p>
            <p>
              Belső építészünk vezetésével, vállaljuk rendelők és fogtechnikai laboratóriumok belsőépítészeti tervezését, és kivitelezését a szakipari munkáktól a társaságunk által megtervezett és legyártott bútorok beépítéséig.
            </p>
            <p>
              Tevékenységünk 2001-től az ISO 9001 szabvány szerint tanúsított minőségirányítási rendszerben működik.
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

      {/* Additional info */}
      <div className="mb-16 space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          Rendszeresen szervezünk kreditpontos és egyéb orvos továbbképzéseket, belföldi és külföldi egyetemi oktatók segítségével.
        </p>
        <p>
          2008-ban, majd 2010-ben ismét, megnyertük a Semmelweis Egyetem által fogászati anyagellátásra kiírt közbeszerzési pályázatot. A Medi-Cont Kft a Semmelweis Egyetem kizárólagos fogászati anyag beszállítója. 2008-2010, 2010-2013
        </p>
        <p>
          Köszönjük, hogy meglátogatta web lapunkat, örömmel várjuk észrevételeit és javaslatait az{" "}
          <a href="mailto:info@medi-cont.hu" className="text-primary hover:underline">info@medi-cont.hu</a> email címen.
        </p>
      </div>

      {/* Values */}
      <div className="mb-16">
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

      {/* Fejlesztések */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Fejlesztések</h2>
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Energetikai fejlesztés a Medi-Cont Kft.-nél</h3>
                <p className="text-sm text-muted-foreground mb-1">GINOP-4.1.3-19-2019-00485</p>
                <div className="space-y-3 text-muted-foreground leading-relaxed mt-4">
                  <p>
                    A projekt keretében napelemes rendszer kiépítése valósult meg a Medi-Cont Kft.-nél a villanyszámla csökkentése érdekében. A napelemes rendszer mérete 11,4 kWp amely 40 db 285 W-os polikristályos napelem panel felszerelése valósult meg. A rendszer működéséhez szükségessé és a beépített inverter típusa Fronius 12,5.-3M.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li><strong className="text-foreground">Projekt összköltsége:</strong> 2 280 000 Ft</li>
                    <li><strong className="text-foreground">Vissza nem térítendő támogatás:</strong> 2 280 000 Ft</li>
                    <li><strong className="text-foreground">Támogatási intenzitás:</strong> 100%</li>
                    <li><strong className="text-foreground">A Projekt megvalósításának kezdete:</strong> 2019.08.01.</li>
                    <li><strong className="text-foreground">A Projekt fizikai befejezésének tervezett napja:</strong> 2020.03.30</li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={energetikaiFejlesztes}
                  alt="Energetikai fejlesztés a Medi-Cont Kft.-nél"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Széchenyi 2020 */}
      <div className="mb-16 flex justify-center">
        <img
          src={szechenyi2020}
          alt="Széchenyi 2020 - Befektetés a jövőbe"
          className="max-w-md w-full"
          loading="lazy"
        />
      </div>

      {/* Map */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Megközelítés</h2>
        <Card className="overflow-hidden">
          <div className="aspect-video bg-muted">
            <iframe
              title="Medi-Cont Győr - Hold u. 12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.5!2d17.6285!3d47.6835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf39a21c1e63%3A0x5b0c4c0e1a2b3c4d!2sHold+u.+12%2C+Gy%C5%91r%2C+9024!5e0!3m2!1shu!2shu!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
