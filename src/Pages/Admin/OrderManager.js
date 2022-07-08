import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import OrderTable from "./OrderTable";
import { Loader } from "../../Components/Loader/Loader";
function OrderManager() {

    const [searchTerm, setSearchTerm] = useState("");
    const [orders, setOrders] = useState([]);

    const [loadItem, setLoadItem] = useState(true);
    useEffect(() => {
        let url_oder = "https://62b04ad2e460b79df0424941.mockapi.io/id/";
        if (searchTerm.length > 0) {
            url_oder = url_oder + "?phone=" + searchTerm;
        }

        setLoadItem(true);
        fetch(url_oder)
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
            }).then(() => setLoadItem(false));
    }, [searchTerm]);

    return (
            <div className="container">
                <h2>Danh sách đơn hàng</h2>
                <div className="row">
                <div className="col-sm-6">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            ></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br />
                    </div>
                    </div><br/><br/><br/>
                    {!loadItem ?
                    <OrderTable data={orders} />: <Loader/>}
               
            </div>
    )
}

export default OrderManager;