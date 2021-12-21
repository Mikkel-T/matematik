<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { vars, answer } from '@store/shape';
  import Calculator from '@components/Calculators/Calculator.svelte';
  export let calculator;

  let error = '';

  function calculate() {
    error = '';
    reset();
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
        if ($vars[calculation.if]) {
          calculation.calculations.forEach((calc) => {
            const ans = Calc(calc.calc, $vars);
            $answer[calc.name] = ans.answer;
            delete ans['answer'];
            add({ ...ans, name: calc.label || calc.name });
          });
        }
      });
    }
  }
</script>

<Calculator {calculate} {error} />
