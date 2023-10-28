// LIBs
import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZES, SPACINGS } from "../../themes/theme";

interface IHomeCategoriesProps {
  data: string[];
  selected: string;
  selectHandler: any;
}

export function HomeCategories({ data, selected, selectHandler }: IHomeCategoriesProps) {
  return (
    <View style={styles.CategoriesContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewCategories}
      >
        {
          data.map((category, index) => (
            <TouchableOpacity
              onPress={() => {
                selectHandler(category);
              }}
              key={index.toString()}
            >
              <Text 
                style={[
                  styles.CategoryText,
                  {
                    color: 
                      category === selected 
                        ? COLORS.primaryRedHex
                        : COLORS.primaryBlackHex,
                  }
                ]}
              >
                {category}
              </Text>
              { category === selected &&
                <View style={styles.CategorySelect} />
              }
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  CategoriesContainer: {
    paddingVertical: SPACINGS.space_28,
  },
  ScrollViewCategories: {
    paddingHorizontal: SPACINGS.space_30,
    gap: SPACINGS.space_16,
  },
  CategoryText: {
    fontSize: FONTSIZES.size_18,
    fontFamily: FONTFAMILY.open_sans_semibold,
  },
  CategorySelect: {
    width: SPACINGS.space_8,
    height: SPACINGS.space_8,
    borderRadius: BORDERRADIUS.radius_5,
    backgroundColor: COLORS.primaryRedHex,
    marginTop: SPACINGS.space_10,
    alignSelf: "center",
  },
});
