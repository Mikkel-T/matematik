import { atom } from "nanostores";
import type { Except } from "type-fest";

export interface AnswerType {
  name: string;

  /**
   * How the name should be displayed, options are as follows:
   * "math" - Render the name and result in two different KaTeX elements, uses colon as divider. This is the default
   * "text" - Show the name as completely normal HTMl text, uses colon as divider
   * "hide" - Hide the name and only show the result
   * "equals" - Render both the name and result in the same KaTeX element, an equals sign is added between the name and result
   */
  nameDisplay?: "math" | "text" | "hide" | "equals";

  answer?: number | string;
  calculation?: string;
  equation?: string;
}

export const answer = atom<AnswerType[]>([]);

export function add(ans: AnswerType) {
  answer.set([...answer.get(), ans]);
}

/**
 * The add function but with nameDisplay set to "text"
 */
export function textAdd(ans: Except<AnswerType, "nameDisplay">) {
  add({ ...ans, nameDisplay: "text" });
}

/**
 * The add function but with nameDisplay set to "hide"
 */
export function hideAdd(ans: Except<AnswerType, "nameDisplay">) {
  add({ ...ans, nameDisplay: "hide" });
}

/**
 * The add function but with nameDisplay set to "equals"
 */
export function equalsAdd(ans: Except<AnswerType, "nameDisplay">) {
  add({ ...ans, nameDisplay: "equals" });
}

export function reset() {
  answer.set([]);
}

export function sort() {
  answer.set(answer.get().sort((a, b) => a.name.localeCompare(b.name)));
}
