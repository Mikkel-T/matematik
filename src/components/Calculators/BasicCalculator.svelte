<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { emitter } from '@event/event';
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

    if (calculator.event) {
      emitter.emit('calculation', vars);
    }

    if (calculator.calculations && !error) {
      calculator.calculations.forEach((calculation) => {
        const ans = Calc(calculation.calc, vars);
        vars[calculation.name] = ans.answer;
        add({ ...ans, name: calculation.label || calculation.name });
      });
    }
  }
</script>

<div class="w-3/4 mx-auto md:w-2/6">
  <form on:submit|preventDefault={calculate}>
    {#each calculator.inputs as input}
      <div class="mb-3">
        <div>
          <label class="font-bold" for={input.name}
            >{input.label || input.name}:</label
          >
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

    <input
      type="submit"
      value="Beregn"
      class="dark:bg-nord2 dark:hover:bg-nord3 dark:hover:border-nord2 w-full dark:border-nord3 bg-nord5 border-nord4 hover:bg-nord4 hover:border-nord5 focus:outline-none p-2 mt-3 border-2 rounded-md cursor-pointer umami--click--calculate"
    />
  </form>
  {#if error}
    <div class="text-center">
      {error}
    </div>
  {/if}
</div>
