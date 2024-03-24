import { render, fireEvent } from "@testing-library/react";
import { useForm, UseFormProps } from "react-hook-form";
import { AppFormFileUploadButton } from "./AppFormFileUploadButton";

type MockAppFormFileUploadButtonProps = {
	formOptions?: UseFormProps;
};

export const MockAppFormFileUploadButton = ({
	formOptions,
}: MockAppFormFileUploadButtonProps) => {
	const form = useForm(formOptions);

	return (
		<AppFormFileUploadButton form={form} name="file">
			Upload Image
		</AppFormFileUploadButton>
	);
};

describe("AppFormFileUploadButton", () => {
	test("renders with default props", () => {
		const { getByText } = render(<MockAppFormFileUploadButton />);

		const uploadButton = getByText("Upload Image");
		expect(uploadButton).toBeInTheDocument();
	});

	test("renders error message when file is not uploaded", () => {
		const { getByText } = render(
			<MockAppFormFileUploadButton
				formOptions={{
					errors: {
						file: { type: "required", message: "This field is required" },
					},
				}}
			/>
		);

		fireEvent.click(getByText("Upload Image"));

		const errorMessage = getByText(/This field is required/);
		expect(errorMessage).toBeInTheDocument();
	});
});
