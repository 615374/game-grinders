import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer";
import {Cart} from "./Containers/CartView/Cart";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 



const App = () => {
 
  const mensaje = "Los mejores Grinders del mercado";

  return (
    <>
     <BrowserRouter>   
     <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/cart" element={<Cart/>}/>
     </Routes>
     <ItemListContainer greeting={mensaje}/>
     
     
     </BrowserRouter>
     
    </>
  );

};

export default App;

