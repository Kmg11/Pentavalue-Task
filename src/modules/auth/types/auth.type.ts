import { IUser } from "./user.type";

export interface IAuth {
	isAuthenticated: boolean;
	user: IUser | null;
}
