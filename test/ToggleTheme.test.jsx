import { fireEvent, render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import ToggleTheme from "../src/components/ToggleTheme/ToggleTheme";
import "@testing-library/jest-dom";

test('toggle function is called when MoonIcon is clicked', () => {
  const mockToggle = vitest.fn();
  render(<ToggleTheme />, { wrapper: ({ children }) => <div onClick={mockToggle}>{children}</div> });
  fireEvent.click(screen.getByTestId('toggle_theme')); 
  expect(mockToggle).toHaveBeenCalled();
});