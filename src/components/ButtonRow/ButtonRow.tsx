import React from "react"
import Button from "../Button/Button";

interface ButtonRowProps {
    buttons: Array<{ label: string; action: (label: string) => void }>
}

const ButtonRow = ({buttons}: ButtonRowProps) => {
    return <div className="flex">
        {buttons.map(button => (
            <Button label={button.label} onClick={button.action} />
        ))}
    </div>
}

export default ButtonRow;