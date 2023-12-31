import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App interface", () => {
  it("Should render number 5 when button 5 is clicked", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("5")
      button.click()
    })
    expect(screen.getByTestId("result_div")).toHaveTextContent("5")
  });

  it("Should render blank when an operator is clicked", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("+")
      button.click()
    })
    expect(screen.getByTestId("result_div")).toHaveTextContent("")
  });

  it("Should render blank when button C is clicked", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("C")
      button.click()
    })
    expect(screen.getByTestId("result_div")).toHaveTextContent("")
  });

  it("Should render the number 4 after equals is clicked", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("2")
      button.click()
    })
    act(() => {
      const button = screen.getByText("+")
      button.click()
    })
    act(() => {
      const button = screen.getByText("2")
      button.click()
    })
    act(() => {
      const button = screen.getByText("=")
      button.click()
    })
    expect(screen.getByTestId("result_div")).toHaveTextContent("4")
  })
})