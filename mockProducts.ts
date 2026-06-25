export interface PackagingInfo {
  size: string;
  price?: number;
}

export interface GradeInfo {
  name: string;
  price: number;
  packaging?: PackagingInfo[];
}

export interface Product {
  id: string;
  brandId?: number;
  category: string;
  vehicleCategory?: string;
  type?: string;
  name: string;
  description: string;
  grades?: GradeInfo[];
  price?: number;
  unit: string;
  stock_quantity: number;
}

export const PRODUCTS: Product[] = [
  // TWO WHEELER OILS
  {
    id: "castrol-power1-ultimate",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Two Wheeler",
    type: "Full Synthetic",
    name: "Castrol Power1 Ultimate 4T",
    description: "API SN, JASO MA2. Premium protection with 5-in-1 formula for bikes.",
    grades: [
      { name: "10W-30", price: 450 },
      { name: "10W-40", price: 480, packaging: [{ size: "1LTR" }] },
      { name: "15W-50", price: 500, packaging: [{ size: "1LTR" }, { size: "2.5LTR" }] },
    ],
    unit: "Litre",
    stock_quantity: 45,
  },
  {
    id: "castrol-power1-4t",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Two Wheeler",
    type: "Semi-Synthetic",
    name: "Castrol Power1 4T",
    description: "API SN, JASO MA2. Targeted for Hero Splendor iSmart, Honda Shine.",
    grades: [{ name: "10W-30", price: 380, packaging: [{ size: "900ML" }] }],
    unit: "Litre",
    stock_quantity: 30,
  },
  {
    id: "castrol-activ-4t",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Two Wheeler",
    type: "Mineral",
    name: "Castrol Activ 4T",
    description: "API SL, JASO MA2. Targeted for popular normal commuter bikes.",
    grades: [
      { name: "10W-30", price: 320, packaging: [{ size: "900ML" }] },
      { name: "20W-40", price: 340, packaging: [{ size: "900ML" }] },
    ],
    unit: "Litre",
    stock_quantity: 50,
  },
  {
    id: "castrol-activ-scooter",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Two Wheeler",
    type: "Synthetic Technology",
    name: "Castrol Activ Scooter",
    description: "API SL, JASO MB. Synthetic Technology with Zip Boosters.",
    grades: [{ name: "10W-30", price: 350, packaging: [{ size: "800ML" }] }],
    unit: "Litre",
    stock_quantity: 25,
  },
  // CAR OILS
  {
    id: "castrol-edge",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Full Synthetic",
    name: "Castrol EDGE",
    description: "API SN/CF, ACEA A3/B4. Fluid TITANIUM technology.",
    grades: [{ name: "5W-40", price: 850 }],
    unit: "Litre",
    stock_quantity: 15,
  },
  {
    id: "castrol-magnatec",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Full Synthetic",
    name: "Castrol MAGNATEC",
    description: "API SP, ILSAC GF-6. DUALOCK technology.",
    grades: [{ name: "5W-30", price: 550 }],
    unit: "Litre",
    stock_quantity: 40,
  },
  {
    id: "castrol-magnatec-suv",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Full Synthetic",
    name: "Castrol MAGNATEC SUV",
    description: "API SP, ACEA A5/B5. Targeted for heavy load modern SUVs.",
    grades: [{ name: "5W-30", price: 580 }],
    unit: "Litre",
    stock_quantity: 35,
  },
  {
    id: "castrol-gtx-essential",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Mineral",
    name: "Castrol GTX Essential",
    description: "API SL/CF. Targeted for older high mileage cars.",
    grades: [{ name: "20W-50", price: 350 }],
    unit: "Litre",
    stock_quantity: 20,
  },
  {
    id: "castrol-gtx-eco",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Synthetic Blend",
    name: "Castrol GTX ECO",
    description: "API SN. Better eco-friendly cleaning with anti-sludge.",
    grades: [{ name: "5W-30", price: 400 }],
    unit: "Litre",
    stock_quantity: 28,
  },
  {
    id: "castrol-gtx-suv",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Cars",
    type: "Mineral",
    name: "Castrol GTX SUV",
    description: "API CI-4 Plus. Targeted for heavy duty old diesel SUVs/MUVs.",
    grades: [{ name: "15W-40", price: 420 }],
    unit: "Litre",
    stock_quantity: 22,
  },
  // TRUCK OILS
  {
    id: "castrol-crb-turbomax",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Trucks",
    type: "Synthetic Technology",
    name: "Castrol CRB TURBOMAX",
    description: "For turbocharged diesel engines in trucks, buses, and tippers.",
    grades: [
      { name: "15W-40 CH-4", price: 350 },
      { name: "15W-40 CI-4 Plus", price: 380 },
    ],
    unit: "Litre",
    stock_quantity: 50,
  },
  {
    id: "castrol-crb-prima",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Trucks",
    type: "Mineral",
    name: "Castrol CRB PRIMA",
    description: "API CF-4. Targeted for Light and Medium Commercial Vehicles.",
    grades: [{ name: "15W-40", price: 340 }],
    unit: "Litre",
    stock_quantity: 45,
  },
  {
    id: "castrol-crb-multi",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Trucks",
    type: "Mineral",
    name: "Castrol CRB MULTI",
    description: "API CH-4. Multipurpose heavy-duty diesel engine oil.",
    grades: [{ name: "15W-40", price: 320 }],
    unit: "Litre",
    stock_quantity: 60,
  },
  {
    id: "castrol-crb-essential",
    brandId: 1,
    category: "Oils",
    vehicleCategory: "Trucks",
    type: "Mineral",
    name: "Castrol CRB ESSENTIAL",
    description: "API CI-4 Plus / CH-4 / CF-4. Value-for-money, budget-friendly.",
    grades: [{ name: "15W-40", price: 280 }],
    unit: "Litre",
    stock_quantity: 100,
  },
  // OTHER BRANDS
  {
    id: "prod-servo-engine-oil",
    brandId: 8,
    category: "Oils",
    vehicleCategory: "Cars",
    name: "Servo Engine Oil",
    description: "Reliable and affordable engine oil.",
    grades: [
      { name: "20W-40", price: 280 },
      { name: "10W-30", price: 300 },
    ],
    unit: "Litre",
    stock_quantity: 30,
  },
];

