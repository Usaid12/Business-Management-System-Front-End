import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4 } from "../../AbstractElements";
import { useFormik } from "formik";
import { Name, ParentId } from "../../Constant";
import { SubCategorySchema } from "../../Schema/SubCategorySchema";
import Swal from "sweetalert2";
import axios from "axios";

const SubCategoryForm = () => {
  const [parentIdOptions, setParentIdOptions] = useState([]);

  const initialValues = {
    name: "",
    parentId: "",
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SubCategorySchema,
      onSubmit: () => {
        handleCreateSubCategory();
      },
    });

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    handleCategory();
  }, []);

  const handleCategory = async () => {
    const categoryUrl = "http://localhost:5000/api/category";
    try {
      const response = await axios.get(categoryUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setParentIdOptions(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCreateSubCategory = async () => {
    const url = "http://localhost:5000/api/category";

    try {
      const data = await axios.post(
        url,
        {
          name: values.name,
          parentId: Number.parseInt(values.parentId),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (data.status === 201) {
        Swal.fire({
          title: "Success",
          text: "SubCategory Created Successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "SubCategory Creation Failed",
          icon: "error",
        });
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <div
        className="container"
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
          <FormGroup className="position-relative">
            <Label className="col-form-label">{ParentId}</Label>
            <select
              value={values.parentId}
              onBlur={handleBlur}
              className="form-control"
              name="parentId"
              onChange={handleChange}
            >
              <option value="" disabled>Select ParentId</option>
              {parentIdOptions.map((parent) => (
                <option value={parent.name} key={parent.name}>
                  {parent.name}
                </option>
              ))}
            </select>
           
            {errors.parentId && touched.parentId ? (
              <p className="form-error text-danger">{errors.parentId}</p>
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

export default SubCategoryForm;
