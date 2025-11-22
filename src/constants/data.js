import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'R$560',
    tags: 'Austrália | Garrafa',
  },
  {
    title: 'Catena Malbee',
    price: 'R$590',
    tags: 'Austrália | Garrafa',
  },
  {
    title: 'La Vieillw Rose',
    price: 'R$440',
    tags: 'França | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R$310',
    tags: 'Candá | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R$260',
    tags: 'Irland | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'R$200',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'R$160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'R$100',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'R$310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'R$260',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
