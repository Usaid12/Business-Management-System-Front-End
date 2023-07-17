// import { Form, FormGroup, Input, Label } from "reactstrap";
// import { H1, H4, H5, P } from "../../AbstractElements";
// import { useFormik } from "formik";

// import { RegisterSchema } from "../../Schema/RegisterSchema";
// import {
//   Address,
//   quantity,
//   Phone,
//   PostalCode,
//   Username,
//   FirstName,
//   pricePerUnit,
//   Gender,
// } from "../../Constant";
// import axios from "axios";

// const initialValues = {
//   price : "",
//   pricePerUnit: "",
//   quantity: "",
//   arrivedAt: ""
// };

// const BusinessForm = () => {
//   const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: RegisterSchema,
//       onSubmit: () => {
//         handleBusinessCreate();
//       },
//     });
//   const handleBusinessCreate = async () => {
//     const url = "http://localhost:5000/api/business";

//     try {
//       const data = await axios.post(url, {
//       price : values.price,
//       pricePerUnit:values.pricePerUnit
//       });
//       console.log(data);
//       data.then((res) => console.log(res.data));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Form className="theme-form" onSubmit={handleSubmit}>
//       <div className="container">
//         <H4>{"ADD TO INVENTORY"}</H4>
//         <div className="row">
//           <div className="col">
//             <FormGroup>
//               <Label className="col-form-label">{price}</Label>
//               <Input
//                 className="form-control"
//                 name="price"
//                 value={values.price}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.price && touched.price ? (
//                 <p className="form-error text-danger">{errors.price}</p>
//               ) : null}
//             </FormGroup>
//           </div>
//           <div className="col">
//             <FormGroup>
//               <Label className="col-form-label">{pricePerUnit}</Label>
//               <Input
//                 className="form-control"
//                 name="pricePerUnit"
//                 value={values.pricePerUnit}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.pricePerUnit && touched.pricePerUnit ? (
//                 <p className="form-error text-danger">{errors.pricePerUnit}</p>
//               ) : null}
//             </FormGroup>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col">
//             <FormGroup className="position-relative">
//               <Label className="col-form-label">{quantity}</Label>
//               <Input
//                 className="form-control"
//                 name="userEmail"
//                 value={values.quantity}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.quantity && touched.quantity ? (
//                 <p className="form-error text-danger">{errors.quantity}</p>
//               ) : null}
//             </FormGroup>
         
          
//           </div>
//         </div>

//         <FormGroup className="position-relative">
//           <Label className="col-form-label">{arrivedAt}</Label>
//           <Input
//             className="form-control"
//             name="arrivedAt"
//             value={values.arrivedAt}
//             type="tel"
//             onChange={handleChange}
//             onBlur={handleBlur}
//           />
//           {errors.arrivedAt && touched.arrivedAt ? (
//             <p className="form-error text-danger">{errors.arrivedAt}</p>
//           ) : null}
//         </FormGroup>
//         <br />
        
//         <FormGroup className="d-flex justify-content-center">
//           <button className="btn btn-primary py-3 fs-6" type="submit">
//             Add To Inventory
//           </button>
//         </FormGroup>
//       </div>
//     </Form>
//   );
// };

// export default BusinessForm;
