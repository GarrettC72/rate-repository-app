import { Image, StyleSheet, View } from "react-native";

import Text from '../Text';
import theme from "../../theme";
import RepositoryStatistic from "./RepostioryStatistic";

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoText: {
    flexGrow: 1,
    flexShrink: 1
  },
  nameText: {
    marginBottom: 5
  },
  descriptionText: {
    flexGrow: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        </View>
        <View style={styles.infoText}>
          <Text
            style={styles.nameText}
            fontWeight='bold'
            fontSize='subheading'
          >
            {item.fullName}
          </Text>
          <Text style={styles.descriptionText} color='textSecondary'>
            {item.description}
          </Text>
          {item.language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{item.language}</Text>
            </View>
          ) : null}
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