<script>
  import Svg from "@components/Svg/Svg.svelte";
  import Path from "@components/Svg/Path.svelte";
  import Text from "@components/Svg/Text.svelte";
  import ShapeForm from "@components/Calculators/ShapeForm.svelte";
  import Input from "@components/Svg/Input.svelte";
  import { answer, vars } from "@store/shape";

  function getReadonly(nums) {
    let temp = {
      Omkreds: nums.Omkreds ? false : true,
      Diagonal: nums.Diagonal ? false : true,
      Areal: nums.Areal ? false : true,
      Side: nums.Side ? false : true,
    };
    if (!Object.values(nums).filter((i) => !!i)[0]) {
      temp = {
        Omkreds: false,
        Diagonal: false,
        Areal: false,
        Side: false,
      };
    }

    return temp;
  }

  $: readOnly = getReadonly($vars);
</script>

<ShapeForm>
  <div class="m-auto h-[500px] w-[600px] text-center">
    <Input
      name="Omkreds"
      readOnly={readOnly.Omkreds}
      styles="border-dracula-blue-500 focus:ring-dracula-blue-500 focus:border-dracula-blue-500 absolute mt-3 ml-20"
    />
    <Input
      name="Diagonal"
      readOnly={readOnly.Diagonal}
      styles="border-dracula-green-800 focus:ring-dracula-green-800 focus:border-dracula-green-800 absolute mt-24 -ml-24"
    />
    <Input
      name="Areal"
      readOnly={readOnly.Areal}
      styles="mt-72 border-dracula-darker-700 focus:ring-dracula-darker-600 focus:border-dracula-darker-600 absolute -ml-48"
    />
    <Input
      name="Side"
      readOnly={readOnly.Side}
      styles="mt-52 border-dracula-orange-500 focus:ring-dracula-orange-500 focus:border-dracula-orange-500 absolute ml-24"
    />

    <Svg width="600" height="500">
      <Path d="M 546 4 H 54 v 492 h 492 V 4" styles="text-dracula-blue-500" />
      <Path d="M 546 4 v 492" styles="text-dracula-orange-500" />
      <Path d="M 54 4 L 546 496" styles="text-dracula-green-800" />

      <Text
        x="400"
        y="270"
        text={$answer.Side ? `Side: ${$answer.Side}` : ""}
      />
      <Text
        x="215"
        y="155"
        text={$answer.Diagonal ? `Diagonal: ${$answer.Diagonal}` : ""}
      />
      <Text
        x="385"
        y="70"
        text={$answer.Omkreds ? `Omkreds: ${$answer.Omkreds}` : ""}
      />
      <Text
        x="115"
        y="350"
        text={$answer.Areal ? `Areal: ${$answer.Areal}` : ""}
      />
    </Svg>
  </div>
</ShapeForm>
