<script>
  import Svg from '@components/Svg/Svg.svelte';
  import Path from '@components/Svg/Path.svelte';
  import Circle from '@components/Svg/Circle.svelte';
  import Text from '@components/Svg/Text.svelte';
  import ShapeForm from '@components/Calculators/ShapeForm.svelte';
  import Input from '@components/Svg/Input.svelte';
  import { answer, vars } from '@store/shape';
  import TextWithKaTeX from '@components/TextWithKaTeX.svelte';

  function getReadonly(nums) {
    let temp = {
      Omkreds: nums.Omkreds ? false : true,
      Diameter: nums.Diameter ? false : true,
      Areal: nums.Areal ? false : true,
      Radius: nums.Radius ? false : true,
    };
    if (!Object.values(nums).filter((i) => !!i)[0]) {
      temp = {
        Omkreds: false,
        Diameter: false,
        Areal: false,
        Radius: false,
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
      styles="-mb-11 border-dracula-blue-500 focus:ring-dracula-blue-500 focus:border-dracula-blue-500 float-left"
    />
    <Input
      name="Diameter"
      readOnly={readOnly.Diameter}
      styles="border-dracula-green-800 focus:ring-dracula-green-800 focus:border-dracula-green-800 absolute mt-24 ml-2"
    />
    <Input
      name="Areal"
      readOnly={readOnly.Areal}
      styles="absolute mt-[12.5rem] -ml-48 border-dracula-darker-700 focus:ring-dracula-darker-600 focus:border-dracula-darker-600"
    />
    <Input
      name="Radius"
      readOnly={readOnly.Radius}
      styles="absolute mt-[12.5rem] ml-10 border-dracula-orange-500 focus:ring-dracula-orange-500 focus:border-dracula-orange-500"
    />
    <Svg width="600" height="500">
      <Circle x="300" y="250" r="247" styles="text-dracula-blue-500" />
      <Path d="M 300 3 V 496" styles="text-dracula-green-800" />
      <Path d="m 300 250 H 546" styles="text-dracula-orange-500" />

      <Text
        x="340"
        y="270"
        text={$answer.Radius ? `Radius: ${$answer.Radius}` : ''}
      />
      <Text
        x="310"
        y="155"
        text={$answer.Diameter ? `Diameter: ${$answer.Diameter}` : ''}
      />
      <Text
        x="0"
        y="60"
        text={$answer.Omkreds ? `Omkreds: ${$answer.Omkreds}` : ''}
      />
      <Text
        x="110"
        y="260"
        text={$answer.Areal ? `Areal: ${$answer.Areal}` : ''}
      />
    </Svg>
  </div>
  <div class="text-center">
    <TextWithKaTeX text="Pi $(\pi)$ er sat til: ${Math.PI}$" />
  </div>
</ShapeForm>
