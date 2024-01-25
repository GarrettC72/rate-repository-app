import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { GET_CURRENT_USER } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row'
  }
  // ...
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const { data } = useQuery(GET_CURRENT_USER);
  const currentUser = data?.me;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {currentUser ? (
          <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
        ) : (
          <AppBarTab to="/signin">Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
    );
};

export default AppBar;