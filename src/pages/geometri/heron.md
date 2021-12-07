---
layout: '@layouts/BasicCalculatorLayout.astro'
title: 'Herons formel beregner'
description: 'En beregner der udregner arealet af en trekant ud fra dens sidelængder ved hjælp af herons formel'
calculator:
  {
    inputs: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
    calculations:
      [
        { name: 's', calc: '(a + b + c) / 2' },
        { name: 'Areal', calc: 'sqrt(s * (s - a) * (s - b) * (s - c))' },
      ],
  }
---
