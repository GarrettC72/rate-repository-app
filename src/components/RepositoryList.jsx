import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import RepositorySortPicker from './RepositorySortPicker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sortOption, setSortOption }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={(
        <RepositorySortPicker
          sortOption={sortOption}
          setSortOption={setSortOption} 
        />
      )}
    />
  );
}

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState("CREATED_AT,DESC");

  const sortOptions = sortOption.split(",");
  const queryParams = {
    orderBy: sortOptions[0],
    orderDirection: sortOptions[1],
  }

  const { repositories } = useRepositories(queryParams);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortOption={sortOption}
      setSortOption={setSortOption}
    />
  );
};

export default RepositoryList;