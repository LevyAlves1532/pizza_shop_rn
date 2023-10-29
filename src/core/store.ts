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
        )
    }),
    {
      name: "pizza-app",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);