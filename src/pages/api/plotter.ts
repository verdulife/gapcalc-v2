import type { APIRoute } from 'astro';
import { db, eq, PlotterTable } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const plotter = await request.json();

  try {
    await db.update(PlotterTable).set(plotter).where(eq(PlotterTable.id, plotter.id));
  } catch (error) {
    console.error("Error updating plotter:", error);
  }

  return new Response(JSON.stringify({
    upated: plotter.id
  })
  )
}