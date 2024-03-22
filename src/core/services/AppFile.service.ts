export class AppFileService {
	static isFileImage(file: File) {
		return file.type.startsWith("image/");
	}

	static isFileVideo(file: File) {
		return file.type.startsWith("video/");
	}

	static convertFileToPreviewLink(file: File) {
		return URL.createObjectURL(file);
	}
}
