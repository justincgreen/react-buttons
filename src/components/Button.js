//import { ButtonTypes } from './buttonTypes';
import "../button.css";

const Button = (props) => {
	const { label } = props;
	
	const getButtonClasses = () => {
		const { type, size } = props;
		
		const buttonClasses = [
			'button',
			`button--${type}`,
			`button--${size}`
		];
		
		return buttonClasses.join(' ');
	}	
	
	return (
		<div>
			<button
				className={getButtonClasses()}
			>
				{label}
			</button>
		</div>
	)
}

export default Button;
