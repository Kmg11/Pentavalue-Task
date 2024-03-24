export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./src/setupTests.ts"],
	resetMocks: false,
	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
};
