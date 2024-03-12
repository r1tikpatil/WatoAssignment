import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { COLOR_PALETTE } from "../../constant";

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
const { light } = COLOR_PALETTE;

const HaveAccountComponent = ({ text1, text2, onClick }) => {
  return (
    <View style={styles.container4}>
      <Text style={styles.text5}>{text1}</Text>
      <TouchableOpacity onPress={onClick}>
        <Text style={styles.text4}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HaveAccountComponent;

const styles = StyleSheet.create({
  container4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Height * 0.03,
  },
  text5: {
    color: light.white,
    fontSize: 12,
  },
  text4: {
    color: light.ligthYellow,
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "Inter-Regular",
  },
});
