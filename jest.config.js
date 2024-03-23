export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./src/setupTests.ts"],
	resetMocks: false,
};
