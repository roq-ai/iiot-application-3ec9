import * as yup from 'yup';

export const machineValidationSchema = yup.object().shape({
  parameters: yup.string().required(),
  organization_id: yup.string().nullable(),
});
