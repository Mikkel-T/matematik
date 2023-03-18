export function round(number: number, decimal = 4): number {
  return parseFloat(number.toFixed(decimal));
}
