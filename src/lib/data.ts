export const items = [
  {
    id: "1",
    title: "Flat surface",
    content:
      "Durable FRP grating with 38×38mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/1.webp",
    mainImage:"/images/01.webp"
  },
  {
    id: "2",
    title: "Gritted surface",
    content:
      "Durable FRP grating with 40×40mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/2.webp",
    mainImage:"/images/02.webp"
  },
  {
    id: "3",
    title: "Concave surface",
    content:
      "Durable FRP grating with 50×50mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/3.webp",
    mainImage:"/images/03.webp"
  },
  {
    id: "4",
    title: "Solid top-gritted surface",
    content:
      "Durable FRP grating with 19×19mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/4.webp",
    mainImage:"/images/04.webp"
  },
  {
    id: "5",
    title: "Solid top-diamond surface",
    content:
      "Durable FRP grating with 20×20mm mesh for high strength, corrosion resistance, and slip resistance in industrial environments.",
    image: "/images/5.webp",
    mainImage:"/images/05.webp"
  },
  {
    id: "6",
    title: "Solid top-flat surface",
    content:
      "Gritted Surface,Concave Surface,Covered (Smooth Plate) Surface,Meniscus Surface",
    image: "/images/6.webp",
    mainImage:"/images/06.webp"
  },
  {
    id: "7",
    title: "Mini mesh",
    content:
      "ADA compliant (wheelchair-friendly),High slip resistance,Prevents small object fall-through,Safe for walking in dress shoes,Often designed with a covered or extra fine mesh top",
    image: "/images/7.webp",
    mainImage:"/images/07.webp"
  },
  {
    id: "8",
    title: "Heavy-duty",
    content:
      "Applications:Walkways,Platforms,Trench covers,Operating floors,Stair landings",
    image: "/images/8.webp",
    mainImage:"/images/08.webp"
  },
  {
    id: "9",
    title: "Transparent color",
    content:
      "Resin Type: Vinyl Ester or Isophthalic Polyester,Deflection Criteria: L/200 or max 10mm,Fire Retardant Option: Available with ASTM E84 Class 1",
    image: "/images/9.webp",
    mainImage:"/images/09.webp"
  },
];

export async function getCardById(id: string) {
  return items.find((item) => item.id === id) || null;
}

export function getAllCardIds() {
  return items.map((item) => ({ id: item.id }));
}
