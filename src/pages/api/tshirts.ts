import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/index";
import { tshirts } from "@/db/schema";
import { API_ERROR, validateCreate, validateUpdate, generateId } from "@/lib/api-utils";

export const GET: APIRoute = async () => {
  try {
    const db = getDb();
    const result = await db.select().from(tshirts);
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching tshirts:", error);
    return API_ERROR("Error fetching tshirts");
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const tshirt = await request.json();

    if (!validateUpdate(tshirt, { id: "string", label: "string", price: "number" })) {
      return API_ERROR("Invalid data", 400);
    }

    await db.update(tshirts).set({ label: tshirt.label, price: tshirt.price }).where(eq(tshirts.id, tshirt.id));
    return new Response(JSON.stringify({ updated: tshirt.id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error updating tshirt:", error);
    return API_ERROR("Error updating tshirt");
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const body = await request.json();

    if (!validateCreate(body, { label: "string", price: "number" })) {
      return API_ERROR("Faltan campos obligatorios (label, price)", 400);
    }

    const id = generateId(body.label);
    const existing = await db.select().from(tshirts).where(eq(tshirts.id, id));
    if (existing.length > 0) {
      return API_ERROR("Ya existe un elemento con ese nombre", 409);
    }

    await db.insert(tshirts).values({ id, label: body.label, price: body.price });
    return new Response(JSON.stringify({ created: id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating tshirt:", error);
    return API_ERROR("Error creating tshirt");
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const { id } = await request.json();

    if (typeof id !== "string" || !id) {
      return API_ERROR("ID requerido", 400);
    }

    await db.delete(tshirts).where(eq(tshirts.id, id));
    return new Response(JSON.stringify({ deleted: id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error deleting tshirt:", error);
    return API_ERROR("Error deleting tshirt");
  }
};