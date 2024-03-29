import { react, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design from "./components/design";
import { Imagedata } from "./Data";
import Products from "./pages/Product";
export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Products data={Imagedata} data2={{ hi: 20, imageId: "YfeOqp2" }} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Products data={Imagedata} data2={{ hi: 20, imageId: "YfeOqp2" }} />
          }
        />

        <Route path="/design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}
