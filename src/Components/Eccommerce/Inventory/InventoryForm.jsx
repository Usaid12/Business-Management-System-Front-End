import { Form, FormGroup, Input, Label } from "reactstrap";
import { H1, H4, H5, P } from "../../../AbstractElements";
import { useFormik } from "formik";

// import { RegisterSchema } from "../../../Schema/RegisterSchema";
import {

  quantity,
 
  arrivedAt
  
} from "../../../Constant";
import axios from "axios";

const initialValues = {
  product_id : "",
  price_per_unit: "",
  quantity: "",
  arrivedAt: ""
};

const InventoryForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
    //   validationSchema: RegisterSchema,
      onSubmit: () => {
        handleInventory();
      },
    });
  const handleInventory = async () => {
    const url = "http://localhost:5000/api/inventory";
    const access_token=localStorage.getItem("access_token")

    try {
      const data = await axios.post(url, {
      product_id : Number.parseInt(values.product_id),
      price_per_unit:Number.parseInt(values.price_per_unit),
      quantity:Number.parseInt(values.quantity),
      arrivedAt:(values.arrivedAt)
      
      },{
        headers:{
          Authorization:`Bearer ${access_token}`
        }
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
        <H4>{"ADD TO INVENTORY"}</H4>
        <div className="row">
          <div className="col">
            <FormGroup>
              <Label className="col-form-label">{"ProductID"}</Label>
              <Input
                className="form-control"
                name="product_id"
                value={values.product_id}
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
              />
              {errors.product_id && touched.product_id ? (
                <p className="form-error text-danger">{errors.product_id}</p>
              ) : null}
            </FormGroup>
          </div>
          <div className="col">
            <FormGroup>
              <Label className="col-form-label">{"PricePerUnit"}</Label>
              <Input
                className="form-control"
                name="price_per_unit"
                value={values.price_per_unit}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.price_per_unit && touched.price_per_unit ? (
                <p className="form-error text-danger">{errors.price_per_unit}</p>
              ) : null}
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FormGroup className="position-relative">
              <Label className="col-form-label">{quantity}</Label>
              <Input
                className="form-control"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.quantity && touched.quantity ? (
                <p className="form-error text-danger">{errors.quantity}</p>
              ) : null}
            </FormGroup>
         
          
          </div>
        </div>

        <FormGroup className="position-relative">
          <Label className="col-form-label">{arrivedAt}</Label>
          <Input
            className="form-control"
            name="arrivedAt"
            value={values.arrivedAt}
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.arrivedAt && touched.arrivedAt ? (
            <p className="form-error text-danger">{errors.arrivedAt}</p>
          ) : null}
        </FormGroup>
        <br />
        
        <FormGroup className="d-flex justify-content-center">
          <button className="btn btn-primary py-3 fs-6" type="submit">
            Add To Inventory
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default InventoryForm;
