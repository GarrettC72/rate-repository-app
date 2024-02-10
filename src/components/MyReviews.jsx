import { FlatList } from "react-native";

import useCurrentUser from "../hooks/useCurrentUser";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";

const MyReviews = () => {
  const { currentUser, refetch } = useCurrentUser(true);
  
  if (currentUser == null) {
    return null;
  }

  const reviews = currentUser.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} refetch={refetch} displayUserView />}
      keyExtractor={({ id }) => id}
    />
  )
};

export default MyReviews;