// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BusinessTable } from "../Constant";
// import { Col, Card, Table } from "reactstrap";
// import { InfinitySpin } from "react-loader-spinner";
// import HeadingCommon from "../Common/Component/HeadingCommon";

// const BusinessList = () => {
//   const [businessList, setBusinessList] = useState([]);
//   const [isLoading, setisLoading] = useState(false);
//   useEffect(() => {
//     const accessToken = localStorage.getItem("access_token");
//     const getAllBusiness = async () => {
//       setisLoading(true);
//       const url = "http://localhost:5000/api/business";
//       try {
//         const data = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setBusinessList(data.data.data);
//         setisLoading(false);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getAllBusiness();
//   }, []);

//   return (
//     <Col sm="12">
//       <Card>
//         <HeadingCommon Heading={BusinessTable} />
//         <div className="table-responsive theme-scrollbar">
//           <Table>
//             <thead>
//               <tr className="border-bottom-primary">
//                 <th scope="col">{"ID"}</th>
//                 <th scope="col">{"BusinessName"}</th>
//                 <th scope="col">{"Email"}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {isLoading ? (
//                 <InfinitySpin width="200" color="#4fa94d" />
//               ) : (
//                 businessList.map((business) => (
//                   <tr key={business.id}>
//                     <th scope="row">{business.id}</th>
//                     <td>{business.name}</td>
//                     <td>{business.email}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </Table>
//         </div>
//       </Card>
//     </Col>
//   );
// };

// export default BusinessList;
