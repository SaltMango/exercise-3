import React from "react";
import TestRenderer from "react-test-renderer";
// import { render, screen } from "@testing-library/react";
// import CountryDetails from "components/CountryDetails";
import App from "../App";

test("counter increment and decrement works correctly", () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// test("should CountryDetails component renders nothing initially ", () => {
//     render(<CountryDetails code={""}/>);
//     const countryDetails = screen.queryByTestId("countryDetails");
//     expect(countryDetails).

// });
