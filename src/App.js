import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DogList from "./Pages/DogList/DogList";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import Intro from "./Pages/Intro";
import Detail from "./Pages/Detail/Detail";
import Admin from "./Pages/Admin/Admin";
import ProductEdit from "./Pages/Admin/ProductEdit";
import ProductDetail from "./Pages/Admin/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dogList" element={<DogList />} />
            <Route path="shop/:id" element={<Shop />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
            <Route path="intro" element={<Intro />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="admin" element={<Admin />} />
            <Route path="productedit/:id" element={<ProductEdit />} />
            <Route path="productdetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
