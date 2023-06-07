import * as Yup from "yup"

export const CustomerSchema=Yup.object({
    firstName: Yup.string()
    .min(3)
    .max(20)
    .required("FirstName is a required field"),
    lastName: Yup.string()
    .min(3)
    .max(20)
    .required("LastName is a required field"),
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
  phoneNumber: Yup.string("Invalid Number")
  .matches(
    /^[0-9]{11}$/,
    "phoneNumber number must be exactly 11 digits and contain only numbers"
  )
  .required("phoneNumber Number is required field"),
  gender: Yup.string()
    .oneOf(["male", "female"])
    .required("Please choose a gender"),
}) 