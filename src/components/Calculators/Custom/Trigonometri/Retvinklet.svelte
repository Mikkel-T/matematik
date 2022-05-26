<script>
  import Svg from "@components/Svg/Svg.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Text from "@components/Svg/Text.svelte";
  import ShapeForm from "@components/Calculators/ShapeForm.svelte";
  import Input from "@components/Svg/Input.svelte";
  import { answer, vars } from "@store/shape";
  import { add, sort } from "@store/answer";
  import { emitter } from "@event/event";
  import { text } from "@utils/TeX";

  emitter.on("calculation", () => {
    add({ name: "C", calculation: text("C er altid 90^{\\circ}") });
    sort();
  });

  $vars.C = 90;
  function getReadonly(nums) {
    let temp = {
      A: nums.A ? false : true,
      B: nums.B ? false : true,
      a: nums.a ? false : true,
      b: nums.b ? false : true,
      c: nums.c ? false : true,
    };

    if (!Object.values({ ...nums, C: false }).filter((i) => !!i)[0]) {
      temp = {
        A: false,
        B: false,
        a: false,
        b: false,
        c: false,
      };
    } else {
      const arr = Object.entries({ ...nums, C: false }).filter(
        ([_, value]) => !!value
      );
      if (arr.length === 1) {
        const key = arr[0][0];
        if (key.toLowerCase() !== key) {
          temp = { A: true, B: true, ...temp, a: false, b: false, c: false };
        } else {
          temp = {
            A: false,
            B: false,
            a: false,
            b: false,
            c: false,
          };
        }
      }
    }

    return temp;
  }

  $: readOnly = getReadonly($vars);
</script>

<ShapeForm>
  <div class="m-auto h-[440px] w-[750px] pl-12 text-center">
    <Input
      name="A"
      readOnly={readOnly.A}
      placeholder="Vinkel A"
      styles="border-dracula-orange-500 focus:ring-dracula-orange-500 focus:border-dracula-orange-500 float-left ml-16"
    />
    <Input
      name="b"
      readOnly={readOnly.b}
      placeholder="Katete b"
      styles="float-left mt-48 -mb-44 ml-[-253px] border-dracula-blue-500 focus:ring-dracula-blue-500 focus:border-dracula-blue-500"
    />
    <Input
      name="c"
      readOnly={readOnly.c}
      placeholder="Hypotenuse c"
      styles="border-dracula-green-800 focus:ring-dracula-green-800 focus:border-dracula-green-800 absolute mt-40 -ml-20"
    />
    <Svg width="500" height="300">
      <Path d="M 3 257 h 40 v 40" styles="text-dracula-green-800" />
      <Path
        d="M 420 297 A 80 80 180 0 1 433 260"
        styles="text-dracula-blue-500"
      />
      <Path d="M 69 41 A 80 80 0 0 1 4 80" styles="text-dracula-orange-500" />

      <Path d="M 3 3 V 297" styles="text-dracula-blue-500" />
      <Path d="M 3 297 H 497" styles="text-dracula-orange-500" />
      <Path d="M 3 3 L 497 297" styles="text-dracula-green-800" />

      <Text x="15" y="100" text={$answer.A ? `A: ${$answer.A}°` : ""} />
      <Text x="350" y="280" text={$answer.B ? `B: ${$answer.B}°` : ""} />
      <Text x="48" y="252" text="C: 90°" />
      <Text x="175" y="280" text={$answer.a ? `a: ${$answer.a}` : ""} />
      <Text x="15" y="180" text={$answer.b ? `b: ${$answer.b}` : ""} />
      <Text x="200" y="180" text={$answer.c ? `c: ${$answer.c}` : ""} />

      <Text
        x="120"
        y="230"
        text={$answer.Areal ? `Areal: ${$answer.Areal}` : ""}
      />
    </Svg>
    <Input
      name="a"
      readOnly={readOnly.a}
      placeholder="Katete a"
      styles="border-dracula-orange-500 focus:ring-dracula-orange-500 focus:border-dracula-orange-500 -mr-24"
    />
    <Input
      name="B"
      readOnly={readOnly.B}
      placeholder="Vinkel B"
      styles="border-dracula-blue-500 focus:ring-dracula-blue-500 focus:border-dracula-blue-500 float-right mr-8"
    />
  </div>
</ShapeForm>
