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
    id: "g-book-1",
    src: "/images/books/book_immanuel_devendirar.jpg",
    alt: "சமூக உரிமைப் போராளி இம்மானுவேல் தேவேந்திரர் நூல் - கயல் அச்சகம் வெளியீடு",
    category: "Publications",
    title: "சமூக உரிமைப் போராளி இம்மானுவேல் தேவேந்திரர்",
    description: "கயல் அச்சகம் மற்றும் பாண்டிய ராசாக்கள் விஷன் வெளியிட்ட வரலாற்று நூல் (ஆசிரியர்: தமிழ்வேள்)."
  },
  {
    id: "g-book-2",
    src: "/images/books/tamilvel_books_collection.jpg",
    alt: "தமிழ்வேள் வரலாற்று & சமூக ஆய்வு நூல் தொகுப்பு - கயல் அச்சகம்",
    category: "Publications",
    title: "தமிழ்வேள் வரலாற்று ஆய்வு நூல் தொகுப்பு",
    description: "குருபூசை அரசியல், இந்துக்கள் இல்லை, சுந்தரலிங்கத் தேவேந்திரர் மற்றும் இம்மானுவேல் தேவேந்திரர் நூல்கள்."
  },
  {
    id: "g-tshirt-1",
    src: "/images/printing/tshirt_aram_sei.jpg",
    alt: "அறம் செய் தமிழ் அச்சு டி-சர்ட் - கயல் அச்சகம்",
    category: "Products",
    title: "அறம் செய் - Custom Printed Blue T-Shirt",
    description: "உயர்தர காட்டன் ஆடையில் துல்லியமான தமிழ் அச்சு வேலைப்பாடு."
  },
  {
    id: "g-tshirt-2",
    src: "/images/printing/tshirt_tamizhan.jpg",
    alt: "தமிழன் பாரம்பரிய அச்சு மஞ்சள் டி-சர்ட்",
    category: "Products",
    title: "தமிழன் - Heritage Art Yellow T-Shirt",
    description: "தமிழ் பண்பாட்டு சின்னங்கள், கோயில் கோபுரம் மற்றும் ஏறுதழுவுதல் கலை வடிவம் பொறிக்கப்பட்ட டி-சர்ட்."
  },
  {
    id: "g-tshirt-3",
    src: "/images/printing/tshirt_sakthivel_red.jpg",
    alt: "சக்திவேல் பாண்டியன் தமிழ் பிராமி அச்சு சிவப்பு டி-சர்ட்",
    category: "Products",
    title: "சக்திவேல் பாண்டியன் (Tamil-Brahmi) Red T-Shirt",
    description: "பண்டைய தமிழ் பிராமி எழுத்து மற்றும் தமிழ் பெயரிடப்பட்ட சிறப்பு ஆடை பிரிண்டிங்."
  },
  {
    id: "g-tshirt-4",
    src: "/images/printing/tshirt_green_polo.jpg",
    alt: "கார்ப்பரேட் காலர் டி-சர்ட் பிரிண்டிங்",
    category: "Products",
    title: "Custom Collar Polo T-Shirt Printing",
    description: "ஸ்ரீநிவாசா நிறுவனத்திற்கான தனிப்பயன் காலர் பொலோ டி-சர்ட் தயாரிப்பு."
  },
  {
    id: "g-flags-1",
    src: "/images/printing/flags_silk_display.jpg",
    alt: "அமைப்புக் கொடிகள் - பட்டு அச்சு தயாரிப்பு",
    category: "Products",
    title: "Printed Silk Party & Movement Flags",
    description: "சிவப்பு-பச்சை பட்டுத் துணியில் தலைவர்கள் உருவப்படம் பொறிக்கப்பட்ட வண்ணமயமான கொடிகள்."
  },
  {
    id: "g-flags-2",
    src: "/images/printing/flag_ntk_tiger.jpg",
    alt: "நாம் தமிழர் கட்சி பட்டு அச்சு கொடி",
    category: "Posters",
    title: "நாம் தமிழர் கட்சி Printed Silk Flag",
    description: "உயர்தர பட்டுத் துணியில் கம்பீரமான புலிச் சின்னம் பொறிக்கப்பட்ட அரசியல் அமைப்புக் கொடி."
  },
  {
    id: "g-bag-1",
    src: "/images/printing/bag_ganesha_yellow.jpg",
    alt: "விநாயகர் திருவுருவ மஞ்சள் தாம்பூலப் பை",
    category: "Products",
    title: "மஞ்சள் பை - Ganesha Wedding Thamboolam Bag",
    description: "சுப நிகழ்வுகளுக்கான விநாயகர் படம் மற்றும் வாழ்த்து வாசகங்களுடன் கூடிய சுற்றுச்சூழல் துணிப்பை."
  },
  {
    id: "g-bag-2",
    src: "/images/printing/bag_balaji_yellow.jpg",
    alt: "திருப்பதி பாலாஜி பத்மாவதி தாம்பூலப் பை",
    category: "Products",
    title: "Lord Balaji & Padmavathi Thamboolam Bag",
    description: "திருப்பதி வெங்கடாசலபதி மற்றும் பத்மாவதி தாயார் திருவுருவம் அச்சிடப்பட்ட திருமண தாம்பூலப் பை."
  },
  {
    id: "g-bag-3",
    src: "/images/printing/bag_pink_gift.jpg",
    alt: "பிங்க் நிற தாம்பூல பரிசுப் பை",
    category: "Products",
    title: "Thank You Pink Traditional Gift Bag",
    description: "நன்றி வாசகமும் பாரம்பரிய வேலைப்பாடுகளும் கொண்ட அழகிய தாம்பூல பரிசுப் பை."
  },
  {
    id: "g-bag-4",
    src: "/images/printing/bag_magenta_thankyou.jpg",
    alt: "நன்றி அச்சிடப்பட்ட பட்டுத் துணிப் பை",
    category: "Products",
    title: "'Thank You' Golden Border Motif Bag",
    description: "தங்க ஜரிகை பார்டர் மற்றும் வட்ட வடிவ நன்றி முத்திரை கொண்ட தாம்பூலப் பை."
  },
  {
    id: "g-shawls-1",
    src: "/images/printing/shawls_and_badges.jpg",
    alt: "அரசியல் மற்றும் சமூக அமைப்பு சால்வைகள்",
    category: "Events",
    title: "Party Shawls & Emblems (சால்வை மற்றும் பேட்ஜ்)",
    description: "சிவப்பு-பச்சை பார்டர் சால்வைகள் மற்றும் நினைவு வட்ட பேட்ஜ் வில்லைகள் தயாரிப்பு."
  },
  {
    id: "g-portrait-1",
    src: "/images/thiruvalluvar.jpg",
    alt: "Portrait of Saint Poet Thiruvalluvar",
    category: "Publications",
    title: "Thiruvalluvar Portrait Print",
    description: "Classical representation of Thiruvalluvar displayed in Kayal Achagam heritage section."
  },
  {
    id: "g-portrait-2",
    src: "/images/pavanar.jpg",
    alt: "Devaneya Pavanar Portrait",
    category: "Publications",
    title: "Devaneya Pavanar Portrait",
    description: "Honoring Tamil linguistic scholar Mozhignayiru Devaneya Pavanar."
  },
  {
    id: "g-portrait-3",
    src: "/images/immanuel.jpg",
    alt: "Tyagi Immanuel Sekaran Portrait",
    category: "Events",
    title: "Immanuel Sekaran Tribute Portrait",
    description: "Social equality movement leader and Paramakudi freedom fighter."
  },
  {
    id: "g-portrait-4",
    src: "/images/prabhakaran.jpg",
    alt: "Portrait of Velupillai Prabhakaran",
    category: "Posters",
    title: "Historical Portrait Banner",
    description: "Historical archival print preserved by Kayal Achagam."
  },
  {
    id: "g-activity-1",
    src: "/images/activities/event_launch.png",
    alt: "Book Release Ceremony",
    category: "Activities",
    title: "Community Book Launch Event",
    description: "Official release and public presentation of Tamil cultural material in Paramakudi."
  }
];
