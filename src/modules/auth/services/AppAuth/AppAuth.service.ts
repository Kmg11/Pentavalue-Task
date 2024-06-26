/**
 * Service class for managing authentication related operations.
 * @module services
 */
import { AppLocalStorageService } from "@/core/services";
import { IAuth, IUser } from "../../types";

/**
 * Key for storing authentication data in local storage.
 */
export const APP_AUTH_KEY = "auth";

/**
 * Interface representing authentication data stored in local storage.
 */
export interface ILSAuth extends IAuth {}

/**
 * Service class for managing authentication related operations.
 */
export class AppAuthService {
	/**
	 * Retrieves authentication data from local storage.
	 * @returns {ILSAuth | null} The authentication data, or null if not found.
	 */
	static getAuth = (): ILSAuth | null => {
		return AppLocalStorageService.getItem<ILSAuth>(APP_AUTH_KEY) || null;
	};

	/**
	 * Saves authentication data to local storage.
	 * @param {IUser} user - The user object to be saved.
	 */
	static saveAuth = (user: IUser): void => {
		AppLocalStorageService.setItem<ILSAuth>(APP_AUTH_KEY, {
			isAuthenticated: true,
			user,
		});
	};

	/**
	 * Removes authentication data from local storage.
	 */
	static removeAuth = (): void => {
		AppLocalStorageService.removeItem(APP_AUTH_KEY);
	};
}
