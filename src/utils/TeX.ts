export function coord(x: string | number, y: string | number) {
  return `\\left( ${x} , ${y} \\right)`;
}

export function text(str: string) {
  return str.replace(/ /g, "~ ");
}
