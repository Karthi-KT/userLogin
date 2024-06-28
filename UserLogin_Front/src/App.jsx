import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Updates from "./Components/Updates";
import Registration from "./Components/Registration";
import Dashboard from "./Components/DashBoard";

const App = () => {
  const location = useLocation();
  const [navBar, setNavBar] = useState(true);

  useEffect(() => {
    const path = location.pathname;
    setNavBar(path !== "/login");
  }, [location]);

  const theme = useSelector((state) => state.theme.mode);
  // const isAuthenticated = useSelector(
  //   (state) => state.login?.isAuthenticated ?? false
  // );
  return (
    <>
      <div className={theme === "dark" ? "dark" : ""}>
        <div
          className={`min-h-screen bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text`}
        >
          <NavBar shouldDisplay={navBar} />
          <div className={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Registration/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
