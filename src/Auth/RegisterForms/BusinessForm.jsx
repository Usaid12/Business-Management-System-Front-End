import React, { useState } from "react";
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
   
  const [gender, setGender] = useState();

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(errors);

  return (
    <Form className="theme-form" onSubmit={handleSubmit} >
      <div className="container">
      
      <H4>{"SIGNUP AS BUSINESS"}</H4>
      <P>{"Please Enter The Following Information To Signup As a Business"}</P>
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
          required={true}
        />
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
          required={true}
        />
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
          required={true}
        />
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
          required={true}
        />
        
      </FormGroup>
      </div>
      </div>
      
     
      <div className="row">
        <div className="col">
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Gender}</Label>
          <select  value={gender}
          onBlur={handleBlur}
          required={true} className="form-control" name={Gender} onChange={e=>setGender(e.target.value)}>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          </select>
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
          required={true}
        />
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
          required={true}
        />
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
