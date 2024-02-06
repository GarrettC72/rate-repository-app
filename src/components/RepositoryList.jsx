import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader = () => {
    const props = this.props;

    return (
      <RepositoryListHeader
        sortOption={props.sortOption}
        setSortOption={props.setSortOption} 
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    );
  }

  render() {
    const { repositories, navigate } = this.props;
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
        ListHeaderComponent={this.renderHeader}
      />
    )
  }
}

const RepositoryList = () => {
  const [sortOption, setSortOption] = useState("CREATED_AT,DESC");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const navigate = useNavigate();

  const sortOptions = sortOption.split(",");
  const queryParams = {
    orderBy: sortOptions[0],
    orderDirection: sortOptions[1],
    searchKeyword,
  }

  const { repositories } = useRepositories(queryParams);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortOption={sortOption}
      setSortOption={setSortOption}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      navigate={navigate}
    />
  );
};

export default RepositoryList;