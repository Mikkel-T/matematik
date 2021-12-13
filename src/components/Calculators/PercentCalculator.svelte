<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import Calculator from '@components/Calculators/Calculator.svelte';
  export let calculator;

  let inputs = {};
  let vars = {};
  let error = '';

  function calculate() {
    vars = { ...vars, ...inputs };
    error = '';
    reset();
    calculator.text
      .match(/:input_[a-z]:/g)
      .map((i) => i.substring(7, i.length - 1))
      .forEach((i) => {
        if (!Object.keys(vars).includes(i.name)) {
          vars[i.name] = 0;
        }
      });

    if (calculator.checks) {
      calculator.checks.forEach((check) => {
        try {
          ValidateCheck(check, vars);
        } catch (err) {
          error = err.message;
        }
      });
    }

    if (calculator.calculations && !error) {
      calculator.calculations.forEach((calculation) => {
        const ans = Calc(calculation.calc, vars);
        vars[calculation.name] = ans.answer;
        if (calculation.percent) {
          ans.answer += '\\%';
        }
        delete ans.equation;
        add({ ...ans, name: calculation.label || calculation.name });
      });
    }
  }
</script>

<Calculator {calculate} {error}>
  <div class="text-center">
    {#each calculator.text.split(':') as text}
      {#if text.startsWith('input_')}
        <input
          name={text.substring(6)}
          bind:value={inputs[text.substring(6)]}
          type="number"
          step="any"
          class="border-nord3 focus:ring-0 focus:border-nord10 w-20 p-2 border-0 border-b-2 bg-transparent"
        />
      {:else}
        {text}
      {/if}
    {/each}
  </div>
</Calculator>
