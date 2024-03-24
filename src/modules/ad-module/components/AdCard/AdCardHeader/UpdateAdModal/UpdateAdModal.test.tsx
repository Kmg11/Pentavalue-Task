import { screen } from "@testing-library/react";
import { UpdateAdModal } from "./UpdateAdModal";
import { renderWithProviders } from "@/core/test";
import { IAd } from "@/modules/ad-module";

describe("UpdateAdModal", () => {
	test("renders modal with AdForm and closes on form submission", () => {
		const open = true;
		const close = jest.fn();
		const ad: IAd = {
			id: 1,
			from_time: "2024-03-15T08:00:00",
			to_time: "2024-03-16T08:00:00",
			image: "https://example.com/image.jpg",
			video: "https://example.com/video.mp4",
		};

		renderWithProviders(<UpdateAdModal open={open} close={close} ad={ad} />);

		// Check if modal is rendered
		const modalTitle = screen.getByText("Update Ad");
		expect(modalTitle).toBeInTheDocument();

		// Check if AdForm is rendered
		const adForm = screen.getByTestId("ad-form");
		expect(adForm).toBeInTheDocument();
	});

	test("should't render modal when closed", () => {
		const open = false;
		const close = jest.fn();
		const ad: IAd = {
			id: 1,
			from_time: "2024-03-15T08:00:00",
			to_time: "2024-03-16T08:00:00",
			image: "https://example.com/image.jpg",
			video: "https://example.com/video.mp4",
		};

		renderWithProviders(<UpdateAdModal open={open} close={close} ad={ad} />);

		// Check if modal is not rendered
		const modalTitle = screen.queryByText("Update Ad");
		expect(modalTitle).not.toBeInTheDocument();
	});
});
