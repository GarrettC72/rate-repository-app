import { Pressable, StyleSheet } from "react-native"

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.tab.textPrimary,
    paddingVertical: 20,
    paddingHorizontal: 14,
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