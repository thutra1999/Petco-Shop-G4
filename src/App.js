import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DogList from "./Pages/DogList";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Admin from "./Pages/Admin";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";


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
          <Route path="admin" element={<Admin />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </React.Fragment>
  );
}

export default App;
