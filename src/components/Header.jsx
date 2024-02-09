/* eslint-disable react/prop-types */

import logo from "/images/logo.svg";
import Avatar from "/images/image-avatar.png";
import CartIcon from "/images/icon-cart.svg";
import IconMenu from "/images/icon-menu.svg";
import closeIcon from "/images/icon-close.svg";
import { useState } from "react";
import Cart from "./Cart";

export default function Header({ itemCount, productData, cartAdd, AddtoCart }) {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);

  const ToggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header
        className="flex items-center justify-between lg:p-8 border-b border-slate-400 max-w-7xl mx-auto  xsm:p-4
      "
      >
        <div className="flex justify-start items-center gap-4">
          <img
            src={IconMenu}
            onClick={ToggleMenu}
            className="lg:hidden cursor-pointer"
            alt=""
          />
          <img src={logo} alt="" />
          <nav
            className={`xsm:${
              menu
                ? "flex-col left-0 w-1/2 top-0 bottom-0 fixed bg-white z-10"
                : " hidden "
            }  lg:inline-block`}
          >
            <ul
              className={`${
                menu
                  ? "flex-col justify-start text-start items-start ml-4 mt-4"
                  : "justify-start items-center"
              } flex  gap-4`}
            >
              <img
                src={closeIcon}
                alt=""
                className={`${
                  ToggleMenu ? "inline-block" : "hidden"
                } mb-4  lg:hidden`}
                onClick={() => {
                  setMenu(false);
                }}
              />
              <li className="sm:text-2xl lg:text-lg">Collections</li>
              <li className="sm:text-2xl lg:text-lg">Men</li>
              <li className="sm:text-2xl lg:text-lg">Women</li>
              <li className="sm:text-2xl lg:text-lg">About</li>
              <li className="sm:text-2xl lg:text-lg">Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex justify-start items-center gap-4">
            {cart ? (
              <Cart
                itemCount={itemCount}
                cartAdd={cartAdd}
                productData={productData}
              />
            ) : (
              ""
            )}
            <li>
              <button>
                <img
                  src={CartIcon}
                  alt=""
                  onClick={() => {
                    setCart(!cart);
                  }}
                />
              </button>
            </li>
            <li>
              <img src={Avatar} className="w-12" alt="" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
