import * as Yup from "yup"

export const CustomerSchema=Yup.object({
    username:Yup.string().min(3).max(20).required("FirstName is must "),
    email:Yup.string().email().required("Email is must "),
    password:Yup.string().min(2).max(20).required("Pasword is must "),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
    gender: Yup.string().oneOf(['Male', 'Female']).required('Gender is required'),
}) 