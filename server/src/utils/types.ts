import { Request } from "express";

//user types:
export interface user {
  email: string;
  password: string;
}

//middleware types:
export interface ReqUser {
  email: string;
  LoggedIn: boolean;
}

export interface CustomRequest extends Request {
  user?: ReqUser;
}

//Auth Service Types:

export interface LoginProps {
  email: string;
  password: string;
}

export interface VerifyProps {
  token: string;
}

//Vehicle Service Types:
export interface AddVehicleToDBProps {
  carModel: string;
  price: number;
  phoneNumber: number;
  numPictures: number;
  pictureUrls: Array<string>;
  email: string;
  userLoggedIn: boolean;
}
