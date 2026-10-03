export interface Publication {
  id: string;
  title: string;
  titleTamil?: string;
  author?: string;
  publisher?: string;
  image: string;
  category: string;
  year?: string;
  description: string;
}

export const publicationsData: Publication[] = [
  {
    id: "pub-tamilvel-collection",
    title: "தமிழ்வேள் வரலாற்று & சமூக ஆய்வு நூல்கள் (4 நூல்கள்)",
    titleTamil: "Tamizhvel Heritage & Social Research Publications",
    author: "தமிழ்வேல் (Tamizhvel)",
    publisher: "பாண்டிய ராசாக்கள் விஷன் / கயல் அச்சகம்",
    image: "/images/books/tamilvel_books_collection.jpg",
    category: "Heritage Publications",
    year: "2026",
    description: "குருபூசை அரசியல், இந்துக்கள் இல்லை, சுந்தரலிங்கத் தேவேந்திரர் மற்றும் இம்மானுவேல் தேவேந்திரர் உள்ளிட்ட வரலாற்று ஆய்வு நூல் தொகுப்பு."
  },
  {
    id: "pub-immanuel",
    title: "சமூக உரிமைப் போராளி இம்மானுவேல் தேவேந்திரர்",
    titleTamil: "Social Rights Fighter Immanuel Devendirar",
    author: "தமிழ்வேல் (Tamizhvel)",
    publisher: "பாண்டிய ராசாக்கள் விஷன் / கயல் அச்சகம்",
    image: "/images/books/book_immanuel_devendirar.jpg",
    category: "Historical Biography",
    year: "2026",
    description: "சமூக உரிமைக்காகவும் சமத்துவத்திற்காகவும் போராடிய தியாகி இம்மானுவேல் சேகரன் தேவேந்திரர் அவர்களின் வரலாற்று வாழ்க்கை ஆவணம்."
  },
  {
    id: "pub-1",
    title: "Thirukkural — Universal Tamil Ethics",
    titleTamil: "திருக்குறள் — உலகப் பொதுமறை",
    author: "Thiruvalluvar (திருவள்ளுவர்)",
    publisher: "Kayal Achagam Editorial",
    image: "/images/thiruvalluvar.jpg",
    category: "Classical Heritage",
    description: "Definitive edition of Thirukkural with clear Tamil commentary and English summaries for modern readers."
  },
  {
    id: "pub-2",
    title: "Language & Tamil Cultural Studies",
    titleTamil: "மொழி மற்றும் தமிழ்ப் பண்பாட்டு ஆய்வுகள்",
    author: "Devaneya Pavanar (தேவநேயப் பாவாணர்)",
    publisher: "Kayal Achagam Publication",
    image: "/images/pavanar.jpg",
    category: "Linguistics & Heritage",
    description: "Selected works documenting the historical richness, depth, and roots of classical Tamil."
  },
  {
    id: "pub-3",
    title: "Social Empowerment & Community Leadership",
    titleTamil: "சமூக மேம்பாடு & சமூகத் தலைமைத்துவம்",
    author: "Tyagi Immanuel Sekaran (தியாகி இம்மானுவேல் சேகரன்)",
    publisher: "Kayal Achagam Historical Archive",
    image: "/images/immanuel.jpg",
    category: "Social History",
    description: "Historical retrospective on social equality movements and community empowerment in Tamil Nadu."
  },
  {
    id: "pub-4",
    title: "Tamil Resistance & Leadership Retrospective",
    titleTamil: "தமிழ் உணர்வு மற்றும் தலைமைத்துவ வரலாறு",
    author: "Historical Archives",
    publisher: "Kayal Achagam Press",
    image: "/images/prabhakaran.jpg",
    category: "Political History",
    description: "Documentary publication preserving key historical photographs and statements on Tamil identity."
  }
];
