import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  BottleBg,
  FormContainer,
  SignupContainer,
  StyledLink,
  Field,
  Form,
  ErrorMessage,
  EyeIcon,
  FormTitle,
  StyledLabel,
  FormButton,
} from './SignUpForm.styled';
import { useState } from 'react';
const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Your password is too short.')
    .matches(/^\S*$/, 'Password should not contain spaces.')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Entered passwords must match')
    .required('Confirm password is reqired!'),
});
export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SignupContainer>
      <BottleBg />
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
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
            <StyledLabel>
              Enter your email
              <Field type="email" name="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="span" />
            </StyledLabel>

            <StyledLabel>
              Enter your password
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="span" />
              {!showPassword ? (
                <EyeIcon onClick={handleTogglePassword}>
                  <use href={`${sprite}#icon-closed-eye`}></use>
                </EyeIcon>
              ) : (
                <EyeIcon onClick={handleTogglePassword}>
                  <use href={`${sprite}#icon-eye`}></use>
                </EyeIcon>
              )}
            </StyledLabel>

            <StyledLabel>
              Repeat password
              <Field
                name="confirmPassword"
                placeholder="Repeat password"
                type={showPassword ? 'text' : 'password'}
              />
              <ErrorMessage name="confirmPassword" component="span" />
              {!showPassword ? (
                <EyeIcon onClick={handleTogglePassword}>
                  <use href={`${sprite}#icon-closed-eye`}></use>
                </EyeIcon>
              ) : (
                <EyeIcon onClick={handleTogglePassword}>
                  <use href={`${sprite}#icon-eye`}></use>
                </EyeIcon>
              )}
            </StyledLabel>

            <FormButton type="submit">Sign Up</FormButton>
          </Form>
        </Formik>
        <StyledLink to="/signin">Sign In</StyledLink>
      </FormContainer>
    </SignupContainer>
  );
};
