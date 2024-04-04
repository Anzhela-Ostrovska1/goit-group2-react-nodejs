import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  BottleBg,
  FormContainer,
  SigninContainer,
  StyledLink,
} from '../SignInForm/SignInForm.styled';
const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.')
    .matches(/[a-zA-Z]/, 'Password should contain at least one Latin letters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match!')
    .required('Confirm password is reqired!'),
});
export const SignUpForm = () => {
  return (
    <SigninContainer>
      <BottleBg />
      <FormContainer>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async values => {
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="email">Enter your email</label>
            <Field id="email" name="email" placeholder="E-mail" />

            <label htmlFor="password">Enter your password</label>
            <Field id="password" name="password" placeholder="Password" />

            <label htmlFor="confirmPassword">Repeat password</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Repeat password"
              type="password"
            />
            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
        <StyledLink to="/signin">Sign In</StyledLink>
      </FormContainer>
    </SigninContainer>
  );
};
