import { StyleSheet, View } from "react-native"

import Text from "./Text";

const styles = StyleSheet.create({
  statisticContainer: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  statisticValue: {
    marginBottom: 5,
  }
});

const RepositoryStatistic = ({ name, value }) => {
  const statValue = value < 1000 ? value : parseFloat((value / 1000).toFixed(1)) + "k"
  return (
    <View style={styles.statisticContainer}>
      <Text style={styles.statisticValue} fontWeight='bold'>
        {statValue}
      </Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  )
};

export default RepositoryStatistic;