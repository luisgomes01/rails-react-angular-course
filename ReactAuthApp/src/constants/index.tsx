export interface FormFields {
  email: string;
  password: string;
  password_confirmation: string;
  registrationErrors: string;
}

export interface AuthStatus {
  loggedInStatus: boolean;
  user: object;
}

export const getFormFieldsInitialState = (): FormFields => {
  return {
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  }
};

export const getAuthStatusInitialState = (): AuthStatus => {
  return {
    loggedInStatus: false,
    user: {},
  }
};
