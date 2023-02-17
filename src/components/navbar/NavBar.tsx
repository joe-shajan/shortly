import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className=" bg-teal-800 py-6">
      <div className="md:w-9/12 mx-auto flex items-center justify-between ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span
            data-testid="logo"
            className="font-semibold text-xl tracking-tight"
          >
            Shortly
          </span>
        </div>
        <div className="w-full">
          <div className="text-sm flex justify-end md:justify-start items-center">
            <Link
              to={{ pathname: '/' }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              to={{ pathname: '/about' }}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
