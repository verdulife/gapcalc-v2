import { db, PaperTable, PrintTable, PlotterTable, TshirtTable, VarTable } from 'astro:db';
import { papers, prints, plotters, tshirts, vars } from '@/lib/consts';

export default async function seed() {
  await db.insert(PaperTable).values(papers);
  await db.insert(PrintTable).values(prints);
  await db.insert(PlotterTable).values(plotters);
  await db.insert(TshirtTable).values(tshirts);
  await db.insert(VarTable).values({ id: "vars", ...vars });
}
