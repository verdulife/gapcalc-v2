import "dotenv/config";
import { getDb } from "../src/db/index";
import { papers, plotters, prints, tshirts, vars } from "../src/db/schema";

const seedData = {
  papers: [
    { id: "300gr", label: "300gr", price: 2.60 },
    { id: "300gr_texturado", label: "300gr Texturado", price: 2.70 },
    { id: "135gr", label: "135gr", price: 1.70 },
    { id: "adhesivo", label: "Adhesivo", price: 1.90 },
    { id: "adhesivo_especial", label: "Adhesivo Especial", price: 2.80 },
  ],
  plotters: [
    { id: "papel_masas", label: "Papel masas", width_cm: 128, price: 37.20, min_price: 16 },
    { id: "papel_foto", label: "Papel foto", width_cm: 105, price: 55.90, min_price: 16 },
    { id: "vinilo_corte", label: "Vinilo corte", width_cm: 60, price: 31.95, min_price: 16 },
    { id: "vinilo_corte_esp", label: "Vinilo corte esp", width_cm: 152, price: 88.30, min_price: 16 },
    { id: "vinilo_impresion", label: "Vinilo impresión", width_cm: 105, price: 48.30, min_price: 16 },
    { id: "vinilo_imp_laminado", label: "Vinilo imp laminado", width_cm: 105, price: 55.90, min_price: 16 },
    { id: "lona", label: "Lona", width_cm: 160, price: 73.60, min_price: 16 },
    { id: "canvas", label: "Canvas", width_cm: 152, price: 128.75, min_price: 16 },
    { id: "carton_pluma", label: "Cartón pluma", width_cm: 100, price: 16.95, min_price: 16 },
    { id: "iman_adhesivo", label: "Imán adhesivo", width_cm: 60, price: 29.55, min_price: 16 },
  ],
  prints: [
    { id: "tarjetas_visita", label: "Tarjetas visita", per_sheet: 25 },
    { id: "din_a6", label: "DIN A6", per_sheet: 8 },
    { id: "din_a5", label: "DIN A5", per_sheet: 4 },
    { id: "tarjeton", label: "Tarjetón", per_sheet: 6 },
    { id: "din_a4", label: "DIN A4", per_sheet: 2 },
  ],
  tshirts: [
    { id: "small", label: "Hasta 10x10cm", price: 6 },
    { id: "medium", label: "Hasta 22x22cm", price: 7 },
    { id: "large", label: "Hasta 30x40cm", price: 8 },
    { id: "empty", label: "Sin impresión", price: 0 },
  ],
  vars: {
    id: "vars",
    SECOND_FACE_PRICE: 0.85,
    WORK_PRICE: 10,
    WORK_PRICE_CARDS: 5,
    EXPRESS_MULIPLIER: 1.15,
    SCALE_SUBSTRACT_PRICE: 0.10,
    TSHIRT_PRICE: 7.5,
  },
};

async function seed() {
  console.log("🌱 Iniciando seed...");
  const db = getDb();

  console.log("Limpiando datos existentes...");
  await db.delete(papers);
  await db.delete(plotters);
  await db.delete(prints);
  await db.delete(tshirts);
  await db.delete(vars);

  console.log("Insertando papers...");
  await db.insert(papers).values(seedData.papers);

  console.log("Insertando plotters...");
  await db.insert(plotters).values(seedData.plotters);

  console.log("Insertando prints...");
  await db.insert(prints).values(seedData.prints);

  console.log("Insertando tshirts...");
  await db.insert(tshirts).values(seedData.tshirts);

  console.log("Insertando vars...");
  await db.insert(vars).values(seedData.vars);

  console.log("✅ Seed completado!");
}

seed().catch(console.error);