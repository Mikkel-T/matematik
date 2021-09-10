export default function p(num: string | number) {
  const ans: string | number = parse0(num);
  return ans.toString();
}

export function parse0(num: string | number) {
  return num ? parseFloat((+num).toFixed(3)) : 0;
}
