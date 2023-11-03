// LIBs
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

interface ICardPaymentProps {
  data: any;
  selected: boolean;
  selectMethodHandler: any;
}

export function CardPayment({ data, selected, selectMethodHandler }: ICardPaymentProps) {
  return (
    <TouchableOpacity 
      onPress={selectMethodHandler}
      style={[
        styles.CardPaymentButton,
        {
          borderColor: 
            selected
              ? COLORS.secondaryRedHex
              : COLORS.primaryRedHex
        }
      ]}
    >
      <Image source={data.image} style={styles.CardPaymentImage} resizeMode="contain" />
      <View style={styles.CardPaymentTitleArea}>
        <Text style={styles.CardPaymentTitle}>{data.title}</Text>
      </View>
      { data.value &&
        <Text style={styles.CardPaymentValue}>$ {data.value}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardPaymentButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACINGS.space_10,
    paddingVertical: SPACINGS.space_16,
    paddingHorizontal: SPACINGS.space_24,
    borderRadius: BORDERRADIUS.radius_25 * 2,
    backgroundColor: COLORS.secondaryRedHex,
    borderWidth: SPACINGS.space_2,
  },
  CardPaymentImage: {
    width: SPACINGS.space_24,
  },
  CardPaymentTitleArea: {
    flex: 1,
  },
  CardPaymentTitle: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardPaymentValue: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
  },
});
