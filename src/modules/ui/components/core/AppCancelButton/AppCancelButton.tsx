import { Button, ButtonProps, useTheme } from "@mui/material";

type AppCancelButtonProps = ButtonProps;

export function AppCancelButton({ sx, ...props }: AppCancelButtonProps) {
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
