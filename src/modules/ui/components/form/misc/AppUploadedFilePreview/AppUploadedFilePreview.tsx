/**
 * A component to display a preview of an uploaded file.
 * @module components
 * @component
 * @example
 * import { AppUploadedFilePreview } from "@/components";
 *
 * const MyComponent = () => {
 *   const file = new File(["file content"], "filename.jpg", { type: "image/jpeg" });
 *
 *   return (
 *     <AppUploadedFilePreview file={file} />
 *   );
 * }
 */
import { AppFileService } from "@/core/services";
import { Box } from "@mui/material";

/**
 * Props for the AppUploadedFilePreview component.
 */
export type AppUploadedFilePreviewProps = {
	/**
	 * The uploaded file to display a preview for.
	 */
	file: File;
};

/**
 * A component to display a preview of an uploaded file.
 * @param {AppUploadedFilePreviewProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the uploaded file preview.
 */
export function AppUploadedFilePreview({
	file,
}: AppUploadedFilePreviewProps): JSX.Element {
	const isImage = AppFileService.isFileImage(file);
	const isVideo = AppFileService.isFileVideo(file);
	const previewLink = AppFileService.convertFileToPreviewLink(file);

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
				overflow: "hidden",
				borderRadius: 4,
				"& img": {
					width: "100%",
					height: "100%",
					objectFit: "cover",
				},
				"& video": {
					width: "100%",
					height: "100%",
					objectFit: "cover",
				},
			}}
		>
			{isImage && <img src={previewLink} alt="File Preview" />}

			{isVideo && (
				<video controls>
					<source src={previewLink} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
		</Box>
	);
}
