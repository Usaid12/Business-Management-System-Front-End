import * as Yup from "yup"

export const LoginSchema=Yup.object({
    email:Yup.string().email("Please Enter a Valid Email").required("Email is must "),
    password:Yup.string().min(2).max(20).required("Pasword is must ")
}) ;