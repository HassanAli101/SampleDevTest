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

//for vehicle form
export interface LoginFormProps {
  onSubmit: (data: {
    carModel: string;
    price: number;
    phoneNumber: number;
    maxPictures: number;
    pictures: File[];
  }) => void;
  customError?: string;
}

export interface PicturesFieldProps {
  maxPictures: number;
  onPicturesChange: (pictures: File[]) => void;
}

export interface ImagePreviewProps {
  pictures: File[];
  onRemovePicture: (index: number) => void;
}
