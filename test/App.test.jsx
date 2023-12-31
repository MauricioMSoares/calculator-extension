import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App interface", () => {
  describe("result_div", () => {
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
  });

  it("Should render blank when button C is clicked", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("C")
      button.click()
    })
    expect(screen.getByTestId("result_div")).toHaveTextContent("")
  });
});

describe("App functionality", () => {
  it("Should return 4 when triggering 2 + 2 =", () => {
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
  });

  it("Should return 7 when triggering 1 + 2 * 3 = ", () => {
    render(<App />)
    act(() => {
      const button = screen.getByText("1")
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
      const button = screen.getByText("×")
      button.click()
    })
    act(() => {
      const button = screen.getByText("3")
      button.click()
    });
  });
});