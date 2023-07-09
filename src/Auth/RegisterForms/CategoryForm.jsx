import React, { useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4 } from "../../AbstractElements";
import { useFormik } from "formik";
import { Name } from "../../Constant";
import { CategorySchema } from "../../Schema/CategorySchema"
import Swal from "sweetalert2";
import axios from "axios";
const CategoryForm = () => {
  const initialValues = {
    name: "",
  };
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CategorySchema,
      onSubmit:  () => {
         handleCreateCategory();
        console.log(values);
      },
    });
  const handleCreateCategory = async () => {
    const accessToken = localStorage.getItem("access_token");
    const url = "http://localhost:5000/api/category";

    try {
      const data = await axios.post(
        url,
        {
          name: values.name,
          parentId: undefined,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(data);
      if (data.status === 201) {
        Swal.fire({
          title: "Success",
          text: "Category Created Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Category Creation Failed",
          icon: "error",
        });
      }
      data.then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <div
        className="container "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <H4>{"CREATE CATEGORY"}</H4>
        <p style={{ marginTop: "20px" }}>
          {"Please Enter The Following Information to create category"}
        </p>

        <div className="col">
          <FormGroup>
            <Label className="col-form-label">{Name}</Label>
            <Input
              className="form-control"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ width: "400px" }}
            />
            {errors.name && touched.name ? (
              <p className="form-error text-danger">{errors.name}</p>
            ) : null}
          </FormGroup>
        <FormGroup className="d-flex justify-content-center">
          <button className="btn btn-primary py-3 fs-6" type="submit">
            Create Category
          </button>
        </FormGroup>
        </div>
      </div>
    </Form>
  );
};

export default CategoryForm;
