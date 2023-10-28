// LIBs
import { ImageProps } from "react-native";

export interface IPricePizzasTypes {
  size: "600ml" | "1l" | "2l",
  value: number;
  currency: string;
}

export interface IPizzasDataTypes {
  id: string;
  name: string;
  image: any;
  description: string;
  prices: IPricePizzasTypes[];
  rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
}

export const Drinks: IPizzasDataTypes[] = [
  {
    id: (Math.random() * 9999).toString(),
    name: "Water",
    image: { uri: "https://uploads.metropoles.com/wp-content/uploads/2023/07/05152058/GettyImages-1410040455.jpg" },
    description: "The most essential of all drinks, water is essential for hydrating the body.",
    prices: [
      { size: "600ml", value: 9.32, currency: "$" },
      { size: "1l", value: 13.32, currency: "$" },
      { size: "2l", value: 17.32, currency: "$" },
    ],
    rating: 4,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Drink",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Coke Soda",
    image: { uri: "https://img.freepik.com/fotos-premium/despeje-o-refresco-em-vidro-com-respingo-de-gelo-no-fundo-escuro_79161-3.jpg" },
    description: "A sweet, carbonated drink popular around the world.",
    prices: [
      { size: "600ml", value: 13.08, currency: "$" },
      { size: "1l", value: 21.08, currency: "$" },
      { size: "2l", value: 29.08, currency: "$" },
    ],
    rating: 3.5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Drink",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Coffee",
    image: { uri: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" },
    description: "A hot and stimulating drink made with roasted coffee beans.",
    prices: [
      { size: "600ml", value: 12.60, currency: "$" },
      { size: "1l", value: 19.60, currency: "$" },
      { size: "2l", value: 26.60, currency: "$" },
    ],
    rating: 4.4,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Drink",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Orange Juice",
    image: { uri: "https://proxy.organicadigital.com/img-60e033722f54581f.png?thumb=1200x630%23" },
    description: "A refreshing citrus juice, rich in vitamin C.",
    prices: [
      { size: "600ml", value: 16, currency: "$" },
      { size: "1l", value: 26, currency: "$" },
      { size: "2l", value: 36, currency: "$" },
    ],
    rating: 1.3,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Drink",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Iced Tea",
    image: { uri: "https://sgw.bacanudo.com/storage/conteudo/1/2536/20190116114626_5c3f43c2a4b5e.jpg" },
    description: "Chilled, often sweetened tea available in a variety of flavors such as black tea, green tea, and herbal tea.",
    prices: [
      { size: "600ml", value: 15.67, currency: "$" },
      { size: "1l", value: 25.67, currency: "$" },
      { size: "2l", value: 35.67, currency: "$" },
    ],
    rating: 5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Drink",
  },
];
