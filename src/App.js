import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import Navbar from "./component/Navbar";
import Home from "./Home";
import "./App.css";

// import ProductsDetails from './component/ProductsDetails'
import "./component/Pdetails.css";
// import ProductList from './component/ProductList'
import ProductDetails from "./component/ProductDetails";
import Clothing from "./component/Clothing";
import Accessories from "./component/Accessories"
import Shoes from "./component/Shoes"
import ECart from "./component/ECart"



const App = () => {
  const [loggedData, setloggedData] = useState();
  const [loginEmail, setloginEmail] = useState(0);
  const [count, setcount] = useState(0);
  const [category, setcategory] = useState();
  useEffect(() => {
    let loggedInuser = JSON.parse(localStorage.getItem("LoggedInUser"));
    setloggedData(loggedInuser);
  }, [count, loginEmail]);

  return (
    <div>
      {loggedData?.email && (
        <Navbar
          category={category}
          setcategory={setcategory}
          setcount={setcount}
          count={count}
        />
      )}

      <Routes>
        <Route path="/" element={<Signin setloginEmail={setloginEmail} loginEmail={loginEmail} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path='/Accessories' element={<Accessories />} />
        <Route path='/Shoes' element={<Shoes />} />
        <Route path='/ECart' element={<ECart />} />


      </Routes>
    </div>
  );
};

export default App;
