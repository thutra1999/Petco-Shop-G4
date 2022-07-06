import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './OrderDetail.css';

const OrderDetail = () => {
    const params = useParams();
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        console.log('user use effect!!');

        let url =
            'https://62b04ad2e460b79df0424941.mockapi.io/id/' + params.id;

        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // data.dob = new Date(data.dob);
                setOrders(data);
            });
    }, []);

    var list_order = orders.cart;
//     var category_jsx = [];
//   if (orders != null) {
//     category_jsx = (
//       <ul className="nav navbar-nav">
//         {
//           (category_jsx = categories.map((item) => (
//             <li>
//               <Link to={"/shop/" + item.category_name}>
//                 <a>{item.category_name}</a>
//               </Link>
//             </li>
//           )))
//         }
//       </ul>
//     );
//   }

    return (
        <>
            {orders != null ? (
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá sản phẩm</th>
                            <th scope="col">Giá sản phẩm</th>
                            <th scope="col">Ảnh mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td class="text-primary">{orders.cart[id]}</td>
                            <td class="text-primary">{orders.cart.name}</td>
                            <td class="text-primary">{orders.cart.quantity}</td>
                            <td class="text-primary">{orders.cart.price}</td>
                            <td class="text-primary">{orders.cart.discount}</td>
                            <td class="text-primary"><img src={orders.cart.picture}></img></td>
                        </tr> */}
                    </tbody>
                </table>
                // <div class="container">
                //   <div class="panel-body inf-content">
                //     <div class="row">
                //       <div class="col">
                //         <strong class="h3">Thông tin sản phẩm </strong>
                //         <br />
                //         <div class="table-responsive">
                //           <table class="table table-user-information">
                //             <tbody>
                //               <tr>
                //                 <td>
                //                   <strong>Mã sản phẩm</strong>
                //                 </td>
                //                 <td class="text-primary">{orders.cart.id}</td>
                //               </tr>
                //               <tr>
                //                 <td>
                //                   <strong>Tên sản phẩm</strong>
                //                 </td>
                //                 <td class="text-primary">{orders.cart.name}</td>
                //               </tr>
                //               <tr>
                //                 <td>
                //                   <strong>Số lượng</strong>
                //                 </td>
                //                 <td class="text-primary">{orders.cart.quantity}</td>
                //               </tr>
                //               <tr>
                //                 <td>
                //                   <strong>Giá sản phẩm</strong>
                //                 </td>
                //                 <td class="text-primary">{orders.cart.price}</td>
                //               </tr>
                //               <tr>
                //                 <td>
                //                   <strong>Giảm giá</strong>
                //                 </td>
                //                 <td class="text-primary">{orders.cart.discount}</td>
                //               </tr>
                //               <tr>
                //                 <td>
                //                   <strong>Ảnh sản phẩm</strong>
                //                 </td>
                //                 <td class="text-primary"><img src={orders.cart.picture}></img></td>
                //               </tr>
                //             </tbody>
                //           </table>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                //   <Link to={'/productedit/' + params.id}>
                //     <button type="button" className="btn btn-primary">
                //       Chỉnh sửa
                //     </button>
                //   </Link>
                //   <Link to="/admin">
                //   <button type="button" class="btn btn-secondary">Trở lại</button></Link>
                // </div>
            ) : (
                <div className='loader'></div>
            )}
        </>
    );
};

export default OrderDetail;
