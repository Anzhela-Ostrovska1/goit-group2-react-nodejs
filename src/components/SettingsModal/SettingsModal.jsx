// import { BaseModalWindow, ContentLoader } from 'components';
// no such component as ContentLoader
import { BaseModalWindow } from '../common/BaseModalWindow/BaseModalWindow.jsx';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import defaultAvatar from '../../assets/defaultAvatar.png';
import {
  editUserInfoThunk,
  updateAvatarThunk,
} from '../../redux/Auth/AuthOperations.jsx';
import { selectUser } from '../../redux/Auth/AuthSelectors.jsx';
// import { selectIsLoading } from '../../../redux/root/rootSelectors';
// import { UserDeleteModal } from '../UserDeleteModal/UserDeleteModal';
import {
  Avatar,
  // DeleteBtn,
  DesktopFormWrap,
  DesktopGenderWrap,
  DesktopPasswordWrap,
  DownloadBtn,
  DownloadBtnText,
  DownloadWrap,
  FormField,
  FormText,
  GenderFormField,
  GenderText,
  IconBtn,
  IconDownload,
  Input,
  LastPasswordFormField,
  ModalWrap,
  PasswordFormField,
  PasswordIcon,
  PasswordInputWrap,
  PasswordLabel,
  PasswordText,
  RadioBtn,
  RadioBtnLabel,
  RadioBtnText,
  RadioBtnWrap,
  SaveBtn,
  SaveBtnWrap,
  StyledErrorMessage,
  StyledErrorText,
  StyledLabel,
} from './SettingsModal.styled';

const settingsFormValidationSchema = Yup.object().shape({
  gender: Yup.string(),
  name: Yup.string()
    .min(3, 'Username must be more then 3 characters long')
    .max(32, 'Username must be less then 32 characters long'),
  email: Yup.string().email('Invalid email'),
  newPass: Yup.string()
    .min(6, 'New password must be at least 6 characters long')
    .max(64, 'New password must be less then 64 characters long')
    .nullable()
    .test(
      'isNewPasswordDifferent',
      'New password should be different from the current one',
      (value, { parent }) => !value || value !== parent.currentPass,
    ),
  currentPass: Yup.string()
    .min(6, 'current password must be at least 6 characters long')
    .max(64, 'current password must be less then 64 characters long')
    .when('newPass', (newPass, field) =>
      newPass[0] ? field.required('Please enter current password') : field,
    ),
  repNewPass: Yup.string().test(
    'isrepNewPassValueMatched',
    'The entered password should match the new one',
    (value, { parent }) => !value || value === parent.newPass,
  ),
});

