import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/index";
import { prints } from "@/db/schema";
import { API_ERROR, validateUpdate } from "@/lib/api-utils";

export const GET: APIRoute = async () => {
  try {
    const db = getDb();
    const result = await db.select().from(prints);
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching prints:", error);
    return API_ERROR("Error fetching prints");
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const print = await request.json();

    if (!validateUpdate(print, { id: "string", label: "string", per_sheet: "number" })) {
      return API_ERROR("Invalid data", 400);
    }

    await db.update(prints).set({ label: print.label, per_sheet: print.per_sheet }).where(eq(prints.id, print.id));
    return new Response(JSON.stringify({ updated: print.id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error updating print:", error);
    return API_ERROR("Error updating print");
  }
};