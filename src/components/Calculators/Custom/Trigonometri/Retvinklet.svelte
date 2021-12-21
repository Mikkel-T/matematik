<script>
  import Svg from '@components/Svg/Svg.svelte';
  import Path from '@components/Svg/Path.svelte';
  import Text from '@components/Svg/Text.svelte';
  import ShapeForm from '@components/Calculators/ShapeForm.svelte';
  import Input from '@components/Svg/Input.svelte';
  import { answer, vars } from '@store/shape';

  $vars['C'] = 90;
  function getReadonly(nums) {
    let temp = {
      A: nums['A'] ? false : true,
      B: nums['B'] ? false : true,
      a: nums['a'] ? false : true,
      b: nums['b'] ? false : true,
      c: nums['c'] ? false : true,
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
  <div class="text-center w-[750px] m-auto h-[440px] pl-12">
    <Input
      name="A"
      readOnly={readOnly['A']}
      placeholder="Vinkel A"
      styles="border-nord12 focus:ring-nord12 focus:border-nord12 float-left ml-16"
    />
    <Input
      name="b"
      readOnly={readOnly['b']}
      placeholder="Katete b"
      styles="float-left mt-48 -mb-44 ml-[-253px] border-nord9 focus:ring-nord9 focus:border-nord9"
    />
    <Input
      name="c"
      readOnly={readOnly['c']}
      placeholder="Hypotenuse c"
      styles="border-nord14 focus:ring-nord14 focus:border-nord14 absolute mt-40 -ml-20"
    />
    <Svg width="500" height="300">
      <Path d="M 3 257 h 40 v 40" styles="text-nord14" />
      <Path d="M 420 297 A 80 80 180 0 1 433 260" styles="text-nord9" />
      <Path d="M 69 41 A 80 80 0 0 1 4 80" styles="text-nord12" />

      <Path d="M 3 3 V 297" styles="text-nord9" />
      <Path d="M 3 297 H 497" styles="text-nord12" />
      <Path d="M 3 3 L 497 297" styles="text-nord14" />

      <Text x="15" y="100" text={$answer['A'] ? `A: ${$answer['A']}°` : ''} />
      <Text x="350" y="280" text={$answer['B'] ? `B: ${$answer['B']}°` : ''} />
      <Text x="48" y="252" text="C: 90°" />
      <Text x="175" y="280" text={$answer['a'] ? `a: ${$answer['a']}` : ''} />
      <Text x="15" y="180" text={$answer['b'] ? `b: ${$answer['b']}` : ''} />
      <Text x="200" y="180" text={$answer['c'] ? `c: ${$answer['c']}` : ''} />
    </Svg>
    <Input
      name="a"
      readOnly={readOnly['a']}
      placeholder="Katete a"
      styles="border-nord12 focus:ring-nord12 focus:border-nord12 -mr-24"
    />
    <Input
      name="B"
      readOnly={readOnly['B']}
      placeholder="Vinkel B"
      styles="border-nord9 focus:ring-nord9 focus:border-nord9 float-right mr-8"
    />
  </div>
</ShapeForm>
