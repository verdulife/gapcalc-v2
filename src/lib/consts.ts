import { linear } from "svelte/easing";

export const SECOND_FACE_PRICE = 0.85;
export const WORK_PRICE = 15;
export const DISPLAY_AMOUNTS = [25, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
export const PLOTTER_ADDED_CM = 10;
export const PLOTTER_LOSS_CM = 5;

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export const papers = [
  {
    id: "300_mate_satinado",
    name: "300 Mate/Satinado",
    price: [2.60, round(2.60 + SECOND_FACE_PRICE)]
  },
  {
    id: "300_texturado",
    name: "300 Texturado",
    price: [2.70, round(2.70 + SECOND_FACE_PRICE)]
  },
  {
    id: "135_satinado",
    name: "135 Satinado",
    price: [1.70, round(1.70 + SECOND_FACE_PRICE)]
  },
  {
    id: "adhesivo",
    name: "Adhesivo",
    price: [1.90, round(1.90 + SECOND_FACE_PRICE)]
  },
  {
    id: "adhesivo_especial",
    name: "Adhesivo Especial",
    price: [2.80, round(2.80 + SECOND_FACE_PRICE)]
  }
];

export const plotters = [
  {
    id: "papel_masas",
    name: "Papel masas",
    width_cm: 128,
    price: 37.20
  },
  {
    id: "papel_fotografico",
    name: "Papel fotográfico",
    width_cm: 105,
    price: 55.90
  },
  {
    id: "vinilo_corte",
    name: "Vinilo de corte",
    width_cm: 60,
    price: 31.95
  },
  {
    id: "vinilo_corte_especial",
    name: "Vinilo de corte especial",
    width_cm: 152,
    price: 88.30
  },
  {
    id: "vinilo_impresion",
    name: "Vinilo de impresión",
    width_cm: 105,
    price: 48.30
  },
  {
    id: "vinilo_impresion_laminado",
    name: "Vinilo de impresión laminado",
    width_cm: 105,
    price: 55.90
  },
  {
    id: "lona",
    name: "Lona",
    width_cm: 160,
    price: 73.60
  },
  {
    id: "canvas",
    name: "Canvas",
    width_cm: 152,
    price: 128.75
  },
  {
    "id": "carton_pluma",
    name: "Cartón pluma",
    width_cm: 200,
    price: 30.80
  },
  {
    id: "iman_adhesivo",
    name: "Imán adhesivo",
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
    id: "impresion_a6",
    label: "Impresión A6",
    per_sheet: 8,
  },
  {
    id: "impresion_a5",
    label: "Impresión A5",
    per_sheet: 4,
  },
  {
    id: "impresion_100x200",
    label: "Impresión 100x200",
    per_sheet: 6,
  },
  {
    id: "impresion_a4",
    label: "Impresión A4",
    per_sheet: 2,
  },
];