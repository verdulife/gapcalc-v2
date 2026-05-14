import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { password } = await request.json();
    const authPassword = import.meta.env.AUTH_PASSWORD;

    if (password === authPassword) {
      cookies.set("auth", "ok", {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: false }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in auth:", error);
    return new Response(JSON.stringify({ error: "Auth error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};