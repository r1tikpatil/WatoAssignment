import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";

import { COLOR_PALETTE, onBoardingGradientColor } from "../../../constant";
import InputFieldComponent from "../../components/InputField";
import ButtonComponent from "../../components/ButtonComponet";
import GoogleButtonComponent from "../../components/GoogleButtonComponent";
import HaveAccountComponent from "../../components/HaveAccountTextCompoent";

const { light } = COLOR_PALETTE;
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SignUp = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);

  const handleSignInNavigation = () => {
    navigation.navigate("signIn");
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: light.bgColor }}>
      <View style={[styles.container, { minHeight: Math.round(Height) }]}>
        <View>
          <Text style={styles.text1}>Please sign-up for your account</Text>
        </View>

        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={onBoardingGradientColor}
          style={styles.container2}
        >
          <InputFieldComponent hint="Name" isPassword={false} />
          <InputFieldComponent hint="Email" isPassword={false} />
          <InputFieldComponent hint="Password" isPassword={true} />

          <View style={styles.container3}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#D4FB54" : ""}
              hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            />
            <View style={styles.container6}>
              <Text style={styles.text3}>I agree</Text>

              <Text style={styles.text4}>to privacy policy & terms</Text>
            </View>
          </View>

          <ButtonComponent text="Sign Up" />

          <HaveAccountComponent
            text1="Already have an account?"
            text2="Sign in instead"
            onClick={handleSignInNavigation}
          />

          <View style={styles.container5}>
            <Text style={styles.text5}>or</Text>
          </View>

          <GoogleButtonComponent />
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  checkbox: {
    margin: 8,
    width: 14,
    height: 14,
  },
  container6: {
    width: "100%",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: light.bgColor,
    paddingHorizontal: Width * 0.07,
    justifyContent: "center",
  },
  text1: {
    color: light.white,
    fontSize: 18,
    lineHeight: 26,
    fontFamily: "GtSuper-Regular",
  },
  container2: {
    marginTop: Height * 0.04,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.07)",
    paddingHorizontal: Width * 0.03,
    paddingVertical: 20,
    borderRadius: 10,
  },
  text2: {
    color: light.ligthYellow,
  },
  container3: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Width * 0.035,
  },
  container4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Height * 0.02,
  },
  text3: {
    color: light.white,
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  text4: {
    color: light.ligthYellow,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "Inter-Regular",
  },
  container5: {
    marginVertical: Height * 0.035,
    alignItems: "center",
  },
  text5: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
