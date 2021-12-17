---
layout: '@layouts/PercentCalculatorLayout.astro'
title: 'Hvad er x minus y procent'
description: 'En procent beregner der udregner et tal minus en procentdel'
calculator:
  {
    calculations: [{ name: 'Svar', calc: 'x * (1-y/100)' }],
    text: 'Hvad er :input_x: minus :input_y: procent',
  }
---