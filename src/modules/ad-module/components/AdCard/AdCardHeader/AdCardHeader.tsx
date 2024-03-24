import { IAd } from "@/modules/ad-module";
import { Box, IconButton } from "@mui/material";
import { EditOutlined, DeleteOutline } from "@mui/icons-material";
import { AdCardHeaderTime } from "./AdCardHeaderTime/AdCardHeaderTime";
import { UpdateAdModal } from "./UpdateAdModal";
import { useState } from "react";
import { DeleteAdModal } from "./DeleteAdModal/DeleteAdModal";

type AdCardHeaderProps = IAd;

export function AdCardHeader({
	from_time,
	to_time,
	id,
	image,
	video,
}: AdCardHeaderProps) {
	const [updateAdModal, setUpdateAdModal] = useState(false);
	const openUpdateAdModal = () => setUpdateAdModal(true);
	const closeUpdateAdModal = () => setUpdateAdModal(false);

	const [deleteAdModal, setDeleteAdModal] = useState(false);
	const openDeleteAdModal = () => setDeleteAdModal(true);
	const closeDeleteAdModal = () => setDeleteAdModal(false);

	const formattedFromTime = new Date(from_time).toLocaleString("en-GB");
	const formattedToTime = new Date(to_time).toLocaleString("en-GB");

	return (
		<>
			<Box
				component="header"
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: 1,
					marginBottom: 2,
					flexWrap: "wrap",
					flexDirection: { xs: "column", sm: "row" },
				}}
			>
				<Box
					component="section"
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						flexDirection: { xs: "column", sm: "row" },
					}}
				>
					<AdCardHeaderTime>From: {formattedFromTime}</AdCardHeaderTime>
					<AdCardHeaderTime>To: {formattedToTime}</AdCardHeaderTime>
				</Box>

				<Box
					component="section"
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
					}}
				>
					<IconButton
						size="small"
						onClick={openUpdateAdModal}
						data-testid="edit-ad-button"
					>
						<EditOutlined fontSize="small" />
					</IconButton>

					<IconButton
						size="small"
						onClick={openDeleteAdModal}
						data-testid="delete-ad-button"
					>
						<DeleteOutline fontSize="small" />
					</IconButton>
				</Box>
			</Box>

			<UpdateAdModal
				open={updateAdModal}
				close={closeUpdateAdModal}
				ad={{ id, from_time, to_time, image, video }}
			/>

			<DeleteAdModal
				open={deleteAdModal}
				close={closeDeleteAdModal}
				adId={id}
			/>
		</>
	);
}
