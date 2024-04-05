import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BottleBg,
  FormContainer,
  SignupContainer,
  StyledLink,
  Field,
  Form,
  ErrorMessage,
  FormTitle,
  StyledLabel,
  FormButton,
  EyeIcon,
} from '../SignUpForm/SignUpForm.styled';

import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/Auth/AuthOperations.jsx';

import sprite from 'src/assets/images/sprite/sprite.svg';
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
});
export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   try {
  //     await dispatch(logInThunk(values));
  //     navigate('/home');
  //   } catch (error) {
  //     console.log(error);
  //     // Обработка ошибок?
  //   }
  //   setSubmitting(false);
  // };

  return (
    <SignupContainer>
      <BottleBg />
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <Formik
          validateOnChange
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          // onSubmit={handleSubmit}
          onSubmit={({ email, password }) => {
            dispatch(logInThunk({ email, password }));
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

            <FormButton type="submit">Sign In</FormButton>
          </Form>
        </Formik>
        <StyledLink to="/signup">Sign up</StyledLink>
      </FormContainer>
    </SignupContainer>
  );
};
