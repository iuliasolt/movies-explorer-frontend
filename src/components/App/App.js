import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../PageForm/Profile/Profile";
import Register from "../PageForm/Register/Register";
import Login from "../PageForm/Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import { HEADEREDPOINTS, FOOTEREDPOINTS } from "../../utils/config/config";
import * as mainApi from "../../utils/Api/MainApi";
import ProtectedRoute from "../ProtectedRoute/PtotectedRoute";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showHeader = HEADEREDPOINTS.some((item) => location.pathname === item);

  const showFooter = FOOTEREDPOINTS.some((item) => location.pathname === item);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isServerMessage, setIsServerMessage] = useState("");
  const [isServerMessageFull, setIsServerMessageFull] = useState("");
  const [isDisabledInput, setIsDisabledInput] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    isLoggedIn &&
      Promise.all([mainApi.getUserById(), mainApi.getSavedMovies()])
        .then(([data, movies]) => {
          setCurrentUser(data);
          setSavedMovies(movies.reverse());
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {});
  }, [isLoggedIn]);

  function onRegister(name, email, password) {
    setIsDisabledInput(true);
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          onLogin(email, password);
        }
      })
      .catch((e) => {
        setIsServerMessage(e.message);
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  };

 function onLogin (email, password) {
    setIsDisabledInput(true);
    mainApi
      .login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((e) => {
        setIsServerMessage(e.message);
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/", { replace: true });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate(location);
          }
        })
        .catch((e) => {
          handleSignOut();
          console.log(`Не удалось получить токен: ${e}`);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleUpdateProfile = ({ name, email }) => {
    setIsDisabledInput(true);
    mainApi
      .updateProfile({ name, email })
      .then(() => {
        setCurrentUser({ name, email });
        setIsServerMessageFull("Данные обновлены");
      })
      .catch((e) => {
        setIsServerMessage(e.message);
      })
      .finally(() => {
        setIsDisabledInput(false);
      });
  };

  const handleSavedMovies = (movieCard) => {
    mainApi
      .saveCardMovies(movieCard)
      .then((movieCard) => {
        setSavedMovies([movieCard, ...savedMovies]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDeleteMovie = (movie) => {
    if (!movie._id) {
      const movieDelete = savedMovies.find((m) => {
        return m.movieId === movie.id;
      });
      mainApi
        .deleteCard(movieDelete._id)
        .then(() => {
          setSavedMovies(
            savedMovies.filter((m) => {
              return m._id !== movieDelete._id;
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      mainApi
        .deleteCard(movie._id)
        .then(() => {
          setSavedMovies(
            savedMovies.filter((m) => {
              return m._id !== movie._id;
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          {showHeader && <Header isLoggedIn={isLoggedIn} />}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  onSaveMovie={handleSavedMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={onRegister}
                  isServerMessage={isServerMessage}
                  isDisabledInput={isDisabledInput}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onLogin={onLogin}
                  isServerMessage={isServerMessage}
                  isDisabledInput={isDisabledInput}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  handleSignOut={handleSignOut}
                  handleUpdateProfile={handleUpdateProfile}
                  isServerMessage={isServerMessage}
                  setIsServerMessage={setIsServerMessage}
                  isServerMessageFull={isServerMessageFull}
                  setIsServerMessageFull={setIsServerMessageFull}
                  isDisabledInput={isDisabledInput}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {showFooter && <Footer />}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
};

export default App;
