// LIBs
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IFormProductAddProps {
  type: string;
  prices: any[];
  price: any;
  count: number;
  priceSelectHandler: any;
  countMinusHandler: any;
  countPlusHandler: any;
}

export function FormProductAdd({ 
  type,
  prices, 
  price, 
  count, 
  priceSelectHandler, 
  countMinusHandler,
  countPlusHandler,
}: IFormProductAddProps) {
  // console.log(price);  
  return (
    <View style={styles.FormAddContainer}>
      <View style={styles.FormAddHeader}>
        <View style={styles.FormAddSizes}>
          {
            prices.map((el: any, index: number) => (
              <TouchableOpacity 
                style={[
                  styles.FormAddButtonSizes,
                  {
                    backgroundColor: 
                      el.size === price.size
                        ? COLORS.primaryRedHex
                        : COLORS.primaryBlackRGBA,
                    minWidth: 
                      (type === "Drink" && index === 0) 
                        ? (SPACINGS.space_40 * 3.2) + 10
                        : SPACINGS.space_40 + 10
                  }
                ]}
                onPress={() => {
                  priceSelectHandler(el);
                }}
                key={index.toString()}
              >
                <Text style={styles.FormAddButtonTextSizes}>
                  {el.size}
                </Text>
              </TouchableOpacity>
            )) 
          }
        </View>

        <View style={styles.FormAddCount}>
          <TouchableOpacity 
            onPress={countMinusHandler}
            style={styles.FormAddCountButtonArea}
          >
            <Feather 
              name="minus"
              color={COLORS.primaryWhiteHex}
              size={FONTSIZES.size_24}
            />
          </TouchableOpacity>
          <Text style={styles.FormAddTextCount}>
            {count}
          </Text>
          <TouchableOpacity 
            onPress={countPlusHandler}
            style={styles.FormAddCountButtonArea}
          >
            <Feather 
              name="plus"
              color={COLORS.primaryWhiteHex}
              size={FONTSIZES.size_24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FormAddContainer: {
    paddingVertical: SPACINGS.space_20,
    paddingTop: SPACINGS.space_30,
    marginTop: -SPACINGS.space_20,
    backgroundColor: COLORS.primaryWhiteHex,
    borderTopLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
  },
  FormAddHeader: {
    paddingHorizontal: SPACINGS.space_30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  FormAddSizes: {
    width: ((SPACINGS.space_40 + 10) * 3) + 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: SPACINGS.space_10,
  },
  FormAddButtonSizes: {
    flex: 1,
    paddingHorizontal: SPACINGS.space_12,
    paddingVertical: SPACINGS.space_4 + 2,
    borderRadius: BORDERRADIUS.radius_5,
    alignItems: "center",
  },
  FormAddButtonTextSizes: {
    fontSize: FONTSIZES.size_18,
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryWhiteHex,
  },
  FormAddCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACINGS.space_20,
  },
  FormAddCountButtonArea: {
    padding: SPACINGS.space_12,
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  FormAddTextCount: {
    fontSize: FONTSIZES.size_24,
    fontFamily: FONTFAMILY.open_sans_semibold,
    color: COLORS.primaryRedHex,
  },
});
