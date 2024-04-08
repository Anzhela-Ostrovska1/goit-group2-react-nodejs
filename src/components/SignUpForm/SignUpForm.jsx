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
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from '../../redux/Auth/AuthSelectors.jsx';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/Auth/AuthOperations.jsx';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Your password is too short.')
    .matches(/^\S*$/, 'Password should not contain spaces.')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Entered passwords must match')
    .required('Confirm password is reqired!'),
});
export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const { isLoading } = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SignupContainer>
      <BottleBg />
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
        <Formik
          validateOnChange
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={({ email, password }) => {
            dispatch(registerThunk({ email, password }));
          }}
        >
          {({ errors, isValid, touched }) => (
            <Form>
              <StyledLabel>
                Enter your email
                <Field
                  className={
                    errors.email && touched.email ? 'input-with-error' : null
                  }
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" component="span" />
              </StyledLabel>

              <StyledLabel>
                Enter your password
                <Field
                  className={errors.password ? 'input-with-error' : null}
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
                  className={errors.confirmPassword ? 'input-with-error' : null}
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

              <FormButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Sign Up
              </FormButton>
            </Form>
          )}
        </Formik>
        <StyledLink to="/signin">Sign In</StyledLink>
      </FormContainer>
    </SignupContainer>
  );
};
// /^[^\s@]+@[^\s@]+.[^\s@]+$/