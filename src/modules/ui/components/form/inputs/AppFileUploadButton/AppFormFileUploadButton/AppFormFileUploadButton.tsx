/**
 * A form file upload button component integrated with React Hook Form.
 * @module components
 * @component
 * @example
 * import { useForm } from "react-hook-form";
 * import { AppFormFileUploadButton } from "@/components";
 *
 * const MyComponent = () => {
 *   const { control, formState } = useForm();
 *
 *   return (
 *     <AppFormFileUploadButton
 *       form={{ control, formState }}
 *       name="file"
 *       inputProps={{ accept: "image/*" }}
 *     >
 *       Upload Image
 *     </AppFormFileUploadButton>
 *   );
 * }
 */
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
	AppFileUploadButton,
	AppFileUploadButtonProps,
} from "../AppFileUploadButton";
import { Box } from "@mui/material";
import { AppErrorMessage } from "../../../misc";

/**
 * Props for the AppFormFileUploadButton component.
 */
export type AppFormFileUploadButtonProps<T extends FieldValues> = Omit<
	AppFileUploadButtonProps,
	"form"
> & {
	/**
	 * The form control and form state from React Hook Form.
	 */
	form: UseFormReturn<T>;
	/**
	 * The name of the field in the form.
	 */
	name: Path<T>;
};

/**
 * A form file upload button component integrated with React Hook Form.
 * @param {AppFormFileUploadButtonProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the form file upload button.
 */
export function AppFormFileUploadButton<T extends FieldValues>({
	form,
	name,
	...props
}: AppFormFileUploadButtonProps<T>): JSX.Element {
	return (
		<Box>
			<AppFileUploadButton
				{...props}
				inputProps={{
					...props.inputProps,
					...form.register(name),
				}}
			/>

			<AppErrorMessage
				name={name}
				errors={form.formState.errors}
				id={`${name}-error`}
			/>
		</Box>
	);
}
