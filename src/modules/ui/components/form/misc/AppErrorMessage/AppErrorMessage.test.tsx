import { AppErrorMessage } from "./AppErrorMessage";
import { FieldErrors } from "react-hook-form";
import { renderWithProviders } from "@/core/test";

describe("AppErrorMessage", () => {
	test("renders with error message when error exists", () => {
		const errors: FieldErrors<{ firstName: string }> = {
			firstName: {
				type: "required",
				message: "This field is required",
			},
		};

		const { getByText } = renderWithProviders(
			<AppErrorMessage id="fieldId" name="firstName" errors={errors} />
		);

		const errorMessage = getByText("* This field is required");
		expect(errorMessage).toBeInTheDocument();
	});

	test("renders nothing when no error exists", () => {
		const errors = {};
		const { container } = renderWithProviders(
			<AppErrorMessage id="fieldId" name="fieldName" errors={errors} />
		);

		expect(container.firstChild).toBeNull();
	});

	test("renders with custom props", () => {
		const errors: FieldErrors<{ firstName: string }> = {
			firstName: {
				type: "required",
				message: "This field is required",
			},
		};

		const { getByText } = renderWithProviders(
			<AppErrorMessage
				id="fieldId"
				name="firstName"
				errors={errors}
				testProps={{ sx: { fontSize: 12 } }}
			/>
		);

		const errorMessage = getByText("* This field is required");
		expect(errorMessage).toHaveStyle("font-size: 12px");
	});
});
