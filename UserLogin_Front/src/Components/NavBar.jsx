import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";
import { logout } from "../Redux/loginSlice";
import LoginForm from "./LoginForm"; // Importing LoginForm
import PropTypes from "prop-types";

const NavBar = ({ shouldDisplay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode);
  const isAuthenticated = useSelector(
    (state) => state.login?.isAuthenticated ?? false
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // State for login form visibility

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
    setLoginOpen(true); // Open login form
  };

  const handleCloseLogin = () => {
    setLoginOpen(false); // Close login form
  };

  return (
    <>
      {shouldDisplay && (
        <nav className="font-Title text-lg sticky top-0 w-full z-50 p-2">
          <div className="flex justify-between items-center px-4">
            <button className="text-xl md:hidden" onClick={toggleMenuOpen}>
              <FaBars />
            </button>
            <button>CompanyLogo</button>
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

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg">
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
      {/* Render LoginForm if loginOpen is true */}
      {loginOpen && <LoginForm onClose={handleCloseLogin} />}
    </>
  );
};

NavBar.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
};

export default NavBar;
