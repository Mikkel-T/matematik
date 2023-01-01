// Redefine trigonometric functions to use degrees
export const tan = (x: number) => Math.tan((x * Math.PI) / 180);
export const cos = (x: number) => Math.cos((x * Math.PI) / 180);
export const sin = (x: number) => Math.sin((x * Math.PI) / 180);
export const atan = (x: number) => (Math.atan(x) * 180) / Math.PI;
export const acos = (x: number) => (Math.acos(x) * 180) / Math.PI;
export const asin = (x: number) => (Math.asin(x) * 180) / Math.PI;

export const atan2 = (y: number, x: number) =>
  (Math.atan2(y, x) * 180) / Math.PI;
