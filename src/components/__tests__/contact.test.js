import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page test case", () => {
  afterAll(() => {
    // console.log("After All");
  });

  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });

  afterEach(() => {
    // console.log("After Each");
  });

  //'it' is just an alias of test
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //   const button = screen.getByText("Submit");
    //   const button = screen.getByText("Random");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes in Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes); //Returns JSX/React element/React Fiber node/Virtual DOM Object
    //   console.log(inputBoxes.length);

    // Assertion
    //   expect(inputBoxes.length).toBe(3);
    //   expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
