import "./Profile.css";
import useForm from "../../../utils/hooks/useForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const Profile = ({
  handleLogout,
  handleUpdateProfile,
  isServerMessage,
  setIsServerMessage,
  isServerMessageFull,
  setIsServerMessageFull,
  isDisabledInput,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDisable, setIsDisabled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { name, email } = useContext(CurrentUserContext);
  const { values, setValues, handleChange, errors, isValid } = useForm();

  useEffect(() => {
    setValues({
      name: name,
      email: email,
    });
  }, [name, email, setValues]);

  useEffect(() => {
    if (name !== values.name || email !== values.email) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, email, values.name, values.email]);

  const changeVisible = () => {
    setIsVisible(true);
    setIsServerMessage("");
    setIsServerMessageFull("");
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProfile({
      name: values.name,
      email: values.email,
    });
    setIsEdit(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsEdit(false);
      setIsServerMessage("");
      setIsServerMessageFull("");
    }, 4000);
  };

  return (
    <main className="content">
      <section className="profile">
        <h1 className="profile__name">{`Привет, ${name}!`}</h1>
        <form
          className="profile__form"
          name="profile-form"
          onSubmit={onSubmit}
          noValidate
        >
          <label className="profile__input-label">
            Имя
            <input
              className={`profile__input ${
                errors.name && "profile__input_error"
              }`}
              type="text"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
              disabled={(isVisible ? false : true) || isDisabledInput || isEdit}
            />
            <span className="profile__input-error">{errors.name}</span>
          </label>
          <label className="profile__input-label">
            E-mail
            <input
              className={`profile__input ${
                errors.email && "profile__input_error"
              }`}
              type="email"
              name="email"
              pattern="^\S+@\S+\.\S+$"
              value={values.email || ""}
              onChange={handleChange}
              required
              disabled={(isVisible ? false : true) || isDisabledInput || isEdit}
            />
            <span className="profile__input-error">{errors.email}</span>
          </label>
          <div className="profile__button">
            {isVisible ? (
              <>
                {
                  <span
                    className={`profile__error ${
                      isServerMessageFull && "profile__full"
                    }`}
                  >
                    {isServerMessage || isServerMessageFull}
                  </span>
                }
                <button
                  className={`profile__button-save ${
                    !isValid || !isDisable
                      ? "profile__button-save_disabled"
                      : ""
                  }`}
                  type="submit"
                  onClick={changeVisible}
                  disabled={!isValid || !isDisable}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  className="profile__button-edit"
                  type="button"
                  onClick={changeVisible}
                >
                  Редактировать
                </button>
                <button
                  className="profile__button-logout"
                  type="button"
                  onClick={handleLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
