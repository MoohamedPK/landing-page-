import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const links = ["features", "workflow", "pricing", "testimonials"];
  const [mobileMenu, setMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-transparent text-white p-4 ">
      <div className="conatiner px-4 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img alt="" />
          <p>Logo Name </p>
        </div>

        <div className="links hidden lg:block">
          <ul className="flex justify-center items-center">
            {links.map((link) => (
              <li className="p-2 mx-3" key={link}>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <div className="sing-in mx-2">
            <button className="border border-white px-3 py-1 rounded-lg ">
              Sign In
            </button>
          </div>

          <div className="create-acc mx-2">
            <button className="border border-black px-3 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
              Create an account
            </button>
          </div>
        </div>

        <div className="lg:hidden flex justify-end items-center">
          <button onClick={toggleMobileMenu}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden flex flex-col justify-center items-center mt-4 w-full h-full bg-neutral-900 rounded-lg z-20">
          {links.map((link, index) => (
            <a className="px-2 py-1 my-2" key={index} href="#">
              {link}
            </a>
          ))}

          <div className="sing-in mx-2 my-2">
            <button className="border border-white px-3 py-1 rounded-lg ">
              Sign In
            </button>
          </div>

          <div className="create-acc mx-2 my-2">
            <button className="border border-black px-3 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800">
              Create an account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
