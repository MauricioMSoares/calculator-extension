import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "../src/App";
import "@testing-library/jest-dom";
import React from "react";

describe("App result_div", () => {
  it("Should render number 5 when button 5 is clicked", async () => {
    render(<App />)

    const button = screen.getByText("5")
    await userEvent.click(button)

    expect(screen.getByTestId("result_div")).toHaveTextContent("5")
  });

  it("Should render blank when an operator is clicked", async () => {
    render(<App />)

    const button = screen.getByText("+")
    await userEvent.click(button)

    expect(screen.getByTestId("result_div")).toHaveTextContent("")
  });

  it("Should render blank when button C is clicked", async () => {
    render(<App />)

    const button = screen.getByText("C")
    await userEvent.click(button)

    expect(screen.getByTestId("result_div")).toHaveTextContent("")
  });

  it("Should render 4 when equals is clicked", async () => {
    render(<App />)

    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("+"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("="))

    expect(screen.getByTestId("result_div")).toHaveTextContent("4")
    expect(screen.getByTestId("expression_div")).toHaveTextContent("4")
  })
});

describe("App expression_div", () => {
  it("Should render number 5 when button 5 is clicked", async () => {
    render(<App />)

    const button = screen.getByText("5")
    await userEvent.click(button)

    expect(screen.getByTestId("expression_div")).toHaveTextContent("5")
  })

  it("Should render the expression 1 + 2 × 3", async () => {
    render(<App />)

    await userEvent.click(screen.getByText("1"))
    await userEvent.click(screen.getByText("+"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("×"))
    await userEvent.click(screen.getByText("3"))

    expect(screen.getByTestId("expression_div")).toHaveTextContent("1 + 2 × 3")
  });
});

describe("App functionality", () => {
  it("Should return 4 when triggering 2 + 2 =", async () => {
    render(<App />)

    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("+"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("="))

    expect(screen.getByTestId("result_div")).toHaveTextContent("4")
  });

  it("Should return 7 when triggering 1 + 2 * 3 = ", async () => {
    render(<App />)

    await userEvent.click(screen.getByText("1"))
    await userEvent.click(screen.getByText("+"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("×"))
    await userEvent.click(screen.getByText("3"))
    await userEvent.click(screen.getByText("="))

    expect(screen.getByTestId("result_div")).toHaveTextContent("7")
  });

  it("Should return 8 when triggering 4 ÷ 2 - 5 × 2 = ", async () => {
    render(<App />)

    await userEvent.click(screen.getByText("4"))
    await userEvent.click(screen.getByText("÷"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("−"))
    await userEvent.click(screen.getByText("5"))
    await userEvent.click(screen.getByText("×"))
    await userEvent.click(screen.getByText("2"))
    await userEvent.click(screen.getByText("="))

    expect(screen.getByTestId("result_div")).toHaveTextContent("8")
  });
});