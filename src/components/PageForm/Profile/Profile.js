import "./Profile.css";
import { useForm } from "../../../utils/hooks/useForm";
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    name: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
    email: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__name">{`Привет, ${`Юлия`}!`}</h1>
        <form
          className="profile__form"
          name="profile-form"
          onSubmit={(evt) => evt.preventDefault()}
          noValidate
        >
          <label className="profile__input-label">
            Имя
            <input
              className={`profile__input ${
                values.name.validationMessage && "profile__input_error"
              }`}
              type="text"
              name="name"
              value={values.name.value}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required     
              />
            <span className="profile__input-error">
              {values.name.validationMessage}
            </span>
          </label>
          <label className="profile__input-label">
            E-mail
            <input
              className={`profile__input ${
                values.email.validationMessage && "profile__input_error"
              }`}
              type="email"
              name="email"
              value={values.email.value}
              onChange={handleChange}
              required
            />
            <span className="profile__input-error">
              {values.email.validationMessage}
            </span>
          </label>
          <div className="profile__button">
            <span className="profile__error">
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className={`profile__button-edit ${
                values.email.isValid && values.name.isValid
                  ? ''
                  : "profile__button-edit_disabled"
              }`}
              type="submit"
              disabled={
                values.email.isValid && values.name.isValid ? false : true
              }
            >
              Редактировать
            </button>
          </div>
        </form>
        <button
          className="profile__button-logout"
          type="button"
          onClick={handleLogout}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
};

export default Profile;
