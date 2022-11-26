import { BasicCalculatorPage } from "@interfaces/calculators";

const renter: BasicCalculatorPage = {
  type: "basic_calculator",
  title: "Renters rente",
  SEOtitle: "Renters rente beregner",
  description:
    "En renters rente beregner der udregner slutkapital ved hjælp af startkapital, rente og antal terminer",
  calculator: {
    inputs: [
      { name: "K", label: "$K$ (Startkapitalen)" },
      {
        name: "r",
        label: "$r$ (Renten i decimaltal. F.eks. er $3\\%$ = $0,03$)",
      },
      { name: "n", label: "$n$ (Antal terminer)" },
    ],
    calculations: [
      {
        name: "K_n",
        calc: ({ K, r, n }) => ({
          answer: K * Math.pow(1 + r, n),
          calculation: `${K} \\cdot (1 + ${r})^{${n}}`,
          equation: "K \\cdot (1 + r)^{n}",
        }),
      },
    ],
  },
};

export default renter;
