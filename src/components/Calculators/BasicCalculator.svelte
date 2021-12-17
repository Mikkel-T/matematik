<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { emitter } from '@event/event';
  import Calculator from '@components/Calculators/Calculator.svelte';
  import KaTeX from '@components/KaTeX.svelte';
  import t from '@utils/template';
  export let calculator;

  let inputs = {};
  let vars = {};
  let error = '';

  function calculate() {
    vars = { ...vars, ...inputs };
    error = '';
    reset();
    calculator.inputs.forEach((i) => {
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
        add({ ...ans, name: calculation.label || calculation.name });
      });
    }

    if (calculator.event) {
      emitter.emit('calculation', vars);
    }
  }
</script>

<Calculator {calculate} {error}>
  {#each calculator.inputs as input}
    <div class="mb-3">
      <div>
        <label class="font-bold" for={input.name}>
          {#if input.label}
            {#each input.label
              .split(' ')
              .map((i) => i.replace(/^\$/, '$LaTeX_'))
              .join(' ')
              .split('$') as text}
              {#if text.startsWith('LaTeX_')}
                <KaTeX math={text.substring(6)} />
              {:else}
                {text}
              {/if}
            {/each}
          {:else}
            {input.name}
          {/if}
        </label>
      </div>
      <input
        name={input.name}
        bind:value={inputs[input.name]}
        placeholder={input.placeholder || input.name}
        type="number"
        step="any"
        class="dark:bg-nord1 dark:border-nord3 bg-nord5 border-nord4 focus:ring-nord10 focus:border-nord10 w-full p-2 border rounded-md"
      />
    </div>
  {/each}

  {#if calculator.text}
    {#each calculator.text as template}
      <div class="text-center">
        {t(template, inputs)}
      </div>
    {/each}
  {/if}
</Calculator>
