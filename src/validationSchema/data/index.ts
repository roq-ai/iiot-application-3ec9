import * as yup from 'yup';

export const dataValidationSchema = yup.object().shape({
  data: yup.string().required(),
  organization_id: yup.string().nullable(),
});
