import { AppFileService } from "@/core/services";
import * as Yup from "yup";

export const useAdFormSchema = (updateMode?: boolean) => {
	return Yup.object().shape({
		from_time: Yup.string().required("From time is required"),
		to_time: Yup.string().required("To time is required"),
		files: Yup.mixed()
			.test("files", "File must be an image or a video", (value) => {
				if (!value) return false;

				const file = (value as FileList)?.[0];
				if (updateMode && !file) return true;

				if (!file) return false;

				const isImage = AppFileService.isFileImage(file);
				const isVideo = AppFileService.isFileVideo(file);

				return isImage || isVideo;
			})
			// check if updateMode is true, then the file is not required
			.test("required", "File is required", (value) => {
				if (updateMode) return true;

				if (!value) return false;

				const file = (value as FileList)?.[0];

				return !!file;
			}),
	});
};

export type AdFormValues = Yup.InferType<ReturnType<typeof useAdFormSchema>>;
