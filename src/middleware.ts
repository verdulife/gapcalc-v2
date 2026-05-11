import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const authCookie = context.cookies.get("auth");

  if (pathname === "/ajustes" || pathname === "/api/auth" || pathname === "/api/logout") {
    if (pathname === "/api/auth" || pathname === "/api/logout") {
      return next();
    }
    if (authCookie?.value !== "ok") {
      return context.redirect("/login");
    }
  }

  return next();
});