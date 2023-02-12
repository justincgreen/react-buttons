//import { ButtonTypes } from './buttonTypes';
import "../button.css";

const Button = (props) => {
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
		<button
			className={getButtonClasses()}
		>
			Button
		</button>
	)
}

export default Button;
