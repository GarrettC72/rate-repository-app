import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (repositoryId) => {
    const result = await mutate({ variables: { repositoryId }});

    return result;
  };

  return [deleteReview, result];
};

export default useDeleteReview;