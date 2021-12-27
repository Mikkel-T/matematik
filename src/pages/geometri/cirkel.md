---
layout: 'layout:ShapeCalculatorLayout'
title: 'Cirkler'
SEOtitle: 'Cirkel beregner'
pageTitle: 'Cirkel beregner'
description: 'En cirkelberegner der udregner radius, diameter, areal og omkreds af en cirkel'
calculator:
  {
    calculations:
      [
        {
          if: 'Radius',
          calculations:
            [
              { name: 'Radius', calc: 'Radius', entered: true },
              { name: 'Diameter', calc: 'Radius * 2' },
              { name: 'Omkreds', calc: 'Radius * 2 * pi' },
              { name: 'Areal', calc: 'Radius^2 * pi' },
            ],
        },
        {
          if: 'Diameter',
          calculations:
            [
              { name: 'Radius', calc: 'Diameter / 2' },
              { name: 'Diameter', calc: 'Diameter', entered: true },
              { name: 'Omkreds', calc: 'Diameter * pi' },
              { name: 'Areal', calc: '(Diameter / 2)^2 * pi' },
            ],
        },
        {
          if: 'Omkreds',
          calculations:
            [
              { name: 'Radius', calc: 'Omkreds / (2 * pi)' },
              { name: 'Diameter', calc: 'Omkreds / pi' },
              { name: 'Omkreds', calc: 'Omkreds', entered: true },
              { name: 'Areal', calc: 'Omkreds^2 / (4 * pi)' },
            ],
        },
        {
          if: 'Areal',
          calculations:
            [
              { name: 'Radius', calc: 'sqrt(Areal / pi)' },
              { name: 'Diameter', calc: 'sqrt(Areal / pi) * 2' },
              { name: 'Omkreds', calc: 'sqrt(Areal / pi) * 2 * pi' },
              { name: 'Areal', calc: 'Areal', entered: true },
            ],
        },
      ],
  }
setup: |
  import Circle from '@components/Calculators/Custom/Cirkel.svelte'
---

<Circle client:load />
