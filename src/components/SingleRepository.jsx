import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View } from "react-native";
import { format } from "date-fns";

import theme from "../theme";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repositoryInfoContainer: {
    marginBottom: 10
  },
  reviewContainer: {
    backgroundColor: theme.colors.white,
    padding: 15,
    flexDirection: 'row'
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  usernameText: {
    marginBottom: 5
  },
  createdAtText: {
    flexGrow: 1
  },
  reviewText: {
    marginTop: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return (
    <View style={styles.repositoryInfoContainer}>
      <RepositoryItem item={repository} displayButton />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  // Single review item
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          {review.rating}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text fontWeight="bold" fontSize='subheading' style={styles.usernameText}>
          {review.user.username}
        </Text>
        <Text color='textSecondary' style={styles.createdAtText}>
          {format(review.createdAt, "dd.MM.yyyy")}
        </Text>
        <Text style={styles.reviewText}>
          {review.text}
        </Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  )
}

export default SingleRepository;