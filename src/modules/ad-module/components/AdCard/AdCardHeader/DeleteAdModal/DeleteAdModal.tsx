import { adsActions, useAppDispatch } from "@/core/store";
import { IAd } from "@/modules/ad-module";
import { AppCancelButton } from "@/modules/ui";
import { Box, Button, Modal, SxProps, Typography } from "@mui/material";

const style: SxProps = {
	maxWidth: 500,
	width: "100%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

type DeleteAdModalProps = {
	open: boolean;
	close: () => void;
	adId: IAd["id"];
};

export function DeleteAdModal({ open, close, adId }: DeleteAdModalProps) {
	const dispatch = useAppDispatch();

	const deleteAd = () => {
		dispatch(adsActions.deleteAd(adId));
		close();
	};

	return (
		<Modal
			open={open}
			onClose={close}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				overflowY: "auto",
			}}
			aria-labelledby="delete-ad-modal-title"
			aria-describedby="delete-ad-modal-description"
		>
			<Box sx={style}>
				<Typography id="delete-ad-modal-title" variant="h6" component="h2">
					Delete Ad
				</Typography>

				<Typography id="delete-ad-modal-description" sx={{ mt: 2 }}>
					Are you sure you want to delete this ad?
				</Typography>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						gap: 1,
						marginTop: 2,
					}}
				>
					<AppCancelButton onClick={close}>Cancel</AppCancelButton>

					<Button variant="contained" color="error" onClick={deleteAd}>
						Delete
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
