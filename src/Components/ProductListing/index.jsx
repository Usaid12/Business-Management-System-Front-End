import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, Table } from "reactstrap";
import { InfinitySpin } from "react-loader-spinner";
import HeadingCommon from "../../Common/Component/HeadingCommon";
import { ProductTable } from "../../Constant";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const getAllProducts = async () => {
      setIsLoading(true);
      const url = "http://localhost:5000/api/products";
      try {
        const data = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts(data.data.data);
      } catch (error) {
        console.log(error.message);
        setShowError(true);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ProductTable} />
        <div className="table-responsive theme-scrollbar">
          <Table>
            <thead>
              <tr className="border-bottom-primary">
                <th scope="col">{"ID"}</th>
                <th scope="col">{"Name"}</th>
                <th scope="col">{"Description"}</th>
                <th scope="col">{"Action"}</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="3">
                    <InfinitySpin width="200" color="#4fa94d" />
                  </td>
                </tr>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>
                      <button className="btn btn-primary py-3 fs-6">
                        Add Product
                      </button>
                    </td>
                  </tr>
                ))
              ) : showError ? (
                <tr>
                  <td colSpan="3">No products to display</td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default ProductListing;
