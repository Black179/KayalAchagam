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
    name: "இம்மானுவேல் தேவேந்திரர் வரலாற்று நூல்",
    nameTamil: "சமூக உரிமைப் போராளி இம்மானுவேல் தேவேந்திரர்",
    category: "Books",
    image: "/images/books/book_immanuel_devendirar.jpg",
    description: "கயல் அச்சகம் வெளியிட்ட சமூக உரிமைப் போராளி இம்மானுவேல் தேவேந்திரர் வரலாற்று புத்தகம் (ஆசிரியர்: தமிழவேள்).",
    featured: true,
    specifications: ["Hardcover Volume", "Pandiya Rajakkal Vision", "Historic Documentation"]
  },
  {
    id: "prod-2",
    name: "விநாயகர் திருவுருவ மஞ்சள் தாம்பூலப் பை",
    nameTamil: "சுற்றுச்சூழல் மஞ்சள் தாம்பூலப் பை (மஞ்சள் பை)",
    category: "Cloth Bags",
    image: "/images/printing/bag_ganesha_yellow.jpg",
    description: "சுப முகூர்த்த திருமணங்கள் மற்றும் விசேஷங்களுக்கு உயர்தர விநாயகர் அச்சுடன் கூடிய மஞ்சள் பை தயாரிப்பு.",
    featured: true,
    specifications: ["Eco-friendly Fabric", "Multi-color Deity Print", "Custom Couple Names"]
  },
  {
    id: "prod-3",
    name: "அறம் செய் தமிழ் ஆடை (Blue Graphic Tee)",
    nameTamil: "அறம் செய் உயர்தர காட்டன் டி-சர்ட்",
    category: "Clothing",
    image: "/images/printing/tshirt_aram_sei.jpg",
    description: "அறம் செய் தூய தமிழ் அச்சுடன் கூடிய உயர்தர ரவுண்ட்-நெக் காட்டன் டி-சர்ட்.",
    featured: true,
    specifications: ["100% Combed Cotton", "Fade-Proof Silk Screen Print", "Sizes S to XXL"]
  },
  {
    id: "prod-4",
    name: "தமிழன் பண்பாட்டு மரபு டி-சர்ட் (Yellow)",
    nameTamil: "தமிழன் - பாரம்பரிய அச்சு மஞ்சள் டி-சர்ட்",
    category: "Clothing",
    image: "/images/printing/tshirt_tamizhan.jpg",
    description: "தமிழ் நில வரைபடம், கோவில் கோபுரம், ஜல்லிக்கட்டு மாடு மற்றும் தமிழன் முத்திரை தாங்கிய ஆடை.",
    featured: true,
    specifications: ["Vibrant Golden Yellow", "High Definition Art Print", "Premium Fabric"]
  },
  {
    id: "prod-5",
    name: "அமைப்புக் கொடிகள் - பட்டு அச்சு தயாரிப்பு",
    nameTamil: "பட்டுத் துணி அமைப்புக் கொடிகள்",
    category: "Flags",
    image: "/images/printing/flags_silk_display.jpg",
    description: "சிவப்பு மற்றும் பச்சை வண்ண பட்டுத் துணியில் தலைவர்கள் உருவப்படம் பொறிக்கப்பட்ட பிரம்மாண்ட கொடிகள்.",
    featured: true,
    specifications: ["Premium Satin Silk", "Weather Resistant Print", "Standard & Large Sizes"]
  },
  {
    id: "prod-6",
    name: "நாம் தமிழர் கட்சி புலிச் சின்ன பட்டு அச்சு கொடி",
    nameTamil: "நாம் தமிழர் கட்சி கொடி தயாரிப்பு",
    category: "Flags",
    image: "/images/printing/flag_ntk_tiger.jpg",
    description: "சிவப்பு பின்னணியில் கம்பீரமான புலி முத்திரை மற்றும் சூரியக் கதிர்களுடன் பட்டு அச்சு கொடி.",
    featured: true,
    specifications: ["Official Dimensions", "Vibrant Red & Yellow Ink", "Double Hemmed"]
  },
  {
    id: "prod-7",
    name: "திருப்பதி பாலாஜி பத்மாவதி தாம்பூலப் பை",
    nameTamil: "திருப்பதி வெங்கடாசலபதி திருமணப் பை",
    category: "Cloth Bags",
    image: "/images/printing/bag_balaji_yellow.jpg",
    description: "மங்கல நிகழ்வுகளுக்கான பாரம்பரிய கோவில் கோபுர அமைப்பு மற்றும் பாலாஜி பத்மாவதி அச்சுப் பை.",
    featured: false,
    specifications: ["Heavy-Duty Non-Woven", "Golden Temple Artwork", "Comfort Carry Handle"]
  },
  {
    id: "prod-8",
    name: "பாரம்பரிய தாம்பூல பரிசுப் பை (Pink & Gold)",
    nameTamil: "தாம்பூல பரிசுப் பை - Thank You Bags",
    category: "Cloth Bags",
    image: "/images/printing/bag_magenta_thankyou.jpg",
    description: "தங்க ஜரிகை வேலைப்பாடு மற்றும் வட்ட வடிவ நன்றி முத்திரை கொண்ட தாம்பூலப் பை.",
    featured: false,
    specifications: ["Zari Gold Motif", "Thank You Typography", "Various Sizes"]
  },
  {
    id: "prod-9",
    name: "அரசியல் & சமூக அமைப்பு சால்வைகள்",
    nameTamil: "கட்சி சால்வைகள் & நினைவு பேட்ஜ்கள்",
    category: "Badges",
    image: "/images/printing/shawls_and_badges.jpg",
    description: "பொன்னாடை சால்வைகள் மற்றும் தனிப்பயன் வட்ட வடிவ விழா நினைவு பேட்ஜ் தயாரிப்பு.",
    featured: false,
    specifications: ["Woven Border Fringe", "High Gloss Badge Pins", "Bulk Event Supply"]
  },
  {
    id: "prod-10",
    name: "திருவள்ளுவர் & தலைவர்கள் நிழற்படச் சட்டம்",
    nameTamil: "திருவள்ளுவர் & தலைவர்கள் நிழற்படச் சட்டம்",
    category: "Frames",
    image: "/images/thiruvalluvar.jpg",
    description: "அலுவலகம் மற்றும் வீடுகளுக்கான புனித திருவள்ளுவர் மற்றும் வரலாற்றுத் தலைவர்களின் பிரேம் செய்யப்பட்ட படங்கள்.",
    featured: false,
    specifications: ["Glossy HD Print", "Golden Heritage Border", "Wall Mount Ready"]
  }
];
