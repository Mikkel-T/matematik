---
layout: 'layout:BasicCalculatorLayout'
title: 'Areal af trekant ud fra sidelængder'
pageTitle: 'Herons formel'
SEOtitle: 'Herons formel beregner'
description: 'En beregner der udregner arealet af en trekant ud fra dens sidelængder ved hjælp af herons formel'
calculator:
  {
    inputs:
      [
        { name: 'a', label: '$a$' },
        { name: 'b', label: '$b$' },
        { name: 'c', label: '$c$' },
      ],
    calculations:
      [
        { name: 's', calc: '(a + b + c) / 2' },
        { name: 'Areal', calc: 'sqrt(s * (s - a) * (s - b) * (s - c))' },
      ],
    checks:
      [
        {
          message: 'Dette er ikke en trekant',
          check: '((a + b + c) / 2) < max(a, b, c)',
        },
      ],
  }
---
