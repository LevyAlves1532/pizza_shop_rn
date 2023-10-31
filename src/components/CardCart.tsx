// LIBs
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface ICardCartProps {
  data: any;
}

export function CardCart({ data }: ICardCartProps) {
  // console.log(data);
  return (
    <View style={styles.CardCartContainer}>
      <TouchableOpacity style={styles.CartCartProduct}>
        <Image 
          source={data.image} 
          style={styles.CardCartImage}
        />

        <View style={styles.CardCartDetails}>
          <Text 
            style={[
              styles.CardCartTitle,
              {
                marginBottom:
                  data.type === "Pizza"
                    ? 0
                    : SPACINGS.space_10,
              }
            ]}
          >
            {data.name}
          </Text>
          { data.type === "Pizza" && (
              <>
                <Text style={styles.CardCartSubTitle}>{data.category}</Text>
                <Text style={styles.CardCartIngredients}>
                  {data.ingredients.join(", ")}
                </Text>
              </>
            )
          }
          <View style={styles.CardCartAvaliation}>
            <Feather 
              name="star" 
              color={COLORS.primaryYellowHex}
              size={SPACINGS.space_24}
            />
            <Text style={styles.CardCartAvaliationText}>{data.rating.toFixed(1)}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Text style={styles.CardCartPriceTitle}>Prices of the {data.name}</Text>

      <View style={styles.CardCartPrices}>
        {
          data.prices.map((price: any, index: number) => (
            <View 
              style={styles.CardCartPrice}
              key={index}
            >
              <View style={styles.CardCartSize}>
                <Text style={styles.CardCartSizeText}>{price.size}</Text>
              </View>

              <View style={styles.CardCartQuantity}>
                <TouchableOpacity style={styles.CardCartQuantityButton}>
                  <Feather 
                    name="minus"
                    color={COLORS.primaryBlackHex}
                    size={FONTSIZES.size_14}
                  />
                </TouchableOpacity>
                <View style={styles.CardCartQuantityTextArea}>
                  <Text>{price.quantity}</Text>
                </View>
                <TouchableOpacity style={styles.CardCartQuantityButton}>
                  <Feather 
                    name="plus"
                    color={COLORS.primaryBlackHex}
                    size={FONTSIZES.size_14}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.CardCartValueCurrency}>
                {price.currency+" "}
                <Text style={styles.CardCartValue}>
                  {(price.value * price.quantity).toFixed(2)}
                </Text>
              </Text>
            </View>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardCartContainer: {
    gap: SPACINGS.space_20,
  },
  CartCartProduct: {
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_15,
    flexDirection: "row",
    overflow: "hidden",
  },
  CardCartImage: {
    width: SPACINGS.space_40 * 2.5,
    height: "auto",
  },
  CardCartDetails: {
    padding: SPACINGS.space_12,
  },
  CardCartTitle: {
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryWhiteHex,
  },
  CardCartSubTitle: {
    fontFamily: FONTFAMILY.open_sans_medium,
    marginBottom: SPACINGS.space_4,
    color: COLORS.secondaryWhiteHex,
  },
  CardCartIngredients: {
    fontSize: FONTSIZES.size_12,
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryWhiteHex,
    flexWrap: "wrap",
    marginBottom: SPACINGS.space_10,
  },
  CardCartAvaliation: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACINGS.space_10,
  },
  CardCartAvaliationText: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardCartPriceTitle: {
    fontSize: FONTSIZES.size_18,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardCartPrices: {
    padding: SPACINGS.space_12,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_15,
    gap: SPACINGS.space_12,
  },
  CardCartPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CardCartSize: {
    width: SPACINGS.space_30 * 2,
    height: SPACINGS.space_30,
    backgroundColor: COLORS.primaryYellowHex,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDERRADIUS.radius_5,
  },
  CardCartSizeText: {
    fontSize: FONTSIZES.size_16,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardCartQuantity: {
    width: SPACINGS.space_40 * 2.5,
    height: SPACINGS.space_30,
    flexDirection: "row",
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_5,
    overflow: "hidden",
  },
  CardCartQuantityButton: {
    width: SPACINGS.space_30,
    backgroundColor: COLORS.primaryYellowHex,
    justifyContent: "center",
    alignItems: "center",
  },
  CardCartQuantityTextArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CardCartValueCurrency: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryYellowHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardCartValue: {
    color: COLORS.primaryWhiteHex,
  },
});
