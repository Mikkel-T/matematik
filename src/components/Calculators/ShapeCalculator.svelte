<script>
  import { Calc, ValidateCheck } from '@utils/math';
  import { add, reset } from '@store/answer';
  import { vars, answer, reset as resetShape } from '@store/shape';
  import Calculator from '@components/Calculators/Calculator.svelte';
  export let calculator;

  let error = '';

  function calculate() {
    error = '';
    reset();
    resetShape();

    if (calculator.calculations && !error) {
      calculator.calculations.forEach((calculation) => {
        if (!error) {
          let check = false;
          if (/ && /.test(calculation.if)) {
            check = true;
            calculation.if.split(' && ').forEach((i) => {
              if (!$vars[i]) {
                check = false;
              }
            });
          } else {
            check = $vars[calculation.if];
          }

          if (check) {
            if (calculation.checks) {
              calculation.checks.forEach((check) => {
                try {
                  ValidateCheck(check, $vars);
                } catch (err) {
                  error = err.message;
                  reset();
                  resetShape();
                }
              });
            }
            if (!error) {
              calculation.calculations.forEach((calc) => {
                const ans = Calc(calc.calc, $vars, calc['entered']);
                $answer[calc.name] = ans.answer;
                delete ans['answer'];
                add({ ...ans, name: calc.label || calc.name });
              });
            }
          }
        }
      });
    }
  }
</script>

<Calculator {calculate} {error} />
