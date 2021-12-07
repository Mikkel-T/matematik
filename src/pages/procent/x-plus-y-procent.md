---
layout: '@layouts/PercentCalculatorLayout.astro'
title: 'Hvad er x plus y procent'
description: ''
calculator:
  {
    calculations: [{ name: 'Svar', calc: 'x * (1+y/100)' }],
    text: 'Hvad er :input_x: plus :input_y: procent',
  }
---
