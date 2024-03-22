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
	file?: File;

	/**
	 * The default image to display if the file not uploaded.
	 */
	defaultImage?: string;

	/**
	 * The default video to display if the file not uploaded.
	 */
	defaultVideo?: string;
};

/**
 * A component to display a preview of an uploaded file.
 * @param {AppUploadedFilePreviewProps} props - The props of the component.
 * @returns {JSX.Element} A React component representing the uploaded file preview.
 */
export function AppUploadedFilePreview({
	file,
	defaultImage,
	defaultVideo,
}: AppUploadedFilePreviewProps): JSX.Element {
	const isImage = file ? AppFileService.isFileImage(file) : false;
	const isVideo = file ? AppFileService.isFileVideo(file) : false;
	const previewLink = file
		? AppFileService.convertFileToPreviewLink(file)
		: undefined;

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
			{(isImage || (defaultImage && !file)) && (
				<img
					src={file ? previewLink : defaultImage}
					alt="File Preview"
					key={file ? "image" : "defaultImage"}
				/>
			)}

			{(isVideo || (defaultVideo && !file)) && (
				<video controls key={file ? "video" : "defaultVideo"}>
					<source src={file ? previewLink : defaultVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
		</Box>
	);
}
