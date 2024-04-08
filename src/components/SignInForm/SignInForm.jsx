import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from '../../redux/Auth/AuthSelectors.jsx';
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
// import { ButtonLoader } from '../common/ButtonLoader/ButtonLoader.jsx';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Your password is too short.')
    .matches(/^\S*$/, 'Password should not contain spaces.')
    .required('Password is required'),
});
export const SigninForm = () => {
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
        <FormTitle>Sign In</FormTitle>
        <Formik
          validateOnChange
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={({ email, password }) => {
            dispatch(logInThunk({ email, password }));
          }}
        >
          {({ errors, isValid }) => (
            <Form>
              <StyledLabel>
                Enter your email
                <Field
                  className={errors.email ? 'input-with-error' : null}
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

              <FormButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Sign In
              </FormButton>
            </Form>
          )}
        </Formik>
        <StyledLink to="/signup">Sign up</StyledLink>
      </FormContainer>
    </SignupContainer>
  );
};
