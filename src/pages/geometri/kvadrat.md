---
layout: 'layout:ShapeCalculatorLayout'
title: 'Kvadrater'
SEOtitle: 'Kvadrat beregner'
pageTitle: 'Kvadrat beregner'
description: 'En kvadratberegner der udregner sidelængde, diagonallængde, areal og omkreds af et kvadrat'
calculator:
  {
    calculations:
      [
        {
          if: 'Side',
          calculations:
            [
              { name: 'Side', calc: 'Side', entered: true },
              { name: 'Diagonal', calc: 'Side * sqrt(2)' },
              { name: 'Omkreds', calc: 'Side * 4' },
              { name: 'Areal', calc: 'Side^2' },
            ],
        },
        {
          if: 'Diagonal',
          calculations:
            [
              { name: 'Side', calc: 'Diagonal / sqrt(2)' },
              { name: 'Diagonal', calc: 'Diagonal', entered: true },
              { name: 'Omkreds', calc: '(Diagonal / sqrt(2)) * 4' },
              { name: 'Areal', calc: '(Diagonal / sqrt(2))^2' },
            ],
        },
        {
          if: 'Omkreds',
          calculations:
            [
              { name: 'Side', calc: 'Omkreds / 4' },
              { name: 'Diagonal', calc: '(Omkreds / 4) * sqrt(2)' },
              { name: 'Omkreds', calc: 'Omkreds', entered: true },
              { name: 'Areal', calc: '(Omkreds / 4)^2' },
            ],
        },
        {
          if: 'Areal',
          calculations:
            [
              { name: 'Side', calc: 'sqrt(Areal)' },
              { name: 'Diagonal', calc: 'sqrt(Areal) * sqrt(2)' },
              { name: 'Omkreds', calc: 'sqrt(Areal) * 4' },
              { name: 'Areal', calc: 'Areal', entered: true },
            ],
        },
      ],
  }
setup: |
  import Shape from '@components/Calculators/Custom/Kvadrat.svelte'
---

<Shape client:load />
