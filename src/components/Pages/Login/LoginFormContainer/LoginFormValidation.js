import * as Yup from 'yup';
import { VALIDATION_REQUIRED, VALIDATION_TOOSHORT, VALIDATION_TOOLONG, VALIDATION_EMAIL } from '../../../../constants';

export const LoginFormValidation = Yup.object().shape({
  email: Yup.string().email(VALIDATION_EMAIL).required(VALIDATION_REQUIRED),
  password: Yup.string()
    .min(6, VALIDATION_TOOSHORT)
    .max(50, VALIDATION_TOOLONG)
    .required(VALIDATION_REQUIRED),
});