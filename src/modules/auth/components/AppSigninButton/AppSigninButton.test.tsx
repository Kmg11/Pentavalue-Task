import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "@/core/test/utils/test-util";
import { AppSigninButton } from "./AppSigninButton";

describe("AppSigninButton", () => {
	it("should sign in as admin when clicked", () => {
		const { getByText, store } = renderWithProviders(<AppSigninButton />);

		const signInButton = getByText("Sign in as admin");
		fireEvent.click(signInButton);

		expect(store.getState().auth.user).toEqual({
			id: "1",
			name: "Admin",
			role: "admin",
		});
	});
});
