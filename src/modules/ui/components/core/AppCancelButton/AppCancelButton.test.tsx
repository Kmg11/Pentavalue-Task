import { AppCancelButton } from "./AppCancelButton";
import { renderWithProviders } from "@/core/test";

describe("AppCancelButton", () => {
	test("renders with default props", () => {
		const { getByRole } = renderWithProviders(
			<AppCancelButton>Cancel</AppCancelButton>
		);
		const cancelButton = getByRole("button", { name: /cancel/i });

		expect(cancelButton).toBeInTheDocument();
		expect(cancelButton).toHaveAttribute("type", "button");
	});
});
