export interface Product {
  id: string;
  name: string;
  nameTamil?: string;
  category: "Books" | "Cloth Bags" | "Badges" | "Flags" | "Clothing" | "Frames" | "Other";
  image: string;
  description: string;
  featured: boolean;
  specifications?: string[];
}

export const productsData: Product[] = [
  {
    id: "prod-1",
    name: "Tamil Literature & Cultural Book Bundle",
    nameTamil: "தமிழ் இலக்கியம் மற்றும் வரலாற்று புத்தகங்கள்",
    category: "Books",
    image: "/images/products/book_bundle.png",
    description: "Curated collection of authentic Tamil literature, historical essays, and ideological publications.",
    featured: true,
    specifications: ["Hardcover & Paperback", "Tamil Unicode Layout", "Editorial Quality"]
  },
  {
    id: "prod-2",
    name: "Kayal Achagam Heritage Tote Bag",
    nameTamil: "தமிழ் பாரம்பரியத் துணிப் பை",
    category: "Cloth Bags",
    image: "/images/products/cloth_bag.png",
    description: "Eco-friendly cotton tote bag styled in vibrant yellow and red with custom printed Tamil calligraphy.",
    featured: true,
    specifications: ["100% Organic Cotton", "Vibrant Screen Print", "Reusable & Durable"]
  },
  {
    id: "prod-3",
    name: "Commemorative Pin Badge Set",
    nameTamil: "நினைவு பேட்ஜ் தொகுப்பு",
    category: "Badges",
    image: "/images/products/badge_set.png",
    description: "Precision metal pin badges featuring official red, yellow, and green heritage emblems.",
    featured: true,
    specifications: ["Metal Alloy & Enamel", "Safety Pin Clasp", "Heritage Design"]
  },
  {
    id: "prod-4",
    name: "Official Organisation Flag (Kodi)",
    nameTamil: "அமைப்புக் கொடி",
    category: "Flags",
    image: "/images/products/badge_set.png", // Will render with flag motif
    description: "High-durability woven fabric flag with red and yellow background colors for official events.",
    featured: true,
    specifications: ["Weather Resistant Fabric", "Double Stitched Edges", "Standard Pole Sleeves"]
  },
  {
    id: "prod-5",
    name: "Custom Printed Tamil Apparel",
    nameTamil: "அச்சிடப்பட்ட தமிழ் ஆடை",
    category: "Clothing",
    image: "/images/products/cloth_bag.png",
    description: "Comfortable cotton T-shirts printed with organization logos and Tamil heritage quotes.",
    featured: true,
    specifications: ["100% Breathable Cotton", "Fade Resistant Print", "Available in Red/Green/Yellow"]
  },
  {
    id: "prod-6",
    name: "Thiruvalluvar & Leaders Wall Frame",
    nameTamil: "திருவள்ளுவர் & தலைவர்கள் நிழற்படச் சட்டம்",
    category: "Frames",
    image: "/images/thiruvalluvar.jpg",
    description: "High-definition photo print framed with premium borders, celebrating legendary Tamil icons.",
    featured: true,
    specifications: ["Glossy HD Print", "Golden Heritage Border", "Wall Mount Ready"]
  }
];
