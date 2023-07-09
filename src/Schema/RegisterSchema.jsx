import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  username: Yup.string()
    .min(3)
    .max(20)
    .required("Username is a required field"),
  firstName: Yup.string()
    .min(3)
    .max(20)
    .required("FirstName is a required field"),
  lastName: Yup.string()
    .min(3)
    .max(20)
    .required("LastName is a required field"),
  userEmail: Yup.string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  userPhone: Yup.string("Invalid Number")
    .matches(
      /^[0-9]{11}$/,
      "Phone number must be exactly 11 digits and contain only numbers"
    )
    .required("Phone number is a required field"),

  postalCode: Yup.string()
    .min(3)
    .max(7)
    .required("PostalCode is a required field"),
  businessEmail: Yup.string()
    .email("Please enter a valid email")
    .required("Email is a required field"),
  country: Yup.string()
    .oneOf(["usa", "uk", "pakistan"])
    .required("Please choose a country"),
  businessPhone: Yup.string("Invalid Number")
    .matches(
      /^[0-9]{11}$/,
      "Phone number must be exactly 11 digits and contain only numbers"
    )
    .required("Phone number is a required field"),
  address: Yup.string().min(5).max(50).required("Address is a required field"),
  city: Yup.string()
    .test("city-validation", "Please choose a valid city", function (value) {
      const { country, postalCode } = this.parent;
      if (
        country === "usa" &&
        !["newyork", "losangeles", "chicago"].includes(value)
      ) {
        return false;
      }
      if (
        country === "uk" &&
        !["london", "manchester", "birmingham"].includes(value)
      ) {
        return false;
      }
      if (
        country === "pakistan" &&
        postalCode &&
        postalCode.startsWith("PK-")
      ) {
        return ["karachi", "lahore", "islamabad"].includes(value);
      }
      return true;
    })
    .required("Please choose a city"),
});
