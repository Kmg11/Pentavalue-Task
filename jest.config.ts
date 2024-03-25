import { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./src/setupTests.ts"],
	testEnvironmentOptions: {
		customExportConditions: [""],
	},
	setupFiles: ["./jest.polyfills.ts"],
	resetMocks: false,
	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
};

export default config;
