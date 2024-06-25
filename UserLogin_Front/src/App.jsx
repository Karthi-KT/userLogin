import { useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
    <div className={theme}>
      <NavBar shouldDisplay={navBar} />
    </div>
  );
};

export default App;
