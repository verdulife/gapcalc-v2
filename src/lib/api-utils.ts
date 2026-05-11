export const API_ERROR = (message: string, status = 500) =>
  new Response(JSON.stringify({ error: message, status }), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export function validateUpdate(body: any, fields: Record<string, string>): boolean {
  for (const [key, type] of Object.entries(fields)) {
    if (body[key] === undefined) return false;
    if (type === "string" && typeof body[key] !== "string") return false;
    if (type === "number" && typeof body[key] !== "number") return false;
  }
  return true;
}

export function validateCreate(body: any, fields: Record<string, string>): boolean {
  return validateUpdate(body, fields);
}

export function generateId(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}