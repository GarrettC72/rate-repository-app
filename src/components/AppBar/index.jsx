import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useAuthStorage from '../../hooks/useAuthStorage';
import useCurrentUser from '../../hooks/useCurrentUser';

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
  const { currentUser } = useCurrentUser(false);

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
          <>
            <AppBarTab to="/createReview">Create a review</AppBarTab>
            <AppBarTab to="/myReviews">My reviews</AppBarTab>
            <AppBarTab onPress={signOut}>Sign Out</AppBarTab>
          </>
        ) : (
          <>
            <AppBarTab to="/signin">Sign In</AppBarTab>
            <AppBarTab to="/signup">Sign Up</AppBarTab>
          </>
        )}
      </ScrollView>
    </View>
    );
};

export default AppBar;