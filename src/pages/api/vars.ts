import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/index";
import { vars } from "@/db/schema";
import { API_ERROR, validateUpdate } from "@/lib/api-utils";

const VAR_FIELDS: Record<string, string> = {
  id: "string",
  SECOND_FACE_PRICE: "number",
  WORK_PRICE: "number",
  WORK_PRICE_CARDS: "number",
  EXPRESS_MULIPLIER: "number",
  SCALE_SUBSTRACT_PRICE: "number",
  TSHIRT_PRICE: "number",
};

export const GET: APIRoute = async () => {
  try {
    const db = getDb();
    const result = await db.select().from(vars).where(eq(vars.id, "vars"));
    return new Response(JSON.stringify(result[0] ?? null), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching vars:", error);
    return API_ERROR("Error fetching vars");
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const varsData = await request.json();

    if (!validateUpdate(varsData, VAR_FIELDS)) {
      return API_ERROR("Invalid data", 400);
    }

    await db.update(vars).set({
      SECOND_FACE_PRICE: varsData.SECOND_FACE_PRICE,
      WORK_PRICE: varsData.WORK_PRICE,
      WORK_PRICE_CARDS: varsData.WORK_PRICE_CARDS,
      EXPRESS_MULIPLIER: varsData.EXPRESS_MULIPLIER,
      SCALE_SUBSTRACT_PRICE: varsData.SCALE_SUBSTRACT_PRICE,
      TSHIRT_PRICE: varsData.TSHIRT_PRICE,
    }).where(eq(vars.id, varsData.id));
    return new Response(JSON.stringify({ updated: varsData.id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error updating vars:", error);
    return API_ERROR("Error updating vars");
  }
};