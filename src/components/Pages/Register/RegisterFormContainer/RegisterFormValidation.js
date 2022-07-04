import * as Yup from 'yup';
import { VALIDATION_EMAIL, VALIDATION_REQUIRED, VALIDATION_TOOLONG, VALIDATION_TOOSHORT } from '../../../../constants';

export const RegisterFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, VALIDATION_TOOSHORT)
    .max(50, VALIDATION_TOOLONG)
    .required(VALIDATION_REQUIRED),
  email: Yup.string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
  password: Yup.string()
    .min(6, VALIDATION_TOOSHORT)
    .max(50, VALIDATION_TOOLONG)
    .required(VALIDATION_REQUIRED),
  repeatPassword: Yup.string()
    .min(6, VALIDATION_TOOSHORT)
    .max(50, VALIDATION_TOOLONG)
    .required(VALIDATION_REQUIRED),
});