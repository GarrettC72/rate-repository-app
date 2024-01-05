import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  }
})

const AppBarTab = ({ text, path }) => {
  return (
    <Pressable>
      <Link to={path}>
        <Text style={styles.text} fontWeight="bold">{text}</Text>
      </Link>
    </Pressable>
  )
};

export default AppBarTab;