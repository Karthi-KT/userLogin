import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";
import { logout } from "../Redux/loginSlice";
import LoginForm from "./LoginForm";
import PropTypes from "prop-types";

const NavBar = ({ shouldDisplay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode);
  const isAuthenticated = useSelector(
    (state) => state.login?.isAuthenticated ?? false
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setLoginOpen(false);
  };

  return (
    <>
      {shouldDisplay && (
        <nav className="font-Title h-4rem text-lg sticky top-0 w-full z-50 p-2 shadow-md border-b-1">
          <div
            className={`flex justify-between items-center px-4 py-4 bg-${theme}.background text-${theme}.text`}
          >
            <button className="text-xl md:hidden" onClick={toggleMenuOpen}>
              <FaBars />
            </button>
            <Link to="/">
              {" "}
              <button>CompanyLogo</button>
            </Link>

            <div className="hidden md:flex space-x-6">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard">
                    <button>Dashboard</button>
                  </Link>
                  <Link to="/practice">
                    <button>Practice</button>
                  </Link>
                  <Link to="/analysis">
                    <button>Analysis</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/about">
                    <button>About Us</button>
                  </Link>
                  <Link to="/updates">
                    <button>Updates</button>
                  </Link>
                  <Link to="/contact">
                    <button>Contact Us</button>
                  </Link>
                </>
              )}
            </div>
            <div className="flex space-x-4">
              {isAuthenticated ? (
                <button onClick={handleLogout} className="">
                  Logout
                </button>
              ) : (
                <button onClick={handleLoginClick} className="">
                  Login
                </button>
              )}
              <button onClick={handleToggleTheme} className="text-2xl">
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              className={`md:hidden flex flex-col space-y-4 p-4 bg-${theme}.background text-${theme}.text shadow-lg`}
            >
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" onClick={toggleMenuOpen}>
                    <button>Dashboard</button>
                  </Link>
                  <Link to="/practice" onClick={toggleMenuOpen}>
                    <button>Practice</button>
                  </Link>
                  <Link to="/analysis" onClick={toggleMenuOpen}>
                    <button>Analysis</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/about" onClick={toggleMenuOpen}>
                    <button>About Us</button>
                  </Link>
                  <Link to="/updates" onClick={toggleMenuOpen}>
                    <button>Updates</button>
                  </Link>
                  <Link to="/contact" onClick={toggleMenuOpen}>
                    <button>Contact Us</button>
                  </Link>
                </>
              )}
            </div>
          )}
        </nav>
      )}
      {loginOpen && <LoginForm onClose={handleCloseLogin} />}
    </>
  );
};

NavBar.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
};

export default NavBar;
