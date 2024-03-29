<script lang="ts">
  import Input from "@components/Svg/Input.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Svg from "@components/Svg/Svg.svelte";
  import Text from "@components/Svg/Text.svelte";
  import Calculator from "@components/calculatorutils/ShapeCalculator.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import {
    na,
    type Op,
    cosrelSidesToAngle,
    cosrelSidesAngleToSide,
    sinrelSidesAngleToAngle,
    sub,
    sinrelAnglesSideToSide,
  } from "@math/calculation";
  import { shapeInput } from "@math/utils";

  let info = $state("");

  function getReadonly() {
    let keys = Object.keys(calculator.valuesFiltered);
    if (keys.length === 0 || keys.length === 1) {
      return {
        A: false,
        B: false,
        C: false,
        a: false,
        b: false,
        c: false,
      };
    } else if (keys.length === 2) {
      if (keys.every((key) => key === key.toUpperCase())) {
        return {
          A: !keys.includes("A"),
          B: !keys.includes("B"),
          C: !keys.includes("C"),
          a: false,
          b: false,
          c: false,
        };
      } else {
        return {
          A: false,
          B: false,
          a: false,
          b: false,
          c: false,
        };
      }
    } else {
      return {
        A: !keys.includes("A"),
        B: !keys.includes("B"),
        C: !keys.includes("C"),
        a: !keys.includes("a"),
        b: !keys.includes("b"),
        c: !keys.includes("c"),
      };
    }
  }

  let readonly = $derived(getReadonly());

  function calculate() {
    let { A, B, C, a, b, c } = calculator.opValuesFiltered;
    let vals = calculator.opValuesFiltered;

    let angle = 0;

    if (A) angle += A.answer;
    if (B) angle += B.answer;
    if (C) angle += C.answer;

    if (angle >= 180) {
      throw new Error("Summen af vinklerne skal være mindre end 180°");
    }

    let answers: Answer[] = [];

    if (A) answers.push(shapeInput("A", A.answer));
    if (B) answers.push(shapeInput("B", B.answer));
    if (C) answers.push(shapeInput("C", C.answer));
    if (a) answers.push(shapeInput("a", a.answer));
    if (b) answers.push(shapeInput("b", b.answer));
    if (c) answers.push(shapeInput("c", c.answer));

    let sides = [a, b, c].filter((side) => side).length;
    let angles = [A, B, C].filter((angle) => angle).length;

    if (sides === 3 && angles === 0) {
      // If all 3 sides are known, use the cosine relation to find the 3 angles
      if (
        a.answer + b.answer <= c.answer ||
        a.answer + c.answer <= b.answer ||
        b.answer + c.answer <= a.answer
      ) {
        throw new Error("De tre sider kan ikke danne en trekant");
      }

      answers.push(
        new Answer(
          "A",
          cosrelSidesToAngle({ first: b, second: c, opposite: a }),
        ),
        new Answer(
          "B",
          cosrelSidesToAngle({ first: a, second: c, opposite: b }),
        ),
        new Answer(
          "C",
          cosrelSidesToAngle({ first: a, second: b, opposite: c }),
        ),
      );
    } else if (sides === 2 && angles === 1) {
      // If two sides are known, check if the missing side is the opposite side of the known angle and then use either the cosine relation or the sinus relation
      let missingSide = ["a", "b", "c"].find(
        (side) => !Object.keys(vals).includes(side),
      ) as string;
      let knownSides = [a, b, c].filter((side) => side);
      let missingAngles = ["A", "B", "C"].filter(
        (angle) => !Object.keys(vals).includes(angle),
      );
      let knownAngle = [A, B, C].find((angle) => angle) as Op;

      // Check whether the missing side is the opposite side of the known angle
      if (missingSide === knownAngle?.equation.toLowerCase()) {
        // If the missing side is opposite to the known angle, then the cosine relation can be used to calculate the missing side and then the angles
        let side = new Answer(
          missingSide,
          cosrelSidesAngleToSide({
            first: knownSides[0],
            second: knownSides[1],
            angle: knownAngle,
          }),
        );

        answers.push(
          side,
          new Answer(
            missingAngles[0],
            cosrelSidesToAngle({
              first: side.getNewOp,
              second: vals[missingAngles[1].toLowerCase()],
              opposite: vals[missingAngles[0].toLowerCase()],
            }),
          ),
          new Answer(
            missingAngles[1],
            cosrelSidesToAngle({
              first: side.getNewOp,
              second: vals[missingAngles[0].toLowerCase()],
              opposite: vals[missingAngles[1].toLowerCase()],
            }),
          ),
        );
      } else {
        // If the missing side is opposite to one of the known angles, the sinus relation can be used together with the rule about sum of angles
        let sideWithoutOpposite = knownSides.find(
          (side) =>
            side.equation.toLowerCase() !== knownAngle.equation.toLowerCase(),
        ) as Op;
        let sideWithOpposite = knownSides.find(
          (side) =>
            side.equation.toLowerCase() === knownAngle.equation.toLowerCase(),
        ) as Op;

        let angle = new Answer(
          sideWithoutOpposite.equation.toUpperCase(),
          sinrelSidesAngleToAngle({
            opposite: sideWithoutOpposite,
            angle: knownAngle,
            angleOpposite: sideWithOpposite,
          }),
        );

        let angle2 = new Answer(
          missingSide.toUpperCase(),
          sub(sub(na(180), knownAngle), angle.getNewOp),
        );

        answers.push(
          angle,
          angle2,
          new Answer(
            missingSide,
            sinrelAnglesSideToSide({
              sideOpposite: knownAngle,
              side: sideWithOpposite,
              opposite: angle2.getNewOp,
            }),
          ),
        );

        if (
          knownAngle.answer < 90 &&
          sideWithOpposite.answer < sideWithoutOpposite.answer
        ) {
          info =
            "To trekanter kan beregnes ud fra denne information. Begge trekanter er vist.";

          let angle_2 = new Answer(
            sideWithoutOpposite.equation.toUpperCase() + "_2",
            sub(
              na(180),
              sinrelSidesAngleToAngle({
                opposite: sideWithoutOpposite,
                angle: knownAngle,
                angleOpposite: sideWithOpposite,
              }),
            ),
          );

          let angle2_2 = new Answer(
            missingSide.toUpperCase() + "_2",
            sub(sub(na(180), knownAngle), angle_2.getNewOp),
          );

          answers.push(
            angle_2,
            angle2_2,
            new Answer(
              missingSide + "_2",
              sinrelAnglesSideToSide({
                sideOpposite: knownAngle,
                side: sideWithOpposite,
                opposite: angle2_2.getNewOp,
              }),
            ),
          );
        }
      }
    } else if (sides === 1 && angles === 2) {
      // If only one side is known, first find the missing angle by subtracting the other angles from 180 and then use the sinus relation to find the two other sides
      let missingAngle = ["A", "B", "C"].find(
        (angle) => !Object.keys(vals).includes(angle),
      ) as string;
      let knownAngles = [A, B, C].filter((angle) => angle);
      let missingSides = ["a", "b", "c"].filter(
        (side) => !Object.keys(vals).includes(side),
      );
      let knownSide = [a, b, c].find((side) => side) as Op;

      let angle = new Answer(
        missingAngle,
        sub(sub(na(180), knownAngles[0]), knownAngles[1]),
      );

      vals[missingAngle] = angle.getNewOp;

      answers.push(
        angle,
        new Answer(
          missingSides[0],
          sinrelAnglesSideToSide({
            side: knownSide,
            sideOpposite: vals[knownSide.equation.toUpperCase()],
            opposite: vals[missingSides[0].toUpperCase()],
          }),
        ),
        new Answer(
          missingSides[1],
          sinrelAnglesSideToSide({
            side: knownSide,
            sideOpposite: vals[knownSide.equation.toUpperCase()],
            opposite: vals[missingSides[1].toUpperCase()],
          }),
        ),
      );
    } else {
      throw new Error("Der er ikke nok informationer til at beregne trekanten");
    }

    answer.add(...answers);
  }
