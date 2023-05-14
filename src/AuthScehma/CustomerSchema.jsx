import * as Yup from "yup"

export const CustomerSchema=Yup.object({
    username: Yup.string()
    .min(3)
    .max(20)
    .required("Username is a required field"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  password: Yup.string()
    .min(8)
    .max(20)
    .required("Password is a required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is a required field"),
  gender: Yup.string()
    .oneOf(["Male", "Female"])
    .required("Please choose a gender"),
}) 