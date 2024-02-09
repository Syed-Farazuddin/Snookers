/* eslint-disable react/prop-types */

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Productpage";
import { data } from "../Data";
import Lightbox from "../components/Lightbox";
export default function Products() {
  const [close, setClose] = useState(false);
  const [slide, setSlide] = useState(1);
  const handleLightbox = () => {
    setClose(!close);
  };
  const nextSlide = () => {
    if (slide != data.length) {
      setSlide(slide + 1);
    } else if (slide == data.length) {
      setSlide(1);
    }
  };
  const prevSlide = () => {
    if (slide > 1) {
      setSlide(slide - 1);
    } else {
      setSlide(data.length);
    }
  };
  return (
    <>
      <Header />
      <Lightbox
        closeLightbox={close}
        handleLightbox={handleLightbox}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slide={slide}
        data={data}
      />
      <Product
        closeLightbox={close}
        handleLightbox={handleLightbox}
        data={data}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        slide={slide}
      />
      <Footer />
    </>
  );
}
