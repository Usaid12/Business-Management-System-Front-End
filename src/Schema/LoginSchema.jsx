import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  password: Yup.string()
    .min(8)
    .max(20)
    .required("Password is a required field"),
});
