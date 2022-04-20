import React from "react";
import { render, screen } from "@testing-library/react";
import { Content } from "./Content";

test("Content renders", () => {
  render(<Content />);
  screen.debug();
});
