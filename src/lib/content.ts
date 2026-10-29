import type { StaticImageData } from "next/image";
import conjuntoEstampado from "@/assets/photos/conjunto-estampado.jpg";
import pantalonaLinho from "@/assets/photos/pantalona-linho.jpg";
import pantalonaAlfaiataria from "@/assets/photos/pantalona-alfaiataria.jpg";
import vestidoOmbro from "@/assets/photos/vestido-ombro.jpg";
import vestidoBrisa from "@/assets/photos/vestido-brisa.jpg";
import pantalonaNoite from "@/assets/photos/pantalona-noite.jpg";
import blusaLinho from "@/assets/photos/blusa-linho.jpg";
import tecidoMovimento from "@/assets/photos/tecido-movimento.jpg";
import vestidoFluido from "@/assets/photos/vestido-fluido.jpg";
import praiaVento from "@/assets/photos/praia-vento.jpg";
import lojaShopping from "@/assets/photos/loja-shopping.jpg";
import lojaVitrine from "@/assets/photos/loja-vitrine.jpg";
import lojaInterior from "@/assets/photos/loja-interior.jpg";
import lojaFachada from "@/assets/photos/loja-fachada.jpg";

export const photos = {
  conjuntoEstampado,
  pantalonaLinho,
  pantalonaAlfaiataria,
  vestidoOmbro,
  vestidoBrisa,
  pantalonaNoite,
  blusaLinho,
  tecidoMovimento,
  vestidoFluido,
  praiaVento,
  lojaShopping,
  lojaVitrine,
  lojaInterior,
  lojaFachada,
};

export type Product = {
  name: string;
  category: "Pantalonas" | "Vestidos" | "Conjuntos" | "Novidades";
  fabric: string;
  sizes: string;
  image: StaticImageData;
};

export const products: Product[] = [
  {
    name: "Conjunto Ipê",
    category: "Conjuntos",
    fabric: "Viscose estampada",
    sizes: "P ao GG",
    image: conjuntoEstampado,
  },
  {
    name: "Pantalona Areia",
    category: "Pantalonas",
    fabric: "Linho misto",
    sizes: "P ao GG",
    image: pantalonaLinho,
  },
  {
    name: "Vestido Varanda",
    category: "Vestidos",
    fabric: "Linho lavado",
    sizes: "P ao G",
    image: vestidoOmbro,
  },
  {
    name: "Pantalona Noturna",
    category: "Novidades",
    fabric: "Viscose fluida",
    sizes: "P ao GG",
    image: pantalonaNoite,
  },
  {
    name: "Vestido Aurora",
    category: "Vestidos",
    fabric: "Algodão leve",
    sizes: "P ao G",
    image: vestidoBrisa,
  },
  {
    name: "Conjunto Manhã",
    category: "Conjuntos",
    fabric: "Linho",
    sizes: "P ao GG",
    image: blusaLinho,
  },
];

export type Location = {
  name: string;
  badge: "Ateliê aberto" | "Feira" | "Pop-up" | "Em breve";
  description: string;
  image: StaticImageData;
};

export const locations: Location[] = [
  {
    name: "Ateliê",
    badge: "Ateliê aberto",
    description: "Onde tudo é costurado. Venha provar e ver as peças sendo feitas.",
    image: lojaInterior,
  },
  {
    name: "Feiras autorais",
    badge: "Feira",
    description: "Encontros de moda independente, com a coleção completa na arara.",
    image: lojaVitrine,
  },
  {
    name: "Casa de praia",
    badge: "Pop-up",
    description: "Uma arara VESSA perto do mar, por temporada.",
    image: lojaFachada,
  },
  {
    name: "Próxima parada",
    badge: "Em breve",
    description: "Em breve. Fale com a gente para saber a data.",
    image: lojaShopping,
  },
];

export const menuLinks = [
  { href: "#colecao", label: "Coleção", image: conjuntoEstampado },
  { href: "#manifesto", label: "Manifesto", image: tecidoMovimento },
  { href: "#destaque", label: "Pantalona Avesso", image: pantalonaAlfaiataria },
  { href: "#onde", label: "Onde encontrar", image: lojaInterior },
  { href: "#atacado", label: "Revenda", image: lojaVitrine },
  { href: "#comunidade", label: "#vessadoavesso", image: vestidoBrisa },
];

export const categories = ["Pantalonas", "Vestidos", "Conjuntos", "Novidades"] as const;

export const instagramShots = [
  vestidoBrisa,
  conjuntoEstampado,
  praiaVento,
  pantalonaLinho,
  vestidoOmbro,
  pantalonaNoite,
  blusaLinho,
  vestidoFluido,
  pantalonaAlfaiataria,
  tecidoMovimento,
];
