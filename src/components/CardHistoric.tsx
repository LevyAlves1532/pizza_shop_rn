// LIBs
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

export interface ICardHistoricProps {
  data: any;
}

export function CardHistoric({ data }: ICardHistoricProps) {
  return (
    <View style={styles.CardHistoricContainer}>
      <View style={styles.CardHistoricHeader}>
        <View>
          <Text style={styles.CardHistoricHeaderTitle}>Order Date</Text>
          <Text style={styles.CardHistoricHeaderSubTitle}>{data.Date}</Text>
        </View>

        <View style={styles.CardHistoricHeaderGroup}>
          <Text style={styles.CardHistoricHeaderTitle}>Total Amount</Text>
          <Text 
            style={[
              styles.CardHistoricHeaderSubTitle,
              { color: COLORS.primaryRedHex }
            ]}
          >
            $ {data.CartPrice.toFixed(2)}
          </Text>
        </View>
      </View>

      {
        data.CartList.map((product: any, index: number) => (
          <View 
            style={styles.CardHistoric}
            key={index.toString()}
          >
            <View style={styles.CardHistoricDetails}>
              <Image 
                source={product.image} 
                style={styles.CardHistoricImage}
              />
              <View style={styles.CardHistoricTexts}>
                <Text style={styles.CardHistoricTitle}>{product.name}</Text>
                { product.category &&
                  <Text style={styles.CardHistoricSubTitle}>{product.category}</Text>
                }
              </View>
              <View style={styles.CardHistoricPriceArea}>
                <Text style={styles.CardHistoricCurrency}>
                  {product.prices[0].currency+" "}
                  <Text style={styles.CardHistoricPrice}>
                    {
                      product.prices.map(
                        (price: any) => price.value * price.quantity
                      ).reduce(
                        (a: number, b: number) => a + b
                      ).toFixed(2)
                    }
                  </Text>
                </Text>
              </View>
            </View>

            <View style={styles.CardHistoricSizes}>
              {
                product.prices.map((price: any, index: number) => (
                  <View 
                    style={styles.CardHistoricSizeArea}
                    key={index.toString()}
                  >
                    <View style={styles.CardHistoricSizeContainer}>
                      <View style={styles.CardHistoricSize}>
                        <Text style={styles.CardHistoricSizeText}>{price.size}</Text>
                      </View>
                      <View style={styles.CardHistoricSizeValue}>
                        <Text>{price.currency} {price.value.toFixed(2)}</Text>
                      </View>
                    </View>
                    <Text style={styles.CardHistoricQuantitySymbol}>
                      X
                      <Text style={styles.CardHistoricQuantity}>{" "+price.quantity}</Text>
                    </Text>
                    <Text style={styles.CardHistoricSizePrice}>{(price.value * price.quantity).toFixed(2)}</Text>
                  </View>
                ))
              }
            </View>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  CardHistoricContainer: {
    gap: SPACINGS.space_8,
  },
  CardHistoricHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CardHistoricHeaderTitle: {
    fontSize: FONTSIZES.size_12,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardHistoricHeaderSubTitle: {
    fontFamily: FONTFAMILY.open_sans_medium,
  },
  CardHistoricHeaderGroup: {
    alignItems: "flex-end",
  },
  CardHistoric: {
    backgroundColor: COLORS.primaryRedHex,
    padding: SPACINGS.space_20,
    borderRadius: BORDERRADIUS.radius_15,
    marginBottom: SPACINGS.space_10,
  },
  CardHistoricDetails: {
    marginBottom: SPACINGS.space_10,
    flexDirection: "row",
    gap: SPACINGS.space_10,
  },
  CardHistoricImage: {
    width: SPACINGS.space_30 * 2,
    height: SPACINGS.space_30 * 2,
    borderRadius: BORDERRADIUS.radius_10,
  },
  CardHistoricTexts: {
    flex: 1,
    justifyContent: "center",
  },
  CardHistoricTitle: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardHistoricSubTitle: {
    fontSize: FONTSIZES.size_12,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardHistoricPriceArea: {
    justifyContent: "center",
  },
  CardHistoricCurrency: {
    fontSize: FONTSIZES.size_18,
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryYellowHex,
  },
  CardHistoricPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardHistoricSizes: {
    gap: SPACINGS.space_10,
  },
  CardHistoricSizeArea: {
    flexDirection: "row",
    gap: SPACINGS.space_10,
    alignItems: "center",
  },
  CardHistoricSizeContainer: {
    flexDirection: "row",
    gap: SPACINGS.space_2,
    borderRadius: BORDERRADIUS.radius_10,
    overflow: "hidden",
  },
  CardHistoricSize: {
    width: SPACINGS.space_20 * 2.5,
    height: SPACINGS.space_24,
    backgroundColor: COLORS.primaryYellowHex,
    justifyContent: "center",
    alignItems: "center",
  },
  CardHistoricSizeText: {
    fontSize: FONTSIZES.size_12,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardHistoricSizeValue: {
    width: SPACINGS.space_30 * 2.5,
    height: SPACINGS.space_24,
    backgroundColor: COLORS.primaryYellowHex,
    justifyContent: "center",
    alignItems: "center",
  },
  CardHistoricQuantitySymbol: {
    flex: 1,
    textAlign: "center",
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryYellowHex,
  },
  CardHistoricQuantity: {
    color: COLORS.primaryWhiteHex,
  },
  CardHistoricSizePrice: {
    width: SPACINGS.space_30 * 2,
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
    textAlign: "right",
  },
});
