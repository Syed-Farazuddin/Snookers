/* eslint-disable react/prop-types */
import { useState } from "react";
import Minus from "/images/icon-minus.svg";
import Plus from "/images/icon-plus.svg";
import next from "/images/icon-next.svg";
import prev from "/images/icon-previous.svg";

export default function Product({
  data,
  nextSlide,
  prevSlide,
  slide,
  closeLightbox,
  handleLightbox,
  darkMode,
  productData,
  AddtoCart,
  itemCount,
  handleMinus,
  handlePlus,
}) {
  const [value, setValue] = useState(0);
  const product = data[value].mainImage;

  return (
    <section
      className={`${
        darkMode
          ? "text-white bg-slate-700 lg:max-w-7xl mx-auto grid lg:grid-cols-2 gird"
          : "lg:max-w-7xl mx-auto grid lg:grid-cols-2 gird"
      } `}
    >
      <article className="flex flex-col justify-center items-center xsm:mt-3 xsm:p-2">
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={index + 1 == slide ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                className="w-full lg:w-11/12 lg:mt-10 mb-4 rounded-2xl lg:hidden"
                alt=""
                onClick={handleLightbox}
              />
              <img
                src={product}
                className="w-full lg:w-11/12 lg:mt-10 mb-4 rounded-2xl xsm:hidden lg:inline-block"
                alt=""
                onClick={handleLightbox}
              />
            </div>
          ))}
        </div>

        <ul className="sm:hidden">
          <li
            onClick={nextSlide}
            className="bg-white p-1 w-[30px] h-[30px] absolute top-1/2 right-0 lg:right-5 rounded-full lg:w-[50px] flex justify-center items-center lg:h-[50px] "
          >
            <button>
              <img src={next} alt="" />
            </button>
          </li>
          <li
            onClick={prevSlide}
            className="bg-white  p-1 w-[40px] h-[40px] absolute top-1/2 left-5 rounded-full lg:w-[50px] flex justify-center items-center lg:h-[50px]"
          >
            <button>
              <img src={prev} alt="" />
            </button>
          </li>
        </ul>
        {/* grid grid-cols-${data.length} gap-3 */}

        {/* Thumbnail rendering */}

        <ul
          className={`xsm:hidden lg:inline-flex flex items-center justify-start gap-5 flex-wrap`}
        >
          {data?.map((item, index) => (
            <li
              key={item.id}
              value={item.value}
              className={`${
                index === value && "border-4 border-orange-400 opacity-80"
              } border-4 border-transparent rounded-2xl overflow-hidden cursor-pointer`}
              onClick={() => {
                console.log(setValue(index));
              }}
            >
              <img
                src={item.thumbNail}
                className="w-20"
                value={item.id}
                alt=""
              />
            </li>
          ))}
        </ul>
      </article>

      <article className="lg:p-20 xsm:p-5">
        <h4 className="text-Orange font-extrabold mb-4">
          {productData.subTitle}
        </h4>
        <h1 className="text-3xl font-bold lg:text-5xl lg:mb-10 xsm:mb-4 xsm:text-3xl">
          {productData.title}
        </h1>
        <p className="mb-4 leading-loose">{productData.Description}</p>
        <div className="flex gap-3 justify-start lg:flex-col mb-1 xsm:justify-between">
          <div className="flex ">
            <h4 className="mr-5 font-extrabold sm:text-2xl xsm:text-xl">
              {productData.Price}
            </h4>
            <p className="bg-PaleOrange sm:text-lg text-Orange p-1 rounded-md font-bold xsm:text-sm">
              {productData.Discount}
            </p>
          </div>
          <div>
            <p className="line-through font-extralight text-xl text-gray-400 xsm:text-lg">
              {productData.OrginalPrice}
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row justify-center items-center mt-5 xsm:flex-col gap-4">
          <div className="bg-LightGrayishBlue text-black flex items-center justify-around font-extrabold w-[-webkit-fill-available] py-3 rounded-md ">
            <img
              className="cursor-pointer"
              onClick={handleMinus}
              src={Minus}
              alt=""
            />
            <p className="">{itemCount}</p>
            <img
              className="cursor-pointer"
              onClick={handlePlus}
              src={Plus}
              alt=""
            />
          </div>
          <div className="bg-Orange text-white flex items-center justify-center font-extrabold py-3  rounded-md  xsm:w-[-webkit-fill-available]">
            <div>
              <svg
                className="font-extrabold"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="ml-2 cursor-pointer " onClick={AddtoCart}>
              {" "}
              Add to Cart
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
