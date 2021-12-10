---
layout: '@layouts/BasicCalculatorLayout.astro'
title: '2. gradsfunktion'
SEOtitle: '2. gradsfunktion beregner'
description: 'En 2. gradsfunktions beregner der udregner diskriminant, toppunkt og nulpunkter for en 2. gradsfunktion'
calculator:
  {
    inputs:
      [
        { name: 'a', label: 'a (Tallet med et x^2 efter sig)' },
        { name: 'b', label: 'b (Tallet med et x efter sig)' },
        { name: 'c', label: 'c (Tallet uden noget efter sig)' },
      ],
    event: true,
  }
setup: |
  import Forskrift from '@components/Calculators/Custom/2-grad-funktion.svelte'
---

<Forskrift client:load />
