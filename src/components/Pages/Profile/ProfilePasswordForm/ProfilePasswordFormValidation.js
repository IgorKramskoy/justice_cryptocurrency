import * as Yup from 'yup';
import * as Validation from '../../../../validationConstants';

export const ProfilePasswordFormValidation = Yup.object().shape({
  repeatNewPassword: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
  newPassword: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
  oldPassword: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
});