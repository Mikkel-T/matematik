export function validateInput(input: string): boolean {
  return /^-?\d+(?:[\.\,]\d+)?$/.test(input);
}

export function parseInput(input: string): number {
  return parseFloat(input.replace(",", "."));
}
