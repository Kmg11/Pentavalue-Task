import { screen } from "@testing-library/react";
import { AdForm } from "./AdForm";
import { renderWithProviders } from "@/core/test";

describe("AdForm", () => {
	it("renders the form correctly in create mode", () => {
		renderWithProviders(<AdForm />);

		const heading = screen.getByRole("heading", { name: /Create Ad/i });
		const submitButton = screen.getByRole("button", { name: /Create Ad/i });

		expect(heading).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	test("renders the form correctly in update mode", () => {
		const close = jest.fn();
		const submit = jest.fn();

		renderWithProviders(
			<AdForm
				ad={{
					id: 1,
					from_time: new Date().toISOString(),
					to_time: new Date().toISOString(),
					image: "image.png",
					video: "video.mp4",
				}}
				onClose={close}
				onSubmit={submit}
			/>
		);

		const heading = screen.getByRole("heading", { name: /Update Ad/i });
		const submitButton = screen.getByRole("button", { name: /Update Ad/i });
		const closeButton = screen.getByRole("button", { name: /Close/i });

		expect(heading).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
		expect(closeButton).toBeInTheDocument();
	});

	test("calls the onClose function when the close button is clicked", () => {
		const close = jest.fn();
		const submit = jest.fn();

		renderWithProviders(
			<AdForm
				ad={{
					id: 1,
					from_time: new Date().toISOString(),
					to_time: new Date().toISOString(),
					image: "image.png",
					video: "video.mp4",
				}}
				onClose={close}
				onSubmit={submit}
			/>
		);

		const closeButton = screen.getByRole("button", { name: /Close/i });
		closeButton.click();

		expect(close).toHaveBeenCalledTimes(1);
	});
});
