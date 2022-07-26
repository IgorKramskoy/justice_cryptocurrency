import * as Yup from 'yup';
import * as Validation from '../../../validationConstants';

export const RefillValidation = Yup.object().shape({
  currencyValue: Yup.string()
    .required(Validation.REQUIRED),
});