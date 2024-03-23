/**
 * A service class providing utility methods for file handling.
 * @module services
 * @class
 * @example
 * import { AppFileService } from "@/services";
 *
 * const file = new File(...);
 * const isImage = AppFileService.isFileImage(file);
 * const isVideo = AppFileService.isFileVideo(file);
 * const previewLink = AppFileService.convertFileToPreviewLink(file);
 */
export class AppFileService {
	/**
	 * Check if the given file is an image.
	 * @param {File} file - The file to check.
	 * @returns {boolean} A boolean indicating whether the file is an image.
	 */
	static isFileImage(file: File): boolean {
		return file.type.startsWith("image/");
	}

	/**
	 * Check if the given file is a video.
	 * @param {File} file - The file to check.
	 * @returns {boolean} A boolean indicating whether the file is a video.
	 */
	static isFileVideo(file: File): boolean {
		return file.type.startsWith("video/");
	}

	/**
	 * Convert the given file to a preview link.
	 * @param {File} file - The file to convert.
	 * @returns {string} The preview link for the file.
	 */
	static convertFileToPreviewLink(file: File): string {
		return URL.createObjectURL(file);
	}
}
