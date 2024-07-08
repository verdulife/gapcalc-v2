export function formatPrice(price: number): string {
  return Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export function formatPlural(amount: number, text: string): string {
  return amount === 1 ? `${amount} ${text}` : `${amount} ${text}s`;
}