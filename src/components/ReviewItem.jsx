import { View, StyleSheet } from "react-native";
import { format } from "date-fns";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.white,
    padding: 15,
    flexDirection: 'row'
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  usernameText: {
    marginBottom: 5
  },
  createdAtText: {
    flexGrow: 1
  },
  reviewText: {
    marginTop: 10
  }
});

const ReviewItem = ({ review, displayRepositoryName }) => {
  // Single review item
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text color="primary" fontWeight="bold" fontSize="subheading">
          {review.rating}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text fontWeight="bold" fontSize='subheading' style={styles.usernameText}>
          {displayRepositoryName ? review.repository.fullName : review.user.username}
        </Text>
        <Text color='textSecondary' style={styles.createdAtText}>
          {format(review.createdAt, "dd.MM.yyyy")}
        </Text>
        <Text style={styles.reviewText}>
          {review.text}
        </Text>
      </View>
    </View>
  )
};

export default ReviewItem;