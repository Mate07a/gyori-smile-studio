export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
}

export const categories = [
  { id: "instruments", name: "Műszerek", icon: "🔧" },
  { id: "materials", name: "Anyagok", icon: "🧪" },
  { id: "hygiene", name: "Higiénia", icon: "🧴" },
  { id: "equipment", name: "Gépek & Berendezések", icon: "⚙️" },
  { id: "disposables", name: "Egyszer használatos", icon: "🧤" },
  { id: "orthodontics", name: "Fogszabályozás", icon: "😁" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Fogászati tükör szett (5 db)",
    category: "instruments",
    price: 12500,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop",
    description: "Prémium minőségű fogászati tükör szett, rozsdamentes acélból. Különböző méretekben.",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Kompozit tömőanyag készlet",
    category: "materials",
    price: 34900,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop",
    description: "Univerzális nano-hibrid kompozit tömőanyag, 8 színárnyalattal. Kiváló polírozhatóság.",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Sterilizáló oldat 5L",
    category: "hygiene",
    price: 8900,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    description: "Koncentrált műszer-fertőtlenítő oldat, széles spektrumú hatóanyaggal.",
    inStock: true,
  },
  {
    id: "4",
    name: "LED polimerizációs lámpa",
    category: "equipment",
    price: 89000,
    originalPrice: 110000,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop",
    description: "Vezeték nélküli LED fotopolimerizációs lámpa, 1200 mW/cm² intenzitással.",
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Latex kesztyű (100 db)",
    category: "disposables",
    price: 4500,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=400&fit=crop",
    description: "Púdermentes latex vizsgálókesztyű, M méret. Kiváló tapintás és védelem.",
    inStock: true,
  },
  {
    id: "6",
    name: "Ortodonciai bracket szett",
    category: "orthodontics",
    price: 28000,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop",
    description: "Fém self-ligating bracket rendszer, 20 db-os készlet felső és alsó fogívhez.",
    inStock: false,
  },
  {
    id: "7",
    name: "Fogászati szonda készlet",
    category: "instruments",
    price: 15800,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop",
    description: "6 darabos diagnosztikai szonda készlet, ergonomikus nyéllel.",
    inStock: true,
  },
  {
    id: "8",
    name: "Lenyomatanyag alginát 1kg",
    category: "materials",
    price: 6200,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
    description: "Gyors kötésű kromatikus alginát lenyomatanyag, kiváló részletvisszaadás.",
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    name: "Felületi fertőtlenítő spray",
    category: "hygiene",
    price: 3200,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=400&fit=crop",
    description: "Alkoholbázisú gyors felületfertőtlenítő, kellemes illattal. 750ml.",
    inStock: true,
  },
  {
    id: "10",
    name: "Ultrahangos depurátor",
    category: "equipment",
    price: 145000,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=400&fit=crop",
    description: "Piezoelektromos ultrahangos fogkő-eltávolító, LED világítással és 6 fejjel.",
    inStock: true,
  },
  {
    id: "11",
    name: "Szájmaszk (50 db)",
    category: "disposables",
    price: 2800,
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=400&fit=crop",
    description: "3 rétegű orvosi szájmaszk, gumis rögzítéssel. Kék színben.",
    inStock: true,
  },
  {
    id: "12",
    name: "Retainer drót tekercs",
    category: "orthodontics",
    price: 9500,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop",
    description: "Többszálú retainer drót, 0.0175\" átmérő, 10m tekercs.",
    inStock: true,
  },
];
