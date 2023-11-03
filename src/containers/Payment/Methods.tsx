// LIBs
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// COMPONENTs
import { CardPayment } from "../../components/CardPayment";

// THEMEs
import { SPACINGS } from "../../themes/theme";

interface IPaymentMethodsProps {
  data: any[];
  selected: number;
  selectMethodHandler: any;
}

export function PaymentMethods({ data, selected, selectMethodHandler }: IPaymentMethodsProps) {
  return (
    <View style={styles.MethodsContainer}>
      {
        data.map((method: any, index: number) => (
          <CardPayment 
            data={method}
            selected={selected === method.id}
            selectMethodHandler={() => {
              selectMethodHandler(method.id);
            }}
            key={index.toString()}
          />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  MethodsContainer: {
    paddingHorizontal: SPACINGS.space_30,
    gap: SPACINGS.space_20,
    marginBottom: SPACINGS.space_30,
  },
});
