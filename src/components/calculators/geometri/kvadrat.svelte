<script lang="ts">
  import Input from "@components/Svg/Input.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Svg from "@components/Svg/Svg.svelte";
  import Text from "@components/Svg/Text.svelte";
  import Calculator from "@components/calculatorutils/ShapeCalculator.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import { frac, mul, na, pow, sqrt } from "@math/calculation";
  import { shapeInput } from "@math/utils";

  function getReadonly() {
    if (Object.keys(calculator.valuesFiltered).length === 0) {
      return {
        Omkreds: false,
        Diagonal: false,
        Areal: false,
        Side: false,
      };
    }

    let key = Object.keys(calculator.valuesFiltered)[0];
    return {
      Omkreds: key !== "Omkreds",
      Diagonal: key !== "Diagonal",
      Areal: key !== "Areal",
      Side: key !== "Side",
    };
  }

  let readonly = $derived(getReadonly());

  function calculate() {
    let { Omkreds, Diagonal, Areal, Side } = calculator.opValuesFiltered;

    let s;
    if (Side) {
      s = new Answer("Side", Side);
      answer.add(shapeInput("Side", Side.answer));
    } else if (Omkreds) {
      s = new Answer("Side", frac(Omkreds, na(4)));
      answer.add(shapeInput("Omkreds", Omkreds.answer));
    } else if (Diagonal) {
      s = new Answer("Side", frac(mul(Diagonal, sqrt(na(2))), na(2)));
      answer.add(shapeInput("Diagonal", Diagonal.answer));
    } else if (Areal) {
      s = new Answer("Side", sqrt(frac(Areal, na(2))));
      answer.add(shapeInput("Areal", Areal.answer));
    } else {
      throw new Error("Der er ikke nok informationer til at beregne kvadratet");
    }

    if (!Side) {
      answer.add(new Answer("Side", s.getOp, "text"));
    }
    if (!Diagonal) {
      answer.add(new Answer("Diagonal", mul(s.getOp, sqrt(na(2))), "text"));
    }
    if (!Areal) {
      answer.add(new Answer("Areal", pow(s.getOp, na(2)), "text"));
    }
    if (!Omkreds) {
      answer.add(new Answer("Omkreds", mul(s.getOp, na(4)), "text"));
    }
  }
</script>

<Calculator {calculate}>
  <div class="m-auto hidden h-[500px] w-[600px] text-center sm:block">
    <Input
      name="Omkreds"
      readonly={readonly.Omkreds}
      class="absolute ml-20 mt-3 border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="Diagonal"
      readonly={readonly.Diagonal}
      class="absolute -ml-24 mt-24 border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Input
      name="Areal"
      readonly={readonly.Areal}
      class="absolute -ml-48 mt-72 border-purple-700 focus:border-purple-600 focus:ring-purple-600"
    />
    <Input
      name="Side"
      readonly={readonly.Side}
      class="absolute ml-24 mt-52 border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />

    <Svg width={600} height={500}>
      <Path d="M 546 4 H 54 v 492 h 492 V 4" class="text-blue-500" />
      <Path d="M 546 4 v 492" class="text-orange-500" />
      <Path d="M 54 4 L 546 496" class="text-green-800" />

      <Text
        x={400}
        y={270}
        text={answer.has("Side") ? `Side: ${answer.get("Side")?.getAns}` : ""}
      />
      <Text
        x={215}
        y={155}
        text={answer.has("Diagonal")
          ? `Diagonal: ${answer.get("Diagonal")?.getAns}`
          : ""}
      />
      <Text
        x={385}
        y={70}
        text={answer.has("Omkreds")
          ? `Omkreds: ${answer.get("Omkreds")?.getAns}`
          : ""}
      />
      <Text
        x={115}
        y={350}
        text={answer.has("Areal")
          ? `Areal: ${answer.get("Areal")?.getAns}`
          : ""}
      />
    </Svg>
  </div>

  <div class="m-auto text-center sm:hidden">
    <Svg width={300} height={251}>
      <Path d="M 273 4 H 27 v 246 h 246 V 4" class="text-blue-500" />
      <Path d="M 273 4 v 246" class="text-orange-500" />
      <Path d="M 27 4 L 273 248" class="text-green-800" />
    </Svg>
    <Input
      name="Omkreds"
      readonly={readonly.Omkreds}
      class="mx-auto my-1 block border-blue-500 focus:border-blue-500 focus:ring-blue-500"
    />
    <Input
      name="Diagonal"
      readonly={readonly.Diagonal}
      class="mx-auto my-1 block border-green-800 focus:border-green-800 focus:ring-green-800"
    />
    <Input
      name="Areal"
      readonly={readonly.Areal}
      class="mx-auto my-1 block border-purple-700 focus:border-purple-600 focus:ring-purple-600"
    />
    <Input
      name="Side"
      readonly={readonly.Side}
      class="mx-auto my-1 block border-orange-500 focus:border-orange-500 focus:ring-orange-500"
    />
  </div>
</Calculator>
