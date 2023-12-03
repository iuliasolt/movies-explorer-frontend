import "./NavTab.css";

const NavTab = () => {

    return (
        <nav className="tab">
            <ul className="tab__items">
                <li className="tab__item">
                    <a className="link" href="#about-project">
                        О проекте
                    </a>
                </li>
                <li className="tab__item">
                    <a className="link" href="#technologies">
                        Технологии
                    </a>
                </li>
                <li className="tab__item">
                     <a className="link" href="#about-me">
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavTab;