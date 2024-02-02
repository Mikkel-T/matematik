import { Answer } from "@state/calculator.svelte";
import { text } from "./calculation";

export function round(number: number, decimal = 4): number {
  return parseFloat(number.toFixed(decimal));
}

export function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function shapeInput(name: string, answer: number) {
  return new Answer(
    name,
    { answer: answer, calculation: text(`${answer} blev indtastet`) },
    "text",
  );
}
