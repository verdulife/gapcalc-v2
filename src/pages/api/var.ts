import type { APIRoute } from 'astro';
import { db, eq, VarTable } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const vars = await request.json();

  try {
    await db.update(VarTable).set({ id: "vars", ...vars }).where(eq(VarTable.id, "vars"));
  } catch (error) {
    console.error("Error updating plotter:", error);
  }

  return new Response(JSON.stringify({
    upated: vars
  })
  )
}