import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Button from "./Button";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

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
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters long')
    .max(30, 'Username must be at most 30 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Password confirmation does not match')
    .required('Password confirmation is required'),
})

const SignUpForm = ({ onSubmit }) => {
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
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Password confirmation"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit}>Sign Up</Button>
    </View>
  )
}

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const signUpResult = await signUp({ username, password });
      if (signUpResult.createUser) {
        await signIn({ username, password });
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignUp;