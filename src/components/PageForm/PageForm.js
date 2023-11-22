import "./PageForm.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const PageForm = ({
  children,
  formName,
  title,
  underButtonText,
  onSubmit,
  link,
  linkName,
}) => {
  return (
    <section className="form">
      <div className="form__container">
        <Link to="/">
          <img className="form__logo" alt="Логотип" src={logo} />
        </Link>
        <h1 className="form__title">{title}</h1>
        <form
          className="form__forms"
          name={formName}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
        </form>
        <div className="form__link-container">
          <p className="form__text">{underButtonText}</p>
          <Link className="form__link" to={link}>
            {linkName}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageForm;