</script>

<Calculator {calculate} {info}>
  <div class="m-auto mt-5 hidden h-[540px] w-[750px] text-center sm:block">
    <Input
      name="A"
      readonly={readonly.A}
      placeholder="Vinkel A"
      class="border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="b"
      readonly={readonly.b}
      placeholder="Side b"
      class="absolute ml-[-333px] mt-44 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="c"
      readonly={readonly.c}
      placeholder="Side c"
      class="absolute ml-11 mt-44 border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Svg width={500} height={400}>
      <Path d="M 33 349 A 80 80 0 0 1 60 397" class="text-green-800" />
      <Path d="M 440 397 A 80 80 180 0 1 467 349" class="text-blue-500" />
      <Path d="M 278 48 A 80 80 0 0 1 222 48" class="text-orange-500" />

      <Path d="M 3 397 L 250 3" class="text-blue-500" />
      <Path d="M 3 397 H 497" class="text-orange-500" />
      <Path d="M 497 397 L 250 3" class="text-green-800" />

      <Text
        x={210}
        y={85}
        text={answer.has("A") ? `A: ${answer.get("A")?.getAns}°` : ""}
      />
      <Text
        x={375}
        y={345}
        text={answer.has("B") ? `B: ${answer.get("B")?.getAns}°` : ""}
      />
      <Text
        x={50}
        y={345}
        text={answer.has("C") ? `C: ${answer.get("C")?.getAns}°` : ""}
      />
      <Text
        x={220}
        y={370}
        text={answer.has("a") ? `a: ${answer.get("a")?.getAns}` : ""}
      />
      <Text
        x={140}
        y={200}
        text={answer.has("b") ? `b: ${answer.get("b")?.getAns}` : ""}
      />
      <Text
        x={300}
        y={200}
        text={answer.has("c") ? `c: ${answer.get("c")?.getAns}` : ""}
      />
      <Text
        x={210}
        y={85 + 20}
        text={answer.has("A_2") ? `A₂: ${answer.get("A_2")?.getAns}°` : ""}
      />
      <Text
        x={375}
        y={345 + 20}
        text={answer.has("B_2") ? `B₂: ${answer.get("B_2")?.getAns}°` : ""}
      />
      <Text
        x={50}
        y={345 + 20}
        text={answer.has("C_2") ? `C₂: ${answer.get("C_2")?.getAns}°` : ""}
      />
      <Text
        x={220}
        y={370 + 20}
        text={answer.has("a_2") ? `a₂: ${answer.get("a_2")?.getAns}` : ""}
      />
      <Text
        x={140}
        y={200 + 20}
        text={answer.has("b_2") ? `b₂: ${answer.get("b_2")?.getAns}` : ""}
      />
      <Text
        x={300}
        y={200 + 20}
        text={answer.has("c_2") ? `c₂: ${answer.get("c_2")?.getAns}` : ""}
      />
    </Svg>
    <Input
      name="C"
      readonly={readonly.C}
      placeholder="Vinkel C"
      class="float-left ml-16 border-green-500 focus:border-green-500 focus:ring-green-500"
    />
    <Input
      name="a"
      readonly={readonly.a}
      placeholder="Side a"
      class="border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
    <Input
      name="B"
      readonly={readonly.B}
      placeholder="Vinkel B"
      class="float-right mr-16 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div class="m-auto text-center sm:hidden">
    <Svg width={250} height={200}>
      <Path d="M 16.5 174.5 A 40 40 90 0 1 30 198.5" class="text-green-800" />
      <Path d="M 220 198.5 A 40 40 90 0 1 233.5 174.5" class="text-blue-500" />
      <Path d="M 139 24 A 40 40 90 0 1 111 24" class="text-orange-500" />

      <Path d="M 3 198.5 L 125 3" class="text-blue-500" />
      <Path d="M 3 198.5 H 248.5" class="text-orange-500" />
      <Path d="M 248.5 198.5 L 125 3" class="text-green-800" />
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
      placeholder="Side a"
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
      placeholder="Side b"
      class="mx-auto my-1 block border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="C"
      readonly={readonly.C}
      placeholder="Vinkel C"
      class="mx-auto my-1 block border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Input
      name="c"
      readonly={readonly.c}
      placeholder="Side c"
      class="mx-auto my-1 block border-green-800 focus:border-green-800 focus:ring-green-800"
    />
  </div>
</Calculator>
