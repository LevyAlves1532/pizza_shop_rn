// LIBs
import React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions 
} from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface ICardFavoriteProps {
  data: any;
  goProductHandler: any;
  removeToFavoriteHandler: any;
}

export function CardFavorite({ data, goProductHandler, removeToFavoriteHandler }: ICardFavoriteProps) {
  return (
    <TouchableOpacity 
      onPress={goProductHandler}
      style={styles.CardFavoriteContainer}
    >
      <ImageBackground
        source={data.image}
        style={styles.CardFavoriteBG}
      >
        <TouchableOpacity 
          onPress={removeToFavoriteHandler}
          style={styles.CardFavoriteButton}
        >
          <Feather 
            name="heart"
            color={COLORS.primaryRedHex}
            size={FONTSIZES.size_16}
          />
        </TouchableOpacity>

        <View 
          style={[
            styles.CardFavoriteDetails,
            {
              flexDirection:
                data.type === "Pizza"
                  ? "row"
                  : "column",
              gap:
                data.type === "Pizza"
                  ? SPACINGS.space_20
                  : SPACINGS.space_10,
            }
          ]}
        >
          <View 
            style={[
              styles.CardFavoriteTexts,
              {
                flex:
                  data.type === "Pizza"
                    ? 1
                    : undefined
              }
            ]}
          >
            <Text 
              style={styles.CardFavoriteTitle}
            >
              {data.name}
            </Text>
            { data.category &&
              <Text style={styles.CardFavoriteText}>{data.category}</Text>
            }
          </View>

          <View 
            style={[
              styles.CardFavoriteRatings,
              {
                flex:
                  data.type === "Pizza"
                    ? 1
                    : undefined,
                flexDirection:
                  data.type === "Pizza"
                    ? "column"
                    : "row",
                gap:
                  data.type === "Pizza"
                    ? 0
                    : SPACINGS.space_10,
              }
            ]}
          >
            <Feather 
              name="star"
              color={COLORS.primaryYellowHex}
              size={FONTSIZES.size_24 * 2}
            />
            <View 
              style={{ 
                alignItems: 
                  data.type === "Pizza"
                    ? "center"
                    : "flex-start",
              }}
            >
              <Text style={styles.CardFavoriteRating}>{data.rating}</Text>
              <Text style={styles.CardFavoriteRatingCount}>{data.ratings_count}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.CardFavoriteDescriptionArea}>
        <Text style={styles.CardFavoriteDescriptionTitle}>Description</Text>
        <Text style={styles.CardFavoriteDescription}>{data.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardFavoriteContainer: {
    backgroundColor: COLORS.primaryRedHex,
    borderRadius: BORDERRADIUS.radius_25,
    overflow: "hidden",
  },
  CardFavoriteBG: {
    height: (Dimensions.get("screen").height / 4) * 1.7,
    justifyContent: "space-between",
  },
  CardFavoriteButton: {
    alignSelf: "flex-end",
    margin: SPACINGS.space_20,
    padding: SPACINGS.space_4 * 2,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_5,
    borderWidth: 2,
    borderColor: COLORS.secondaryWhiteHex,
  },
  CardFavoriteDetails: {
    gap: SPACINGS.space_20,
    justifyContent: "space-between",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_15,
    borderTopRightRadius: BORDERRADIUS.radius_15,
    padding: SPACINGS.space_20,
  },
  CardFavoriteTexts: {
    flex: 2,
    gap: SPACINGS.space_4 + 1,
  },
  CardFavoriteTitle: {
    fontSize: FONTSIZES.size_18,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardFavoriteText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_medium,
  },
  CardFavoriteRatings: {
    flex: 1,
    alignItems: "center",
  },
  CardFavoriteRating: {
    fontSize: FONTSIZES.size_24,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardFavoriteRatingCount: {
    fontSize: FONTSIZES.size_12,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_medium,
  },
  CardFavoriteDescriptionArea: {
    padding: SPACINGS.space_20,
    gap: SPACINGS.space_4 + 1,
  },
  CardFavoriteDescriptionTitle: {
    fontSize: FONTSIZES.size_16,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CardFavoriteDescription: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.open_sans_regular,
  },
});
