function roundToFive(value: number): number {
  return Math.ceil(value / 0.05) * 0.05;
}

export function formatPrice(price: number): string {
  const rounded = roundToFive(price);
  return Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rounded);
}

export async function textToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Clipboard error:", err);
    return false;
  }
}

export const VARS_DICTIONARY: Record<string, string> = {
  SECOND_FACE_PRICE: "Precio segunda cara",
  WORK_PRICE: "Corte",
  WORK_PRICE_CARDS: "Añadido corte tarjetas",
  EXPRESS_MULIPLIER: "Multiplicador de urgencias",
  SCALE_SUBSTRACT_PRICE: "Reducción al escalar",
  TSHIRT_PRICE: "Precio de camiseta",
};