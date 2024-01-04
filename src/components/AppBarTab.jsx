import { Pressable, StyleSheet } from "react-native"

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  }
})

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text} fontWeight="bold">{text}</Text>
    </Pressable>
  )
};

export default AppBarTab;