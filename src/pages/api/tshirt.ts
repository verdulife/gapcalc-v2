import type { APIRoute } from 'astro';
import { db, eq, TshirtTable } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const tshirt = await request.json();

  try {
    await db.update(TshirtTable).set(tshirt).where(eq(TshirtTable.id, tshirt.id));
  } catch (error) {
    console.error("Error updating plotter:", error);
  }

  return new Response(JSON.stringify({
    upated: tshirt.id
  })
  )
}