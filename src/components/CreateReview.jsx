import { View, StyleSheet } from "react-native";
import { Formik } from 'formik';
import { useNavigate } from "react-router-native";
import * as yup from 'yup';

import theme from "../theme";
import useCreateReview from "../hooks/useCreateReview";
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository onwer name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be greater than or equal to 0')
    .max(100, 'Rating must be less than or equal to 100')
    .required('Rating is required'),
  text: yup.string().optional()
})

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="text" placeholder="Review" multiline/>
      </View>
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  )
}

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      const createReviewData = await createReview({ ownerName, repositoryName, rating: Number(rating), text });
      
      if (createReviewData.createReview) {
        navigate(`/repositories/${createReviewData.createReview.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default CreateReview;