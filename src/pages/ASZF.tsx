const ASZF = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">ÁSZF</h1>
        <p className="text-muted-foreground">Általános szállítási és fizetési feltételek</p>
      </div>

      <div className="prose prose-sm max-w-none text-foreground space-y-6">
        <h2 className="text-xl font-bold text-foreground mt-8">1. Megrendelés</h2>
        <p>A megrendelés személyesen, telefonon, faxon, e-mailben és a Medi-Cont Kft. orvos látogatóin keresztül történhet. A megrendelt áru ellenértékének kiszámlázása a rendelés időpontjában érvényes árak alapján történik. A web shopban szereplő árak az ÁFA-t tartalmazzák. Árfolyamváltozás esetén a Medi-Cont Kft. az árváltozás jogát fenntartja!</p>
        <p>Nagy értékű termékek esetében (nettó 150 000 Ft/db) a megrendelés elfogadása előleg-, illetve foglaló fizetéshez is köthető, mely esetben a felek között a jogviszony az előleg bekérő kiállításával, illetve az előleg megfizetésével jön létre. Az előlegbekérőre történő átutalás, 72 órán belül bármely fél részéről lemondható, ezt követően a Ptk-ban megfogalmazott foglalóként kezelendő. Az áru a számla teljes értékének kiegyenlítésig az Eladó tulajdonát képezi, annak akár részleges felhasználása esetén is a Megrendelő a teljes tétel kiegyenlítésére köteles.</p>

        <h3 className="text-lg font-semibold text-foreground mt-6">Megrendelés módosítása vagy lemondása:</h3>
        <p>Megrendelő a megrendelését 2 munkanapon belül, illetve mindaddig módosíthatja, amíg a megrendelt termék(ek) számlázása, indítása vagy leszállítása nem történt meg. Medi-Cont Kft. egyoldalúan jogosult a módosítási igény elutasítására, ha az áru beszerzése iránt már a Megrendelő igénye alapján intézkedett, s annak stornírozása számára üzleti, vagy más veszteséget okoz.</p>
        <p>Megrendelő jogosult a megrendelt árut - annak leszállítása előtt - részben, vagy teljes egészében lemondani. Tudomásul veszi azonban, hogy Medi-Cont Kft. a lemondott árumennyiség bruttó árának 30%-át a megrendelő elállása alapján ki fogja számlázni - kártérítés - jogcímén. Az utánvéttel megküldött áruk esetében - ha az a megrendelő részéről nem kerül átvételre - az utánvét költsége külön érvényesíthető.</p>
        <p>A számla késedelmes kiegyenlítése esetén - minden külön megállapodás nélkül - a Ptk.-ban körülírt kamat mértékét érvényesítjük.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">2. Szállítás</h2>
        <p>A szállítási határidő általánosságban termékenként, gyártónként, raktári készlettől és időszakoktól függően eltérő lehet, a megrendelés visszaigazolás az adott megrendelés szállítására vonatkozóan a határidőt azonban konkrétan tartalmazza. Amennyiben a Medi-Cont Kft. a megrendelt termékeket részben vagy egészében raktárról azonnal nem tudja szállítani, úgy a tényleges teljesítés időpontját a későbbiekben további 15 napos határidőn belül is jogosult megjelölni.</p>
        <p>A szállítás a Medi-Cont Kft. 9024 Győr, Hold u. 12. sz. alatti raktárából történik. Részkiszállítás lehetséges, ebben az esetben a kiszállított árura vetített ellenérték kerül leszámlázásra (részszámla). A szállítási költség számításánál a kiszállított áru összértéke, súlya és a szállítás távolsága irányadó. A 40 kg-ot meg nem haladó csomagok esetében a Győr területén belüli kiszállítás ingyenes.</p>
        <p className="font-semibold">40.000 Ft értéket meghaladó vásárlás esetén a szállítási költséget magyarországi címre történő szállítás esetén, nem számolunk fel.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">3. Fizetés</h2>
        <p>A fizetés történhet készpénzzel, valamint utánvéttel az áru átvételekor, vagy banki átutalással. Amint a megrendelt áru összeállításra került, megrendelő értesítést kap, illetve a megrendelt áruról szóló számlát. Fizetési határidő banki átutalás esetén a számlán megadott határidő, de legkésőbb az átadást megelőző nap.</p>
        <p>A szállítás feltétele a gépek berendezések ellenértékének a Medi-Cont Kft. számlájára történő beérkezése, vagy pénztárába történő befizetése, illetve hitel, vagy lízing finanszírozás esetén a hitelintézet, vagy lízingcég által elfogadott érvényes szerződés, önrész esetén annak befizetése.</p>
        <p>Késedelmes fizetés esetén az érvényben lévő Ptk. szerinti késedelmi kamat kerül felszámításra, napi kamatozással. Amennyiben a fizetés késedelmesen történik vagy az esedékes számla nem kerül kiegyenlítésre, úgy a Medi-Cont Kft. a kiszállítást a kiegyenlítésig felfüggesztheti.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">4. Telepítés, üzembe helyezés</h2>
        <p>A telepítés feltételeinek előzetes egyeztetését követően a megfelelően előkészített helyszínen a kezelőegységek, röntgenkészülékek, telepítést igénylő berendezések telepítését, üzemképes állapotba helyezését a vételár tartalmazza. A telepítéssel kapcsolatos esetlegesen szükséges engedélyek beszerzése, a közműcsatlakozások (víz, levegő, áram és szennyvízvezeték) kialakítása és azoknak költségvonzata, illetve a nem megfelelően kialakított csatlakozások miatt szükségessé váló kötőelemek, pótalkatrészek stb. költségei a megrendelőt terhelik.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">5. Garancia és jótállás</h2>
        <p>A garancia alapját a gyártó cég garanciális kötelezettségvállalása képezi. Termékeinkre a jogszabályban meghatározott mértékű jótállást vállalunk, az erre vonatkozó rendeletben meghatározott feltételek mellett. A kötelező jótálláson felüli - esetleges - kötelezettség vállalásunkat külön jelezzük. Hibás, vagy hibásnak vélt termék esetén a hiba tényének és jellegének azonnali közlését kérjük az esetleges későbbi viták elkerülhetősége érdekében.</p>

        <h3 className="text-lg font-semibold text-foreground mt-6">5.1. Garancián túli javítások</h3>
        <p>Garancián túli javítás esetén számlázásra kerül a Kiszállási díj + Alkatrész értéke + Munkadíj, azaz:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kiszállási díj: Km díj (Nettó 150 Ft/Km) + Rendelkezésre (út-idő) állási díj (Nettó 10 000 Ft/óra)</li>
          <li>Alkatrész értéke</li>
          <li>Munkadíj (Nettó 20 000 Ft/óra)</li>
        </ul>
        <p>Garancia időn belül számlázásra kerül a Kiszállási díj = Km díj (Nettó 50 Ft/Km) + Rendelkezésre (út-idő) állási díj (Nettó 10 000 Ft/óra)</p>
        <p>Egyéb javítás (áttelepítés) amihez nagyobb autó szükséges, ott a kiszállási díjnál Nettó 300 Ft/Km-el számolunk.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">6. Kockázat és kárveszély</h2>
        <p>Azonnali kiszolgálás esetén a kárveszély viselése a kiszolgálás és átadás pillanatától kezdődően a Megrendelőt terheli. Más módon történő teljesítés esetében a kockázat és kárveszély az átadás-átvétel tényével száll át a Megrendelőre.</p>
        <p>Amennyiben a kiszállított áru sérült állapotban kerül átvételre, a sérülés tényét és mértékét a csomagküldő szolgálattal (Posta, GLS stb.) tételesen, jegyzőkönyvben igazoltatni kell. A kártérítés alapját ezen jegyzőkönyv képezi, ennek hiányában a Medi-Cont Kft. nem tudja elismerni a sérülés tényét.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">7. Hibás teljesítés</h2>
        <p>A kiszállított áruval kapcsolatos reklamációk a csomaghoz mellékelt számla alapján kezdeményezhetők. A reklamációt legkésőbb az áru átvétele utáni 3. munkanapon jelezni kell a Medi-Cont Kft. felé. A téves kiszállítást a Medi-Cont Kft. hibás mennyiség esetén - ha az nem előre jelzett részszállítás - 3 munkanapon belül pótszállítással kiegészíti, téves vagy hibás áru kiszállítását az áru visszaküldését követő 3 munkanapon belül korrigálja.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">8. Csere / Áru visszaadása</h2>
        <p>A csere céljából visszaküldött áruhoz mellékelni kell a számlát és meg kell jelölni a csere okát. A Medi-Cont Kft. az esetleges jóváírásokat csak a visszaérkezés után tudja érvényesíteni. Amennyiben jogos cseréről van szó, a sértetlen, eredeti csomagolásban lévő áru cseréjéről a Medi-Cont Kft. a visszaérkezés után haladéktalanul intézkedik.</p>
        <p>Anyagok, készülékek, berendezések visszaadására csak előzetes írásbeli megállapodás szerint van lehetőség. Azon termékek esetében, amelyeknél nincs ilyen megállapodás, a visszaadás díja a vételár 15%-a. (A Medi-Cont Kft. méltányosságból eltekinthet ennek felszámításától.) Amennyiben a terméket használatba vették vagy annak csomagolása megsérült, a zárjegy felbontásra került, úgy cserére nincs lehetőség. A visszaküldés költsége minden esetben az ügyfelet terheli.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">9. Ügyfélszolgálat</h2>
        <p>A Medi-Cont Kft. minden általa forgalmazott és értékesített készüléket javít, illetve javíttat. A javítás költsége az ügyfélszolgálattal történő egyeztetés után kerül meghatározásra.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">10. Teljesítés helye, időpontja</h2>
        <p>A teljesítési hely minden esetben a Medi-Cont Kft. székhelye, időpontja a számla kiállításának időpontja.</p>

        <h2 className="text-xl font-bold text-foreground mt-8">11. Jogorvoslat</h2>
        <p>Jogvita esetén a Medi-Cont Kft. székhelye szerint illetékes bíróság a Győr Városi Bíróság bír kizárólagos hatáskörrel és illetékességgel. A nem szabályozott kérdésekben a Polgári Törvénykönyv és a kapcsolódó jogi előírások az irányadóak.</p>
      </div>
    </div>
  );
};

export default ASZF;
