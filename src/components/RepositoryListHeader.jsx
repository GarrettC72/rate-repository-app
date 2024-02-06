import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import theme from '../theme';

const styles = StyleSheet.create({
  listHeaderContainer: {
    padding: 15,
  },
  searchbar: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.roundness
  }
});

const RepositoryListHeader = ({ sortOption, setSortOption, searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.listHeaderContainer}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Picker
        selectedValue={sortOption}
        onValueChange={(itemValue) =>
          setSortOption(itemValue)
        }
      >
        <Picker.Item label="Latest repositories" value="CREATED_AT,DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE,DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE,ASC" />
      </Picker>
    </View>
  );
};

export default RepositoryListHeader;