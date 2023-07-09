import React, { Fragment, useState } from "react";
import { Card, CardBody, Col, FormGroup, Label, Form } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import Dropzone from "react-dropzone-uploader";
import { useFormik } from "formik";
import { ProductImage, ProductThumbnail } from "../../../Constant";
import axios from "axios";
import {
  Price,
  Categories,
  Description,
  ProductCategory,
  ProductDescription,
  ProductName,
} from "../../../Constant";
import { useEffect } from "react";

const LeftformDesc = () => {
  const [parentIdOptions, setParentIdOptions] = useState([]);
  const initialValues = {
    productname: "",
    description: "",
    productCategory: "",
    price: "",
    productImages: [],
    productThumbnails: [],
  };
  const { errors, setFieldValue, values, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: () => handleAddProduct(),
    });
  const access_token = localStorage.getItem("access_token");
  const handleAddProduct = async () => {
    try {
      const url = "http://localhost:5000/api/products";
      const formData = new FormData();
      formData.append("name", values.productname);
      formData.append("description", values.description);
      formData.append("price", Number.parseInt(values.price));
      formData.append("category_id", Number.parseInt(values.productCategory));

      // Append uploaded images to FormData
      values.productImages.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      // Append uploaded thumbnails to FormData
      values.productThumbnails.forEach((thumbnail, index) => {
        formData.append(`thumbnails[${index}]`, thumbnail);
      });

      const response = await axios.post(url, formData, {
        headers: {
          Authorization: access_token,
          "Content-Type": "multipart/form-data", // Set the Content-Type header
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleCategory();
  }, []);

  const handleCategory = async () => {
    const categoryUrl = "http://localhost:5000/api/category";
    try {
      const response = await axios.get(categoryUrl, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setParentIdOptions(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeStatusThumbnails = (fileWithMeta, status) => {
    if (status === "done") {
      const { file } = fileWithMeta;
      const updatedThumbnails = [...values.productThumbnails, file];
      setFieldValue("productThumbnails", updatedThumbnails);
    }
  };
  const handleChangeStatusImages = (fileWithMeta, status) => {
    if (status === "done") {
      const { file } = fileWithMeta;
      const updatedImages = [...values.productImages, file];
      setFieldValue("productImages", updatedImages);
    }
  };
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Fragment>
          <Col lg="6">
            <Card style={{ width: "1500px" }}>
              <CardBody>
                <H5>{Description}</H5>
                <div className="row">
                  <div className="col">
                    <FormGroup>
                      <Label style={{ marginTop: "10px" }}>{ProductName}</Label>
                      <input
                        className={`form-control ${
                          errors.productname && "is-invalid"
                        }`}
                        style={{ marginTop: "10px" }}
                        type="text"
                        value={values.productname}
                        placeholder="Enter Product Name"
                        name="productname"
                        required={true}
                        onChange={handleChange}
                      />
                      <span className="text-danger">
                        {errors.productname && "Product Name is required"}
                      </span>
                    </FormGroup>
                    <FormGroup>
                      <Label style={{ marginTop: "10px" }}>
                        {ProductDescription}
                      </Label>
                      <input
                        required={true}
                        className={`form-control ${
                          errors.description && "is-invalid"
                        }`}
                        style={{ marginTop: "10px" }}
                        type="textarea"
                        placeholder="Enter Product description"
                        name="description"
                        onChange={handleChange}
                        value={values.description}
                      />
                      <span className="text-danger">
                        {errors.description &&
                          "Add Some Description about this Product"}
                      </span>
                    </FormGroup>
                    <H5 attrH5={{ className: "mt-4" }}>{Categories}</H5>
                    <FormGroup>
                      <Label
                        htmlFor="exampleFormControlSelect3"
                        className="form-label"
                        style={{ marginTop: "10px" }}
                      >
                        {ProductCategory}
                      </Label>
                      <select
                        required={true}
                        value={values.productCategory}
                        name="productCategory"
                        onChange={handleChange}
                        id="exampleFormControlSelect3"
                        className={`form-select ${
                          errors.productCategory && "is-invalid"
                        }`}
                        style={{ marginTop: "10px" }}
                      >
                        <option value="" disabled>
                          Select Category
                        </option>
                        {parentIdOptions.map((parent) => (
                          <option value={parent.name} key={parent.name}>
                            {parent.name}
                          </option>
                        ))}
                      </select>
                      <span className="text-danger">
                        {errors.productCategory && "please Select Product type"}
                      </span>
                    </FormGroup>

                    <FormGroup>
                      <Label style={{ marginTop: "10px" }}>{Price}</Label>
                      <input
                        type="tel"
                        required={true}
                        placeholder="Enter Product Price"
                        onChange={handleChange}
                        value={values.price}
                        className={`form-control ${
                          errors.price && "is-invalid"
                        }`}
                        name="price"
                        style={{ marginTop: "10px" }}
                      />
                      <span className="text-danger">
                        {errors.price && "Add Price of product "}
                      </span>
                    </FormGroup>
                  </div>

                  <div className="col">
                    <H5>{ProductImage}</H5>
                    <FormGroup>
                      <Dropzone
                        onChangeStatus={handleChangeStatusImages}
                        inputContent={"Upload Files Here"}
                        accept="image/*"
                        maxFiles={5}
                        multiple={true}
                        canCancel={false}
                        styles={{ dropzone: { minHeight: 200 } }}
                      />
                    </FormGroup>

                    <H5>{ProductThumbnail}</H5>
                    <FormGroup>
                      <Dropzone
                        onChangeStatus={handleChangeStatusThumbnails}
                        inputContent={"Upload Files Here"}
                        accept="image/*"
                        maxFiles={5}
                        multiple={true}
                        canCancel={false}
                        styles={{ dropzone: { minHeight: 200 } }}
                      />
                    </FormGroup>
                  </div>
                </div>

                <FormGroup className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary py-3 fs-6 mt-2"
                    type="submit"
                  >
                    Add Product
                  </button>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Fragment>
      </Form>
    </>
  );
};
export default LeftformDesc;
