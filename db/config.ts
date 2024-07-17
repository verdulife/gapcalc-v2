import { defineDb, defineTable, column } from 'astro:db';

const PaperTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text(),
    price: column.number(),
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

const VarTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    SECOND_FACE_PRICE: column.number(),
    WORK_PRICE: column.number(),
    WORK_PRICE_CARDS: column.number(),
    EXPRESS_MULIPLIER: column.number(),
    SCALE_SUBSTRACT_PRICE: column.number(),
    TSHIRT_PRICE: column.number(),
  }
})

export default defineDb({
  tables: { PaperTable, PrintTable, PlotterTable, TshirtTable, VarTable },
});
