export const PRODUCT_CATEGORIES = [
  {
    label: 'Smart Home',
    value: 'smarthome' as const,
    featured: [
      {
        name: 'Lightening',
        href: `/products?category=smarthome`,
        imageSrc: '/nav/homesystems/smarthome1.jpg',
      },
      {
        name: 'Mobile Control',
        href: '/products?category=smarthome&sort=desc',
        imageSrc: '/nav/homesystems/smarthome2.jpg',
      },
      {
        name: 'Security System',
        href: '/products?category=smarthome',
        imageSrc: '/nav/homesystems/smarthome3.jpg',
      },
    ],
  },
  {
    label: 'Commercial and Industrial',
    value: 'commercial' as const,
    featured: [
      {
        name: 'Installations',
        href: `/products?category=commercial`,
        imageSrc: '/nav/commercial/commercial1.jpg',
      },
      {
        name: 'Solar Panel',
        href: '/products?category=commercial&sort=desc',
        imageSrc: '/nav/commercial/commercial2.jpg',
      },
      {
        name: 'Industrial Systems',
        href: '/products?category=commercial',
        imageSrc: '/nav/commercial/commercial3.jpg',
      },
    ],
  },
  {
    label: 'Minigrid',
    value: 'minigrid' as const,
    featured: [
      {
        name: 'Favorite Product Picks',
        href: `/products?category=minigrid`,
        imageSrc: '/nav/minigrid/minigrid1.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=minigrid&sort=desc',
        imageSrc: '/nav/minigrid/minigrid2.jpg',
      },
      {
        name: 'Bestselling Products',
        href: '/products?category=minigrid',
        imageSrc: '/nav/minigrid/minigrid3.jpg',
      },
    ],
  },
  {
    label: 'Solar Appliances',
    value: 'solarappliances' as const,
    featured: [
      {
        name: 'Modern Bulbs',
        href: `/products?category=solarappliances`,
        imageSrc: '/nav/appliances/appliances1.jpg',
      },
      {
        name: 'Solar Fan',
        href: '/products?category=solarappliances&sort=desc',
        imageSrc: '/nav/appliances/appliances2.jpeg',
      },
      {
        name: 'Solar Charged Lamps',
        href: '/products?category=solarappliances',
        imageSrc: '/nav/appliances/appliances3.jpeg',
      },
    ],
  },
  {
    label: 'Roof Top',
    value: 'rooftop' as const,
    featured: [
      {
        name: 'Solar Water Pump',
        href: `/products?category=rooftop`,
        imageSrc: '/nav/rooftop/rooftop1.jpeg',
      },
      {
        name: 'Car Chargers',
        href: '/products?category=rooftop&sort=desc',
        imageSrc: '/nav/rooftop/rooftop2.jpeg',
      },
      {
        name: 'Solar Shingles',
        href: '/products?category=rooftop',
        imageSrc: '/nav/rooftop/rooftop3.jpeg',
      },
    ],
  },
  {
    label: 'Other Services',
    value: 'services' as const,
    featured: [
      {
        name: 'Consultation',
        href: `/products?category=services`,
        imageSrc: '/nav/services/services1.jpg',
      },
      {
        name: 'Trainings',
        href: '/products?category=services&sort=desc',
        imageSrc: '/nav/services/services2.jpg',
      },
      {
        name: 'Education',
        href: '/products?category=services',
        imageSrc: '/nav/services/services3.jpg',
      },
    ],
  },
];
