import { UseFormProps, useForm } from "react-hook-form";
import { AppDateTimePicker, AppDatePickerProps } from "./AppDateTimePicker";
import { renderWithProviders } from "@/core/test";

type FormFieldValues = {
	date: string;
};

type MockAppDateTimePickerProps = {
	componentProps?: Omit<
		AppDatePickerProps<FormFieldValues>,
		"form" | "name" | "label"
	>;
	formOptions?: UseFormProps<FormFieldValues>;
};

const MockAppDateTimePicker = ({
	componentProps,
	formOptions,
}: MockAppDateTimePickerProps) => {
	const form = useForm<FormFieldValues>({
		defaultValues: {
			date: "2024-03-25T12:00",
		},
		...formOptions,
	});

	return (
		<AppDateTimePicker
			form={form}
			name="date"
			label="Select Date"
			{...componentProps}
		/>
	);
};

describe("AppDateTimePicker", () => {
	test("renders with default props", () => {
		const { getByLabelText } = renderWithProviders(<MockAppDateTimePicker />);

		const dateTimePicker = getByLabelText("Select Date");
		expect(dateTimePicker).toBeInTheDocument();
		expect(dateTimePicker.tagName).toBe("INPUT");
	});

	test("renders with custom props", () => {
		const { getByLabelText } = renderWithProviders(
			<MockAppDateTimePicker
				componentProps={{ fullWidth: false, required: false }}
			/>
		);

		const dateTimePicker = getByLabelText("Select Date");
		expect(dateTimePicker).toBeInTheDocument();
		expect(dateTimePicker.tagName).toBe("INPUT");
		expect(dateTimePicker).not.toHaveAttribute("required");
	});

	test("renders error message when there is an error", () => {
		const { getByText } = renderWithProviders(
			<MockAppDateTimePicker
				formOptions={{
					errors: { date: { type: "required", message: "Date is required" } },
				}}
			/>
		);

		const errorMessage = getByText("* Date is required");
		expect(errorMessage).toBeInTheDocument();
	});
});
