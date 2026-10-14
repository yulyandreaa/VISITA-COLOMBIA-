export interface Slide {
  image: string;
  place: string;
  region: string;
  title: [string, string];
}

export interface Highlight {
  title: string;
  text: string;
}

export interface Tour {
  image: string;
  name: string;
  place: string;
  days: string;
  description: string;
}

export interface Moment {
  image: string;
  label: string;
}

export interface Credit {
  file: string;
  author: string;
  license: string;
  url: string;
}

const img = (name: string) => `/img/${name}`;

export const slides: Slide[] = [
  { image: img('cocora.jpg'), place: 'Valle de Cocora', region: 'Quindío', title: ['Visita', 'Colombia'] },
  { image: img('cartagena-sunset.jpg'), place: 'Cartagena de Indias', region: 'Bolívar', title: ['Siente', 'el Caribe'] },
  { image: img('cristales.jpg'), place: 'Caño Cristales', region: 'Meta', title: ['El río de', 'los 5 colores'] },
  { image: img('cocuy.jpg'), place: 'Sierra Nevada del Cocuy', region: 'Boyacá', title: ['Tócale', 'el cielo'] },
];

export const highlights: Highlight[] = [
  {
    title: 'Dos océanos, tres cordilleras',
    text: 'Del Caribe al Pacífico pasando por nevados, desiertos y selva amazónica: todos los paisajes en un solo viaje.',
  },
  {
    title: 'El país más biodiverso por km²',
    text: 'Más de 1.900 especies de aves, palmas de cera de 60 metros y ríos que cambian de color con las estaciones.',
  },
  {
    title: 'Gente que te recibe en casa',
    text: 'Café recién colado, salsa, vallenato y cumbia. Aquí nadie es extranjero por mucho tiempo.',
  },
];

export const tours: Tour[] = [
  {
    image: img('cartagena-sunset.jpg'),
    name: 'Tour #1',
    place: 'Cartagena amurallada',
    days: '4 días',
    description: 'Murallas coloniales, atardeceres en el baluarte y las Islas del Rosario.',
  },
  {
    image: img('guatape.jpg'),
    name: 'Tour #2',
    place: 'Guatapé y El Peñol',
    days: '2 días',
    description: '740 escalones hasta la cima y un embalse de mil islas a tus pies.',
  },
  {
    image: img('tayrona.jpg'),
    name: 'Tour #3',
    place: 'Parque Tayrona',
    days: '3 días',
    description: 'Selva que baja hasta el mar, playas de arena dorada y hamacas en Cabo San Juan.',
  },
  {
    image: img('ciudad-perdida.jpg'),
    name: 'Tour #4',
    place: 'Ciudad Perdida',
    days: '5 días',
    description: 'Caminata a Teyuna, la ciudad tayrona construida 650 años antes que Machu Picchu.',
  },
];

export const moments: Moment[] = [
  { image: img('comuna13.jpg'), label: 'Medellín · Comuna 13' },
  { image: img('cristales2.jpg'), label: 'La Macarena · Meta' },
  { image: img('sal.jpg'), label: 'Catedral de Sal · Zipaquirá' },
  { image: img('guatape-vista.jpg'), label: 'Vista desde El Peñol' },
];

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

export const credits: Credit[] = [
  { file: 'Valle de Cocora', author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', url: commons('Valle_de_Cocora,_Colombia_02.jpg') },
  { file: 'Atardecer en Cartagena', author: 'Igvir Ramirez', license: 'CC BY-SA 2.0', url: commons('Sunset-cartagena-tower-dewired.jpg') },
  { file: 'Caño Cristales', author: 'Gicaman', license: 'CC BY-SA 4.0', url: commons('Cascadas_Manto_de_La_Virgen_-_Caño_Cristales_-_La_Macarena_-_Meta_-_Colombia.jpg') },
  { file: 'Cascada los Cuarzos', author: 'Gicaman', license: 'CC BY-SA 4.0', url: commons('Cascada_los_Cuarzos_-_Caño_Cristales_-_La_Macarena.jpg') },
  { file: 'Sierra Nevada del Cocuy', author: 'Caminante82', license: 'CC BY-SA 4.0', url: commons('Sendero_a_Laguna_Grande_de_La_Sierra_en_la_Sierra_Nevada_del_Cocuy,_Güican_y_Chita.jpg') },
  { file: 'El Peñol de Guatapé', author: 'Sebastian Reategui', license: 'CC0', url: commons('El_Peñol_de_Guatapé_(The_Rock_of_Guatape)_2017-04-10.jpg') },
  { file: 'Vista desde El Peñol', author: 'Javier Perez Montes', license: 'CC BY-SA 4.0', url: commons('Vista_desde_la_Piedra_del_Penol_-_Colombia_02.jpg') },
  { file: 'Parque Tayrona', author: 'David Shankbone', license: 'CC BY-SA 3.0', url: commons('111_Tayrona_National_Park_Colombia.JPG') },
  { file: 'Ciudad Perdida', author: 'Gavin Rough', license: 'CC BY 2.0', url: commons('Lost_City_Ruins.jpg') },
  { file: 'Comuna 13', author: 'Bernard Gagnon', license: 'CC BY-SA 4.0', url: commons('Comuna_13,_Medellín_02.jpg') },
  { file: 'Catedral de Sal', author: 'Novoaparra', license: 'CC BY-SA 3.0', url: commons('Salt_Cathedral_of_Zipaquirá_main_altar.jpg') },
];
