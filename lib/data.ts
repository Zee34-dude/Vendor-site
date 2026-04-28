import { Product } from "./types";

export const BUSINESS_NAME = "BUJEE TREATS";
export const BUSINESS_PHONE = "2347049421401"; // WhatsApp number (no + or spaces)
export const BUSINESS_TAGLINE = "Fresh treats, fast delivery";
export const ADMIN_PASSWORD = "admin123"; // simple MVP password

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Jollof Rice + Chicken",
    price: 2500,
    description: "Smoky party-style jollof rice served with grilled chicken and fried plantain.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600",
    emoji: "🍛",
    category: "Rice Dishes",
  },
  {
    id: "p2",
    name: "Fried Rice + Fish",
    price: 2800,
    description: "Colourful vegetable fried rice with crispy fried tilapia and coleslaw.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
    emoji: "🍚",
    category: "Rice Dishes",
  },
  {
    id: "p3",
    name: "Egusi Soup + Eba",
    price: 2000,
    description: "Rich melon seed soup cooked with assorted meat and stockfish, served with eba.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4d43b4853?auto=format&fit=crop&q=80&w=600",
    emoji: "🥘",
    category: "Soups",
  },
  {
    id: "p4",
    name: "Pepper Soup (Catfish)",
    price: 3500,
    description: "Hot and spicy point-and-kill catfish pepper soup — perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&q=80&w=600",
    emoji: "🐟",
    category: "Soups",
  },
  {
    id: "p5",
    name: "Puff Puff (20 pieces)",
    price: 800,
    description: "Light, fluffy and golden Nigerian puff puff — great as a snack or side.",
    image: "https://images.unsplash.com/photo-1599385618567-bc1ee9048a6f?auto=format&fit=crop&q=80&w=600",
    emoji: "🟡",
    category: "Snacks",
  },
  {
    id: "p6",
    name: "Shawarma (Chicken)",
    price: 2200,
    description: "Juicy chicken wrap with fresh vegetables, sauce and grilled flatbread.",
    image: "https://images.unsplash.com/photo-1626804475297-41609ea004eb?auto=format&fit=crop&q=80&w=600",
    emoji: "🌯",
    category: "Snacks",
  },
  {
    id: "p7",
    name: "Chapman Drink",
    price: 700,
    description: "Chilled Nigerian party drink — a fruity blend of grenadine, Fanta, and cucumber.",
    image: "https://images.unsplash.com/photo-1534057308991-9e735e5a7e6b?auto=format&fit=crop&q=80&w=600",
    emoji: "🍹",
    category: "Drinks",
  },
  {
    id: "p8",
    name: "Zobo (1 Litre)",
    price: 500,
    description: "Refreshing hibiscus drink infused with ginger, cloves and pineapple.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600",
    emoji: "🫐",
    category: "Drinks",
  },
];
