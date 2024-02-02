<script lang="ts">
  import Inputs from "@components/calculatorutils/inputs/VectorInputs.svelte";
  import { Answer, answer, calculator } from "@state/calculator.svelte";
  import Calculator from "@components/calculatorutils/Calculator.svelte";
  import { crossProd, mul, neg, pmat, pmatrix, sub } from "@math/calculation";

  function calculate() {
    let { A_1, A_2, A_3, B_1, B_2, B_3, C_1, C_2, C_3 } = calculator.opValues;
    let r_1_x = sub(B_1, A_1);
    let r_1_y = sub(B_2, A_2);
    let r_1_z = sub(B_3, A_3);
    let r_1 = new Answer("\\vec{r_1}", pmat(r_1_x, r_1_y, r_1_z));
    let r_2_x = sub(C_1, A_1);
    let r_2_y = sub(C_2, A_2);
    let r_2_z = sub(C_3, A_3);
    let r_2 = new Answer("\\vec{r_2}", pmat(r_2_x, r_2_y, r_2_z));
    let n = new Answer(
      "\\vec{n}",
      crossProd(
        { x: r_1_x, y: r_1_y, z: r_1_z, name: "r_1" },
        { x: r_2_x, y: r_2_y, z: r_2_z, name: "r_2" },
      ),
    );
    let n_a = new Answer("a", sub(mul(r_1_y, r_2_z), mul(r_1_z, r_2_y)));
    let n_b = new Answer("b", sub(mul(r_1_z, r_2_x), mul(r_1_x, r_2_z)));
    let n_c = new Answer("c", sub(mul(r_1_x, r_2_y), mul(r_1_y, r_2_x)));

    if (n_a.getAns === 0 && n_b.getAns === 0 && n_c.getAns === 0) {
      throw new Error(
        "De tre punkter ligger på samme linje, og der kan derfor ikke dannes en plan.",
      );
    }

    let parameterfremstilling = new Answer(pmatrix("x", "y", "z"), {
      answer: `${pmatrix(A_1.answer, A_2.answer, A_3.answer)} + t \\cdot ${pmatrix(r_1_x.answer, r_1_y.answer, r_1_z.answer)} + s \\cdot ${pmatrix(r_2_x.answer, r_2_y.answer, r_2_z.answer)} \\;,\\; t,s \\in \\mathbb{R}`,
    });

    let d = new Answer(
      "d",
      sub(
        sub(
          mul(neg(n_a.getNewOp), { ...A_1, equation: "x_0" }),
          mul(n_b.getNewOp, { ...A_2, equation: "y_0" }),
        ),
        mul(n_c.getNewOp, { ...A_3, equation: "z_0" }),
      ),
    );
    let p_1;
    let p_2;
    let p_3;
    let p_d;
    if (n_a.getAns === 0) {
      p_1 = "";
    } else if (Math.abs(+n_a.getAns) === 1) {
      p_1 = `${+n_a.getAns > 0 ? "" : "-"}x`;
    } else {
      p_1 = `${n_a.getAns}x`;
    }
    if (n_b.getAns !== 0) {
      if (Math.abs(+n_b.getAns) === 1) {
        if (p_1) {
          p_2 = ` ${+n_b.getAns > 0 ? "+" : "-"}y`;
        } else {
          p_2 = `${+n_b.getAns > 0 ? "" : "-"}y`;
        }
      } else {
        if (p_1) {
          p_2 = ` ${+n_b.getAns > 0 ? "+" : "-"}${Math.abs(+n_b.getAns)}y`;
        } else {
          p_2 = `${n_b.getAns}y`;
        }
      }
    } else {
      p_2 = "";
    }
    if (n_c.getAns !== 0) {
      if (Math.abs(+n_c.getAns) === 1) {
        if (p_1 || p_2) {
          p_3 = ` ${+n_c.getAns > 0 ? "+" : "-"}z`;
        } else {
          p_3 = `${+n_c.getAns > 0 ? "" : "-"}z`;
        }
      } else {
        if (p_1 || p_2) {
          p_3 = ` ${+n_c.getAns > 0 ? "+" : "-"}${Math.abs(+n_c.getAns)}z`;
        } else {
          p_3 = `${n_c.getAns}z`;
        }
      }
    } else {
      p_3 = "";
    }
    if (d.getAns !== 0) {
      if (p_1 || p_2 || p_3) {
        p_d = ` ${+d.getAns > 0 ? "+" : "-"}${Math.abs(+d.getAns)}`;
      } else {
        p_d = `${d.getAns}`;
      }
    } else {
      p_d = "";
    }

    let p = new Answer(
      "Planens ligning",
      {
        answer: `${p_1}${p_2}${p_3}${p_d} = 0`,
      },
      "text",
    );
    answer.add(p, parameterfremstilling, r_1, r_2, n, d);
  }
</script>

<Calculator {calculate}>
  <Inputs
    inputs={[
      { name: "A", type: "coord3d" },
      { name: "B", type: "coord3d" },
      { name: "C", type: "coord3d" },
    ]}
  />
</Calculator>
