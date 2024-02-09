/* eslint-disable react/prop-types */

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Productpage";
import { Imagedata, productData } from "../Data";
import Lightbox from "../components/Lightbox";

export default function Products() {
  const AddtoCart = () => {
    setCartAdd(!cartAdd);
    console.log(itemCount, productData);
  };
  const [cartAdd, setCartAdd] = useState(false);
  const [close, setClose] = useState(false);
  const [slide, setSlide] = useState(1);
  const [itemCount, setItemCount] = useState(1);
  const handlePlus = () => {
    setItemCount(itemCount + 1);
  };
  const handleMinus = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  const handleLightbox = () => {
    setClose(!close);
  };
  const nextSlide = () => {
    if (slide != Imagedata.length) {
      setSlide(slide + 1);
    } else if (slide == Imagedata.length) {
      setSlide(1);
    }
  };
  const prevSlide = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    } else {
      setSlide(Imagedata.length);
    }
  };
  return (
    <>
      <Header
        itemCount={itemCount}
        productData={productData}
        AddtoCart={AddtoCart}
        cartAdd={cartAdd}
      />
      <Lightbox
        closeLightbox={close}
        handleLightbox={handleLightbox}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slide={slide}
        data={Imagedata}
      />
      <Product
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        itemCount={itemCount}
        AddtoCart={AddtoCart}
        productData={productData}
        closeLightbox={close}
        handleLightbox={handleLightbox}
        data={Imagedata}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slide={slide}
      />
      <Footer />
    </>
  );
}
