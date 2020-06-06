import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import { toHaveAttribute } from "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

expect.extend({ toHaveAttribute });

// test("renders a star", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Star />, div);
//   expect(div.querySelector("svg")).toHaveAttribute(
//     "id",
//     "star"
//   );
// });

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent("Great Star");
});
