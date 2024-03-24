import { fireEvent, screen } from "@testing-library/react";
import { DeleteAdModal } from "./DeleteAdModal";
import { renderWithProviders } from "@/core/test";

describe("DeleteAdModal", () => {
	test("renders modal with correct content and buttons", () => {
		const open = true;
		const close = jest.fn();
		const adId = 1;

		renderWithProviders(
			<DeleteAdModal open={open} close={close} adId={adId} />
		);

		// Check if modal is rendered
		const modalTitle = screen.getByText("Delete Ad");
		expect(modalTitle).toBeInTheDocument();

		const modalDescription = screen.getByText(
			"Are you sure you want to delete this ad?"
		);
		expect(modalDescription).toBeInTheDocument();

		// Check if cancel button is rendered and working
		const cancelButton = screen.getByText("Cancel");
		expect(cancelButton).toBeInTheDocument();
		fireEvent.click(cancelButton);
		expect(close).toHaveBeenCalledTimes(1);

		// Check if delete button is rendered and working
		const deleteButton = screen.getByText("Delete");
		expect(deleteButton).toBeInTheDocument();
		fireEvent.click(deleteButton);
		expect(close).toHaveBeenCalledTimes(2); // Modal should close after delete
	});

	test("modal is not rendered when open is false", () => {
		const open = false;
		const close = jest.fn();
		const adId = 1;

		renderWithProviders(
			<DeleteAdModal open={open} close={close} adId={adId} />
		);

		const modalTitle = screen.queryByText("Delete Ad");
		expect(modalTitle).not.toBeInTheDocument();
	});

	test("delete functionality works correctly", () => {
		const close = jest.fn();
		const adId = 1;

		const { store } = renderWithProviders(
			<DeleteAdModal open={true} close={close} adId={adId} />,
			{
				preloadedState: {
					ads: {
						ads: {
							allPages: 1,
							count: 1,
							thisPage: 1,
							result: [
								{ id: adId, from_time: "", to_time: "", image: "", video: "" },
							],
						},
						error: null,
						loading: false,
					},
				},
			}
		);

		expect(store.getState().ads.ads.result).toHaveLength(1);

		const deleteButton = screen.getByText("Delete");
		fireEvent.click(deleteButton);
		expect(store.getState().ads.ads.result).toHaveLength(0);
	});
});
