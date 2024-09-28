import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  // Querying
  const name = screen.getByText("Theobroma");

  // Assertion
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", () => {});
