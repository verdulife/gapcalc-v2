import type { APIRoute } from 'astro';
import { db, eq, PaperTable } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const paper = await request.json();

  try {
    await db.update(PaperTable).set(paper).where(eq(PaperTable.id, paper.id));
  } catch (error) {
    console.error("Error updating paper:", error);
  }

  return new Response(JSON.stringify({
    upated: paper.id
  })
  )
}