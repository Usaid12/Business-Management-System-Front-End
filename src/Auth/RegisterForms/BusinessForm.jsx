import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, P } from "../../AbstractElements";
import { useFormik } from "formik";

import { RegisterSchema } from "../../AuthScehma/RegisterSchema";
import {
  ConfirmPassword,
  Description,
  EmailAddress,
  Gender,
  Password,
  Phone,
  Username,
} from "../../Constant";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  phone: "",
  businessDescription: "",
};

const BusinessForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(values.gender);

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <div className="container">
        <H4>{"SIGNUP AS BUSINESS"}</H4>
        <P>
          {"Please Enter The Following Information To Signup As a Business"}
        </P>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label className="col-form-label">{Username}</Label>
              <Input
                className="form-control"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="form-error text-danger">{errors.username}</p>
              ) : null}
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input
                className="form-control"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error text-danger">{errors.email}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{Password}</Label>
              <Input
                className="form-control"
                autoComplete="on"
                name="password"
                value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error text-danger">{errors.password}</p>
              ) : null}
            </FormGroup>
          </div>

          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{ConfirmPassword}</Label>
              <Input
                className="form-control"
                name="confirmPassword"
                autoComplete="on"
                value={values.confirmPassword}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="form-error text-danger">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </FormGroup>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{Gender}</Label>
              <select
                value={values.gender}
                onBlur={handleBlur}
                className="form-control"
                name="gender"
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && touched.gender ? (
                <p className="form-error text-danger">{errors.gender}</p>
              ) : null}
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{Phone}</Label>
              <Input
                className="form-control"
                name="phone"
                value={values.phone}
                type="tel"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && touched.phone ? (
                <p className="form-error text-danger">{errors.phone}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>

        <FormGroup className="position-relative">
          <Label className="col-form-label">{Description}</Label>
          <Input
            className="form-control"
            name="businessDescription"
            value={values.businessDescription}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.businessDescription && touched.businessDescription ? (
            <p className="form-error text-danger">
              {errors.businessDescription}
            </p>
          ) : null}
        </FormGroup>

        <FormGroup className="d-flex justify-content-center">
          <button className="btn btn-primary py-3 fs-6" type="submit">
            Signup As Business
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default BusinessForm;
