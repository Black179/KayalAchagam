export interface Activity {
  id: string;
  title: string;
  titleTamil?: string;
  category: "Events" | "Community Activities" | "Cultural Activities" | "Publications";
  image: string;
  date?: string;
  location?: string;
  description: string;
  featured: boolean;
}

export const activitiesData: Activity[] = [
  {
    id: "act-1",
    title: "Tamil Publication & Book Release Event",
    titleTamil: "தமிழ் நூல் வெளியீட்டு விழா",
    category: "Publications",
    image: "/images/activities/event_launch.png",
    date: "Paramakudi, Tamil Nadu",
    location: "Paramakudi",
    description: "Official release ceremony for newly printed Tamil educational guides and cultural publications at Kayal Achagam.",
    featured: true
  },
  {
    id: "act-2",
    title: "Thiruvalluvar Day Cultural Tribute",
    titleTamil: "திருவள்ளுவர் நாள் பண்பாட்டு நினைவு விழா",
    category: "Cultural Activities",
    image: "/images/thiruvalluvar.jpg",
    date: "Annual Cultural Event",
    location: "Paramakudi Centre",
    description: "Gathering and recitation event emphasizing Thirukkural ethics, language heritage, and youth participation.",
    featured: true
  },
  {
    id: "act-3",
    title: "Community E-Services & Document Awareness Camp",
    titleTamil: "சமூக இ-சேவைகள் விழிப்புணர்வு முகாம்",
    category: "Community Activities",
    image: "/images/pavanar.jpg",
    date: "Paramakudi Region",
    location: "Kattu Paramakudi",
    description: "Free assistance drive helping local citizens apply for government welfare schemes, PAN cards, and exam portals.",
    featured: true
  },
  {
    id: "act-4",
    title: "Social Leadership & Heritage Commemoration",
    titleTamil: "சமூகத் தலைமைத்துவ நினைவு நிகழ்வு",
    category: "Events",
    image: "/images/immanuel.jpg",
    date: "Commemorative Event",
    location: "Paramakudi",
    description: "Tribute ceremony honoring social equality leaders and historical icons of Tamil Nadu.",
    featured: true
  }
];
