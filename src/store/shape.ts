import { atom, map } from "nanostores";
import { Except } from "type-fest";

import { round } from "@utils/number";

import { AnswerType, addAns } from "@store/answer";

export const vars = map({});
export const answer = map<Record<string, string | number>>({});
export const error = atom("");

export function getAnswer(key: string): number {
  return +answer.get()[key];
}

export function reset() {
  answer.set({});
}

export function shapeAddAns(ans: AnswerType) {
  if (
    Object.hasOwnProperty.call(ans, "answer") &&
    typeof ans.answer === "number"
  ) {
    ans.answer = round(ans.answer).toString();
  }

  answer.setKey(ans.name, ans.answer);
  const { answer: a, ...result } = ans;
  addAns(result);
}

/**
 * The shapeAddAns function but with nameDisplay set to "text"
 */
export function shapeTextAdd(ans: Except<AnswerType, "nameDisplay">) {
  shapeAddAns({ ...ans, nameDisplay: "text" });
}

/**
 * The shapeAddAns function but with nameDisplay set to "hide"
 */
export function shapeHideAdd(ans: Except<AnswerType, "nameDisplay">) {
  shapeAddAns({ ...ans, nameDisplay: "hide" });
}

/**
 * The shapeAddAns function but with nameDisplay set to "equals"
 */
export function shapeEqualsAdd(ans: Except<AnswerType, "nameDisplay">) {
  shapeAddAns({ ...ans, nameDisplay: "equals" });
}
