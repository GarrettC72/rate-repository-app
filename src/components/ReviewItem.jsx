import { View, StyleSheet, Alert } from "react-native";
import { format } from "date-fns";
import { useNavigate } from "react-router-native";

import theme from "../theme";
import Text from "./Text";
import Button from "./Button";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  infoContainer: {
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
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  viewButton: {
    flexGrow: 1,
    marginRight: 15
  },
  deleteButton: {
    flexGrow: 1,
    backgroundColor: theme.colors.error
  }
});

const ReviewItem = ({ review, refetch, displayUserView }) => {
  const navigate = useNavigate();
  const [deleteReview] = useDeleteReview();

  const createDeleteAlert = () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            await deleteReview(review.id);
          } catch(e) {
            console.log(e);
          } finally {
            refetch();
          }
        },
      }
    ])
  }
  
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.ratingContainer}>
          <Text color="primary" fontWeight="bold" fontSize="subheading">
            {review.rating}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text fontWeight="bold" fontSize='subheading' style={styles.usernameText}>
            {displayUserView ? review.repository.fullName : review.user.username}
          </Text>
          <Text color='textSecondary' style={styles.createdAtText}>
            {format(review.createdAt, "dd.MM.yyyy")}
          </Text>
          <Text style={styles.reviewText}>
            {review.text}
          </Text>
        </View>
      </View>
      {
        displayUserView && (
          <View style={styles.buttonContainer}>
            <Button
              style={styles.viewButton}
              onPress={() => navigate(`/repositories/${review.repositoryId}`)}
            >
              View repository
            </Button>
            <Button
              style={styles.deleteButton}
              onPress={createDeleteAlert}
            >
              Delete review
            </Button>
          </View>
        )
      }
    </View>
  )
};

export default ReviewItem;