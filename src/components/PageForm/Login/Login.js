import { useNavigate } from "react-router-dom";
import "./Login.css";
import Input from "../Input/Input";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import PageForm from "../PageForm";
import { useForm } from "../../../utils/hooks/useForm";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
  };

  const { values, handleChange } = useForm({
    email: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
    password: {
      isValid: '',
      validationMessage: '',
      value: '',
    },
  });
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
            value={values.email.value}
            onChange={handleChange}
            required={true}
            minLength="2"
            placeholder="E-mail"
            validationMessage={values.email.validationMessage}
          />
          <Input
            name="password"
            type="password"
            label="Пароль"
            value={values.password.value}
            onChange={handleChange}
            required={true}
            minLength="8"
            maxLength="30"
            placeholder="Введите пароль"
            validationMessage={values.password.validationMessage}
          />
          <span className="login__error">
            Вы ввели неправильный логин или пароль.
          </span>
        </div>
        </div>
        <ButtonSubmit
          title="Войти"
          disabled={values.email.isValid && values.password.isValid}
        />
      </PageForm>
      
    </main>
  );
};

export default Login;
