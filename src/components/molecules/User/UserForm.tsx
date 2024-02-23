import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../../atoms/TextInput';
import { Button } from '../../atoms/Button';
import { UserProps } from 'types/userProps';

export const UserForm = ({ user }: UserProps) => {
	const validationSchema = Yup.object({
		name: Yup.string().required('Required'),
		email: Yup.string().email('Invalid email address').required('Required'),
		age: Yup.number()
			.required('Required')
			.positive('Age must be positive')
			.integer('Age must be an integer'),
	});

	return (
		<Formik
			initialValues={user}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values);
			}}>
			<Form>
				<TextInput label="Name" name="name" type="text" />
				<TextInput label="Email" name="email" type="email" />
				<TextInput label="Age" name="age" type="number" />
				<Button type="submit">Submit</Button>
			</Form>
		</Formik>
	);
};
