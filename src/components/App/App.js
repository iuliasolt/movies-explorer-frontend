import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../PageForm/Profile/Profile";
import Register from "../PageForm/Register/Register";
import Login from "../PageForm/Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import { headerEdpoints, footerEdpoints } from "../../utils/config/config";

const App = () => {
  /*const [currentUser, setCurrentUser] = useState({});*/

  const location = useLocation();

  const showHeader = headerEdpoints.some((item) => location.pathname === item);

  const showFooter = footerEdpoints.some((item) => location.pathname === item);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="page">
      <div className="page__content">
        {showHeader && <Header isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/signin"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/profile"
            element={<Profile setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;
