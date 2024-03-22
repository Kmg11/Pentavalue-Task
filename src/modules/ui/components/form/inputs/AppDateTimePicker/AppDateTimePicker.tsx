/**
 * A date-time picker component integrated with React Hook Form.
 * @module components
 * @component
 * @example
 * import { AppDateTimePicker } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AppDateTimePicker name="date" label="Select Date" form={form} />
 *   );
 * }
 */
import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
	LocalizationProvider,
	DateTimePicker,
	DateTimePickerProps,
} from "@mui/x-date-pickers";
import { FormControl, FormControlProps } from "@mui/material";
import { AppErrorMessage } from "../../misc";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface AppDatePickerProps<T extends FieldValues> {
	/**
	 * The name of the field in the form.
	 */
	name: Path<T>;
	/**
	 * The label for the date-time picker.
	 */
	label: string;
	/**
	 * The form object returned by useForm hook from react-hook-form.
	 */
	form: UseFormReturn<T>;

	/**
	 * Whether the component should take the full width of its container.
	 * @default true
	 */
	fullWidth?: boolean;
	/**
	 * Whether the field is required.
	 * @default true
	 */
	required?: boolean;

	/**
	 * Additional props for the FormControl component.
	 */
	formControlProps?: Omit<
		FormControlProps,
		"required" | "variant" | "fullWidth" | "error" | "size" | "autoFocus"
	>;
	/**
	 * Additional props for the DateTimePicker component from MUI X Date Pickers.
	 */
	datePickerProps?: Omit<
		DateTimePickerProps<Date>,
		"label" | "disableFuture" | "onChange" | "ref" | "value" | "slotProps"
	>;
}

/**
 * A date-time picker component integrated with React Hook Form.
 * @param {AppDatePickerProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the date-time picker.
 */
export const AppDateTimePicker = <FormValuesType extends FieldValues>({
	name,
	label,
	form,

	fullWidth = true,
	required = true,

	formControlProps,
	datePickerProps,
}: AppDatePickerProps<FormValuesType>): JSX.Element => {
	const { sx, ...restDatePickerProps } = datePickerProps || {};

	const hasError = form.formState.errors[name] ? true : false;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<FormControl
				fullWidth={fullWidth}
				required={required}
				variant="outlined"
				error={hasError}
				{...formControlProps}
			>
				<Controller
					name={name}
					control={form.control}
					render={({ field }) => (
						<DateTimePicker
							label={label}
							sx={{ width: "100%", ...sx }}
							{...field}
							value={new Date(field.value)}
							onChange={(date) => field.onChange(date)}
							{...restDatePickerProps}
						/>
					)}
				/>

				<AppErrorMessage
					id={`${name}-error`}
					name={name}
					errors={form.formState.errors}
				/>
			</FormControl>
		</LocalizationProvider>
	);
};
