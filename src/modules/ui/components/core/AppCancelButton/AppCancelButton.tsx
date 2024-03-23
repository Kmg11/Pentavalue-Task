import { Button, ButtonProps, useTheme } from "@mui/material";

/**
 * Props for the AppCancelButton component.
 */
type AppCancelButtonProps = ButtonProps;

/**
 * A cancel button component with customized styles.
 * @param {AppCancelButtonProps} props - The props for the component.
 * @returns {JSX.Element} A cancel button.
 */
export function AppCancelButton({
	sx,
	...props
}: AppCancelButtonProps): JSX.Element {
	const theme = useTheme();

	return (
		<Button
			type="button"
			variant="contained"
			sx={{
				backgroundColor: theme.palette.grey[800],
				":active": { backgroundColor: theme.palette.grey[700] },
				":hover": { backgroundColor: theme.palette.grey[700] },
				...sx,
			}}
			{...props}
		/>
	);
}
