import "./Login.css";
import Input from "../Input/Input";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import PageForm from "../PageForm";
import useForm  from "../../../utils/hooks/useForm";

const Login = ({ onLogin, isServerMessage, isDisabledInput }) => {
  const { values, handleChange, errors, isValid } = useForm();
  const onSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values.email, values.password);
  };

  return (
    <main className="content">
      <PageForm
        title="Рады видеть!"
        formName="login"
        underButtonText="Еще не зарегистрированы?"
        link="/signup"
        linkName="Регистрация"
        onSubmit={onSubmit}
      >
        <div className="login">
          <div className="login__container">
            <Input
              name="email"
              type="email"
              label="E-mail"
              value={values.email || ""}
              pattern="^\S+@\S+\.\S+$"
              onChange={handleChange}
              required={true}
              minLength="2"
              placeholder="E-mail"
              validationMessage={errors.email}
              disabled={isDisabledInput}
            />
            <Input
              name="password"
              type="password"
              label="Пароль"
              value={values.password || ""}
              onChange={handleChange}
              required={true}
              minLength="8"
              maxLength="30"
              placeholder="Введите пароль"
              validationMessage={errors.password}
              disabled={isDisabledInput}
            />
            <span className="login__error">{isServerMessage}</span>
          </div>
        </div>
        <ButtonSubmit title="Войти" disabled={isValid} />
      </PageForm>
    </main>
  );
};

export default Login;
