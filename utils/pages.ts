import { Pages } from '@interfaces/index';

const pages: Pages[] = [
  {
    name: 'Beregnere',
    path: '/',
    description: 'En hjemmeside med mange forskellige matematiske værktøjer',
    showCard: false,
  },
  {
    name: '1. gradsfunktion',
    path: '/1-grad-funktion',
    description: 'Beregn funktionsforskriften for en 1. gradsfunktion',
    showCard: true,
  },
  {
    name: '2. gradsfunktion',
    path: '/2-grad-funktion',
    description:
      'Beregn diskriminant, toppunkt og nulpunkter for en 2. gradsfunktion',
    showCard: true,
  },
  {
    name: 'Areal af trekant ud fra sidelængder',
    path: '/heron',
    description:
      'Beregn areal af en trekant ud fra dens sidelængder ved hjælp af herons formel',
    showCard: true,
  },
  {
    name: 'Cirkler',
    path: '/cirkel',
    description: 'Beregn radius, diameter, areal og omkreds af en cirkel',
    showCard: true,
  },
  {
    name: 'Kombinatorik stikprøver',
    path: '/kombinatorik',
    description: 'Beregn de 4 forskellige former for stikprøver',
    showCard: true,
  },
  {
    name: 'Momsberegner',
    path: '/moms',
    description: 'Beregn en pris med og uden moms',
    showCard: true,
  },
  {
    name: 'Renters rente',
    path: '/renter',
    description:
      'Beregn slutkapital ved hjælp af startkapital, rente og antal terminer',
    showCard: true,
  },
  {
    name: 'Trigonometri i retvinklede trekanter',
    path: '/trigonometri',
    description:
      'Beregn alle sider og vinkler i en retvinklet trekant ved hjælp af trigonometri og pythagoras',
    showCard: true,
  },
];

export default pages;
