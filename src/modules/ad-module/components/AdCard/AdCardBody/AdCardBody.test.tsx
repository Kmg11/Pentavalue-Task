import { AdCardBody } from "./AdCardBody";
import { renderWithProviders } from "@/core/test";

describe("AdCardBody", () => {
	test("renders image and video elements if provided", () => {
		const adData = {
			image: "https://example.com/image.jpg",
			video: "https://example.com/video.mp4",
		};

		const { getByRole, getByTestId } = renderWithProviders(
			<AdCardBody {...adData} />
		);

		const image = getByRole("img");
		const video = getByTestId("ad-video");

		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", adData.image);

		expect(video).toBeInTheDocument();
		expect(video).toHaveAttribute("src", adData.video);
	});
});
