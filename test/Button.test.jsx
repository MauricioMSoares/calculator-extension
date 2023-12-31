import { render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import { act } from "react-dom/test-utils";
import Button from "../src/components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
	it("Should have the label 1", () => {
		render(<Button label="1"/>);
		const button = screen.getByTestId("button");

		expect(button).toHaveTextContent("1");
	});

	it("Should be called when clicked", () => {
		const onClick = vitest.fn();
		render(<Button label="1" onClick={onClick}/>);
		const button = screen.getByTestId("button");
		act(() => {
			button.click();
		})

		expect(onClick).toHaveBeenCalled();
	});
});