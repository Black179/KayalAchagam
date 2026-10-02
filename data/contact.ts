export interface ContactConfig {
  organisationName: string;
  subTitle: string;
  phone: string;
  alternatePhone: string;
  email: string;
  address: string;
  addressTamil: string;
  mapsQuery: string;
  googleMapsUrl: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  kural: {
    line1: string;
    line2: string;
    source: string;
    kuralNo: string;
    translation: string;
  };
  motto: {
    tamil: string;
    english: string;
  };
}

export const contactData: ContactConfig = {
  organisationName: "KAYAL ACHAGAM",
  subTitle: "Official Printing, Publishing & Community E-Services Centre",
  phone: "9003920106",
  alternatePhone: "04564-221048",
  email: "senkayal2016@gmail.com",
  address: "Opposite Muthaiya Kovil, Kattu Paramakudi, Paramakudi, Tamil Nadu",
  addressTamil: "முத்தையா கோவில் எதிர்புறம், காட்டுப்பரமக்குடி, பரமக்குடி",
  mapsQuery: "முத்தையா கோவில், காட்டுப்பரமக்குடி, பரமக்குடி",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%E0%AE%AE%E0%AE%A5%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%AF%E0%AE%BE%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%B1%E0%AE%AE%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%E0%AE%9F%E0%AE%BF",
  whatsappNumber: "919003920106",
  whatsappDefaultMessage: "Hello Kayal Achagam, I would like to enquire about your services and products.",
  kural: {
    line1: "கற்க கசடறக் கற்பவை கற்றபின்",
    line2: "நிற்க அதற்குத் தக",
    source: "திருக்குறள்",
    kuralNo: "391",
    translation: "Learn thoroughly what is to be learned, and having learned, let your conduct conform to that learning."
  },
  motto: {
    tamil: "தமிழ்ப் பாரம்பரியம் · சமூகச் சேவைகள் · தரம் & விசுவாசம்",
    english: "Tamil Heritage · Community Services · Excellence & Trust"
  }
};
