import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit}>Sign In</Button>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;