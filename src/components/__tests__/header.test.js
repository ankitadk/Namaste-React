import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying: finding by role is better way than finding by text
  // const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const cartItems = screen.getByText("Cart - (0 items)");

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const cartItems = screen.getByText(/Cart/);

  // Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // Assertion
  expect(logoutButton).toBeInTheDocument();
});
