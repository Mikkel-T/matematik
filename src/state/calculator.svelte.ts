import { na, type Ans, type Op } from "@math/calculation";
import { round } from "@math/utils";

let _values = $state<Record<string, number>>({});

let _answer = $state<Answer[]>([]);

let _inputError = $state<boolean>(false);

let _shapeInputs = $state<Record<string, string>>({});

export const calculator = {
  get values() {
    return _values;
  },
  get valuesFiltered() {
    return Object.fromEntries(
      Object.entries(_values).filter(([, v]) => typeof v === "number"),
    );
  },
  set values(value) {
    _values = value;
  },
  get opValues() {
    return Object.fromEntries(
      Object.entries(_values).map(([k, v]) => [k, na(v, k)]),
    );
  },
  get opValuesFiltered() {
    return Object.fromEntries(
      Object.entries(_values)
        .filter(([, v]) => typeof v === "number")
        .map(([k, v]) => [k, na(v, k)]),
    );
  },
  get answer() {
    return _answer;
  },
  set answer(value) {
    _answer = value;
  },
  get inputError() {
    return _inputError;
  },
  set inputError(value) {
    _inputError = value;
  },
  runChecks() {
    if (_inputError) {
      throw new Error(
        "En eller flere af de indtastede værdier er ikke gyldige tal",
      );
    }
  },
  get shapeInputs() {
    return _shapeInputs;
  },
  set shapeInputs(value) {
    _shapeInputs = value;
  },
};

export const answer = {
  reset() {
    _answer = [];
  },
  add(...answer: Answer[]) {
    _answer = [..._answer, ...answer];
  },
  has(name: string) {
    return _answer.some((a) => a.name === name);
  },
  get(name: string) {
    return _answer.find((a) => a.name === name);
  },
};

export class Answer {
  name: string;
  /**
   * How the name should be displayed, options are as follows:
   * "math" - Render the name and result in two different KaTeX elements, uses colon as divider
   * "text" - Show the name as completely normal HTMl text, uses colon as divider
   * "hide" - Hide the name and only show the result
   * "equals" - Render both the name and result in the same KaTeX element, an equals sign is added between the name and result. This is the default
   */
  nameDisplay: "math" | "text" | "hide" | "equals";
  answer?: number | string;
  calculation?: string;
  equation?: string;

  constructor(
    name: string,
    calc: Partial<Ans>,
    nameDisplay?: "math" | "text" | "hide" | "equals",
  );
  constructor(
    name: string,
    calc: Partial<Op>,
    nameDisplay?: "math" | "text" | "hide" | "equals",
  ) {
    this.name = name;
    this.nameDisplay = nameDisplay ?? "equals";
    if ("answer" in calc) {
      this.answer = calc.answer;
    }
    if ("calculation" in calc) {
      this.calculation = calc.calculation;
    }
    if ("equation" in calc) {
      this.equation = calc.equation;
    }
  }

  get getOp(): Op {
    if (
      !("answer" in this) ||
      !("calculation" in this) ||
      !("equation" in this) ||
      typeof this.answer === "string"
    ) {
      throw new Error(
        "Der opstod en uventet fejl under udregningen, prøv igen",
      );
    }
    return {
      answer: this.answer as number,
      calculation: this.calculation as string,
      equation: this.equation as string,
    };
  }

  get getNewOp(): Op {
    if (
      !("answer" in this) ||
      !("calculation" in this) ||
      !("equation" in this) ||
      typeof this.answer === "string"
    ) {
      throw new Error(
        "Der opstod en uventet fejl under udregningen, prøv igen",
      );
    }
    return na(this.getAns, this.name);
  }

  get getAns(): number {
    if (!("answer" in this) || typeof this.answer === "string") {
      throw new Error(
        "Der opstod en uventet fejl under udregningen, prøv igen",
      );
    }
    return round(this.answer as number);
  }

  has(key: string): boolean {
    if (key === "answer") {
      return "answer" in this && this.answer !== undefined;
    }
    if (key === "calculation") {
      return "calculation" in this && this.calculation !== undefined;
    }
    if (key === "equation") {
      return "equation" in this && this.equation !== undefined;
    }
    return false;
  }

  get(key: string): any {
    if (!this.has(key)) {
      throw new Error(
        `Der opstod en uventet fejl under udregningen, prøv igen`,
      );
    }
    if (key === "answer") {
      if (typeof this.answer === "string") {
        return this.answer;
      } else {
        return round(this.answer as number);
      }
    }
    if (key === "calculation") {
      return this.calculation;
    }
    if (key === "equation") {
      return this.equation;
    }
  }
}
