import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, P } from "../../AbstractElements";
import { useFormik } from "formik";
import {CustomerSchema} from "../../AuthScehma/CustomerSchema"
import { Gender } from '../../Constant';
import { Username } from '../../Constant';
import { EmailAddress } from '../../Constant';
import { Password } from '../../Constant';
import { ConfirmPassword } from '../../Constant';



const initialValues = {
  username:"",
    email:"",
    password:"",
    confirmPassword:"",
    gender:""
}


const CustomerForm = () => {
    
  const [gender, setGender] = useState();

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
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
          value={values.confirmPassword}
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          required={true}
        />
      </FormGroup>
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

      <FormGroup className="w-100 d-flex justify-content-center">
        <button className="btn btn-primary " type="submit">
          Signup as Customer
        </button>
      </FormGroup>
      </Form>
  )
}

export default CustomerForm;
