/* eslint-disable react/prop-types */

import prev from "/images/icon-previous.svg";
import next from "/images/icon-next.svg";
import Close from "/images/close.svg";

function Lightbox({
  data,
  slide,
  nextSlide,
  prevSlide,
  closeLightbox,
  handleLightbox,
}) {
  return (
    <div
      className={`${
        !closeLightbox ? "hidden " : ""
      }  fixed top-0 bottom-0 right-0 left-0 bg-opacity-75 flex bg-black z-50 justify-center items-center`}
    >
      <div className="flex items-center justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${index + 1 == slide ? "" : "hidden "}  relative`}
          >
            <img
              src={item.mainImage}
              className="rounded-2xl p-4 lg:h-[800px]"
              alt=""
            />
          </div>
        ))}
      </div>

      <ul className="">
        <li
          onClick={nextSlide}
          className="bg-white absolute lg:top-1/2 lg:right-1/4 xsm:right-1  rounded-full w-[50px] flex justify-center items-center h-[50px]"
        >
          <button>
            <img src={next} alt="" />
          </button>
        </li>
        <li
          onClick={prevSlide}
          className="bg-white absolute lg:top-1/2  xsm:left-1 lg:left-1/4 rounded-full w-[50px] flex justify-center items-center h-[50px]"
        >
          <button>
            <img src={prev} alt="" />
          </button>
        </li>
        <li>
          <button>
            <img
              src={Close}
              onClick={handleLightbox}
              className="bg-white absolute lg:top-0 xsm:top-[20%] xsm:right-4 lg:right-1/4 rounded-full w-[50px] flex justify-center items-center h-[50px]"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Lightbox;
