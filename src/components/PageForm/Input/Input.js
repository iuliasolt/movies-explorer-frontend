import "./Input.css";

const Input = ({
  name,
  type,
  value,
  required,
  label,
  onChange,
  validationMessage,
  minLength,
  maxLength,
  placeholder,
}) => {
  return (
    <div className="input__container">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input &{validationMessage && 'input_invalid'}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      <span className="input__error">{validationMessage}</span>
    </div>
  );
};

export default Input;
