<script lang="ts">
  import Input from "@components/Svg/Input.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Svg from "@components/Svg/Svg.svelte";
  import Text from "@components/Svg/Text.svelte";
  import Calculator from "@components/calculatorutils/ShapeCalculator.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import { frac, mul, na, pi, pow, bpar, sqrt } from "@math/calculation";
  import { shapeInput } from "@math/utils";
  import Circle from "@components/Svg/Circle.svelte";
  import TextWithKaTeX from "@components/utils/TextWithKaTeX.svelte";

  function getReadonly() {
    if (Object.keys(calculator.valuesFiltered).length === 0) {
      return {
        Omkreds: false,
        Diameter: false,
        Areal: false,
        Radius: false,
      };
    }

    let key = Object.keys(calculator.valuesFiltered)[0];
    return {
      Omkreds: key !== "Omkreds",
      Diameter: key !== "Diameter",
      Areal: key !== "Areal",
      Radius: key !== "Radius",
    };
  }

  let readonly = $derived(getReadonly());

  function calculate() {
    let { Omkreds, Diameter, Areal, Radius } = calculator.opValuesFiltered;

    if (Omkreds) {
      answer.add(
        shapeInput("Omkreds", Omkreds.answer),
        new Answer("Radius", frac(Omkreds, mul(na(2), pi())), "text"),
        new Answer("Diameter", frac(Omkreds, pi()), "text"),
        new Answer(
          "Areal",
          frac(pow(Omkreds, na(2)), mul(na(4), pi())),
          "text",
        ),
      );
    } else if (Diameter) {
      const r = frac(Diameter, na(2));
      answer.add(
        shapeInput("Diameter", Diameter.answer),
        new Answer("Radius", r, "text"),
        new Answer("Omkreds", mul(Diameter, pi()), "text"),
        new Answer("Areal", mul(pow(bpar(r), na(2)), pi()), "text"),
      );
    } else if (Areal) {
      const r = sqrt(frac(Areal, pi()));
      answer.add(
        shapeInput("Areal", Areal.answer),
        new Answer("Radius", r, "text"),
        new Answer("Diameter", mul(r, na(2)), "text"),
        new Answer("Omkreds", mul(mul(r, na(2)), pi()), "text"),
      );
    } else if (Radius) {
      answer.add(
        shapeInput("Radius", Radius.answer),
        new Answer("Diameter", mul(Radius, na(2)), "text"),
        new Answer("Omkreds", mul(mul(Radius, na(2)), pi()), "text"),
        new Answer("Areal", mul(pow(Radius, na(2)), pi()), "text"),
      );
    } else {
      throw new Error("Der er ikke nok informationer til at beregne cirklen");
    }
  }
</script>

<Calculator {calculate}>
  <div class="m-auto hidden h-[500px] w-[600px] text-center sm:block">
    <Input
      name="Omkreds"
      readonly={readonly.Omkreds}
      class="float-left -mb-11 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="Diameter"
      readonly={readonly.Diameter}
      class="absolute ml-2 mt-24 border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Input
      name="Areal"
      readonly={readonly.Areal}
      class="absolute -ml-48 mt-[12.5rem] border-purple-700 focus:border-purple-600 focus:ring-purple-600"
    />
    <Input
      name="Radius"
      readonly={readonly.Radius}
      class="absolute ml-10 mt-[12.5rem] border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />

    <Svg width={600} height={500}>
      <Circle x={300} y={250} r={247} class="text-blue-500" />
      <Path d="M 300 3 V 496" class="text-green-800" />
      <Path d="m 300 250 H 546" class="text-orange-500" />

      <Text
        x={340}
        y={270}
        text={answer.has("Radius")
          ? `Radius: ${answer.get("Radius")?.getAns}`
          : ""}
      />
      <Text
        x={310}
        y={155}
        text={answer.has("Diameter")
          ? `Diameter: ${answer.get("Diameter")?.getAns}`
          : ""}
      />
      <Text
        x={0}
        y={60}
        text={answer.has("Omkreds")
          ? `Omkreds: ${answer.get("Omkreds")?.getAns}`
          : ""}
      />
      <Text
        x={110}
        y={260}
        text={answer.has("Areal")
          ? `Areal: ${answer.get("Areal")?.getAns}`
          : ""}
      />
    </Svg>
  </div>

  <div class="m-auto text-center sm:hidden">
    <Svg width={300} height={251}>
      <Circle x={150} y={125.5} r={123.5} class="text-blue-500" />
      <Path d="M 150 3 V 248" class="text-green-800" />
      <Path d="m 150 125.5 H 273" class="text-orange-500" />
    </Svg>
    <Input
      name="Omkreds"
      readonly={readonly.Omkreds}
      class="mx-auto my-1 block border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="Diameter"
      readonly={readonly.Diameter}
      class="mx-auto my-1 block border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Input
      name="Areal"
      readonly={readonly.Areal}
      class="mx-auto my-1 block border-purple-700 focus:border-purple-600 focus:ring-purple-600"
    />
    <Input
      name="Radius"
      readonly={readonly.Radius}
      class="mx-auto my-1 block border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
  </div>

  <div class="text-center">
    <TextWithKaTeX text="Pi $(\pi)$ er sat til: ${Math.PI}$" />
  </div>
</Calculator>
