import * as Yup from "yup";

export const CategorySchema = Yup.object({
  name: Yup.string()
    .required("Name is a required field"),
 
});
