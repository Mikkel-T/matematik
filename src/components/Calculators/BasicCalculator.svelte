<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { emitter } from '@event/event';
  import Calculator from '@components/Calculators/Calculator.svelte';
  import TextWithKaTeX from '@components/TextWithKaTeX.svelte';
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
      if (!Object.hasOwnProperty.call(vars, i.name) || !vars[i.name]) {
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

    if (calculator.event && !error) {
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
            <TextWithKaTeX text={input.label} />
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
        class="w-full rounded-md border border-dracula-light-400 bg-dracula-light-300 p-2 focus:border-dracula-blue-500 focus:ring-dracula-blue-500 dark:border-dracula-darker-600 dark:bg-dracula-darker-800"
      />
    </div>
  {/each}

  {#if calculator.text}
    {#each calculator.text as template}
      <div class="text-center">
        <TextWithKaTeX text={t(template, inputs)} />
      </div>
    {/each}
  {/if}
</Calculator>
