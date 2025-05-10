import { render, screen } from "@testing-library/react"
import ButtonRow from "../src/components/ButtonRow/ButtonRow"
import React from "react"

describe("ButtonRow", () => {
    it("Should render two buttons", async () => {
        render(<ButtonRow buttons={[{label: "1", action: () => {}}, {label: "2", action: () => {}}]} />)

        expect(screen.getAllByRole("button")).toHaveLength(2)
    })
})