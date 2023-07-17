import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Card, Table } from "reactstrap";
import { InfinitySpin } from "react-loader-spinner";
import HeadingCommon from "../../Common/Component/HeadingCommon";
import { ProductTable } from "../../Constant";
import AddImages from "./AddImages";
import { Modal, ModalHeader } from "reactstrap";

import Dropzone from "react-dropzone-uploader";
import { FormGroup } from "reactstrap";
import { useFormik } from "formik";

const ProductListing = () => {
  const initialValues = {
    images: [],
  };
  const {values,setFieldValue}=useFormik({
    initialValues:initialValues,
    onSubmit:()=>{
      handleAddImages()
      
    }
  })
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [imagesModal, setImagesModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectedProduct = (id) => {
    setSelectedProduct(id);
    setImagesModal(true);
    console.log(id);
  };
  const addImages = () => {
    setImagesModal(false);
  };

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
        console.log(products)
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
  const handleAddImages = async (id) => {
    try {
      let url = `http://localhost:5000/api/products/${id}/images`;
      const formdata = new FormData();
      values.productImages.forEach((image, index) => {
        formdata.append(`images[${index}]`, image);
      });

  const accessToken=localStorage.getItem("access_token")
      const data = await axios.post(url,formdata,{
        headers: {
          Authorization: accessToken,
          "Content-Type": "multipart/form-data", // Set the Content-Type header
        }
      });
      console.log(data.data)
    } catch (error) {

    }
  };

  const handleChangeStatusImages = (fileWithMeta, status) => {
    if (status === "done") {
      const { file } = fileWithMeta;
      const updatedImages = [...values.productImages, file];
      setFieldValue("productImages", updatedImages);
    }
  };

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
                    <th
                      scope="row"
                      style={{ paddingTop: "20px" }}
                      className="fs-6"
                    >
                      {product.id}
                    </th>
                    <td style={{ paddingTop: "20px" }} className="fs-6">
                      {product.name}
                    </td>
                    <td style={{ paddingTop: "20px" }} className="fs-6">
                      {product.description}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary fs-8"
                        onClick={() => handleSelectedProduct(product.id)}
                      >
                        Add Images
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
        <Modal
          size="lg"
          isOpen={imagesModal}
          toggle={() => setImagesModal(!imagesModal)}
        >
          <ModalHeader
            toggle={() => setImagesModal(!imagesModal)}
            className="text-3xl mx-auto"
          >
            <div className="flex">
              <h2 className="py-3" style={{ textAlign: "center" }}>
                Add Images
              </h2>
              <FormGroup>
                <Dropzone
                  // onChangeStatus={handleChangeStatusThumbnails}
                  inputContent={"Upload Files Here"}
                  accept="image/*"
                  maxFiles={5}
                  multiple={true}
                  canCancel={false}
                  styles={{ dropzone: { minHeight: 200, minWidth: 500 } }}
                />
              </FormGroup>
              <button
                type="submit"
                onChangeStatus={handleChangeStatusImages}
                className="btn btn-primary fs-5 py-2 "
                onClick={() => addImages()}
                style={{ display: "flex", margin: "auto" }}
              >
                Add Images
              </button>
            </div>
          </ModalHeader>
          {/* {selectedProduct} */}
        </Modal>
      </Card>
    </Col>
  );
};

export default ProductListing;
