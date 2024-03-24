/**
 * A button component for file upload with a visually hidden input element.
 * @module components
 * @component
 * @example
 * import { AppFileUploadButton } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AppFileUploadButton inputProps={{ accept: "image/*" }}>
 *       Upload Image
 *     </AppFileUploadButton>
 *   );
 * }
 */
import { CloudUpload } from "@mui/icons-material";
import { Button, ButtonProps, styled } from "@mui/material";

/**
 * A visually hidden input element for file selection.
 */
const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

/**
 * Props for the AppFileUploadButton component.
 */
export type AppFileUploadButtonProps = ButtonProps & {
	/**
	 * Additional props for the input element.
	 */
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

/**
 * A button component for file upload with a visually hidden input element.
 * @param {AppFileUploadButtonProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the file upload button.
 */
export function AppFileUploadButton({
	inputProps,
	children,
	...props
}: AppFileUploadButtonProps): JSX.Element {
	return (
		<Button
			component="label"
			role={undefined}
			variant="outlined"
			color="warning"
			tabIndex={-1}
			startIcon={<CloudUpload />}
			{...props}
		>
			{children}
			<VisuallyHiddenInput
				type="file"
				data-testid="file-upload-input"
				{...inputProps}
			/>
		</Button>
	);
}
