import React from "react";
import { render } from "@testing-library/react";
import { AppProvider } from "./provider";

describe("AppProvider", () => {
  it("renders children", () => {
    const { getByText } = render(
      <AppProvider>
        <div>Test Children</div>
      </AppProvider>,
    );
    expect(getByText("Test Children")).toBeInTheDocument();
  });
});
