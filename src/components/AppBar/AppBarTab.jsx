import { View, StyleSheet } from "react-native";
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

const AppBarTab = ({ children, ...props }) => {
  return (
    <Link style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text style={styles.text} fontWeight="bold">
          {children}
        </Text>
      </View>
    </Link>
  )
};

export default AppBarTab;