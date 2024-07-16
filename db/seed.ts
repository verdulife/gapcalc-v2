import { db, PaperTable, PrintTable, PlotterTable, TshirtTable } from 'astro:db';
import { papers, prints, plotters, tshirts } from '@/lib/consts';

export default async function seed() {
  await db.insert(PaperTable).values(papers);
  await db.insert(PrintTable).values(prints);
  await db.insert(PlotterTable).values(plotters);
  await db.insert(TshirtTable).values(tshirts);
}
