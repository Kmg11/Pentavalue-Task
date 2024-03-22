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
import { Box, Button, Typography } from "@mui/material";
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
};

/**
 * A form component for creating or updating an advertisement.
 * @param {AdFormProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the ad form.
 */
export function AdForm({ ad }: AdFormProps): JSX.Element {
	const { form, onSubmit } = useAdForm({ ad });

	const file = form.watch("file");
	const isFile = file instanceof File;

	return (
		<Box
			component="form"
			onSubmit={onSubmit}
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

			{file && isFile && <AppUploadedFilePreview file={file} />}

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

			<Button type="submit" variant="contained">
				Create Ad
			</Button>
		</Box>
	);
}
