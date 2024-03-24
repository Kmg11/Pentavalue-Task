import { AppMessage } from "./AppMessage";
import { theme } from "@/core/styles";
import { renderWithProviders } from "@/core/test";

describe("AppMessage", () => {
	test("renders with default props", () => {
		const { getByText } = renderWithProviders(
			<AppMessage>This is a message.</AppMessage>
		);
		const messageElement = getByText("This is a message.");

		expect(messageElement).toBeInTheDocument();
		expect(messageElement).toHaveStyle(`color: ${theme.palette.grey["400"]}`);
		expect(messageElement).toHaveStyle("font-weight: 500");
		expect(messageElement).toHaveStyle("text-align: center");
	});

	test("renders with custom props", () => {
		const { getByText } = renderWithProviders(
			<AppMessage
				color={theme.palette.primary.main}
				fontWeight={600}
				align="left"
			>
				This is a message.
			</AppMessage>
		);
		const messageElement = getByText("This is a message.");

		expect(messageElement).toHaveStyle(`color: ${theme.palette.primary.main}`);
		expect(messageElement).toHaveStyle("font-weight: 600");
		expect(messageElement).toHaveStyle("text-align: left");
	});
});
