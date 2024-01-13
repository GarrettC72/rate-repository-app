import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../theme';
import Text from './Text';
import FormikTextInput from './FormikTextInput';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  submit: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 3,
    textAlign: 'center',
    padding: 20,
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.submit} fontWeight="bold">Sign In</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;