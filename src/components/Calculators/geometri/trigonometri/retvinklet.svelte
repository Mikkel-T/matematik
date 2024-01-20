<script lang="ts">
  import Input from "@components/Svg/Input.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Svg from "@components/Svg/Svg.svelte";
  import Text from "@components/Svg/Text.svelte";
  import Calculator from "@components/calculatorutils/ShapeCalculator.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import {
    frac,
    mul,
    na,
    pi,
    pow,
    bpar,
    sqrt,
    text,
    inverseFrac,
    sqrtCalc,
    angleCalc,
    fracCalc,
    multiplyCalc,
    type Op,
  } from "@math/calculation";
  import { shapeInput } from "@math/utils";

  function getReadonly() {
    let keys = Object.keys(calculator.valuesFiltered);
    if (keys.length === 0) {
      return {
        A: false,
        B: false,
        a: false,
        b: false,
        c: false,
      };
    } else if (keys.length === 1) {
      let key = keys[0];
      if (key.toLowerCase() === key) {
        return {
          A: false,
          B: false,
          a: false,
          b: false,
          c: false,
        };
      } else {
        return {
          A: !key.includes("A"),
          B: !key.includes("B"),
          a: false,
          b: false,
          c: false,
        };
      }
    } else {
      return {
        A: !keys.includes("A"),
        B: !keys.includes("B"),
        a: !keys.includes("a"),
        b: !keys.includes("b"),
        c: !keys.includes("c"),
      };
    }
  }

  let readonly = $derived(getReadonly());

  function calculate() {
    let { A, B, a, b, c } = calculator.opValuesFiltered;

    if ((A && A.answer >= 90) || (B && B.answer >= 90)) {
      throw new Error("Vinklerne (A eller B) skal være mindre end 90°");
    }

    if ((a && c && c.answer <= a.answer) || (b && c && c.answer <= b.answer)) {
      throw new Error(
        "Kateterne (a eller b) skal være mindre end hypotenusen (c)",
      );
    }

    let answers: Answer[] = [];

    if (A) {
      answers.push(shapeInput("A", A.answer));
    }
    if (B) {
      answers.push(shapeInput("B", B.answer));
    }
    if (a) {
      answers.push(shapeInput("a", a.answer));
    }
    if (b) {
      answers.push(shapeInput("b", b.answer));
    }
    if (c) {
      answers.push(shapeInput("c", c.answer));
    }

    if (a && b) {
      answers.push(
        new Answer("A", inverseFrac({ func: "tan", top: a, bottom: b })),
        new Answer("B", inverseFrac({ func: "tan", top: b, bottom: a })),
        new Answer("c", sqrtCalc({ first: a, operator: "+", second: b })),
      );
    } else if (a && c) {
      answers.push(
        new Answer("A", inverseFrac({ func: "sin", top: a, bottom: c })),
        new Answer("B", inverseFrac({ func: "cos", top: a, bottom: c })),
        new Answer("b", sqrtCalc({ first: c, operator: "-", second: a })),
      );
    } else if (a && A) {
      answers.push(
        new Answer("B", angleCalc({ angle: A })),
        new Answer("b", fracCalc({ func: "tan", top: a, bottom: A })),
        new Answer("c", fracCalc({ func: "sin", top: a, bottom: A })),
      );
    } else if (a && B) {
      answers.push(
        new Answer("A", angleCalc({ angle: B })),
        new Answer("b", multiplyCalc({ first: a, func: "tan", second: B })),
        new Answer("c", fracCalc({ func: "cos", top: a, bottom: B })),
      );
    } else if (b && c) {
      answers.push(
        new Answer("A", inverseFrac({ func: "cos", top: b, bottom: c })),
        new Answer("B", inverseFrac({ func: "sin", top: b, bottom: c })),
        new Answer("a", sqrtCalc({ first: c, operator: "-", second: b })),
      );
    } else if (b && A) {
      answers.push(
        new Answer("B", angleCalc({ angle: A })),
        new Answer("a", multiplyCalc({ first: b, func: "tan", second: A })),
        new Answer("c", fracCalc({ func: "cos", top: b, bottom: A })),
      );
    } else if (b && B) {
      answers.push(
        new Answer("A", angleCalc({ angle: B })),
        new Answer("a", fracCalc({ func: "tan", top: b, bottom: B })),
        new Answer("c", fracCalc({ func: "sin", top: b, bottom: B })),
      );
    } else if (c && A) {
      answers.push(
        new Answer("B", angleCalc({ angle: A })),
        new Answer("a", multiplyCalc({ first: c, func: "sin", second: A })),
        new Answer("b", multiplyCalc({ first: c, func: "cos", second: A })),
      );
    } else if (c && B) {
      answers.push(
        new Answer("A", angleCalc({ angle: B })),
        new Answer("a", multiplyCalc({ first: c, func: "cos", second: B })),
        new Answer("b", multiplyCalc({ first: c, func: "sin", second: B })),
      );
    } else {
      throw new Error("Der er ikke nok informationer til at beregne trekanten");
    }

    answer.add(...answers);
    answer.add(
      new Answer("C", {
        calculation: "C" + text(" er altid ") + "90^{\\circ}",
      }),
      new Answer(
        "Areal",
        mul(
          frac(na(1), na(2)),
          mul(answer.get("a")?.getNewOp as Op, answer.get("b")?.getNewOp as Op),
        ),
        "text",
      ),
    );
  }
