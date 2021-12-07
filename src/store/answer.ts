import { atom } from 'nanostores';

export const answer = atom([]);

export function add(ans) {
  answer.set([...answer.get(), ans]);
}

export function reset() {
  answer.set([]);
}
