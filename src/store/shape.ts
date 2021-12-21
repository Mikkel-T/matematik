import { map } from 'nanostores';

export const vars = map({});
export const readOnly = map({});
export const answer = map({});

export function set(key: never, val: never) {
  vars.setKey(key, val);
}

export function reset() {
  answer.set({})
  vars.set({});
}
