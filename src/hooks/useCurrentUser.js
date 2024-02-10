import { useQuery } from "@apollo/client";

import { GET_CURRENT_USER } from "../graphql/queries";

const useCurrentUser = (includeReviews) => {
  const { data, ...result } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews },
  });

  return { currentUser: data?.me, ...result };
};

export default useCurrentUser;