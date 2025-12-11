import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";

describe("App", () => {
  it("renders Capstone Project heading", () => {
    render(<App />);
    const heading = screen.getByText(/Capstone Project/i);
    expect(heading).toBeTruthy();
  });
});
