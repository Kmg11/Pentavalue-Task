import { AppUploadedFilePreview } from "./AppUploadedFilePreview";
import { renderWithProviders } from "@/core/test";

describe("AppUploadedFilePreview", () => {
	test("renders image preview when file is an image", () => {
		const file = new File(["file content"], "filename.jpg", {
			type: "image/jpeg",
		});
		const { getByAltText } = renderWithProviders(
			<AppUploadedFilePreview file={file} />
		);
		const imagePreview = getByAltText("File Preview");

		expect(imagePreview).toBeInTheDocument();
		expect(imagePreview.tagName).toBe("IMG");
	});

	test("renders video preview when file is a video", () => {
		const file = new File(["file content"], "filename.mp4", {
			type: "video/mp4",
		});
		const { getByText } = renderWithProviders(
			<AppUploadedFilePreview file={file} />
		);
		const videoPreview = getByText(
			"Your browser does not support the video tag."
		);

		expect(videoPreview).toBeInTheDocument();
		expect(videoPreview.tagName).toBe("VIDEO");
	});

	test("renders default image when file is not provided", () => {
		const defaultImage = "default_image.jpg";
		const { getByAltText } = renderWithProviders(
			<AppUploadedFilePreview defaultImage={defaultImage} />
		);
		const defaultImagePreview = getByAltText("File Preview");

		expect(defaultImagePreview).toBeInTheDocument();
		expect(defaultImagePreview.tagName).toBe("IMG");
	});

	test("renders default video when file is not provided", () => {
		const defaultVideo = "default_video.mp4";
		const { getByText } = renderWithProviders(
			<AppUploadedFilePreview defaultVideo={defaultVideo} />
		);
		const defaultVideoPreview = getByText(
			"Your browser does not support the video tag."
		);

		expect(defaultVideoPreview).toBeInTheDocument();
		expect(defaultVideoPreview.tagName).toBe("VIDEO");
	});
});
