import { defineTable, column, defineDb } from 'astro:db';

export const PrintsTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    per_sheet: column.number()
  }
});

export const PapersTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    price: column.json({ default: [0, 0] })
  }
});

export default defineDb({
  tables: { PrintsTable, PapersTable }
});
