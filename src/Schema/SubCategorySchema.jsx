import * as Yup from "yup";

export const SubCategorySchema = Yup.object({
  name: Yup.string()
    .required("Name is a required field"),
 parentId:Yup.string()
 .required("ParentId is required")
 
});
