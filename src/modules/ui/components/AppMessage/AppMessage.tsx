/**
 * A typography component customized for displaying messages.
 * @module components
 * @component
 * @example
 * import { AppMessage } from "@/components";
 *
 * const MyComponent = () => {
 *   return (
 *     <AppMessage>
 *       This is a message.
 *     </AppMessage>
 *   );
 * }
 */
import { Typography, TypographyProps } from "@mui/material";

/**
 * Props for the `AppMessage` component.
 */
interface AppMessageProps extends TypographyProps {}

/**
 * A typography component customized for displaying messages.
 * @param {AppMessageProps} props - The props for the component.
 * @returns {JSX.Element} A React component representing the message.
 */
export function AppMessage(props: AppMessageProps): JSX.Element {
	return (
		<Typography
			variant="subtitle1"
			fontWeight={500}
			color={(t) => t.palette.grey["400"]}
			align="center"
			{...props}
		/>
	);
}
