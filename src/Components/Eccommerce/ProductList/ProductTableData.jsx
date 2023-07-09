import { productColumns, productData } from '../../../Data/Ecommerce/product-list';
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useState } from 'react';

const ProductTableData = () => {
//   const [products,setProducts]=useState([])
//   const url = "http://localhost:5000/api/products";
// const access_token = localStorage.getItem("access_token");
// try {
//   const data=axios.get(url,{
//   headers:{
//     Authorization:`Bearer ${access_token}`
//   }
// })
// console.log(data.data)
// setProducts(data.data)
  
// } catch (error) {
//   console.log(error)
// }

  return (
    <Fragment>
      <div className="table-responsive theme-scrollbar product-table">
        <DataTable
          noHeader
          pagination
          paginationServer
          columns={productColumns}
          // data={products}
        />
      </div>
    </Fragment>
  );
};
export default ProductTableData;