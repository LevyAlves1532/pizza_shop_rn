export interface IPricePizzasTypes {
  size: "S" | "M" | "B" | "XB",
  slices: number;
  value: number;
  currency: string;
}

export interface IPizzasDataTypes {
  id: string;
  name: string;
  category: string;
  image: any;
  description: string;
  special_ingredient: string;
  ingredients: string[];
  prices: IPricePizzasTypes[];
  rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
}

export const Pizzas: IPizzasDataTypes[] = [
  {
    id: (Math.random() * 9999).toString(),
    name: "Margherita Pizza",
    category: "Traditional",
    image: { uri: "https://blog.praticabr.com/wp-content/uploads/2023/06/margherita-1024x682.jpg" },
    description: "A classic and simple pizza, with the freshness of basil and the creaminess of mozzarella, in honor of Queen Margherita of Italy.",
    special_ingredient: "Mozzarella",
    ingredients: ["Tomato Sauce", "Mozzarella", "Fresh Basil", "Olive Oil"],
    prices: [
      { size: "S", slices: 4, value: 29.73, currency: "$" },
      { size: "M", slices: 6, value: 38.73, currency: "$" },
      { size: "B", slices: 8, value: 47.73, currency: "$" },
      { size: "XB", slices: 10, value: 56.73, currency: "$" },
    ],
    rating: 5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Pepperoni Pizza",
    category: "Traditional",
    image: { uri: "https://media.istockphoto.com/id/521403691/pt/foto/quente-feito-em-casa-pizza-de-pepperoni.jpg?s=612x612&w=0&k=20&c=KWGroPbutn4ruhgedMeQ6vvPhFULRrnCMtV5coxr1AI=" },
    description: "A spicy and indulgent pizza with generous slices of pepperoni, perfect for salami lovers.",
    special_ingredient: "Pepperoni",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    prices: [
      { size: "S", slices: 4, value: 18.77, currency: "$" },
      { size: "M", slices: 6, value: 21.77, currency: "$" },
      { size: "B", slices: 8, value: 24.77, currency: "$" },
      { size: "XB", slices: 10, value: 27.77, currency: "$" },
    ],
    rating: 3.9,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Four Cheese Pizza",
    category: "Traditional",
    image: { uri: "https://anamariabraga.globo.com/wp-content/uploads/2016/07/pizza-de-4-queijos.jpg" },
    description: "An explosion of different cheese flavors, this pizza is a cheese lover's paradise.",
    special_ingredient: "Four Cheese",
    ingredients: ["Tomato Sauce", "Mozzarella", "Parmesan", "Gorgonzola", "Provolone"],
    prices: [
      { size: "S", slices: 4, value: 30.87, currency: "$" },
      { size: "M", slices: 6, value: 35.87, currency: "$" },
      { size: "B", slices: 8, value: 40.87, currency: "$" },
      { size: "XB", slices: 10, value: 45.87, currency: "$" },
    ],
    rating: 1.6,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Pepperoni Master Pizza",
    category: "Traditional",
    image: { uri: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/26/445963829-pizza-liquidificador-receita.jpg" },
    description: "Calabrian sausage adds a smoky and flavorful touch to this pizza, complemented with onion and olives.",
    special_ingredient: "Pepperoni Sausage",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni Sausage", "Onion", "Olives"],
    prices: [
      { size: "S", slices: 4, value: 33.09, currency: "$" },
      { size: "M", slices: 6, value: 41.09, currency: "$" },
      { size: "B", slices: 8, value: 49.09, currency: "$" },
      { size: "XB", slices: 10, value: 57.09, currency: "$" },
    ],
    rating: 4.3,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Cheese and Chicken Pizza",
    category: "Chicken",
    image: { uri: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg" },
    description: "Shredded chicken and creamy catupiry combine perfectly in this pizza, creating a delicious contrast between the mild chicken and creamy cheese.",
    special_ingredient: "Shredded chicken and catupiry",
    ingredients: ["Tomato Sauce", "Mozzarella", "Shredded Chicken", "Catupiry"],
    prices: [
      { size: "S", slices: 4, value: 21.44, currency: "$" },
      { size: "M", slices: 6, value: 22.44, currency: "$" },
      { size: "B", slices: 8, value: 23.44, currency: "$" },
      { size: "XB", slices: 10, value: 24.44, currency: "$" },
    ],
    rating: 3.9,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Vegetarian Pizza",
    category: "Vegetables",
    image: { uri: "https://www.chacarabertolin.com.br/wp-content/uploads/2018/07/pizza-frango-pimentao.jpg" },
    description: "A pizza full of colors and flavors, with a variety of fresh vegetables, perfect for vegetarians.",
    special_ingredient: "Vegetables",
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepper", "Onion", "Champignon", "Tomato", "Olives", "Brócolis"],
    prices: [
      { size: "S", slices: 4, value: 47.34, currency: "$" },
      { size: "M", slices: 6, value: 54.34, currency: "$" },
      { size: "B", slices: 8, value: 61.34, currency: "$" },
      { size: "XB", slices: 10, value: 68.34, currency: "$" },
    ],
    rating: 1.5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Napolitan Pizza",
    category: "Vegetables",
    image: { uri: "https://blog.livup.com.br/wp-content/uploads/2021/06/pizza-napolitana.jpg" },
    description: "Simplicity at its best, with buffalo mozzarella, fresh tomatoes and basil, this pizza evokes the flavor of the Naples region.",
    special_ingredient: "Buffalo Mozzarella",
    ingredients: ["Tomato Sauce", "Buffalo Mozzarella", "Tomato", "Fresh Basil", "Olive Oil"],
    prices: [
      { size: "S", slices: 4, value: 27.72, currency: "$" },
      { size: "M", slices: 6, value: 29.72, currency: "$" },
      { size: "B", slices: 8, value: 31.72, currency: "$" },
      { size: "XB", slices: 10, value: 33.72, currency: "$" },
    ],
    rating: 5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Mexican Pizza",
    category: "Miscellaneous Ingredients",
    image: { uri: "https://mezzani.com.br/wp-content/uploads/2019/04/f2f39286-97d4-4598-b2b2-bae8872aa943-1.jpg" },
    description: "A pizza full of spices, with seasoned ground beef, peppers and jalapeño peppers, reminiscent of the spicy flavors of Mexico.",
    special_ingredient: "Seasoned Ground Beef",
    ingredients: ["Tomato Sauce", "Mozzarella", "Seasoned Ground Beef", "Pepper", "Onion", "Jalapeno Pepper", "Corn", "Bean"],
    prices: [
      { size: "S", slices: 4, value: 48.97, currency: "$" },
      { size: "M", slices: 6, value: 56.97, currency: "$" },
      { size: "B", slices: 8, value: 64.97, currency: "$" },
      { size: "XB", slices: 10, value: 72.97, currency: "$" },
    ],
    rating: 5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Fungi Pizza",
    category: "Vegetables",
    image: { uri: "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-i-p/rez-edeka-pizza-funghi-rezept-i-p-1-1.jpg" },
    description: "An explosion of mushroom flavor, this pizza is a sophisticated dish for mushroom lovers.",
    special_ingredient: "Mushrooms",
    ingredients: ["Tomato Sauce", "Mozzarella", "Mushrooms", "Onion", "Basil"],
    prices: [
      { size: "S", slices: 4, value: 31.90, currency: "$" },
      { size: "M", slices: 6, value: 37.90, currency: "$" },
      { size: "B", slices: 8, value: 43.90, currency: "$" },
      { size: "XB", slices: 10, value: 49.90, currency: "$" },
    ],
    rating: 2,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Shrimp Pizza",
    category: "Seafood",
    image: { uri: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-camarao-0.jpg" },
    description: "A combination of succulent shrimp and fresh ingredients makes this pizza an elegant choice for seafood lovers.",
    special_ingredient: "Cameroon",
    ingredients: ["Tomato Sauce", "Mozzarella", "Cameroon", "Garlic", "Parsley", "Red Pepper"],
    prices: [
      { size: "S", slices: 4, value: 35.30, currency: "$" },
      { size: "M", slices: 6, value: 40.30, currency: "$" },
      { size: "B", slices: 8, value: 45.30, currency: "$" },
      { size: "XB", slices: 10, value: 50.30, currency: "$" },
    ],
    rating: 5,
    ratings_count: (Math.floor(Math.random() * 10000)).toString(),
    favourite: false,
    type: "Pizza",
  },
];
