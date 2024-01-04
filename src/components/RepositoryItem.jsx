import { Image, StyleSheet, View } from "react-native";

import Text from './Text';
import theme from "../theme";
import RepositoryStatistic from "./RepostioryStatistic";

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: theme.colors.white,
    padding: 15,
    gap: 15
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 20
  },
  infoText: {
    gap: 5
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 3
  },
  languageText: {
    color: theme.colors.white
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: item.ownerAvatarUrl
          }}
        />
        <View style={styles.infoText}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <View style={styles.language}>
            <Text style={styles.languageText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <RepositoryStatistic name='Stars' value={item.stargazersCount} />
        <RepositoryStatistic name='Forks' value={item.forksCount} />
        <RepositoryStatistic name='Reviews' value={item.reviewCount} />
        <RepositoryStatistic name='Rating' value={item.ratingAverage} />
      </View>
    </View>
  )
}

export default RepositoryItem;