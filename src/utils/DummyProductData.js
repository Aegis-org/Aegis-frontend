import mercedes from "../assets/product-mercedes.png";
import motorcycle from "../assets/product-motorcycle.png";
import keke from "../assets/product-keke.png";
import sportsCar from "../assets/sports-car.png";

export const products = [
  {
    id: 1,
    name: "Mercedes",
    model: "E350",
    price: "$150k",
    image: mercedes,
    imgAlt: "alt-1",
    year: "2010",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Sedan",
    VinNumber: "123456789",
  },
  {
    id: 2,
    name: "TVS",
    model: "E350",
    price: "$150k",
    image: motorcycle,
    imgAlt: "alt-2",
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Motorcycle",
    VinNumber: "123456789",
  },
  {
    id: 3,
    name: "Bajaj",
    model: "E350",
    price: "$150k",
    image: keke,
    imgAlt: "alt-3",
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Tricycle",
    VinNumber: "123456789",
  },
  {
    id: 4,
    name: "mercedes",
    model: "E350",
    price: "$150k",
    image: mercedes,
    imgAlt: "alt-4",
    year: "2020",
    bodyType: "curvy",
    fuel: "Gasoline",
    type: "Sedan",
    VinNumber: "123456789",
  },
  {
    id: 5,
    name: "Chevrolet",
    model: "ES350",
    price: "$150k",
    image: sportsCar,
    imgAlt: "alt-5",
    year: "2015",
    bodyType: "Sporty",
    fuel: "Gasoline",
    type: "Sports Car",
    VinNumber: "123456789",
  },
];

export const users = [
  {
    id: 1,
    firstName: 'Ezekiel',
    lastName: 'Frederick',
    email: 'ezekiel@gmail.com',
    type: 'seller'
  },
  {
    id: 2,
    firstName: 'Cassidy',
    lastName: 'Nwune',
    email: 'kass.nwune@gmail.com',
    type: 'buyer'
  }
]
