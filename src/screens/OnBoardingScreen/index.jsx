import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { COLOR_PALETTE } from "../../../constant";
import Img from "../../../assets/onBoardingBgImg.png";
import { LinearGradient } from "expo-linear-gradient";
import HaveAccountComponent from "../../components/HaveAccountTextCompoent";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const { light } = COLOR_PALETTE;

const WelcomeScreen = ({ navigation }) => {
  const handleSignInNavigation = () => {
    navigation.navigate("signIn");
  };
  return (
    <ImageBackground source={Img} style={styles.image}>
      <Text style={styles.headingText}>wato</Text>
      <View style={styles.container1}>
        <Text style={styles.text2}>Zero Cost </Text>
        <Text style={styles.text2}>WhatsApp Messaging</Text>
        <Text style={styles.text2}>platform</Text>
      </View>

      <LinearGradient
        style={styles.linearGradientButton}
        colors={["#141517", "#2E2F30"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.text3}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>

      <HaveAccountComponent
        text1="Already have an account?"
        text2="Sign in instead"
        onClick={handleSignInNavigation}
      />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: Width * 0.07,
    paddingTop: Height * 0.2,
  },
  headingText: {
    fontSize: 50,
    color: light.white,
    fontFamily:"Inter-ExtraBold"
  },
  text2: {
    fontSize: 28,
    color: light.white,
    lineHeight: 42,
    fontFamily: "GtSuper-Regular",
  },
  container1: {
    marginTop: Height * 0.03,
  },
  linearGradientButton: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Height * 0.08,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontSize: 16,
    lineHeight: 22,
    color: light.white,
    fontFamily: "Inter-Medium",
  },
});
