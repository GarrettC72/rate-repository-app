import { View, StyleSheet, Pressable } from "react-native";
import { Link } from "react-router-native";

import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.colors.white,
  }
})

const AppBarTab = ({ children, to, ...props }) => {
  const content = (
    <View style={styles.tabContainer}>
      <Text style={styles.text} fontWeight="bold">
        {children}
      </Text>
    </View>
  );

  return to ? (
    <Link style={styles.tabTouchable} to={to} {...props}>
      {content}
    </Link>
  ) : (
    <Pressable {...props}>{content}</Pressable>
  )
};

export default AppBarTab;