---
layout: '@layouts/BasicCalculatorLayout.astro'
title: 'Moms'
SEOtitle: 'Moms beregner'
description: 'En momsberegner der udregner en pris med og uden moms'
calculator:
  {
    inputs: [{ name: 'Pris' }],
    calculations:
      [
        { name: 'Pris med moms', calc: 'Pris * 1.25' },
        { name: 'Pris uden moms', calc: 'Pris/1.25' },
      ],
  }
---
