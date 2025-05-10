import { render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import ToggleTheme from "../src/components/ToggleTheme/ToggleTheme";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

test('toggle function is called when MoonIcon is clicked', async () => {
  const mockToggle = vitest.fn();
  render(<ToggleTheme />, { wrapper: ({ children }) => <div onClick={mockToggle}>{children}</div> });

  await userEvent.click(screen.getByTestId('toggle_theme')); 
  expect(mockToggle).toHaveBeenCalled();
});