import { atom, map } from "nanostores";

export const vars = map({});
export const answer = map<Record<string, string | number>>({});
export const error = atom("");

export function set(key: never, val: never) {
  vars.setKey(key, val);
}

export function getAnswer(key: string): number {
  return +answer.get()[key];
}

export function reset() {
  answer.set({});
}
