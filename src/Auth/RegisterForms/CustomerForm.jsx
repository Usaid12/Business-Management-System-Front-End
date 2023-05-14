import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, P } from "../../AbstractElements";
import { useFormik } from "formik";
import { CustomerSchema } from "../../AuthScehma/CustomerSchema";
import { Gender } from "../../Constant";
import { Username } from "../../Constant";
import { EmailAddress } from "../../Constant";
import { Password } from "../../Constant";
import { ConfirmPassword } from "../../Constant";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
};

const CustomerForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CustomerSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <H4>{"SIGNUP AS CUSTOMER"}</H4>
      <P>{"Please Enter The Following Information To Signup As a Customer"}</P>
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
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Password}</Label>
        <Input
          className="form-control"
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
      <FormGroup className="position-relative">
        <Label className="col-form-label">{ConfirmPassword}</Label>
        <Input
          className="form-control"
          name="confirmPassword"
          value={values.confirmPassword}
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword ? (
          <p className="form-error text-danger">{errors.confirmPassword}</p>
        ) : null}
      </FormGroup>
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

      <FormGroup className="w-100 d-flex justify-content-center">
        <button className="btn btn-primary " type="submit">
          Signup as Customer
        </button>
      </FormGroup>
    </Form>
  );
};

export default CustomerForm;
