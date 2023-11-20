import { useState } from "react";
import "./UsersNavigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ButtonBurger from "../ButtonBurger/ButtonBurger";
import { Link, NavLink } from "react-router-dom";

const UsersNavigation = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const getLink = (isActive) => {
    return isActive
      ? "navigation-menu__link navigation-menu__link_active"
      : "navigation-menu__link";
  };
  return (
    <>
      <ul className="navigation-menu">
        <li className="navigation-menu__link-items-item">
          <NavLink to="/movies" className={({ isActive }) => getLink(isActive)}>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation-menu__link-items-item">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => getLink(isActive)}
          >
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>

      <Link to="/profile" className="header__navigation-menu-btn">
        Аккаунт
      </Link>
      <ButtonBurger setIsBurgerOpen={setIsBurgerOpen} />
      <BurgerMenu
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
    </>
  );
};

export default UsersNavigation;
