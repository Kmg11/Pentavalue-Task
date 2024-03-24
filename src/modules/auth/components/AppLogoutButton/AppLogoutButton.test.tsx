import { fireEvent } from "@testing-library/react";
import { renderWithProviders } from "@/core/test/utils/test-util";
import { AppLogoutButton } from "./AppLogoutButton";
import { authActions } from "@/core/store";
import { IUser } from "../../types";

describe("AppLogoutButton", () => {
	it("should call the signOut function when clicked", () => {
		const { getByRole, store } = renderWithProviders(<AppLogoutButton />);

		const user: IUser = { id: "1", name: "Admin", role: "admin" };

		store.dispatch(authActions.login(user));

		expect(store.getState().auth.user).toEqual(user);

		const button = getByRole("button", { name: /logout/i });
		fireEvent.click(button);

		expect(store.getState().auth.user).toBeNull();
	});
});
