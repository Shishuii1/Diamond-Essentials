export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Louisville Slugger Prime 918 Maple Bat",
    price: 299.99,
    category: "Bats",
    image: "/Louisville Slugger Prime 918 Maple Bat.webp",
    description: "Professional-grade maple bat with premium finish and balanced swing weight.",
    rating: 4.8,
    reviews: 127,
    inStock: true,
    features: ["Maple wood", "34\" length", "31 oz weight", "Professional grade"]
  },
  {
    id: 2,
    name: "Rawlings Heart of the Hide Glove",
    price: 189.99,
    category: "Gloves",
    image: "/Rawlings Heart of the Hide Glove.jpg",
    description: "Premium leather glove with superior feel and durability for serious players.",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: ["Premium leather", "12.75\" size", "I-web design", "Game ready"]
  },
  {
    id: 3,
    name: "Easton Mako Helmet",
    price: 149.99,
    category: "Helmets",
    image: "/Easton Mako Helmet.webp",
    description: "Advanced protection helmet with comfortable fit and excellent ventilation.",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["Dual-density foam", "Adjustable fit", "Ventilated design", "NOCSAE certified"]
  },
  {
    id: 4,
    name: "Nike Vapor Elite Cleats",
    price: 129.99,
    category: "Cleats",
    image: "/Nike Vapor Elite Cleats.webp",
    description: "Lightweight cleats with superior traction and comfort for optimal performance.",
    rating: 4.6,
    reviews: 203,
    inStock: true,
    features: ["Lightweight design", "Metal spikes", "Breathable mesh", "Cushioned sole"]
  },
  {
    id: 5,
    name: "Under Armour Yard Training Pants",
    price: 79.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Comfortable training pants with stretch fabric and moisture-wicking technology.",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    features: ["Moisture-wicking", "Stretch fabric", "Elastic waist", "Side pockets"]
  },
  {
    id: 6,
    name: "Wilson A2000 Baseball",
    price: 24.99,
    category: "Balls",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Official game ball with premium leather cover and consistent performance.",
    rating: 4.8,
    reviews: 342,
    inStock: true,
    features: ["Premium leather", "Official size", "Consistent weight", "Game ready"]
  },
  {
    id: 7,
    name: "Marucci Cat 8 Maple Bat",
    price: 349.99,
    category: "Bats",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
    description: "High-performance maple bat with innovative design and superior balance.",
    rating: 4.9,
    reviews: 95,
    inStock: false,
    features: ["Maple wood", "33\" length", "30 oz weight", "Innovative design"]
  },
  {
    id: 8,
    name: "Mizuno Pro Glove",
    price: 219.99,
    category: "Gloves",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Professional-grade glove with premium leather and perfect fit.",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    features: ["Premium leather", "13\" size", "H-web design", "Professional grade"]
  },
  {
    id: 9,
    name: "Schutt Sports Helmet",
    price: 179.99,
    category: "Helmets",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Advanced safety helmet with superior protection and comfort.",
    rating: 4.6,
    reviews: 124,
    inStock: true,
    features: ["Advanced protection", "Comfortable fit", "Ventilated", "Safety certified"]
  },
  {
    id: 10,
    name: "Adidas Adizero Cleats",
    price: 139.99,
    category: "Cleats",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Lightweight speed cleats designed for maximum performance on the field.",
    rating: 4.5,
    reviews: 187,
    inStock: true,
    features: ["Lightweight", "Speed design", "Metal spikes", "Breathable"]
  },
  {
    id: 11,
    name: "Nike Dri-FIT Jersey",
    price: 89.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Moisture-wicking jersey with comfortable fit and team-ready design.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    features: ["Dri-FIT technology", "Comfortable fit", "Team design", "Breathable"]
  },
  {
    id: 12,
    name: "Rawlings Official Game Ball",
    price: 19.99,
    category: "Balls",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    description: "Official game ball with consistent performance and durability.",
    rating: 4.7,
    reviews: 298,
    inStock: true,
    features: ["Official size", "Consistent weight", "Durable", "Game ready"]
  }
];

export const categories = [
  "All",
  "Bats",
  "Gloves", 
  "Helmets",
  "Cleats",
  "Apparel",
  "Balls"
]; 