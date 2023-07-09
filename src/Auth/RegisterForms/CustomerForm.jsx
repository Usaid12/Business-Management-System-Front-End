import React from "react";
import axios from "axios";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, P } from "../../AbstractElements";
import { useFormik } from "formik";
import { CustomerSchema } from "../../Schema/CustomerSchema"
import { FirstName, Gender, LastName, phoneNumber } from "../../Constant";
import { EmailAddress } from "../../Constant";
import { Password } from "../../Constant";
import { ConfirmPassword } from "../../Constant";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
  phoneNumber: "",
};

const CustomerForm = () => {
  const navigate = useNavigate();

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CustomerSchema,
      onSubmit: () => {
        handleRegister();
      },
    });
  const handleRegister = async () => {
    const url = "http://localhost:5000/api/auth/register";
    try {
      const data = await axios.post(url, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        gender: values.gender,
        phoneNumber: values.phoneNumber,
        role: "customer",
      });
      if (data.status === 201) {
        let accessToken;
        if (data.data && data.data.data.tokens) {
          accessToken = data.data.data.tokens.access_token;
        }
        localStorage.setItem("access_token", accessToken);
        navigate("/tivo/dashboard/default");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <H4>{"SIGNUP AS CUSTOMER"}</H4>
      <P>{"Please Enter The Following Information To Signup As a Customer"}</P>
      <FormGroup>
        <Label className="col-form-label">{FirstName}</Label>
        <Input
          className="form-control"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName ? (
          <p className="form-error text-danger">{errors.firstName}</p>
        ) : null}
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{LastName}</Label>
        <Input
          className="form-control"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName ? (
          <p className="form-error text-danger">{errors.lastName}</p>
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
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        {errors.gender && touched.gender ? (
          <p className="form-error text-danger">{errors.gender}</p>
        ) : null}
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{phoneNumber}</Label>
        <Input
          className="form-control"
          name="phoneNumber"
          value={values.phoneNumber}
          type="tel"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber ? (
          <p className="form-error text-danger">{errors.phoneNumber}</p>
        ) : null}
      </FormGroup>

      <FormGroup className=" d-flex justify-content-center">
        <button className="btn btn-primary " type="submit">
          Signup as Customer
        </button>
      </FormGroup>
    </Form>
  );
};

export default CustomerForm;
