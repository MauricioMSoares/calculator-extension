import React from 'react'
import './Button.css'

interface ButtonProps {
	label: string
	onClick: (label: string) => void
	extraClass?: string
}

const Button = ({ label, onClick, extraClass }: ButtonProps) => {
	return <>
		<button
			onClick={() => onClick(label)}
			className={`calculator_button ${extraClass}`}
			data-testid="button"
		>
			{label}
		</button>
	</>
}

export default Button;