import { fireEvent, screen } from "@testing-library/react";
import { AdCardHeader } from "./AdCardHeader";
import { IAd } from "../../../types";
import { renderWithProviders } from "@/core/test";

const ad: IAd = {
	id: 1,
	from_time: "2024-03-15T08:00:00",
	to_time: "2024-03-16T08:00:00",
	image: "https://example.com/image.jpg",
	video: "https://example.com/video.mp4",
};

describe("AdCardHeader", () => {
	test("renders header with correct time and buttons", () => {
		renderWithProviders(<AdCardHeader {...ad} />);

		// Check if "From" and "To" times are displayed
		const fromTimeText = screen.getByText(/From:/i);
		const toTimeText = screen.getByText(/To:/i);
		expect(fromTimeText).toBeInTheDocument();
		expect(toTimeText).toBeInTheDocument();

		// Check if Edit and Delete buttons are rendered
		const editButton = screen.getByTestId("edit-ad-button");
		const deleteButton = screen.getByTestId("delete-ad-button");
		expect(editButton).toBeInTheDocument();
		expect(deleteButton).toBeInTheDocument();
	});

	test("opens update modal on edit button click", () => {
		renderWithProviders(<AdCardHeader {...ad} />);

		// Simulate click on edit button
		const editButton = screen.getByTestId("edit-ad-button");
		fireEvent.click(editButton);

		// Check if update modal is opened
		const updateModalTitle = screen.getByRole("heading", {
			name: /update ad/i,
		});
		expect(updateModalTitle).toBeInTheDocument();
	});

	test("opens delete modal on delete button click", () => {
		renderWithProviders(<AdCardHeader {...ad} />);

		// Simulate click on delete button
		const deleteButton = screen.getByTestId("delete-ad-button");
		fireEvent.click(deleteButton);

		// Check if delete modal is opened
		const deleteModalTitle = screen.getByText(/delete ad/i);
		expect(deleteModalTitle).toBeInTheDocument();
	});
});
