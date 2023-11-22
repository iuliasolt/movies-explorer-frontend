import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import UsersNavigation from "../UsersNavigation/UsersNavigation";

const Header = ({ isLoggedIn }) => {
    return (
        <header className="header">
                <Link to="/" >
                    <img className="header__logo" alt="Логотип сайта" src={logo} />
                </Link>
                {!isLoggedIn && <Navigation />}
                {isLoggedIn && <UsersNavigation />}
                
        </header>
    );
};

export default Header;

