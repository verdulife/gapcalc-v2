import { db, PapersTable, PrintsTable } from 'astro:db';
import { prints, papers } from '@/lib/consts';

export default async function seed() {
	await db.insert(PrintsTable).values(prints);
	await db.insert(PapersTable).values(papers);
}
