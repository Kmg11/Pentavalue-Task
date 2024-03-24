import { render } from "@testing-library/react";
import { AppCancelButton } from "./AppCancelButton";

describe("AppCancelButton", () => {
	test("renders with default props", () => {
		const { getByRole } = render(<AppCancelButton>Cancel</AppCancelButton>);
		const cancelButton = getByRole("button", { name: /cancel/i });

		expect(cancelButton).toBeInTheDocument();
		expect(cancelButton).toHaveAttribute("type", "button");
	});
});
