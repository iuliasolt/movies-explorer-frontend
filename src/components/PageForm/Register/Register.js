import "./Register.css";
import Input from "../Input/Input";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import PageForm from "../PageForm";
import useForm  from "../../../utils/hooks/useForm";

const Register = ({ handleRegister, isServerMessage, isDisabledInput }) => {
  const { values, handleChange, errors, isValid } = useForm();

  const onSubmit = (evt) => {
    evt.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <main className="content">
      <PageForm
        title="Добро пожаловать!"
        formName="register"
        underButtonText="Уже зарегистрированы?"
        link="/signin"
        linkName="Войти"
        onSubmit={onSubmit}
      >
        <div className="register">
          <Input
            name="name"
            type="text"
            label="Имя"
            value={values.name || ""}
            onChange={handleChange}
            required={true}
            minLength="2"
            maxLength="30"
            placeholder="Имя"
            validationMessage={errors.name}
            disabled={isDisabledInput}
          />
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
          <span className="register__error">{isServerMessage}</span>
        </div>
        <ButtonSubmit title="Зарегистрироваться" disabled={isValid} />
      </PageForm>
    </main>
  );
};

export default Register;
