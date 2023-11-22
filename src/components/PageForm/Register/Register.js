import "./Register.css";
import Input from "../Input/Input";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import PageForm from "../PageForm";
import { useForm } from "../../../utils/hooks/useForm";

const Register = () => {
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
        password: {
            isValid: '',
            validationMessage: '',
            value: '',
        }
    });

    return (
        <main className="content">
            <PageForm
            title="Добро пожаловать!"
            formName="register"
            underButtonText="Уже зарегистрированы?"
            link="/signin"
            linkName="Войти"
            >
                <div className="register__container">
                    <Input
                    name="name"
                    type="text"
                    label="Имя"
                    value={values.name.value}
                    onChange={handleChange}
                    required={true}
                    minLength="2"
                    maxLength="30"
                    placeholder="Имя"
                    validationMessage={values.name.validationMessage}
                    />
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
                    <span className="register__error">
                        Пользователь с таким email уже существует.
                    </span>
                </div>
                <ButtonSubmit 
                title="Зарегистрироваться"
                disabled={
                    values.name.isValid && values.email.isValid &&  values.password.isValid
                }
                />
                </PageForm>

        </main>
    );
}

export default Register;