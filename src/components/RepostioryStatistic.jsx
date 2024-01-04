import { StyleSheet, View } from "react-native"

import Text from "./Text";

const styles = StyleSheet.create({
  statistic: {
    gap: 5,
    alignItems: 'center'
  }
});

const RepositoryStatistic = ({ name, value }) => {
  const statValue = value < 1000 ? value : parseFloat((value / 1000).toFixed(1)) + "k"
  return (
    <View style={styles.statistic}>
      <Text fontWeight='bold'>{statValue}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  )
};

export default RepositoryStatistic;