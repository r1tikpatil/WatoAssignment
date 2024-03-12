import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { COLOR_PALETTE } from "../../constant";

const { light } = COLOR_PALETTE;
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const InputFieldComponent = ({ hint, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={hint}
        placeholderTextColor={light.placeholderColor}
        style={styles.inputField}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color={light.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputFieldComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: light.white,
    borderRadius: 10,
    paddingVertical: Height * 0.01,
    paddingHorizontal: 10,
    marginBottom: Height * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputField: {
    fontFamily: "Inter-Regular",
    color: light.placeholderColor,
    width: "80%",
  },
  iconContainer: {},
});
