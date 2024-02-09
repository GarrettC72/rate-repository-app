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