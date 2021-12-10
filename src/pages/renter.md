---
layout: '@layouts/BasicCalculatorLayout.astro'
title: 'Renters rente'
SEOtitle: 'Renters rente beregner'
description: 'En renters rente beregner der udregner slutkapital ved hjælp af startkapital, rente og antal terminer'
calculator:
  {
    inputs:
      [
        { name: 'K', label: 'K (Startkapitalen)' },
        { name: 'r', label: 'r (Renten i decimaltal. F.eks. er 3% = 0,03)' },
        { name: 'n', label: 'n (Antal terminer)' },
      ],
    calculations: [{ name: 'Kn', calc: 'K * (1 + r)^n' }],
  }
---
