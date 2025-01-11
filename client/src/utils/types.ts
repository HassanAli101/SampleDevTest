// for auth
export interface AuthState {
  email: string | null;
  LoggedIn: boolean | null;
  userToken: string | null;
  setUserStatus: (status: boolean) => void;
  setUserEmail: (email: string) => void;
  setUserToken: (token: string) => void;
  clearUser: () => void;
}
