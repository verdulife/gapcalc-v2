import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/index";
import { plotters } from "@/db/schema";
import { API_ERROR, validateCreate, validateUpdate, generateId } from "@/lib/api-utils";

const PLOTTER_FIELDS = { label: "string", width_cm: "number", price: "number", min_price: "number" };

export const GET: APIRoute = async () => {
  try {
    const db = getDb();
    const result = await db.select().from(plotters);
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching plotters:", error);
    return API_ERROR("Error fetching plotters");
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const plotter = await request.json();

    if (!validateUpdate(plotter, { id: "string", ...PLOTTER_FIELDS })) {
      return API_ERROR("Invalid data", 400);
    }

    await db.update(plotters).set({
      label: plotter.label,
      width_cm: plotter.width_cm,
      price: plotter.price,
      min_price: plotter.min_price,
    }).where(eq(plotters.id, plotter.id));
    return new Response(JSON.stringify({ updated: plotter.id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error updating plotter:", error);
    return API_ERROR("Error updating plotter");
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const body = await request.json();

    if (!validateCreate(body, PLOTTER_FIELDS)) {
      return API_ERROR("Faltan campos obligatorios (label, width_cm, price, min_price)", 400);
    }

    const id = generateId(body.label);
    const existing = await db.select().from(plotters).where(eq(plotters.id, id));
    if (existing.length > 0) {
      return API_ERROR("Ya existe un elemento con ese nombre", 409);
    }

    await db.insert(plotters).values({
      id,
      label: body.label,
      width_cm: body.width_cm,
      price: body.price,
      min_price: body.min_price,
    });
    return new Response(JSON.stringify({ created: id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating plotter:", error);
    return API_ERROR("Error creating plotter");
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const { id } = await request.json();

    if (typeof id !== "string" || !id) {
      return API_ERROR("ID requerido", 400);
    }

    await db.delete(plotters).where(eq(plotters.id, id));
    return new Response(JSON.stringify({ deleted: id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error deleting plotter:", error);
    return API_ERROR("Error deleting plotter");
  }
};