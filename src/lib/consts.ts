import { round } from "@/lib/utils";

export const SECOND_FACE_PRICE = 0.85;
export const WORK_PRICE = 10;
export const DISPLAY_AMOUNTS = [25, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900, 1000];
export const PLOTTER_ADDED_CM = 10;
export const ALLOWED_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "=", "Enter", "Backspace", "DEL", "AC", "Escape"];
export const EXPRESS_MULIPLIER = 1.15;
export const WIDTH_LOSS_CM = 5;
export const SEPARATOR_CM = 0.5;
export const MINIMUM_HEIGHT = 20;

export const papers = [
  {
    id: "300gr",
    label: "300gr",
    price: [2.60, round(2.60 + SECOND_FACE_PRICE)]
  },
  {
    id: "300gr_texturado",
    label: "300gr Texturado",
    price: [2.70, round(2.70 + SECOND_FACE_PRICE)]
  },
  {
    id: "135gr",
    label: "135gr",
    price: [1.70, round(1.70 + SECOND_FACE_PRICE)]
  },
  {
    id: "adhesivo",
    label: "Adhesivo",
    price: [1.90, round(1.90 + SECOND_FACE_PRICE)]
  },
  {
    id: "adhesivo_especial",
    label: "Adhesivo Especial",
    price: [2.80, round(2.80 + SECOND_FACE_PRICE)]
  }
];

export const plotters = [
  {
    id: "papel_masas",
    label: "Papel masas",
    width_cm: 128,
    price: 37.20
  },
  {
    id: "papel_foto",
    label: "Papel foto",
    width_cm: 105,
    price: 55.90
  },
  {
    id: "vinilo_corte",
    label: "Vinilo corte",
    width_cm: 60,
    price: 31.95
  },
  {
    id: "vinilo_corte_esp",
    label: "Vinilo corte esp",
    width_cm: 152,
    price: 88.30
  },
  {
    id: "vinilo_impresion",
    label: "Vinilo impresión",
    width_cm: 105,
    price: 48.30
  },
  {
    id: "vinilo_imp_laminado",
    label: "Vinilo imp laminado",
    width_cm: 105,
    price: 55.90
  },
  {
    id: "lona",
    label: "Lona",
    width_cm: 160,
    price: 73.60
  },
  {
    id: "canvas",
    label: "Canvas",
    width_cm: 152,
    price: 128.75
  },
  {
    "id": "carton_pluma",
    label: "Cartón pluma",
    width_cm: 100,
    price: 16.95
  },
  {
    id: "iman_adhesivo",
    label: "Imán adhesivo",
    width_cm: 60,
    price: 29.55
  }
];

export const prints = [
  {
    id: "tarjetas_visita",
    label: "Tarjetas visita",
    per_sheet: 25,
  },
  {
    id: "din_a6",
    label: "DIN A6",
    per_sheet: 8,
  },
  {
    id: "din_a5",
    label: "DIN A5",
    per_sheet: 4,
  },
  {
    id: "tarjeton",
    label: "Tarjetón",
    per_sheet: 6,
  },
  {
    id: "din_a4",
    label: "DIN A4",
    per_sheet: 2,
  },
];