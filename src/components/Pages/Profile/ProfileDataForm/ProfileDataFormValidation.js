import * as Yup from 'yup';
import * as Validation from '../../../../validationConstants';

export const ProfileDataFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, Validation.TOOSHORT)
    .max(50, Validation.TOOLONG)
    .required(Validation.REQUIRED),
  email: Yup.string().email(Validation.EMAIL).required(Validation.REQUIRED),
});