import { atom, map } from 'nanostores';

export const vars = map({});
export const answer = map({});
export const error = atom('');

export function set(key: never, val: never) {
  vars.setKey(key, val);
}

export function reset() {
  answer.set({});
}
