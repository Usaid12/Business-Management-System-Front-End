import * as Yup from "yup";

export const RegisterSchema = Yup.object({
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
  phone: Yup.string("Invalid Number")
    .matches(
      /^[0-9]{11}$/,
      "Phone number must be exactly 11 digits and contain only numbers"
    )
    .required("Phone Number is required field"),
  businessDescription: Yup.string()
    .min(5)
    .max(50)
    .required("Business Description is a required field"),
});
