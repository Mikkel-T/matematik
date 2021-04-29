const tan = (x: number) => Math.tan((x * Math.PI) / 180);
const cos = (x: number) => Math.cos((x * Math.PI) / 180);
const sin = (x: number) => Math.sin((x * Math.PI) / 180);
const atan = (x: number) => (Math.atan(x) * 180) / Math.PI;
const acos = (x: number) => (Math.acos(x) * 180) / Math.PI;
const asin = (x: number) => (Math.asin(x) * 180) / Math.PI;

export { tan, cos, sin, atan, acos, asin };
