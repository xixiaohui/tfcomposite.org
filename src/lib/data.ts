export const items = [
  {
    id: "1",
    title: "MOULDED GRATING 38*38mm MESH SIZE",
    content:
      "Durable FRP grating with 38×38mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/1.webp",
  },
  {
    id: "2",
    title: "MOULDED GRATING 40*40mm MESH SIZE",
    content:
      "Durable FRP grating with 40×40mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/2.webp",
  },
  {
    id: "3",
    title: "MOULDED GRATING 50*50mm MESH SIZE",
    content:
      "Durable FRP grating with 50×50mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/3.webp",
  },
  {
    id: "4",
    title: "MOULDED GRATING 19*19mm MESH SIZE",
    content:
      "Durable FRP grating with 19×19mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/4.webp",
  },
  {
    id: "5",
    title: "MOULDED GRATING 20*20mm MESH SIZE",
    content:
      "Durable FRP grating with 20×20mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/5.webp",
  },
  {
    id: "6",
    title: "SURFACE TREATMENT DIAGRAM",
    content:
      "Gritted Surface,Concave Surface,Covered (Smooth Plate) Surface,Meniscus Surface",
    image: "/images/6.webp",
  },
  {
    id: "7",
    title: "MINI MESH& HEEL GUARD LOAD TABLES",
    content:
      "ADA compliant (wheelchair-friendly),High slip resistance,Prevents small object fall-through,Safe for walking in dress shoes,Often designed with a covered or extra fine mesh top",
    image: "/images/7.webp",
  },
  {
    id: "8",
    title: "38*38 MOULDED GRATING LOAD TABLES",
    content:
      "Applications:Walkways,Platforms,Trench covers,Operating floors,Stair landings",
    image: "/images/8.webp",
  },
  {
    id: "9",
    title: "SOLID TOP 3MM MOULDED GRATING LOAD TABLES",
    content:
      "Resin Type: Vinyl Ester or Isophthalic Polyester,Deflection Criteria: L/200 or max 10mm,Fire Retardant Option: Available with ASTM E84 Class 1",
    image: "/images/9.webp",
  },
];

export async function getCardById(id: string) {
  return items.find((item) => item.id === id) || null;
}

export function getAllCardIds() {
  return items.map((item) => ({ id: item.id }));
}
