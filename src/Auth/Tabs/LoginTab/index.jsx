import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { H4, H6, P } from "../../../AbstractElements";
import axios from "axios";
import {
  EmailAddress,
  Password,
  TextBackgroundUtilities,
} from "../../../Constant";
import { useFormik } from "formik";
import {LoginSchema} from "../../../Schema/LoginSchema"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};

const LoginTab = () => {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: () => {
        handleLogin();
      },
    });
  const handleLogin = async () => {
    const url = "http://localhost:5000/api/auth/login";
    try {
      const data = await axios.post(url, {
        email: values.email,
        password: values.password,
      });

      if (data.status === 200) {
        let accessToken;

        if (data.data && data.data.data.tokens) {
          accessToken = data.data.data.tokens.access_token;
          console.log(accessToken);
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
      <H4>{"Login"}</H4>
      <P>{"Enter your email & password to login"}</P>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input
          className="form-control"
          name="email"
          id="email"
          type="email"
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
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required={TextBackgroundUtilities}
        />
        {errors.password && touched.password ? (
          <p className="form-error text-danger">{errors.password}</p>
        ) : null}
      </FormGroup>

      <FormGroup className="w-100 d-flex justify-content-center">
        <button className="btn btn-primary " type="submit">
          Login
        </button>
      </FormGroup>

      <div className="login-social-title">
        <H6>{`Or Sign up as`}</H6>
      </div>
      <div className=" d-flex flex-column gap-2 align-items-center">
        <div className="d-flex align-items-center">
          <Link to={`/tivo/customer-register`}>
            <button className=" btn btn-primary">Signup</button>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default LoginTab;
