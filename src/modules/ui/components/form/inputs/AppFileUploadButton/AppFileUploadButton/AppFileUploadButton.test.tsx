import { fireEvent } from "@testing-library/react";
import { AppFileUploadButton } from "./AppFileUploadButton";
import { renderWithProviders } from "@/core/test";

describe("AppFileUploadButton", () => {
	test("renders with default props", () => {
		const { getByText } = renderWithProviders(
			<AppFileUploadButton>Upload File</AppFileUploadButton>
		);

		const uploadButton = getByText("Upload File");
		expect(uploadButton).toBeInTheDocument();
	});

	test("calls onClick when button is clicked", () => {
		const onClick = jest.fn();
		const { getByText } = renderWithProviders(
			<AppFileUploadButton onClick={onClick}>Upload File</AppFileUploadButton>
		);

		const uploadButton = getByText("Upload File");
		fireEvent.click(uploadButton);

		expect(onClick).toHaveBeenCalled();
	});

	test("triggers file selection when button is clicked", () => {
		const { getByText, getByTestId } = renderWithProviders(
			<AppFileUploadButton>Upload File</AppFileUploadButton>
		);

		const uploadButton = getByText("Upload File");
		fireEvent.click(uploadButton);

		const fileInput = getByTestId("file-upload-input");
		expect(fileInput).toHaveAttribute("type", "file");
	});

	test("calls onChange when file is selected", () => {
		const onChange = jest.fn();
		const { getByText, getByTestId } = renderWithProviders(
			<AppFileUploadButton inputProps={{ onChange }}>
				Upload File
			</AppFileUploadButton>
		);

		const uploadButton = getByText("Upload File");
		fireEvent.click(uploadButton);

		const fileInput = getByTestId("file-upload-input");
		fireEvent.change(fileInput, {
			target: { files: [new File([""], "test.png", { type: "image/png" })] },
		});

		expect(onChange).toHaveBeenCalled();
	});
});
