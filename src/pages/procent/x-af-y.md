---
layout: '@layouts/PercentCalculatorLayout.astro'
title: 'Hvor mange procent er x af y'
description: 'En procent beregner der udregner hvilken procentdel et tal udgør af et andet'
calculator:
  {
    calculations: [{ name: 'Svar', calc: 'x / y * 100', percent: true }],
    text: 'Hvor mange procent er :input_x: af :input_y:',
  }
---
