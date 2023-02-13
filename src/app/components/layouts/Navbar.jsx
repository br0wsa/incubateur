import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

const Navbar = () => {
  const isLoggued = useSelector(selectIsLogged);

  return (
    <div className="absolute mx-auto w-full bg-white px-4 shadow-sm sm:px-6">
      <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div>
          <Link to={URL_HOME}>
            <img
              className="h-8 w-auto cursor-pointer sm:h-10"
              src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
              alt=""
              width={200}
              height={60}
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end lg:w-0">
          <div className="flex flex-col justify-center space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
            {isLoggued ? (
              <button className="btn btn-red">Sign Out</button>
            ) : (
              <>
                <Link to={URL_LOGIN}>
                  <div className="link">Sign in</div>
                </Link>
                <Link to={URL_REGISTER}>
                  <button className="btn btn-green">Sign up</button>
                </Link>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
