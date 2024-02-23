type ButtonType = 'submit' | 'reset' | 'button';

type ButtonProps = {
	type: ButtonType;
	children: React.ReactNode;
};

export const Button = ({ type, children }: ButtonProps) => (
	<button type={type}>{children}</button>
);
