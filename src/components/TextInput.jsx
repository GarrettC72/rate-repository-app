import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 3
  },
  textValid: {
    borderColor: 'darkgray',
    marginBottom: 15
  },
  textInvalid: {
    borderColor: theme.colors.error,
    marginBottom: 0
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error ? styles.textInvalid : styles.textValid];

  return <NativeTextInput style={textInputStyle} placeholderTextColor='darkgray' {...props} />;
};

export default TextInput;