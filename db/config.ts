import { defineDb, defineTable, column } from 'astro:db';

const PaperTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    price: column.json(),
  }
})

const PrintTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    per_sheet: column.number(),
  }
})

const PlotterTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    width_cm: column.number(),
    price: column.number(),
  }
})

const TshirtTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    price: column.number(),
  }
})

export default defineDb({
  tables: { PaperTable, PrintTable, PlotterTable, TshirtTable },
});
