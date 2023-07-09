import { Form, FormGroup, Input, Label } from "reactstrap";
import { H1, H4, H5, P } from "../../AbstractElements";
import { useFormik } from "formik";

import { RegisterSchema } from "../../Schema/RegisterSchema";
import {
  Address,
  EmailAddress,
  Phone,
  PostalCode,
  Username,
  FirstName,
  LastName,
  Gender,
} from "../../Constant";
import axios from "axios";

const initialValues = {
  username: "",
  userEmail: "",
  userPhone: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
  businessEmail: "",
  businessPhone: "",
  firstName: "",
  lastName: "",
  gender: "",
};

const BusinessForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: () => {
        handleBusinessCreate();
      },
    });
  const handleBusinessCreate = async () => {
    const url = "http://localhost:5000/api/business";

    try {
      const data = await axios.post(url, {
        user: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.userEmail,
          gender: values.gender,
          phoneNumber: values.userPhone,
        },
        business: {
          name: values.username,
          email: values.businessEmail,
          contactNo: values.businessPhone,
          city: values.city,
          country: values.country,
          postalCode: values.postalCode,
          addressLine1: values.address,
        },
      });
      console.log(data);
      data.then((res) => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="theme-form" onSubmit={handleSubmit}>
      <div className="container">
        <H4>{"REGISTER YOUR BUSINESS"}</H4>
        <P>
          {"Please Enter The Following Information to Register your business"}
        </P>
        <H4>FOR USER</H4>
        <div className="row">
          <div className="col">
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
          </div>
          <div className="col">
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
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input
                className="form-control"
                name="userEmail"
                value={values.userEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.userEmail && touched.userEmail ? (
                <p className="form-error text-danger">{errors.userEmail}</p>
              ) : null}
            </FormGroup>
          </div>
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
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              {errors.gender && touched.gender ? (
                <p className="form-error text-danger">{errors.gender}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>

        <FormGroup className="position-relative">
          <Label className="col-form-label">{Phone}</Label>
          <Input
            className="form-control"
            name="userPhone"
            value={values.userPhone}
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userPhone && touched.userPhone ? (
            <p className="form-error text-danger">{errors.userPhone}</p>
          ) : null}
        </FormGroup>
        <br />
        <H4>FOR BUSINESS</H4>
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
                name="businessEmail"
                value={values.businessEmail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.businessEmail && touched.businessEmail ? (
                <p className="form-error text-danger">{errors.businessEmail}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FormGroup>
              <label htmlFor="countrySelect" className="mt-2 ">
                Select a country:
              </label>
              <select
                id="countrySelect"
                value={values.country}
                onChange={handleChange}
                name="country"
              >
                <option value="">-- Select --</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="pakistan">Pakistan</option>
              </select>
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <label htmlFor="citySelect" className="mt-2 ">
                Select a city:
              </label>
              <select
                id="citySelect"
                value={values.city}
                onChange={handleChange}
                disabled={!values.country}
                name="city"
              >
                <option value="">-- Select --</option>
                {values.country === "usa" && (
                  <>
                    <option value="newyork">New York</option>
                    <option value="losangeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                  </>
                )}
                {values.country === "uk" && (
                  <>
                    <option value="london">London</option>
                    <option value="manchester">Manchester</option>
                    <option value="birmingham">Birmingham</option>
                  </>
                )}
                {values.country === "pakistan" && (
                  <>
                    <option value="karachi">Karachi</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="lahore">Lahore</option>
                    <option value="multan">Multan</option>
                    <option value="kpk">KPK</option>
                  </>
                )}
              </select>
            </FormGroup>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <FormGroup>
              <Label className="col-form-label">{PostalCode}</Label>
              <Input
                className="form-control"
                name="postalCode"
                value={values.postalCode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.postalCode && touched.postalCode ? (
                <p className="form-error text-danger">{errors.postalCode}</p>
              ) : null}
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{Phone}</Label>
              <Input
                className="form-control"
                name="businessPhone"
                value={values.businessPhone}
                type="tel"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.businessPhone && touched.businessPhone ? (
                <p className="form-error text-danger">{errors.businessPhone}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>

        <FormGroup className="position-relative">
          <Label className="col-form-label">{Address}</Label>
          <Input
            className="form-control"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? (
            <p className="form-error text-danger">{errors.address}</p>
          ) : null}
        </FormGroup>

        <FormGroup className="d-flex justify-content-center">
          <button className="btn btn-primary py-3 fs-6" type="submit">
            Register Business
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default BusinessForm;
