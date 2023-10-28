// LIBs
import React from "react";
import { StyleSheet, View, Text, TextInput, Touchable, TouchableOpacity } from "react-native";

// THEMEs
import { BORDERRADIUS, COLORS, FONTSIZES, SPACINGS } from "../../themes/theme";

// ICONs
import { Feather } from "@expo/vector-icons";

interface IFormHomeSearchProps {
  search: string;
  searchHandler: any;
  clearSearchHandler: any;
}

export function FormHomeSearch({ search, searchHandler, clearSearchHandler }: IFormHomeSearchProps) {
  return (
    <View style={styles.FormSearchContainer}>
      <View style={styles.InputSearchArea}>
        <View style={styles.InputSearchButtonArea}>
          <TouchableOpacity style={styles.InputSearchButton}>
            <Feather 
              name="search"
              color={
                search.length > 0 
                  ? COLORS.secondaryRedHex 
                  : COLORS.primaryBlackHex
              }
              size={FONTSIZES.size_16}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.InputSearch}>
          <TextInput 
            value={search}
            placeholder="Get your pizza..."
            placeholderTextColor={COLORS.secondaryBlackHex}
            style={styles.Input} 
            onChangeText={searchHandler}
          />
        </View>

        { search.length > 0 &&
          <View style={styles.InputSearchButtonArea}>
            <TouchableOpacity 
              onPress={clearSearchHandler}
              style={styles.InputSearchButton}
            >
              <Feather 
                name="x"
                color={COLORS.primaryBlackHex}
                size={FONTSIZES.size_16}
              />
            </TouchableOpacity>
          </View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FormSearchContainer: {
    marginTop: SPACINGS.space_10,
    paddingHorizontal: SPACINGS.space_30,
    marginBottom: SPACINGS.space_20,
  },
  InputSearchArea: {
    paddingVertical: SPACINGS.space_16,
    paddingHorizontal: SPACINGS.space_20,
    flexDirection: "row",
    gap: SPACINGS.space_10,
    alignItems: "center",
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: SPACINGS.space_2,
    borderColor: COLORS.secondaryWhiteHex,
  },
  InputSearchButtonArea: {},
  InputSearchButton: {},
  InputSearch: {
    flex: 1,
  },
  Input: {
    width: "100%",
    color: COLORS.primaryBlackHex,
  },
});
