import "./BurgerMenu.css";
import { NavLink, Link } from "react-router-dom";

const BurgerMenu = ({ isBurgerOpen, setIsBurgerOpen }) => {
  const handleClickClose = () => {
    setIsBurgerOpen(false);
  };
  const getLink = (isActive) => {
    return isActive
      ? "burger-menu__link burger-menu__link_active"
      : "burger-menu__link";
  };
  return (
    <nav className={`burger-menu ${isBurgerOpen && "burger-menu_active"}`}>
      <button
        className="burger-menu__button-close"
        type="button"
        onClick={handleClickClose}
      />
      <ul className="burger-menu__link-items">
        <li className="burger-menu__link-items-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLink(isActive)}
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li className="burger-menu__link-items-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLink(isActive)}
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="burger-menu__link-items-item">
          <NavLink
            onClick={handleClickClose}
            className={({ isActive }) => getLink(isActive)}
            to="/saved-movies"
          >
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="burger-menu__link-items-item">
          <Link
            onClick={handleClickClose}
            className="burger-menu__profile-btn"
            to="/profile"
          >
            Аккаунт
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
