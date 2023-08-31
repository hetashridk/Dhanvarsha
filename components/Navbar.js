import Image from "next/image";
import dhanvarsha_logo from "../public/images/dhanvarsha_logo.png";
import hamburger from "../public/images/hamburger.png";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function handleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <>
      <div className="flex">
        <div className="p-[21px]">
          <Image src={dhanvarsha_logo} width={150} height={150} alt="logo" />
        </div>
        <div className="my-10 relative left-20">
          <button
            type="button"
            className="block ml-10 lg:hidden"
            onClick={handleNavbar}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {navbar && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!navbar && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          <ul className={`lg:flex ${navbar ? "block" : "hidden"} flex flex-col justify-center items-center`}>
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Offerings</li>
            <li className="">Resources</li>
            <li className="">Tools</li>
          </ul>
        </div>
      </div>
      <div>
        <h1>Hetashri</h1>
      </div>
    </>
  );
}

export default Navbar;
