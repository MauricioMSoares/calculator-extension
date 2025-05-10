import { render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import Button from "../src/components/Button/Button";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
	it("Should have the label 1", () => {
		render(<Button label="1" onClick={() => {}}/>);
		const button = screen.getByTestId("button");

		expect(button).toHaveTextContent("1");
	});

	it("Should be called when clicked", async () => {
		const onClick = vitest.fn();
		render(<Button label="1" onClick={onClick}/>);

		const button = screen.getByTestId("button");
		await userEvent.click(button)

		expect(onClick).toHaveBeenCalled();
	});
});