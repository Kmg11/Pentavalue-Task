import { AppFileService } from "./AppFile.service";

describe("AppFileService", () => {
	describe("isFileImage", () => {
		it("should return true for image files", () => {
			const imageFile = new File([""], "image.jpg", { type: "image/jpeg" });
			expect(AppFileService.isFileImage(imageFile)).toBe(true);
		});

		it("should return false for non-image files", () => {
			const videoFile = new File([""], "video.mp4", { type: "video/mp4" });
			expect(AppFileService.isFileImage(videoFile)).toBe(false);
		});
	});

	describe("isFileVideo", () => {
		it("should return true for video files", () => {
			const videoFile = new File([""], "video.mp4", { type: "video/mp4" });
			expect(AppFileService.isFileVideo(videoFile)).toBe(true);
		});

		it("should return false for non-video files", () => {
			const imageFile = new File([""], "image.jpg", { type: "image/jpeg" });
			expect(AppFileService.isFileVideo(imageFile)).toBe(false);
		});
	});

	describe("convertFileToPreviewLink", () => {
		it("should return a preview link for the file", () => {
			const file = new File([""], "file.txt", { type: "text/plain" });
			const previewLink = AppFileService.convertFileToPreviewLink(file);
			expect(previewLink).toContain("blob:");
		});
	});
});
