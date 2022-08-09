import { atom } from "nanostores";

export const answer = atom([]);

export function add(ans) {
  answer.set([...answer.get(), ans]);
}

export function reset() {
  answer.set([]);
}

export function sort() {
  answer.set(answer.get().sort((a, b) => a.name.localeCompare(b.name)));
}
