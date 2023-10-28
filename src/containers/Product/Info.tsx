// LIBs
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// THEMEs
import { COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IProductInfoProps {
  description: string;
  rating: number;
  ratings_count: number;
  isMore: boolean;
  toggleIsMoreHandler: any;
}

export function ProductInfo({ 
  description, 
  rating, 
  ratings_count, 
  isMore, 
  toggleIsMoreHandler 
}: IProductInfoProps) {
  return (
    <View style={styles.InfoArea}>
      <View style={styles.InfoTextArea}>
        <TouchableOpacity
          onPress={toggleIsMoreHandler}
        >
          { isMore ? (
              <Text style={styles.InfoText}>
                {description}
              </Text>
            ) : (
              <Text numberOfLines={2} style={styles.InfoText}>
                {description}
              </Text>
            )
          }
        </TouchableOpacity>
      </View>

      <View style={styles.InfoAvaliationArea}>
        <Text style={styles.InfoAvaliationTitle}>
          Avaliation Pizza
        </Text>
        <View style={styles.InfoAvaliation}>
          <View>
            <Feather 
              name="star"
              color={COLORS.primaryYellowHex}
              size={FONTSIZES.size_32 * 2}
            />
          </View>

          <View>
            <Text style={styles.InfoAvaliationText}>
              {rating.toFixed(1).toString()}
            </Text>
            <Text style={styles.InfoAvaliationTextPeople}>
              {ratings_count.toString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  InfoArea: {
    paddingHorizontal: SPACINGS.space_30,
  },
  InfoTextArea: {
    marginBottom: SPACINGS.space_20,
  },
  InfoText: {
    fontFamily: FONTFAMILY.open_sans_medium,
    color: COLORS.primaryGrayHex,
  },
  InfoAvaliationArea: {
    gap: SPACINGS.space_10,
  },
  InfoAvaliationTitle: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    fontSize: FONTSIZES.size_18,
  },
  InfoAvaliation: {
    flexDirection: "row",
    gap: SPACINGS.space_10,
    alignItems: "center",
  },
  InfoAvaliationText: {
    fontFamily: FONTFAMILY.open_sans_semibold,
    fontSize: FONTSIZES.size_28,
    color: COLORS.primaryRedHex,
  },
  InfoAvaliationTextPeople: {
    fontFamily: FONTFAMILY.open_sans_regular,
    fontSize: FONTSIZES.size_12,
    color: COLORS.primaryGrayHex,
  },
});
