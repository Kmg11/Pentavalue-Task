/**
 * A component to display an error message for a form field.
 * @module components
 * @component
 * @example
 * import { AppErrorMessage } from "@/components";
 *
 * const MyComponent = () => {
 *   const errors = useFormState().errors;
 *
 *   return (
 *     <AppErrorMessage id="fieldId" name="fieldName" errors={errors} />
 *   );
 * }
 */
import { FormHelperText, FormHelperTextProps } from "@mui/material";
import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { red } from "@mui/material/colors";

/**
 * Props for the AppErrorMessage component.
 */
export type AppErrorMessageProps<FormValuesType extends FieldValues> = {
	/**
	 * The ID for the error message element, used for accessibility.
	 */
	id: string;
	/**
	 * The name of the form field associated with the error message.
	 */
	name: Path<FormValuesType>;
	/**
	 * The errors object from React Hook Form.
	 */
	errors: FieldErrors<FormValuesType>;
	/**
	 * Additional props to pass to the FormHelperText component.
	 */
	testProps?: Omit<FormHelperTextProps, "variant" | "id">;
};

/**
 * A component to display an error message for a form field.
 * @param {AppErrorMessageProps} props - The props of the component.
 * @returns {JSX.Element | null} A React component representing the error message, or null if no error exists.
 */
export const AppErrorMessage = <FormValuesType extends FieldValues>({
	id,
	name,
	errors,
	testProps,
}: AppErrorMessageProps<FormValuesType>): JSX.Element | null => {
	const { sx, ...restTextProps } = testProps || {};

	const hasError = errors[name] ? true : false;

	return hasError ? (
		<FormHelperText
			variant="outlined"
			id={`${id}-error-text`}
			sx={{ mt: 1, color: red[600], ...sx }}
			{...restTextProps}
		>
			<>* {errors?.[name]?.message}</>
		</FormHelperText>
	) : null;
};
