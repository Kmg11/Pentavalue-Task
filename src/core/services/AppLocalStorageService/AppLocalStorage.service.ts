/**
 * Service class for interacting with browser's local storage.
 * @module services
 * @example
 * import { AppLocalStorageService } from "@/services";
 *
 * // Retrieve an item from local storage
 * const item = AppLocalStorageService.getItem("key");
 *
 * // Save an item to local storage
 * const data = { key: "value" };
 * AppLocalStorageService.setItem("key", data);
 *
 * // Remove an item from local storage
 * AppLocalStorageService.removeItem("key");
 *
 * // Clear all items from local storage
 * AppLocalStorageService.clear();
 */
export class AppLocalStorageService {
	/**
	 * Retrieves an item from local storage.
	 * @param {string} key - The key of the item to retrieve.
	 * @returns {T | null} The retrieved item, or null if not found.
	 */
	static getItem = <T>(key: string): T | null => {
		if (typeof window === "undefined") return null;

		try {
			const item = localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : null;
		} catch (error) {
			console.error(`LOCAL STORAGE GET ERROR: ${key}`, error);
			return null;
		}
	};

	/**
	 * Saves an item to local storage.
	 * @param {string} key - The key under which to save the item.
	 * @param {T} value - The value of the item to save.
	 */
	static setItem = <T>(key: string, value: T): void => {
		if (typeof window === "undefined") return;

		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.error(`LOCAL STORAGE SET ERROR: ${key}`, error);
		}
	};

	/**
	 * Removes an item from local storage.
	 * @param {string} key - The key of the item to remove.
	 */
	static removeItem = (key: string): void => {
		if (typeof window === "undefined") return;

		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error(`LOCAL STORAGE REMOVE ERROR: ${key}`, error);
		}
	};

	/**
	 * Clears all items from local storage.
	 */
	static clear = (): void => {
		if (typeof window === "undefined") return;

		try {
			localStorage.clear();
		} catch (error) {
			console.error("LOCAL STORAGE CLEAR ERROR", error);
		}
	};
}
