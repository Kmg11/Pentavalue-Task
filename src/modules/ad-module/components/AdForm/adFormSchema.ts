import { AppFileService } from "@/core/services";
import * as Yup from "yup";

export const adFormSchema = Yup.object().shape({
	from_time: Yup.string().required("From time is required"),
	to_time: Yup.string().required("To time is required"),
	file: Yup.mixed()
		.test("file", "File must be an image or a video", (value) => {
			if (!value) return false;

			const file = value as File;
			const isImage = AppFileService.isFileImage(file);
			const isVideo = AppFileService.isFileVideo(file);

			return isImage || isVideo;
		})
		.required("File is required"),
});

export type AdFormValues = Yup.InferType<typeof adFormSchema>;
