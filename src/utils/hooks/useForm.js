import { useState } from "react";

export function useForm(inputValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { value, name, validationMessage } = event.target;
    const { valid } = event.target.validity;

    setValues({
        ...values,
        [name]: {
            value: value,
            isValid: valid,
            validationMessage: validationMessage,
        },
    });
  };
  return { values, handleChange, setValues };
}
