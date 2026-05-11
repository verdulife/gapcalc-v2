import { getDb } from "@/db/index";
import { papers, plotters, tshirts, prints, vars } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getAjustesData() {
  const db = getDb();
  const [papersData, plottersData, tshirtsData, printsData, varsData] = await Promise.all([
    db.select().from(papers),
    db.select().from(plotters),
    db.select().from(tshirts),
    db.select().from(prints),
    db.select().from(vars).where(eq(vars.id, "vars")),
  ]);
  const varsObj = varsData[0] ?? null;
  return { papers: papersData, plotters: plottersData, tshirts: tshirtsData, prints: printsData, vars: varsObj };
}