import { AppFileService } from "@/core/services";
import * as Yup from "yup";

export const adFormSchema = Yup.object().shape({
	from_time: Yup.string().required("From time is required"),
	to_time: Yup.string().required("To time is required"),
	files: Yup.mixed()
		.test("files", "File must be an image or a video", (value) => {
			if (!value) return false;

			const files = value as FileList;
			const isImage = AppFileService.isFileImage(files[0]);
			const isVideo = AppFileService.isFileVideo(files[0]);

			return isImage || isVideo;
		})
		.required("File is required"),
});

export type AdFormValues = Yup.InferType<typeof adFormSchema>;
