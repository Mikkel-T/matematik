export function factorial(n: number) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
