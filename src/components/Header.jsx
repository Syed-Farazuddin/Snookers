import logo from "/images/logo.svg";
import Avatar from "/images/image-avatar.png";
import CartIcon from "/images/icon-cart.svg";
import IconMenu from "/images/icon-menu.svg";

export default function Header() {
  return (
    <>
      <header
        // className="flex xsm:w-12/12 sm:justify-between mx-auto items-center xsm:p-4 lg:p-8 lg:border-b sm:max-w-7xl border-slate-400
        className="flex items-center justify-between lg:p-8 border-b border-slate-400 max-w-7xl mx-auto  xsm:p-4
      "
      >
        <div className="flex justify-start items-center gap-4">
          <img src={IconMenu} className="sm:hidden cursor-pointer" alt="" />
          <img src={logo} alt="" />
          <nav className="hidden lg:inline-block">
            <ul className="flex justify-start items-center gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className="flex justify-start items-center gap-4">
            <li>
              <button>
                <img src={CartIcon} alt="" />
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
