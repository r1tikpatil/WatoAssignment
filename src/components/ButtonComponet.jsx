import { TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";

import { COLOR_PALETTE } from "../../constant";

const { light } = COLOR_PALETTE;
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const ButtonComponent = ({ text }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.text1}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: light.ligthYellow,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: Height * 0.05,
  },
  text1: {
    color: light.black,
    fontSize: 14,
    fontFamily: "Inter-Medium",
  },
});
