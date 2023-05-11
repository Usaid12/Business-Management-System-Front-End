import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4,P } from "../../AbstractElements";
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
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors);

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <H4>{"SIGNUP AS BUSINESS"}</H4>
      <P>{"Please Enter The Following Information To Signup As a Business"}</P>
      <FormGroup>
        <Label className="col-form-label">{Username}</Label>
        <Input
          className="form-control"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>
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
          required={true}
        />
      </FormGroup>
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
          required={true}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Gender}</Label>
        <Input
          className="form-control"
          name="gender"
          value={values.gender}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Phone}</Label>
        <Input
          className="form-control"
          name="phone"
          value={values.phone}
          type="tel"
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Description}</Label>
        <Input
          className="form-control"
          name="businessDescription"
          value={values.businessDescription}
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>

      <FormGroup className="w-100 d-flex justify-content-center">
        <button className="btn btn-primary " type="submit">
          Signup As Business
        </button>
      </FormGroup>
    </Form>
  );
};

export default BusinessForm;