export const BOSCH_FILTERS: any[] = [];

export const BRANDS = [
  { id: 1, name: "Castrol", description: "Premium liquid engineering" },
  { id: 2, name: "Elf", description: "Champion lubricants" },
  { id: 3, name: "Pensol", description: "High grade protection" },
  { id: 4, name: "Gulf", description: "Quality & performance" },
  { id: 5, name: "Kirloskar", description: "Heavy duty reliability" },
  { id: 6, name: "HP Lubricants", description: "Trusted high performance" },
  { id: 8, name: "Servo", description: "Long life lubrication" },
  { id: 9, name: "Bosch Filters", description: "Premium automotive filters" },
];

export const BRAND_THEMES: Record<
  string,
  {
    primary: string;
    secondary: string;
    badgeBg: string;
    badgeText: string;
    accentBorder: string;
    slogan: string;
  }
> = {
  castrol: {
    primary: "bg-[#008148]",
    secondary: "bg-[#e51b24]",
    badgeBg: "bg-[#008148]",
    badgeText: "text-white",
    accentBorder: "border-l-emerald-600",
    slogan: "Liquid Engineering",
  },
  elf: {
    primary: "bg-[#0f2c59]",
    secondary: "bg-[#009fe3]",
    badgeBg: "bg-[#0f2c59]",
    badgeText: "text-white",
    accentBorder: "border-l-blue-800",
    slogan: "Champion Lubes",
  },
  pensol: {
    primary: "bg-[#bf0000]",
    secondary: "bg-[#fcd116]",
    badgeBg: "bg-[#bf0000]",
    badgeText: "text-white",
    accentBorder: "border-l-red-600",
    slogan: "High Grade Protection",
  },
  gulf: {
    primary: "bg-[#003087]",
    secondary: "bg-[#ff6900]",
    badgeBg: "bg-[#003087]",
    badgeText: "text-white",
    accentBorder: "border-l-blue-600",
    slogan: "Quality & Performance",
  },
  kirloskar: {
    primary: "bg-[#1b4332]",
    secondary: "bg-[#ffb703]",
    badgeBg: "bg-[#1b4332]",
    badgeText: "text-white",
    accentBorder: "border-l-green-800",
    slogan: "Heavy Duty Reliability",
  },
  hp: {
    primary: "bg-[#0033aa]",
    secondary: "bg-[#ffcc00]",
    badgeBg: "bg-[#0033aa]",
    badgeText: "text-white",
    accentBorder: "border-l-amber-500",
    slogan: "Trusted High Performance",
  },
  servo: {
    primary: "bg-[#d90429]",
    secondary: "bg-[#2b2d42]",
    badgeBg: "bg-[#d90429]",
    badgeText: "text-white",
    accentBorder: "border-l-red-600",
    slogan: "Long Life Lubrication",
  },
  bosch: {
    primary: "bg-[#005691]",
    secondary: "bg-[#da291c]",
    badgeBg: "bg-[#da291c]",
    badgeText: "text-white",
    accentBorder: "border-l-blue-700",
    slogan: "Premium Filters",
  },
};

export function getBrandTheme(brandName: string) {
  const brand = (brandName || "").toLowerCase();
  if (brand.includes("castrol")) return BRAND_THEMES.castrol;
  if (brand.includes("elf")) return BRAND_THEMES.elf;
  if (brand.includes("pensol")) return BRAND_THEMES.pensol;
  if (brand.includes("gulf")) return BRAND_THEMES.gulf;
  if (brand.includes("kirloskar")) return BRAND_THEMES.kirloskar;
  if (brand.includes("hp")) return BRAND_THEMES.hp;
  if (brand.includes("servo")) return BRAND_THEMES.servo;
  if (brand.includes("bosch")) return BRAND_THEMES.bosch;
  return {
    primary: "bg-gray-800",
    secondary: "bg-gray-600",
    badgeBg: "bg-gray-800",
    badgeText: "text-white",
    accentBorder: "border-l-gray-600",
    slogan: "Premium Lubricants",
  };
}
