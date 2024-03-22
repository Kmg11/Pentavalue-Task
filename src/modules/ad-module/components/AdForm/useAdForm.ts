import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AdFormValues, adFormSchema } from "./adFormSchema";
import { CreateAdPayload, adsActions, useAppDispatch } from "@/core/store";
import { IAd } from "../../types";
import { AppFileService } from "@/core/services";

type UseAdFormProps = {
	ad?: IAd;
	onSubmit?: () => void;
};

export function useAdForm({ ad, onSubmit }: UseAdFormProps) {
	const dispatch = useAppDispatch();

	const form = useForm<AdFormValues>({
		defaultValues: {
			from_time: ad?.from_time || new Date().toISOString(),
			to_time: ad?.to_time || new Date().toISOString(),
		},
		resolver: yupResolver(adFormSchema),
	});

	const handleSubmit = form.handleSubmit((values) => {
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
			form.reset();
		}

		if (ad) {
			const updatePayload: IAd = {
				id: ad.id,
				from_time: values.from_time,
				to_time: values.to_time,
				image: file ? (isImage ? previewLink : "") : ad.image,
				video: file ? (isVideo ? previewLink : "") : ad.video,
			};

			dispatch(adsActions.updateAd({ ...updatePayload }));
		}

		onSubmit?.();
	});

	return { form, handleSubmit };
}
