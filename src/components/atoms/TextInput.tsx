import { ErrorMessage, Field } from 'formik';

type TextInputProps = {
	id?: string;
	type?: string;
	name: string;
	label: string;
};

export const TextInput = ({ name, label }: TextInputProps) => (
	<div>
		<label htmlFor={name}>{label}</label>
		<Field name={name} />
		<ErrorMessage component="div" name={name} />
	</div>
);
