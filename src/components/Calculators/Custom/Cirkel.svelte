<script>
  import Svg from '@components/Svg/Svg.svelte';
  import Path from '@components/Svg/Path.svelte';
  import Circle from '@components/Svg/Circle.svelte';
  import Text from '@components/Svg/Text.svelte';
  import Input from '@components/Svg/Input.svelte';
  import { answer, vars } from '@store/shape';

  function getReadonly(nums) {
    let temp = {
      Omkreds: nums['Omkreds'] ? false : true,
      Diameter: nums['Diameter'] ? false : true,
      Areal: nums['Areal'] ? false : true,
      Radius: nums['Radius'] ? false : true,
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

<div class="text-center w-[600px] m-auto h-[500px]">
  <Input
    name="Omkreds"
    readOnly={readOnly['Omkreds']}
    styles="-mb-11 border-nord9 focus:ring-nord9 focus:border-nord9 float-left"
  />
  <Input
    name="Diameter"
    readOnly={readOnly['Diameter']}
    styles="border-nord14 focus:ring-nord14 focus:border-nord14 absolute mt-24 ml-2"
  />
  <Input
    name="Areal"
    readOnly={readOnly['Areal']}
    styles="absolute mt-[12.5rem] -ml-48 border-nord3 focus:ring-nord10 focus:border-nord10"
  />
  <Input
    name="Radius"
    readOnly={readOnly['Radius']}
    styles="absolute mt-[12.5rem] ml-10 border-nord12 focus:ring-nord12 focus:border-nord12"
  />
  <Svg width="600" height="500">
    <Circle x="300" y="250" r="247" styles="text-nord9" />
    <Path d="M 300 3 V 496" styles="text-nord14" />
    <Path d="m 300 250 H 546" styles="text-nord12" />

    <Text
      x="340"
      y="270"
      text={$answer['Radius'] ? `Radius: ${$answer['Radius']}` : ''}
    />
    <Text
      x="310"
      y="155"
      text={$answer['Diameter'] ? `Diameter: ${$answer['Diameter']}` : ''}
    />
    <Text
      x="0"
      y="60"
      text={$answer['Omkreds'] ? `Omkreds: ${$answer['Omkreds']}` : ''}
    />
    <Text
      x="110"
      y="260"
      text={$answer['Areal'] ? `Areal: ${$answer['Areal']}` : ''}
    />
  </Svg>
</div>
<div class="text-center">Pi (π) er sat til: {Math.PI}</div>
