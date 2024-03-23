import { AppFileService } from "@/core/services";
import * as Yup from "yup";

export const adFormSchema = Yup.object().shape({
	from_time: Yup.string().required("From time is required"),
	to_time: Yup.string().required("To time is required"),
	files: Yup.mixed()
		.test("files", "File must be an image or a video", (value) => {
			if (!value) return false;

			const file = (value as FileList)?.[0];

			if (!file) return false;

			const isImage = AppFileService.isFileImage(file);
			const isVideo = AppFileService.isFileVideo(file);

			return isImage || isVideo;
		})
		.required("File is required"),
});

export type AdFormValues = Yup.InferType<typeof adFormSchema>;
