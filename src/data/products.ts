export interface ComparisonCol {
  name: string;
  protection: string;
  smartApp: boolean;
  mounting: string;
  rfid: boolean;
  touchScreen: boolean;
  compatibleAll: boolean;
  warranty: string;
  cable: string;
  datasheet: string;
  datasheetUrl?: string;
}

export interface SmartFeature {
  title: string;
  icon: string;
}

export interface ProductData {
  slug: string;
  name: string;
  category: "Residential" | "Commercial" | "DC Fast";
  powerOutput: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  benefits: string[];
  targetApplications: string[];
  imageUrl: string;
  faqs: { q: string; a: string }[];
  datasheetUrl?: string;
  comparisonTable?: ComparisonCol[];
  smartFeatures?: SmartFeature[];
  heroImageUrl?: string;
}

export const productsData: ProductData[] = [
  {
    slug: "smart-7",
    name: "Smart 7",
    category: "Residential",
    powerOutput: "7kW",
    heroHeadline: "Reliable Everyday EV Charging",
    heroSubheadline: "Smart, efficient and secure home charging designed for daily electric vehicle use.",
    description: "The CITA Smart 7 has been developed to provide dependable home charging for EV owners who require a balance between performance, safety and intelligent functionality. Its compact design allows installation in garages, carports, residential parking spaces and apartment buildings while maintaining a modern appearance. With integrated smart charging technology, users can manage charging sessions, monitor energy usage and optimize charging schedules through connected software platforms.",
    benefits: [
      "Simple Daily Charging",
      "Reduced Charging Costs",
      "Smart Monitoring",
      "Remote Management",
      "Enhanced Safety",
      "Weather Resistant Construction",
      "Future Software Compatibility"
    ],
    targetApplications: [
      "BYD Atto 3", "BYD Dolphin", "BYD Seal", "MG ZS EV", "MG4", "Kia EV6", "Hyundai IONIQ 5", "BMW i4", "Mercedes EQ Series"
    ],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2024/08/Group-2119-1.png",
    faqs: [
      { q: "Which charger is best for a home?", a: "Smart 7, Smart 7 Eco and Smart 7 Pro are all designed for residential use." },
      { q: "Can chargers be installed outdoors?", a: "Yes, suitable models are designed for outdoor environments." },
      { q: "Can I monitor charging through my phone?", a: "Yes, supported models include smart monitoring features." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-7.pdf"
  },
  {
    slug: "smart-22",
    name: "Smart 22",
    category: "Commercial",
    powerOutput: "22kW",
    heroHeadline: "Intelligent Commercial Charging",
    heroSubheadline: "22kW smart charging solution designed for modern commercial properties.",
    description: "The CITA Smart 22 is engineered for commercial environments requiring dependable charging performance and advanced energy management. Designed for workplaces, commercial developments, residential towers and hospitality venues, the Smart 22 combines powerful charging capability with intelligent connectivity. Its smart management features allow operators to control access, monitor usage and optimize charging performance through centralized software platforms. The Smart 22 provides an ideal balance between charging speed, operational efficiency and long-term scalability.",
    benefits: [
      "Professional Charging Experience",
      "Smart User Authentication",
      "Remote Management",
      "Energy Monitoring",
      "Future Expansion Ready",
      "Commercial Revenue Potential",
      "Enhanced Property Value"
    ],
    targetApplications: [
      "Corporate Offices", "Business Parks", "Hotels", "Hospitals", "Shopping Centers", "Universities", "Residential Towers", "Commercial Parking Facilities"
    ],
    imageUrl: "/products/Smart-22-Transparent.png",
    heroImageUrl: "/products/Smart-22-Hero.png",
    faqs: [
      { q: "Can charging sessions be monitored remotely?", a: "Yes." },
      { q: "Can multiple users access the charger?", a: "Yes through RFID authorization." },
      { q: "Is billing software supported?", a: "Yes through OCPP-compatible platforms." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf",
    comparisonTable: [
      {
        name: "CITA SMART PRO 22KW",
        protection: "IP65 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: false,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Type 2 Charging Cable 5 Meters",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-Pro-22.pdf"
      },
      {
        name: "CITA SMART 22KW ULTRA",
        protection: "IP54 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: true,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Tethered Type 2, 5 meters cable",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Ultra-Smart-22-Datasheet.pdf"
      },
      {
        name: "CITA SMART 22KW ECO",
        protection: "IP65 & IK10",
        smartApp: true,
        mounting: "On a wall & on a pole",
        rfid: true,
        touchScreen: false,
        compatibleAll: true,
        warranty: "3 Years",
        cable: "Tethered Type 2, 5 meters cable",
        datasheet: "Download",
        datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-ECO-22.pdf"
      }
    ],
    smartFeatures: [
      { title: "Access with mobile app via WiFi /4G/ Ethernet", icon: "smartphone" },
      { title: "Up to 3 years warranty (extendable)", icon: "award" },
      { title: "RFID access for instant command", icon: "nfc" },
      { title: "Compatible with all type 2 charging cables", icon: "plug" },
      { title: "PME fault detection", icon: "alert-triangle" },
      { title: "MID-certified energy meter", icon: "zap" },
      { title: "Active & Dynamic Load Balancing", icon: "activity" },
      { title: "OCPP 1.6 JSON integration", icon: "server" },
      { title: "Built-in 4G router", icon: "wifi" },
      { title: "Modbus Integration to Solar PV & Smart System", icon: "sun" },
      { title: "IP65 and IK10 Rated EV Charger", icon: "shield" }
    ]
  },
  {
    slug: "smart-80-dc",
    name: "Smart 80 DC",
    category: "DC Fast",
    powerOutput: "80kW DC",
    heroHeadline: "Designed For High-Traffic Charging Locations",
    heroSubheadline: "Serve more vehicles with powerful 80kW DC charging technology.",
    description: "The Smart 80 DC is ideal for businesses expecting consistent charging demand. Its ability to support multiple outputs makes it suitable for busy locations where customer convenience and operational efficiency are priorities. The charger is equipped with modern payment systems, intelligent charging controls and advanced monitoring capabilities.",
    benefits: [
      "Higher Throughput",
      "More Charging Sessions",
      "Reduced Waiting Times",
      "Higher Revenue Potential",
      "Improved Customer Satisfaction",
      "Commercial Scalability"
    ],
    targetApplications: [
      "Motorway Service Areas", "Fuel Stations", "Fleet Depots", "Commercial Charging Hubs", "Shopping Malls", "Government Projects"
    ],
    imageUrl: "https://citaevcharger.co.uk/wp-content/uploads/2024/11/Group-2426.png",
    faqs: [
      { q: "Can multiple vehicles charge simultaneously?", a: "Yes." },
      { q: "Is payment integration supported?", a: "Yes." },
      { q: "Does it support OCPP?", a: "Yes." }
    ],
    datasheetUrl: "https://citaevcharger.co.uk/wp-content/uploads/2025/03/CITA-Smart-80-DC.pdf"
  }
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return productsData.find(p => p.slug === slug);
}
