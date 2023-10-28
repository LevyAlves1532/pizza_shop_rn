// LIBs
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ROUTEs
import { TabsRoutes } from "./TabsRoutes";

// SCREENs
import { PaymentScreen } from "../../screens/Payment";
import { ProductScreen } from "../../screens/Product";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false, 
        animation: "slide_from_bottom",
      }}
    >
      <Screen name="TabsRoutes" component={TabsRoutes} />
      <Screen name="Payment" component={PaymentScreen} />
      <Screen name="Product" component={ProductScreen} />
    </Navigator>
  );
}
