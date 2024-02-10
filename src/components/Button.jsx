import { Pressable, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
  },
  text: {
    color: 'white',
  },
});

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.container, style];

  return (
    <Pressable {...props} style={buttonStyle}>
      <Text style={styles.text} fontWeight="bold">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;