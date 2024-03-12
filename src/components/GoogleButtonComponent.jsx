import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";

import { COLOR_PALETTE } from "../../constant";
import GoogleIcon from "../../assets/googleIcon";

const { light } = COLOR_PALETTE;
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const GoogleButtonComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <GoogleIcon />
      <Text style={styles.text1}>{"Continue with Google"}</Text>
    </TouchableOpacity>
  );
};

export default GoogleButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: light.white,
    flexDirection: "row",
    paddingVertical: 10,
    alignContent: "center",
  },
  text1: {
    color: light.white,
    fontSize: 14,
    marginLeft: 8,
    fontFamily: "Inter-Medium",
  },
});
