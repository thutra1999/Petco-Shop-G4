import React from "react";
import ProductTable from "./ProductTable";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";


function Admin() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [loadItem, setLoadItem] = useState(true);
    useEffect(() => {
        
   
        let url = "https://62b421ada36f3a973d2c998f.mockapi.io/shop";
        if (searchTerm.length > 0) {
            url = url + "?search=" + searchTerm;
        }
        if (filter.length > 0) {
            url = url + "?category=" + filter;
        }
        setLoadItem(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            }).then(() => setLoadItem(false));
    }, [searchTerm, filter]);


    const categoryFilterHandler = (props) => {
        setFilter(props);
    };


    return (
        <>
            <div className="container">
                <h2>Danh sách sản phẩm</h2>
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
                    <div className="col-sm-6">
                        <p>
                            <Link to={"/admin/productedit/new"}>
                                <button className="btn btn-primary" type="button">
                                    Thêm mới sản phẩm
                                </button>
                            </Link>
                        </p>
                    </div>
                </div><br /><br />
                {!loadItem ?
                <ProductTable data={products} filter={categoryFilterHandler} />: <Loader/>}
            </div>
        </>
    )
}

export default Admin;