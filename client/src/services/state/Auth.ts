import { create } from "zustand";
import { AuthState } from "../../utils/types";

const useAuthStore = create<AuthState>((set) => ({
  email: null,
  LoggedIn: null,
  userToken: null,
  setUserStatus: (status: boolean) => set({ LoggedIn: status }),
  setUserEmail: (email: string) => set({ email: email }),
  setUserToken: (Token: string) => set({ userToken: Token }),
  clearUser: () => set({ LoggedIn: null, email: null, userToken: null }),
}));

export default useAuthStore;
