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
    }),
    {
      name: "pizza-app",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);