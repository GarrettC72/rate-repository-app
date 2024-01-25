import { useApolloClient, useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };
    const mutationResult = await mutate({ variables: { credentials } });
    const { data } = mutationResult;

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return mutationResult;
  }

  return [signIn, result];
};

export default useSignIn;