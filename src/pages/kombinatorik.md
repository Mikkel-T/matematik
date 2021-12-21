---
layout: 'layout:BasicCalculatorLayout'
title: 'Kombinatorik stikprøver'
SEOtitle: 'Kombinatorik beregner'
description: 'En kombinatorik beregner til at beregne ordnede og uordnede stikprøver med og uden tilbagelægning'
calculator:
  {
    inputs:
      [
        {
          name: 'n',
          label: 'n (Antallet af muligheder, som en stikprøve udtages fra)',
        },
        {
          name: 'p',
          label: 'p (Antallet af pladser, som udvælges i stikprøven)',
        },
      ],
    calculations:
      [
        { name: 'Ordnet med tilbagelægning', calc: 'n^p' },
        { name: 'Ordnet uden tilbagelægning', calc: 'n! / (n - p)!' },
        {
          name: 'Uordnet med tilbagelægning',
          calc: '(n + p - 1)! /((n - 1)! * p!)',
        },
        { name: 'Uordnet uden tilbagelægning', calc: 'n! /((n - p)! * p!)' },
      ],
    checks:
      [
        { message: 'p må ikke være negativ', check: 'p < 0' },
        { message: 'n skal være større end p', check: 'n < p' },
      ],
  }
---
