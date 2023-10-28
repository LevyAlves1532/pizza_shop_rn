export interface ISizeMontageTypes {
  id: string;
  name: string;
  size: "SM" | "MM" | "LM" | "VLM";
  max_pizzas: number;
  pizzas: any[];
  price: {
    value: number;
    currency: string;
  }
}

export const SizeMontage: ISizeMontageTypes[] = [
  {
    id: (Math.random() * 9999).toString(),
    name: "Small Mass",
    size: "SM",
    max_pizzas: 2,
    pizzas: [],
    price: {
      value: 10,
      currency: "$",
    },
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Medium Mass",
    size: "MM",
    max_pizzas: 3,
    pizzas: [],
    price: {
      value: 20,
      currency: "$",
    },
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Large Mass",
    size: "LM",
    max_pizzas: 4,
    pizzas: [],
    price: {
      value: 30,
      currency: "$",
    },
  },
  {
    id: (Math.random() * 9999).toString(),
    name: "Very Large Mass",
    size: "VLM",
    max_pizzas: 5,
    pizzas: [],
    price: {
      value: 40,
      currency: "$",
    },
  },
];
