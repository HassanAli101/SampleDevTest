import { user } from "./types";
import path from "path";

//environment:
export const envPath = path.resolve(__dirname, "../../.env.local");

// populating users
export const users: user[] = [
  { username: "Faraz@RhodiumTech.com", password: "123456abc" },
];
