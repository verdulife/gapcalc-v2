function roundToFive(value: number): number {
  return Math.ceil(value / 0.05) * 0.05;
}

export function formatPrice(price: number): string {
  const rounded = roundToFive(price);

  return Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rounded);
}

export function formatPlural(amount: number, text: string): string {
  return amount === 1 ? `${amount} ${text}` : `${amount} ${text}s`;
}

export function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export async function textToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.log('Failed to copy: ', err);
    return false;
  }
}