// LIBs
import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// DATA
import { Pizzas } from "./data/pizzas";
import { Drinks } from "./data/drinks";
import { SizeMontage } from "./data/sizeMontage";

export const useStore = create(
  persist(
    (set, get) => ({
      PizzasList: [ ...Pizzas ],
      DrinksList: [ ...Drinks ],
      SizeMontage: [ ...SizeMontage ],
      CartList: [],
      FavoriteList: [],
      OrderHistoryList: [],
      CartPrice: 0,
      addToCart: (product: any, price: any, count: number) => 
        set(
          produce(state => {
            const CartList = [ ...state.CartList ];
            const findProductIndexCart = CartList.findIndex(
              (el: any) => el.id === product.id
            );
            if (findProductIndexCart > -1) {
              const priceProduct = CartList[findProductIndexCart].prices.find(
                (el: any) => el.size === price.size
              );
              if (priceProduct) {
                priceProduct.quantity += count;
              } else {
                CartList[findProductIndexCart].prices.push({
                  ...price,
                  quantity: count,
                });
              }
            } else {
              CartList.unshift({
                ...product,
                prices: [
                  {
                    ...price,
                    quantity: count,
                  },
                ],
              });
            }
            state.CartList = CartList;
          })
        ),
      calculateTotalPrice: () => 
        set(
          produce(state => {
            let tmpValue = 0;
            state.CartList.forEach((product: any) => {
              product.prices.forEach((price: any) => {
                tmpValue += price.value * price.quantity;
              });
            });
            state.CartPrice = tmpValue;
          })
        ),
      incrementSizeQuantity: (id: number, type: string, size: string) =>
        set(
          produce(state => {
            const CartList = [ ...state.CartList ];
            const product = CartList.find((product: any) => product.id === id && product.type === type);
            const price = product.prices.find((price: any) => price.size === size);
            price.quantity += 1;
            state.CartList = CartList;
          })
        ),
      decrementSizeQuantity: (id: number, type: string, size: string) =>
        set(
          produce(state => {
            let CartList = [ ...state.CartList ];
            const product = CartList.find(
              (product: any) => product.id === id && product.type === type
            );
            const price = product.prices.find((price: any) => price.size === size);
            if (price.quantity > 1) {
              price.quantity -= 1;
            } else if (price.quantity === 1 && product.prices.length > 1) {
              product.prices = product.prices.filter((price: any) => price.size !== size);
            } else {
              CartList = CartList.filter(product => product.id !== id);
            }
            state.CartList = CartList;
          })
        ),
      toggleToFavorites: (product: any) =>
        set(
          produce(state => {
            let FavoriteList = [ ...state.FavoriteList ];
            let findInProduct = FavoriteList.find(
              (el: any) => el.id === product.id && el.type === product.type
            );
            if (findInProduct) {
              FavoriteList = FavoriteList.filter(
                (el: any) => el.id !== product.id
              );
            } else {
              FavoriteList.unshift(product);
            }
            state.FavoriteList = FavoriteList;
          })
        ),
    }),
    {
      name: "pizza-app",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);