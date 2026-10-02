export interface ServiceCategory {
  id: string;
  categoryNumber: string;
  title: string;
  titleTamil: string;
  categoryGroup: "Printing & Document Services" | "E-Services" | "Online Payment Services";
  iconName: string;
  description: string;
  items: string[];
  featuredOnHome: boolean;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "printing-documents",
    categoryNumber: "01",
    title: "Printing & Document Services",
    titleTamil: "அச்சு மற்றும் ஆவணச் சேவைகள்",
    categoryGroup: "Printing & Document Services",
    iconName: "Printer",
    description: "High-quality document printing, copying, scanning, and binding solutions for individuals, students, and institutions.",
    items: [
      "B&W Xerox",
      "Colour Xerox",
      "Print Out",
      "Document Scanning",
      "Computer Typing",
      "English & Tamil Typing",
      "Spiral Binding",
      "Lamination",
      "De-lamination"
    ],
    featuredOnHome: true
  },
  {
    id: "online-applications",
    categoryNumber: "02",
    title: "Online Applications & E-Services",
    titleTamil: "இணைய விண்ணப்பங்கள்",
    categoryGroup: "E-Services",
    iconName: "Globe",
    description: "Assistance with official government applications, competitive examination portals, and digital communication.",
    items: [
      "Online Applications",
      "Email Services",
      "Exam Applications",
      "Exam Result Services",
      "Hall Ticket Printing"
    ],
    featuredOnHome: true
  },
  {
    id: "fees-payments",
    categoryNumber: "03",
    title: "Fees & Online Payments",
    titleTamil: "கட்டணம் மற்றும் ஆன்லைன் செலுத்துதல்கள்",
    categoryGroup: "Online Payment Services",
    iconName: "CreditCard",
    description: "Fast, reliable digital payment processing for educational institutions, utility bills, and government fees.",
    items: [
      "College Fees Payment",
      "Exam Fees Payment",
      "EB Electricity Bill Payment",
      "Online Bill Payments"
    ],
    featuredOnHome: true
  },
  {
    id: "tickets-travel",
    categoryNumber: "04",
    title: "Tickets & Travel Booking",
    titleTamil: "பயணச் சீட்டு முன்பதிவு",
    categoryGroup: "E-Services",
    iconName: "Bus",
    description: "Seamless reservation services for bus and train travel, ticket printing, and itinerary confirmation.",
    items: [
      "Bus Ticket Booking",
      "Train Ticket Booking",
      "Ticket Printing",
      "Travel Itinerary Support"
    ],
    featuredOnHome: true
  },
  {
    id: "govt-documents",
    categoryNumber: "05",
    title: "Government & Identity Services",
    titleTamil: "அரசு சான்றிதழ் & ஆவணங்கள்",
    categoryGroup: "E-Services",
    iconName: "FileCheck",
    description: "Application and document processing support for essential government identity cards and land records.",
    items: [
      "PAN Card Services",
      "Passport Services",
      "Patta & Chitta Land Records"
    ],
    featuredOnHome: true
  },
  {
    id: "banking-money",
    categoryNumber: "06",
    title: "Banking & Financial Services",
    titleTamil: "வங்கி மற்றும் பணப் பரிவர்த்தனை",
    categoryGroup: "Online Payment Services",
    iconName: "Building2",
    description: "Direct bank transfer and Aadhaar-enabled financial transaction assistance for community convenience.",
    items: [
      "Aadhaar Banking",
      "Money Transfer",
      "Digital Wallet Assistance"
    ],
    featuredOnHome: true
  },
  {
    id: "apparel-printing",
    categoryNumber: "07",
    title: "Custom T-Shirt Printing",
    titleTamil: "டி-சர்ட் அச்சிடுதல்",
    categoryGroup: "Printing & Document Services",
    iconName: "Shirt",
    description: "Customized apparel and T-Shirt printing for political movements, social groups, events, and sports clubs.",
    items: [
      "Custom T-Shirt Printing",
      "Event Batch Apparel",
      "Logo & Emblem Printing"
    ],
    featuredOnHome: false
  },
  {
    id: "flag-kodi-printing",
    categoryNumber: "08",
    title: "Kodi / Flag Printing",
    titleTamil: "கொடி அச்சிடுதல்",
    categoryGroup: "Printing & Document Services",
    iconName: "Flag",
    description: "High-durability flag and banner printing in traditional red, yellow, and green colors for meetings and rallies.",
    items: [
      "Kodi / Flag Printing",
      "Cultural Banner Printing",
      "Event Banners & Posters"
    ],
    featuredOnHome: false
  }
];
