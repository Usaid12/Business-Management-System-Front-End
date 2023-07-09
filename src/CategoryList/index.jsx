import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryListText } from "../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../Common/Component/HeadingCommon";
import { Fragment } from "react";
import { InfinitySpin } from "react-loader-spinner";
import CommonModal from "../Components/UiKits/Modals/common/modal";

const CategoryList = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [subCategory, setSubCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [accessToken, setAccessToken] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    setAccessToken(accessToken);
    const handleCategory = async () => {
      setisLoading(true);
      const categoryUrl = `http://localhost:5000/api/category`;
      try {
        const response = await axios.get(categoryUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setCategoryList(response.data.data);
        console.log(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    handleCategory();
  }, []);

  const handleSubCategory = async (parentId) => {
    setisLoading(true);
    toggle();

    const subCategoryUrl = `http://localhost:5000/api/category/?parent_id=${parentId}`;
    try {
      const response = await axios.get(subCategoryUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setSubCategory(response.data.data);
      console.log(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={CategoryListText} />
        <div className="table-responsive theme-scrollbar">
          <Table>
            <thead>
              <tr className="border-bottom-primary">
                <th scope="col">{"ID"}</th>
                <th scope="col">{"CategoryName"}</th>
                <th scope="col">{"Actions"}</th>
              </tr>
            </thead>
            <tbody>
              {categoryList.map((category) => (
                <tr key={category.id}>
                  <th scope="row">{category.id}</th>
                  <td>{category.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-xs btn btn-danger"
                      style={{
                        width: "200px",
                        fontSize: "16px",
                        padding: "3px",
                      }}
                      onClick={() => handleSubCategory(category.id)}
                    >
                      Show Subcategories
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
      <Fragment>
        <CommonModal isOpen={modal} title="SubCategoryList" toggler={toggle}>
          {isLoading ? (
            <InfinitySpin width="200" color="#4fa94d" />
          ) : (
            <>
              {subCategory.length > 0 ? (
                subCategory.map((subcategory) => (
                  <div key={subcategory.id} className="fs-4">
                     {subcategory.name}
                  </div>
                ))
              ) : (
                <div className="fs-4 fw-bold">No subcategory exists</div>
              )}
            </>
          )}
        </CommonModal>
      </Fragment>
    </Col>
  );
};

export default CategoryList;