</script>

<Calculator {calculate}>
  <div
    class="m-auto mt-5 hidden h-[440px] w-[750px] pl-12 text-center sm:block"
  >
    <Input
      name="A"
      readonly={readonly.A}
      placeholder="Vinkel A"
      class="float-left ml-16 border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="b"
      readonly={readonly.b}
      placeholder="Katete b"
      class="float-left -mb-44 ml-[-253px] mt-48 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="c"
      readonly={readonly.c}
      placeholder="Hypotenuse c"
      class="absolute -ml-20 mt-40 border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Svg width={500} height={300}>
      <Path d="M 3 257 h 40 v 40" class="text-green-800" />
      <Path d="M 420 297 A 80 80 180 0 1 433 260" class="text-blue-500" />
      <Path d="M 69 41 A 80 80 0 0 1 4 80" class="text-orange-500" />

      <Path d="M 3 3 V 297" class="text-blue-500" />
      <Path d="M 3 297 H 497" class="text-orange-500" />
      <Path d="M 3 3 L 497 297" class="text-green-800" />

      <Text
        x={15}
        y={100}
        text={answer.has("A") ? `A: ${answer.get("A")?.getAns}°` : ""}
      />
      <Text
        x={350}
        y={280}
        text={answer.has("B") ? `B: ${answer.get("B")?.getAns}°` : ""}
      />
      <Text x={48} y={252} text="C: 90°" />
      <Text
        x={175}
        y={280}
        text={answer.has("a") ? `a: ${answer.get("a")?.getAns}` : ""}
      />
      <Text
        x={15}
        y={180}
        text={answer.has("b") ? `b: ${answer.get("b")?.getAns}` : ""}
      />
      <Text
        x={200}
        y={180}
        text={answer.has("c") ? `c: ${answer.get("c")?.getAns}` : ""}
      />
      <Text
        x={120}
        y={230}
        text={answer.has("Areal")
          ? `Areal: ${answer.get("Areal")?.getAns}`
          : ""}
      />
    </Svg>
    <Input
      name="a"
      readonly={readonly.a}
      placeholder="Katete a"
      class="-mr-24 border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="B"
      readonly={readonly.B}
      placeholder="Vinkel B"
      class="float-right mr-16 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="m-auto text-center sm:hidden">
    <Svg width={250} height={150}>
      <Path d="M 3 128.5 h 20 v 20" class="text-green-800" />
      <Path d="M 210 148.5 A 40 40 90 0 1 216.5 130" class="text-blue-500" />
      <Path d="M 34.5 20.5 A 40 40 0 0 1 4 40" class="text-orange-500" />

      <Path d="M 3 3 V 148.5" class="text-blue-500" />
      <Path d="M 3 148.5 H 248.5" class="text-orange-500" />
      <Path d="M 3 3 L 248.5 148.5" class="text-green-800" />
      <Text x={24} y={126} text="C: 90°" />
    </Svg>
    <Input
      name="A"
      readonly={readonly.A}
      placeholder="Vinkel A"
      class="mx-auto my-1 block border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="a"
      readonly={readonly.a}
      placeholder="Katete a"
      class="mx-auto my-1 block border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="B"
      readonly={readonly.B}
      placeholder="Vinkel B"
      class="mx-auto my-1 block border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="b"
      readonly={readonly.b}
      placeholder="Katete b"
      class="mx-auto my-1 block border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="c"
      readonly={readonly.c}
      placeholder="Hypotenuse c"
      class="mx-auto my-1 block border-green-800 focus:border-green-800 focus:ring-green-800"
    />
  </div>
</Calculator>
