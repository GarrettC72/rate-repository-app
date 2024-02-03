import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  sortPicker: {
    padding: 10,
  },
});

const RepositorySortPicker = ({ sortOption, setSortOption }) => {
  return (
    <View style={styles.sortPicker}>
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

export default RepositorySortPicker;