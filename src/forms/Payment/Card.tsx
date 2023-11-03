// LIBs
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface IFormPaymentCardProps {
  selected: boolean;
  selectMethodHandler: any;
}

export function FormPaymentCard({ selected, selectMethodHandler }: IFormPaymentCardProps) {
  return (
    <View style={styles.PaymentCardContainer}>
      <TouchableOpacity
        onPress={selectMethodHandler} 
        style={[
          styles.PaymentCardButton,
          {
            borderColor:
              selected
                ? COLORS.secondaryRedHex
                : COLORS.primaryRedHex
          }
        ]}
      >
        <View style={styles.PaymentCardTitleArea}>
          <Text style={styles.PaymentCardTitle}>Credit Card</Text>
        </View>

        <View style={styles.PaymentCard}>
          <View style={styles.PaymentCardImages}>
            <Image 
              source={require("../../assets/images/chip.png")}
            />

            <Image 
              source={require("../../assets/images/visa.png")}
            />
          </View>

          <View style={styles.PaymentCardCodeArea}>
            <Text style={styles.PaymentCardCode}>3897</Text>
            <Text style={styles.PaymentCardCode}>8923</Text>
            <Text style={styles.PaymentCardCode}>6745</Text>
            <Text style={styles.PaymentCardCode}>4638</Text>
          </View>

          <View style={styles.PaymentCardValuesArea}>
            <View>
              <Text style={styles.PaymentCardName}>Card Holder Name</Text>
              <TextInput 
                placeholder="Robert Evans"
                placeholderTextColor={COLORS.primaryWhiteHex}
                style={styles.PaymentCardInput}
              />
            </View>

            <View style={styles.PaymentCardValues}>
              <Text style={styles.PaymentCardName}>Expiry Date</Text>
              <TextInput 
                placeholder="02/30"
                placeholderTextColor={COLORS.primaryWhiteHex}
                style={styles.PaymentCardInput}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  PaymentCardContainer: {
    paddingTop: SPACINGS.space_30,
    paddingHorizontal: SPACINGS.space_30,
    marginBottom: SPACINGS.space_20,
  },
  PaymentCardButton: {
    borderWidth: SPACINGS.space_2,
    borderRadius: BORDERRADIUS.radius_15,
    padding: SPACINGS.space_12,
  },
  PaymentCardTitleArea: {
    marginBottom: SPACINGS.space_10,
  },
  PaymentCardTitle: {
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  PaymentCard: {
    backgroundColor: COLORS.secondaryRedHex,
    borderRadius: BORDERRADIUS.radius_15,
    paddingVertical: SPACINGS.space_16,
    paddingHorizontal: SPACINGS.space_12,
  },
  PaymentCardImages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACINGS.space_30,
  },
  PaymentCardCodeArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACINGS.space_20,
    marginBottom: SPACINGS.space_30,
  },
  PaymentCardCode: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
    letterSpacing: SPACINGS.space_4,
  },
  PaymentCardValuesArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  PaymentCardValues: {
    alignItems: "flex-end",
  },
  PaymentCardName: {
    fontSize: FONTSIZES.size_12,
    color: COLORS.secondaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_medium,
  },
  PaymentCardInput: {
    fontSize: FONTSIZES.size_18,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
});
