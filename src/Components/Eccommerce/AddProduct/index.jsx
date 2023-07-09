import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import LeftformDesc from "./LeftformDesc";

const AddProduct = () => {
  return (
    <Fragment>
      <Breadcrumbs
        parent="Ecommerce"
        title="Add Product"
        mainTitle="Add Product"
      />
      <Container fluid={true} className="add-product">
        <Row>
          <LeftformDesc />
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProduct;
