export interface LoginState {
  user: {
    email: string;
    password: string;
  };
  isLoading: boolean;
}

export interface LoginPayload {
  email?: string;
  password?: string;
}
