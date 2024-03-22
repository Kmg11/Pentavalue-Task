import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AdFormValues, adFormSchema } from "./adFormSchema";
import { CreateAdPayload, adsActions, useAppDispatch } from "@/core/store";
import { IAd } from "../../types";
import { AppFileService } from "@/core/services";

type UseAdFormProps = {
	ad?: IAd;
};

export function useAdForm({ ad }: UseAdFormProps) {
	const dispatch = useAppDispatch();

	const form = useForm<AdFormValues>({
		defaultValues: {
			from_time: ad?.from_time || new Date().toISOString(),
			to_time: ad?.to_time || new Date().toISOString(),
		},
		resolver: yupResolver(adFormSchema),
	});

	const onSubmit = form.handleSubmit((values) => {
		const file = values.file as File;
		const isImage = AppFileService.isFileImage(file);
		const isVideo = AppFileService.isFileVideo(file);
		const previewLink = AppFileService.convertFileToPreviewLink(file);

		if (!ad) {
			const createPayload: CreateAdPayload = {
				from_time: values.from_time,
				to_time: values.to_time,
				image: isImage ? previewLink : "",
				video: isVideo ? previewLink : "",
			};

			dispatch(adsActions.createAd(createPayload));
		}

		if (ad) {
			const updatePayload: IAd = {
				id: ad.id,
				from_time: values.from_time,
				to_time: values.to_time,
				image: isImage ? previewLink : ad.image,
				video: isVideo ? previewLink : ad.video,
			};

			dispatch(adsActions.updateAd({ ...updatePayload }));
		}

		form.reset();
	});

	return { form, onSubmit };
}
