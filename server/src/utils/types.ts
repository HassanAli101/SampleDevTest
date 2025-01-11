import { Request } from "express";

//user types:
export interface user {
    username: string;
    password: string;
}


//middleware types:
export interface ReqUser {
    username: string;
    LoggedIn: boolean;
}

export interface CustomRequest extends Request {
  user?: ReqUser; 
}

//Auth Service Types:

export interface LoginProps {
  username: string;
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
  pictureURLs: Array<string>;
  userName: string;
  userLoggedIn: boolean;
}
