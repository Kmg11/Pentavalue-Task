import { Typography } from "@mui/material";
import React from "react";

interface AdCardHeaderTimeProps {
	children: React.ReactNode;
}

export function AdCardHeaderTime({ children }: AdCardHeaderTimeProps) {
	return (
		<Typography
			variant="subtitle2"
			sx={(t) => ({
				backgroundColor: t.palette.grey[800],
				paddingLeft: 1,
				paddingRight: 1,
				borderRadius: t.shape.borderRadius,
			})}
		>
			{children}
		</Typography>
	);
}
