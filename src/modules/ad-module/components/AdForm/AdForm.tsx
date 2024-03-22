/**
 * A form component for creating or updating an advertisement.
 * @module components
 * @component
 * @example
 * import { AdForm } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AdForm />
 *   );
 * }
 */
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useAdForm } from "./useAdForm";
import {
	AppDateTimePicker,
	AppFormFileUploadButton,
	AppUploadedFilePreview,
} from "@/modules/ui";
import { IAd } from "../../types";

type AdFormProps = {
	/**
	 * The advertisement data to pre-fill the form for updating.
	 */
	ad?: IAd;

	/**
	 * A function to call when the form is submitted.
	 */
	onSubmit?: () => void;

	/**
	 * A function to call when the close button is clicked.
	 */
	onClose?: () => void;
};

/**
 * A form component for creating or updating an advertisement.
 * @param {AdFormProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the ad form.
 */
export function AdForm({ ad, onSubmit, onClose }: AdFormProps): JSX.Element {
	const theme = useTheme();
	const { form, handleSubmit } = useAdForm({ ad, onSubmit });

	const file = form.watch("file");
	const isFile = file instanceof File;

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			noValidate
			sx={(t) => ({
				display: "flex",
				flexDirection: "column",
				gap: t.spacing(3),
				backgroundColor: t.palette.grey[900],
				padding: t.spacing(2),
				borderRadius: t.shape.borderRadius,
			})}
		>
			<Typography variant="h6">{ad ? "Update Ad" : "Create Ad"}</Typography>

			{((file && isFile) || ad) && (
				<AppUploadedFilePreview
					file={(file as File) || undefined}
					defaultImage={ad?.image}
					defaultVideo={ad?.video}
				/>
			)}

			<AppFormFileUploadButton
				form={form}
				name="file"
				inputProps={{ accept: "image/*, video/*" }}
				fullWidth
			>
				Upload (image or video)
			</AppFormFileUploadButton>

			<AppDateTimePicker label="From Time" name="from_time" form={form} />

			<AppDateTimePicker label="To Time" name="to_time" form={form} />

			<Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
				{onClose && (
					<Button
						type="button"
						variant="contained"
						sx={{
							backgroundColor: theme.palette.grey[800],
							":active": { backgroundColor: theme.palette.grey[700] },
							":hover": { backgroundColor: theme.palette.grey[700] },
						}}
						onClick={onClose}
					>
						Close
					</Button>
				)}

				<Button type="submit" variant="contained">
					Create Ad
				</Button>
			</Box>
		</Box>
	);
}
