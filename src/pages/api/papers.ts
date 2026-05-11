import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/index";
import { papers } from "@/db/schema";
import { API_ERROR, validateCreate, validateUpdate, generateId } from "@/lib/api-utils";

export const GET: APIRoute = async () => {
  try {
    const db = getDb();
    const result = await db.select().from(papers);
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching papers:", error);
    return API_ERROR("Error fetching papers");
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const paper = await request.json();

    if (!validateUpdate(paper, { id: "string", label: "string", price: "number" })) {
      return API_ERROR("Invalid data", 400);
    }

    await db.update(papers).set({ label: paper.label, price: paper.price }).where(eq(papers.id, paper.id));
    return new Response(JSON.stringify({ updated: paper.id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error updating paper:", error);
    return API_ERROR("Error updating paper");
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
    const existing = await db.select().from(papers).where(eq(papers.id, id));
    if (existing.length > 0) {
      return API_ERROR("Ya existe un elemento con ese nombre", 409);
    }

    await db.insert(papers).values({ id, label: body.label, price: body.price });
    return new Response(JSON.stringify({ created: id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating paper:", error);
    return API_ERROR("Error creating paper");
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const db = getDb();
    const { id } = await request.json();

    if (typeof id !== "string" || !id) {
      return API_ERROR("ID requerido", 400);
    }

    await db.delete(papers).where(eq(papers.id, id));
    return new Response(JSON.stringify({ deleted: id }), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error deleting paper:", error);
    return API_ERROR("Error deleting paper");
  }
};