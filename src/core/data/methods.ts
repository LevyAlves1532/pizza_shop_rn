export interface IMethodsTypes {
  id: string;
  image: string;
  title: string;
  value?: number;
};

export const Methods: IMethodsTypes[] = [
  {
    id: (Math.random() * 9999).toString(),
    image: require("../../assets/images/wallet.png"),
    title: "Wallet",
    value: 100.50,
  },
  {
    id: (Math.random() * 9999).toString(),
    image: require("../../assets/images/google_pay.png"),
    title: "Google Pay",
  },
  {
    id: (Math.random() * 9999).toString(),
    image: require("../../assets/images/apple_pay.png"),
    title: "Apple Pay",
  },
  {
    id: (Math.random() * 9999).toString(),
    image: require("../../assets/images/amazon_pay.png"),
    title: "Amazon Pay",
  },
];