export const SettingsModal = ({ onClose, onShow }) => {
  const dispatch = useDispatch();
  const { avatarURL, email, name, gender } = useSelector(selectUser);
  // const { isLoading } = useSelector(selectIsLoading);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  // const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [isAvatarLoading, setIsAvatarLoading] = useState(false);

  // const toggleDeleteModal = () => {
  //   setDeleteModalOpen(previsDeleteModalOpen => !previsDeleteModalOpen);
  // };

  const initialValues = {
    gender: gender || '',
    name: name || '',
    email: email || '',
    currentPass: '',
    newPass: '',
    repNewPass: '',
  };

  const handleSubmit = (values, actions) => {
    if (values.currentPass && !values.newPass) {
      return;
    }

    const { gender, name, email, currentPass, newPass } = values;

    const formData = {
      gender,
      name,
      email,
      currentPass,
      newPass,
    };

    const dataSend = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        dataSend[key] = value;
      }
    });

    dispatch(editUserInfoThunk(dataSend)).then(data => {
      if (!data.error) {
        onClose();
        actions.resetForm();
      }
    });
  };

  const handlePasswordVisibility = () => {
    setIsPasswordShown(previsPasswordShown => !previsPasswordShown);
  };

 
 
 
 
 
 
  const handleAvatarDownload = e => {
    let formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    dispatch(updateAvatarThunk(formData)).then(data => {
      if (!data.error) {
        // setIsAvatarLoading(false);
        console.log('Avatar is successfully loaded!');
      }
    });
    console.log('Avatar is loading');
    // setIsAvatarLoading(true);
  };

  return (
    <>
      <BaseModalWindow onClose={onClose} onShow={onShow} title="Settings">
        <ModalWrap>
          {
            <Formik
              initialValues={initialValues}
              validationSchema={settingsFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched }) => (
                <Form>
                  <FormField>
                    <FormText>Your photo</FormText>
                    <DownloadWrap>
                      <Avatar
                        src={avatarURL ? avatarURL : defaultAvatar}
                        alt="user avatar"
                        width="80px"
                        height="80px"
                      />
                      {/* {isAvatarLoading ? (
                        <ContentLoader
                          width={'80px'}
                          height={'80px'}
                          strokeColor={'#407bff'}
                        />
                      ) : (
                        <Avatar
                          src={avatarURL ? avatarURL : defaultAvatar}
                          alt="user avatar"
                          width="80px"
                          height="80px"
                        />
                      )} */}
                      <DownloadBtn>
                        <Field
                          type="file"
                          name="avatar"
                          hidden
                          accept="image/png, image/jpeg"
                          onChange={handleAvatarDownload}
                        />
                        <IconDownload>
                          <use href={`${sprite}#icon-arrow-up`}></use>
                        </IconDownload>
                        <DownloadBtnText>Upload a photo</DownloadBtnText>
                      </DownloadBtn>
                    </DownloadWrap>
                  </FormField>
                  <DesktopFormWrap>
                    <DesktopGenderWrap>
                      <GenderFormField>
                        <GenderText>Your gender identity</GenderText>
                        <RadioBtnWrap>
                          <RadioBtnLabel>
                            <RadioBtn
                              type="radio"
                              name="gender"
                              value="female"
                              checked={values.gender === 'female'}
                            />
                            <RadioBtnText>Girl</RadioBtnText>
                          </RadioBtnLabel>
                          <RadioBtnLabel>
                            <RadioBtn
                              type="radio"
                              name="gender"
                              value="male"
                              checked={values.gender === 'male'}
                            />
                            <RadioBtnText>Man</RadioBtnText>
                          </RadioBtnLabel>
                        </RadioBtnWrap>
                      </GenderFormField>
                      <FormField>
                        <StyledLabel htmlFor="username">Your name</StyledLabel>
                        <Input
                          type="text"
                          id="username"
                          name="name"
                          className={
                            errors.name && touched.name ? 'error-input' : null
                          }
                          placeholder={values.name}
                        />
                        <StyledErrorMessage component="p" name="name" />
                      </FormField>
                      <div>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          className={
                            errors.email && touched.email ? 'error-input' : null
                          }
                          placeholder={values.email}
                        />
                        <StyledErrorMessage component="p" name="email" />
                      </div>
                    </DesktopGenderWrap>
                    <DesktopPasswordWrap>
                      <PasswordText>Password</PasswordText>
                      <PasswordFormField>
                        <PasswordLabel htmlFor="currentPassword">
                          Outdated password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="currentPassword"
                            name="currentPass"
                            className={
                              errors.currentPass && touched.currentPass
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        <StyledErrorMessage component="p" name="currentPass" />
                      </PasswordFormField>
                      <PasswordFormField>
                        <PasswordLabel htmlFor="password">
                          New Password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="password"
                            name="newPass"
                            className={
                              (errors.newPass && touched.newPass) ||
                              (values.currentPass && !values.newPass)
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        {values.currentPass && !values.newPass && (
                          <StyledErrorText>
                            Please, enter new password
                          </StyledErrorText>
                        )}
                        <StyledErrorMessage component="p" name="newPass" />
                      </PasswordFormField>
                      <LastPasswordFormField>
                        <PasswordLabel htmlFor="repNewPass">
                          Repeat new password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="repNewPass"
                            name="repNewPass"
                            className={
                              values.newPass !== values.repNewPass
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        <StyledErrorMessage component="p" name="repNewPass" />
                      </LastPasswordFormField>
                    </DesktopPasswordWrap>
                  </DesktopFormWrap>
                  <SaveBtnWrap>
                    <li>
                      <SaveBtn type="submit">
                        Save{' '}
                        {/* {isLoading && !isAvatarLoading && <ContentLoader />} */}
                      </SaveBtn>
                    </li>
                    {/* <li>
                      <DeleteBtn type="button" onClick={toggleDeleteModal}>
                        Delete your account?
                      </DeleteBtn>
                    </li> */}
                  </SaveBtnWrap>
                </Form>
              )}
            </Formik>
          }
        </ModalWrap>
      </BaseModalWindow>
      {/* <UserDeleteModal onClose={toggleDeleteModal} onShow={isDeleteModalOpen} /> */}
    </>
  );
};
