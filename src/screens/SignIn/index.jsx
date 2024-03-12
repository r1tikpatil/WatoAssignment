import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { COLOR_PALETTE, onBoardingGradientColor } from "../../../constant";
import InputFieldComponent from "../../components/InputField";
import ButtonComponent from "../../components/ButtonComponet";
import GoogleButtonComponent from "../../components/GoogleButtonComponent";
import HaveAccountComponent from "../../components/HaveAccountTextCompoent";

const { light } = COLOR_PALETTE;
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const SignIn = ({ navigation }) => {
  const handleSignUpNavigation = () => {
    navigation.navigate("signUp");
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: light.bgColor }}>
      <View style={[styles.container, { minHeight: Math.round(Height) }]}>
        <View>
          <Text style={styles.text1}>Please sign-in to your account</Text>
        </View>

        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={onBoardingGradientColor}
          style={styles.container2}
        >
          <InputFieldComponent hint="Email" isPassword={false} />
          <InputFieldComponent hint="Password" isPassword={true} />

          <View style={styles.container3}>
            <Text style={styles.text2}>Forgot Password?</Text>
          </View>

          <ButtonComponent text="Login" />

          <HaveAccountComponent
            text1="New to our platform?"
            text2="Create an account"
            onClick={handleSignUpNavigation}
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

export default SignIn;

const styles = StyleSheet.create({
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
    fontFamily: "Inter-Regular",
  },
  container3: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
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
  },
  text4: {
    color: light.ligthYellow,
    fontSize: 12,
    marginLeft: 5,
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
