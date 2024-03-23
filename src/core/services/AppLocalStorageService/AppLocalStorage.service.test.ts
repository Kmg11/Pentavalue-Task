import { AppLocalStorageService } from "./AppLocalStorage.service";

describe("AppLocalStorageService", () => {
	beforeEach(() => {
		localStorage.clear(); // Clear local storage before each test
	});

	it("should set and get an item correctly", () => {
		const data = { key: "value" };
		AppLocalStorageService.setItem("testKey", data);
		const retrievedData = AppLocalStorageService.getItem("testKey");
		expect(retrievedData).toEqual(data);
	});

	it("should return null when getting non-existent item", () => {
		const retrievedData = AppLocalStorageService.getItem("nonExistentKey");
		expect(retrievedData).toBeNull();
	});

	it("should remove an item correctly", () => {
		const data = { key: "value" };
		AppLocalStorageService.setItem("testKey", data);
		AppLocalStorageService.removeItem("testKey");
		const retrievedData = AppLocalStorageService.getItem("testKey");
		expect(retrievedData).toBeNull();
	});

	it("should clear all items correctly", () => {
		AppLocalStorageService.setItem("key1", "value1");
		AppLocalStorageService.setItem("key2", "value2");
		AppLocalStorageService.clear();
		expect(localStorage.length).toBe(0);
	});

	it("should handle errors gracefully", () => {
		// Mocking localStorage.setItem to throw an error
		jest.spyOn(localStorage, "setItem").mockImplementation(() => {
			throw new Error("Mocked error");
		});

		// Expect no error to be thrown
		expect(() => {
			AppLocalStorageService.setItem("testKey", "value");
		}).not.toThrow();

		// Mocking localStorage.getItem to throw an error
		jest.spyOn(localStorage, "getItem").mockImplementation(() => {
			throw new Error("Mocked error");
		});

		// Expect null to be returned
		const retrievedData = AppLocalStorageService.getItem("testKey");
		expect(retrievedData).toBeNull();
	});
});
