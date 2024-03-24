import { AdCardHeaderTime } from "./AdCardHeaderTime";
import { renderWithProviders } from "@/core/test";

describe("AdCardHeaderTime", () => {
	test("renders children within Typography component with specific styles", () => {
		const children = "From: 2024-03-15 08:00:00";

		const { getByText } = renderWithProviders(
			<AdCardHeaderTime>{children}</AdCardHeaderTime>
		);

		const typographyElement = getByText(children);
		expect(typographyElement).toBeInTheDocument();
	});
});
