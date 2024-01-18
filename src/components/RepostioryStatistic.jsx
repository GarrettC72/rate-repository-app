import { StyleSheet, View } from "react-native"

import Text from "./Text";
import formatInThousands from "../utils/formatInThousands";

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
  return (
    <View style={styles.statisticContainer}>
      <Text style={styles.statisticValue} fontWeight='bold'>
        {formatInThousands(value)}
      </Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  )
};

export default RepositoryStatistic;