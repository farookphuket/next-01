import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import Image from "next/image";
const Nav = () => {
  const { logout, user, userRootUrl } = useAuth();
  const [isShowDropdown, setIsDropdownOpen] = useState(true);

  if (user?.name || user?.name !== undefined) {
    console.log(user.name);
  }

  const title = process.env.NEXT_PUBLIC_APP_TITLE;
  const toggle = () => {
    if (isShowDropdown === true) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  };
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <a className="flex items-center">
            <Image width={32} height={32} alt="the icon" src={"/logo.svg"} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {title}
            </span>
          </a>
        </Link>
        <button
          onClick={toggle}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isShowDropdown ? "hidden" : "block"
          } w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {user?.id ? (
              <>
                <li>
                  <Link href="/member">
                    <a
                      className="block md:hover:bg-blue-600 hover:text-white py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    onClick={logout}
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                {/*
START GUEST SECTION
        */}
                <li>
                  <Link href="/">
                    <a
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Login
                    </a>
                  </Link>
                </li>
                {/*
END OF GUEST SECTION
        */}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
