export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "Events" | "Activities" | "Products" | "Publications" | "Posters";
  title?: string;
  description?: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    src: "/images/thiruvalluvar.jpg",
    alt: "Portrait of Thiruvalluvar - Saint Poet & Philosopher",
    category: "Publications",
    title: "Thiruvalluvar Portrait Print",
    description: "Classical representation of Thiruvalluvar displayed in Kayal Achagam heritage section."
  },
  {
    id: "g-2",
    src: "/images/pavanar.jpg",
    alt: "Devaneya Pavanar Portrait",
    category: "Publications",
    title: "Devaneya Pavanar Portrait",
    description: "Honoring Tamil linguistic scholar Devaneya Pavanar."
  },
  {
    id: "g-3",
    src: "/images/immanuel.jpg",
    alt: "Tyagi Immanuel Sekaran Portrait",
    category: "Events",
    title: "Immanuel Sekaran Tribute Portrait",
    description: "Social equality movement portrait."
  },
  {
    id: "g-4",
    src: "/images/prabhakaran.jpg",
    alt: "Portrait of Velupillai Prabhakaran",
    category: "Posters",
    title: "Historical Portrait Banner",
    description: "Historical archival print preserved by Kayal Achagam."
  },
  {
    id: "g-5",
    src: "/images/products/book_bundle.png",
    alt: "Tamil Books & Publications",
    category: "Products",
    title: "Editorial Book Showcase",
    description: "Printed Tamil volumes and publications."
  },
  {
    id: "g-6",
    src: "/images/products/cloth_bag.png",
    alt: "Tamil Heritage Tote Bag",
    category: "Products",
    title: "Vibrant Yellow & Red Cloth Bag",
    description: "Custom printed organization merchandise."
  },
  {
    id: "g-7",
    src: "/images/products/badge_set.png",
    alt: "Pin Badges & Heritage Emblems",
    category: "Products",
    title: "Badges & Pin Set",
    description: "Commemorative metal alloy pin badges."
  },
  {
    id: "g-8",
    src: "/images/activities/event_launch.png",
    alt: "Book Release Ceremony",
    category: "Activities",
    title: "Community Book Launch Event",
    description: "Official release of Tamil educational and cultural material."
  }
];
