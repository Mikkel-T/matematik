---
layout: 'layout:BasicCalculatorLayout'
title: '1. gradsfunktion'
SEOtitle: 'Funktionsforskrift for en 1. gradsfunktion'
description: 'En 1. gradsfunktions beregner der udregner funktionsforskriften for en 1. gradsfunktion'
calculator:
  {
    inputs:
      [
        { name: 'x1', label: 'x for punkt 1' },
        { name: 'y1', label: 'y for punkt 1' },
        { name: 'x2', label: 'x for punkt 2' },
        { name: 'y2', label: 'y for punkt 2' },
      ],
    checks:
      [
        {
          message: 'x for punkt 1 kan ikke være det samme som x for punkt 2',
          check: 'x1 == x2',
        },
      ],
    calculations:
      [
        { name: 'a', calc: '(y2 - y1) / (x2 - x1)' },
        { name: 'b', calc: 'y1 - x1 * a' },
      ],
    text: ['Punkt 1: ({x1}, {y1})', 'Punkt 2: ({x2}, {y2})'],
    event: true,
  }
setup: |
  import Forskrift from '@components/Calculators/Custom/1-grad-funktion.svelte'
---

<Forskrift client:visible />
