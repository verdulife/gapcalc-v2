import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core";

export const papers = sqliteTable("papers", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  price: real("price").notNull(),
});

export const prints = sqliteTable("prints", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  per_sheet: integer("per_sheet").notNull(),
});

export const plotters = sqliteTable("plotters", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  width_cm: real("width_cm").notNull(),
  price: real("price").notNull(),
  min_price: real("min_price").default(16).notNull(),
});

export const tshirts = sqliteTable("tshirts", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  price: real("price").notNull(),
});

export const vars = sqliteTable("vars", {
  id: text("id").primaryKey(),
  SECOND_FACE_PRICE: real("SECOND_FACE_PRICE").notNull(),
  WORK_PRICE: real("WORK_PRICE").notNull(),
  WORK_PRICE_CARDS: real("WORK_PRICE_CARDS").notNull(),
  EXPRESS_MULIPLIER: real("EXPRESS_MULIPLIER").notNull(),
  SCALE_SUBSTRACT_PRICE: real("SCALE_SUBSTRACT_PRICE").notNull(),
  TSHIRT_PRICE: real("TSHIRT_PRICE").notNull(),
});

export type Paper = typeof papers.$inferSelect;
export type Print = typeof prints.$inferSelect;
export type Plotter = typeof plotters.$inferSelect;
export type Tshirt = typeof tshirts.$inferSelect;
export type Var = typeof vars.$inferSelect;