import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View } from "react-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";

const styles = StyleSheet.create({
  repositoryInfoContainer: {
    marginBottom: 10
  }
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return (
    <View style={styles.repositoryInfoContainer}>
      <RepositoryItem item={repository} displayButton />
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({
    id,
    first: 8
  });

  if (!repository) {
    return null;
  }

  const reviews = repository.reviews.edges.map(edge => edge.node);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository;