import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerValidationSchema = yup.object({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 5 characters"),
  confirm_pwd: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});

export default registerValidationSchema;
