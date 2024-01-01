import './Button.css'

function Button({ label, onClick, extraClass }) {
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