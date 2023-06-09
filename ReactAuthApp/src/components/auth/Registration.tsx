import { ChangeEvent, FormEvent, useState } from "react";
import { getFormFieldsInitialState, FormFields } from "../../constants";
import axios from "axios";

interface Props {
  handleSuccessfulAuth: (data: {user:object}) => void
}

export default function Registration({handleSuccessfulAuth}: Props) {
  const [formFields, setFormFields] = useState<FormFields>(getFormFieldsInitialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const body = {
      user: {
        email: formFields.email,
        password: formFields.password,
        password_confirmation: formFields.password_confirmation,
      },
    };

    axios
      .post<{status: string, user: object}>("http://localhost:3001/registrations", body, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === "created"){
        handleSuccessfulAuth(response.data)
      }})
      .catch((error) => console.error("Registration error", error));
    event.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    } as {
      [item in keyof FormFields]: FormFields[item];
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formFields.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formFields.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password_confirmation"
        placeholder="Password Confirmation"
        value={formFields.password_confirmation}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
