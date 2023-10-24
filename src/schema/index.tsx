import * as yup from "yup"

const emailRegula =
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

// eslint-disable-next-line no-useless-escape
const phoneRegula = /^[\+]{0,1}380([0-9]{9})$/

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .max(255, "the max is 255")
    .min(2, "the min is 2"),
  email: yup
    .string()
    .matches(emailRegula, "Email must be a valid email address")
    .required("Email is"),
  birthday_date: yup
    .string()
    .required("Birthday_date is"),
  phone_number: yup
    .string()
    .matches(phoneRegula, "Invalid phone number")
    .required("Phone is"),
  address: yup
    .string()
    .required("Address is"),

})

export default validationSchema
