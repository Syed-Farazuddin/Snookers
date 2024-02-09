import React, { useState } from "react";

function Cart({ itemCount, productData, cartAdd }) {
  //   let [cartData, setCartData] = useState("");
  let cartData = productData;
  console.log(cartData);

  return (
    <div className="flex justify-start bg-white z-10  xsm:right-[4%] xsm:left-[4%] xsm:top-[23%] lg:right-[10%] lg:border-2 lg:border-slate-400 flex-col py-2 absolute sm:left-[60%] sm:top-[15%] sm:right-[2%] rounded-lg ">
      <div className="text-lg font-bold flex justify-start text-start w-[100%] px-2 m-0">
        <h1>Cart</h1>
      </div>
      <hr />
      <p>
        {cartData.length == 0 ? (
          "Your cart is empty"
        ) : (
          <div className="flex gap-2 mt-3 px-2">
            <img src={cartData.thumbNail} className="w-3/12" alt="" />
            <div>
              <p className="text-lg">{cartData.title.slice(0, 23) + "..."}</p>
              <p>
                {cartData.Price} x
                <span>
                  {itemCount} ={" "}
                  <span className="font-bold">
                    {"$" + Number(cartData.Price.slice(1)) * itemCount + ".00"}
                  </span>
                </span>
              </p>
              <button className="bg-orange-500 text-white font-bold p-2 w-full rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </p>
    </div>
  );
}

export default Cart;
