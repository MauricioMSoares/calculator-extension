import './Button.css'

function Button({label, onClick, extraClass}) {
    return <>
        <button onClick={() => onClick(label)} className={`calculator_button ${extraClass}`}>{label}</button>
    </>
}

export default Button