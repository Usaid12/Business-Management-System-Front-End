import React, { useEffect, useState } from "react";
import axios from "axios";
import { InventoryTable } from "../../../Constant";
import { Col, Card, Table } from "reactstrap";
import { InfinitySpin } from "react-loader-spinner";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const getInventory = async () => {
      setisLoading(true);
      const url = "http://localhost:5000/api/inventory";
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setInventoryList(response.data.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getInventory();
  }, []);

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={InventoryTable} />
        <div className="table-responsive theme-scrollbar">
          <Table>
            <thead>
              <tr className="border-bottom-primary">
                <th scope="col">{"Product_Id"}</th>
                <th scope="col">{"Quantity"}</th>
                <th scope="col">{"PricPerUnit"}</th>
                <th scope="col">{"ArrivedAt"}</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    <InfinitySpin width="200" color="#4fa94d" />
                  </td>
                </tr>
              ) : (
                inventoryList.map((item) => (
                  <tr key={item.product_id}>
                    <td>{item.product_id}</td>
                    <td>{item.quantity}</td>
                    <td>{item.pricePerUnit}</td>
                    <td>{item.arrivedAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InventoryList;
