import { Place } from '../types/Place';

export const places: Place[] = [
  {
    id: '1',
    name: 'Lagoa Azul',

    description:
      'A Lagoa Azul é um destino encantador, conhecido por suas águas cristalinas em tons azulados.',

    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',

    categories: ['Viagens', 'Natureza'],

    latitude: -23.137,
    longitude: -44.162,

    address: 'Angra dos Reis, Rio de Janeiro, Brasil',
  },

  {
    id: '2',
    name: 'Rio Nilo',

    description:
      'Conhecer o Rio Nilo é mergulhar em uma das paisagens mais emblemáticas do mundo. Ao longo de suas margens, o visitante encontra uma combinação única de natureza, história e cultura, passando por cidades, templos e cenários que ajudam a contar a trajetória de antigas civilizações.',

    image:
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e',

    categories: ['Viagens', 'Aventura', 'Internacional'],

    latitude: 24.0889,
    longitude: 32.8998,

    address: 'Aswan, Aswan Governorate, Egito',
  },
];