<script>
  import { Calc } from '@utils/math';
  import { emitter } from '@event/event';
  import { add } from '@store/answer';
  import { coord, text } from '@utils/TeX';

  emitter.on('calculation', (vars) => {
    const d = Calc('(b)^2 - 4 * a * c', vars);
    vars.d = d.answer;
    add({ ...d, name: 'd' });

    const Tp_x = Calc('-(b) / (2 * a)', vars);
    const Tp_y = Calc('-(d) / (4 * a)', vars);
    add({
      calculation: coord(Tp_x.calculation, Tp_y.calculation),
      answer: coord(Tp_x.answer, Tp_y.answer),
      equation: coord(Tp_x.equation, Tp_y.equation),
      name: 'Tp',
    });

    if (d.answer < 0) {
      add({
        answer: text('Der er ikke nogle nulpunkter da d er under 0'),
        name: 'Np',
      });
    } else if (d.answer === 0) {
      const Np_x = Calc('-(b) / (2 * a)', vars);

      add({
        answer: coord(Np_x.answer, 0),
        name: 'Np',
      });
      add({
        calculation: coord(Np_x.calculation, 0),
        equation: coord(Np_x.equation, 0),
        name: 'Np',
      });
    } else {
      const Np1_x = Calc('(-(b) + sqrt(d)) / (2 * a)', vars);
      const Np2_x = Calc('(-(b) - sqrt(d)) / (2 * a)', vars);

      add({
        answer: `${coord(Np1_x.answer, 0)}~ \\&~ ${coord(Np2_x.answer, 0)}`,
        name: 'Np',
      });
      add({
        calculation: coord(Np1_x.calculation, 0),
        equation: coord(Np1_x.equation, 0),
        name: 'Np_1',
      });
      add({
        calculation: coord(Np2_x.calculation, 0),
        equation: coord(Np2_x.equation, 0),
        name: 'Np_2',
      });
    }
  });
</script>
