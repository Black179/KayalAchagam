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
