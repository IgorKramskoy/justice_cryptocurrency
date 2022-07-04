import * as Yup from 'yup';
import * as Validation from '../../../../validationConstants';

export const LoginFormValidation = Yup.object().shape({
  email: Yup.string().email(Validation.EMAIL).required(Validation.REQUIRED),
  password: Yup.string()
    .min(6, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
});