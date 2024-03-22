import { AdForm, IAd } from "@/modules/ad-module";
import { Box, Modal, SxProps } from "@mui/material";

const style: SxProps = {
	maxWidth: 500,
	width: "100%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

type UpdateAdModalProps = {
	open: boolean;
	close: () => void;
	ad: IAd;
};

export function UpdateAdModal({ ad, close, open }: UpdateAdModalProps) {
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
		>
			<Box sx={style}>
				<AdForm ad={ad} onClose={close} onSubmit={close} />
			</Box>
		</Modal>
	);
}
