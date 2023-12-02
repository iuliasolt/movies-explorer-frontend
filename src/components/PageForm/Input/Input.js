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
  disabled,
  pattern,
}) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input__container ${validationMessage && 'input_invalid'}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        pattern={pattern}
        autoComplete="off"
      />
      <span className="input__error">{validationMessage}</span>
    </div>
  );
};

export default Input;
