import * as yup from "yup";

export const validationSchemaLogin = yup.object().shape({
  username: yup.string()
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});



