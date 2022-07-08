import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DogList from "./Pages/DogList/DogList";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";
import Cart from "./Pages/Cart/Cart";
import Intro from "./Pages/Intro/Intro";
import Detail from "./Pages/Detail/Detail";
import Admin from "./Pages/Admin/Admin";
import ProductEdit from "./Pages/Admin/ProductEdit";
import ProductDetail from "./Pages/Admin/ProductDetail";
import OrderDetail from "./Pages/Admin/OrderDetail";
import OrderTable from "./Pages/Admin/OrderTable";
import UserLayout from "./Pages/UserLayout";
import AdminLayout from "./Pages/AdminLayout";
import ScrollToTop from "./Components/ButtonScrollTop/ScrollToTop";
import OrderManager from "./Pages/Admin/OrderManager";

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="dogList" element={<DogList />} />
          <Route path="shop/:id" element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="nopage" element={<NoPage />} />
          <Route path="intro" element={<Intro />} />
          <Route path="detail/:id" element={<Detail />}/>
        </Route>
        <Route path="/admin" element={localStorage.getItem("isLoggedIn") ==="admin" ? <AdminLayout/>: <NoPage />}>
          <Route index element={<Admin />} />
          <Route path="productedit/:id" element={<ProductEdit />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="ordertable" element={<OrderTable />} />
          <Route path="orderdetail/:id" element={<OrderDetail />} />
          <Route path="ordermanager" element={<OrderManager />} />
        </Route>
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
